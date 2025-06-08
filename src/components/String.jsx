import React, { useEffect } from "react";
import gsap from "gsap";

export default function String() {
    useEffect(() => {
        const stringEls = document.querySelectorAll(".string");
        if (!stringEls.length) return;

        // Animation logic for mousemove only
        const animatePath = (y) => {
            stringEls.forEach((el) => {
                const svgPath = el.querySelector("svg path");
                if (svgPath) {
                    gsap.to(svgPath, {
                        attr: { d: `M 30 40 Q 900 ${y} 1770 40` },
                        duration: 1.3,
                        ease: "elastic.out(1,0.3)"
                    });
                }
            });
        };

        // Mouse move: animate middle point
        const handleMouseMove = (e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const y = e.clientY - rect.top;
            animatePath(y);
        };

        // Mouse out: reset to straight
        const handleMouseOut = () => {
            animatePath(40);
        };

        stringEls.forEach((el) => {
            el.addEventListener("mousemove", handleMouseMove);
            el.addEventListener("mouseout", handleMouseOut);
        });
        return () => {
            stringEls.forEach((el) => {
                el.removeEventListener("mousemove", handleMouseMove);
                el.removeEventListener("mouseout", handleMouseOut);
            });
        };
    }, []);

    return (
        <div className="string flex justify-center items-center w-full" style={{ minHeight: 100, cursor: "pointer", background: "#111111" }}>
            <svg
                width="100%"
                height="80"
                viewBox="0 0 1800 80"
                preserveAspectRatio="xMidYMid meet"
                style={{ maxWidth: 2000, width: "100%", display: "block", background: "transparent" }}
            >
                <path d="M 30 40 Q 900 40 1770 40" stroke="#FFD600" strokeWidth="2" fill="none" />
            </svg>
        </div>
    );
}
