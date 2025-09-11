// Adaptive SmoothScroll with FPS estimation to tune smoothing for 60Hz vs high-refresh displays
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const isLargeScreen = () => window.innerWidth >= 1024;

const computeSmoothValue = (fps = 60) => {
    // Base smoothing from device capability
    let base;
    try {
        const cores = navigator.hardwareConcurrency || 4;
        const dpr = window.devicePixelRatio || 1;
        if (cores <= 2 || dpr > 2) base = 0.08;
        else if (cores <= 4 || dpr > 1.5) base = 0.18;
        else base = 0.4;
    } catch {
        base = 0.25;
    }

    // Adjust by detected refresh rate: lower smoothing on 60Hz to reduce perceived lag,
    // slightly higher smoothing on high-refresh displays for a smoother feel.
    let multiplier = 1;
    if (fps <= 60) multiplier = 0.8; // reduce smoothing (less lag)
    else if (fps <= 90) multiplier = 1; // moderate
    else multiplier = 1.2; // high-refresh: can increase smoothing

    const val = Math.max(0.06, Math.min(0.6, base * multiplier));
    return val;
};

// Quick RAF-based FPS sampler (samples a few frames and returns approximate FPS)
const estimateRefreshRate = (samples = 8, timeout = 400) => {
    return new Promise((resolve) => {
        const times = [];
        let rafId = 0;
        let last = performance.now();
        let count = 0;
        let timedOut = false;
        const to = setTimeout(() => {
            timedOut = true;
        }, timeout);

        const step = (t) => {
            if (timedOut) {
                cancelAnimationFrame(rafId);
                clearTimeout(to);
                const avg = times.length ? 1000 / (times.reduce((a, b) => a + b, 0) / times.length) : 60;
                resolve(Math.round(avg));
                return;
            }
            const dt = t - last;
            last = t;
            if (dt > 0) times.push(dt);
            count += 1;
            if (count < samples) {
                rafId = requestAnimationFrame(step);
            } else {
                clearTimeout(to);
                const avg = times.length ? 1000 / (times.reduce((a, b) => a + b, 0) / times.length) : 60;
                resolve(Math.round(avg));
            }
        };

        rafId = requestAnimationFrame(step);
    });
};

const SmoothScroll = ({ children }) => {
    const wrapperRef = useRef(null);
    const contentRef = useRef(null);
    const smootherRef = useRef(null);
    const prevIsLarge = useRef(isLargeScreen());
    const resizeTimer = useRef(null);

    useEffect(() => {
        let mounted = true;
        let fps = 60;

        const initSmoother = (detectedFps = 60) => {
            if (!isLargeScreen()) return;
            if (smootherRef.current) {
                try {
                    smootherRef.current.kill();
                } catch {
                    // ignore
                }
                smootherRef.current = null;
            }
            const smoothVal = computeSmoothValue(detectedFps);
            smootherRef.current = ScrollSmoother.create({
                wrapper: wrapperRef.current || "#smooth-wrapper",
                content: contentRef.current || "#smooth-content",
                smooth: smoothVal,
                effects: false,
                normalizeScroll: false,
                ignoreMobileResize: true,
            });
            try {
                ScrollTrigger.refresh();
            } catch {
                // ignore
            }
        };

        const killSmoother = () => {
            if (smootherRef.current) {
                try {
                    smootherRef.current.kill();
                } catch {
                    // ignore
                }
                smootherRef.current = null;
            }
        };

        // Estimate FPS quickly, then init with that value
        estimateRefreshRate(8, 300).then((detected) => {
            if (!mounted) return;
            fps = detected || 60;
            initSmoother(fps);
        }).catch(() => {
            if (!mounted) return;
            initSmoother(60);
        });

        // Fallback: if estimate takes too long, ensure smoother still initializes
        const initTimeout = setTimeout(() => {
            if (!mounted) return;
            if (!smootherRef.current) initSmoother(60);
        }, 350);

        const onResize = () => {
            if (resizeTimer.current) clearTimeout(resizeTimer.current);
            resizeTimer.current = setTimeout(async () => {
                const nowLarge = isLargeScreen();
                if (nowLarge && !prevIsLarge.current) {
                    // re-estimate fps when moving to large layout
                    const newFps = await estimateRefreshRate(6, 250);
                    fps = newFps || fps;
                    initSmoother(fps);
                } else if (!nowLarge && prevIsLarge.current) {
                    killSmoother();
                } else if (nowLarge && prevIsLarge.current) {
                    // same side, update smooth value if possible
                    if (smootherRef.current) {
                        try {
                            const newVal = computeSmoothValue(fps);
                            smootherRef.current.vars.smooth = newVal;
                        } catch {
                            initSmoother(fps);
                        }
                    }
                }
                prevIsLarge.current = nowLarge;
            }, 180);
        };

        window.addEventListener("resize", onResize, { passive: true });

        return () => {
            mounted = false;
            clearTimeout(initTimeout);
            if (resizeTimer.current) clearTimeout(resizeTimer.current);
            window.removeEventListener("resize", onResize);
            killSmoother();
        };
    }, []);

    // Always render the wrapper/content structure for compatibility.
    return (
        <div id="smooth-wrapper" ref={wrapperRef} style={{ overflowX: "hidden", position: "relative" }}>
            <div id="smooth-content" ref={contentRef}>
                {children}
            </div>
        </div>
    );
};

export default SmoothScroll;