import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const isLargeScreen = () => window.innerWidth >= 1024;

const SectionSmoothScroll = ({ children }) => {
    const wrapperRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        let smoother;
        if (isLargeScreen()) {
            smoother = ScrollSmoother.create({
                wrapper: wrapperRef.current,
                content: contentRef.current,
                smooth: 2.5,
                effects: true,
                normalizeScroll: true,
                ignoreMobileResize: true,
            });
        }
        return () => {
            if (smoother) smoother.kill();
        };
    }, []);

    if (isLargeScreen()) {
        return (
            <div id="section-smooth-wrapper" ref={wrapperRef}>
                <div id="section-smooth-content" ref={contentRef}>
                    {children}
                </div>
            </div>
        );
    } else {
        // On mobile/tablet, just render children normally
        return <>{children}</>;
    }
};

export default SectionSmoothScroll;
