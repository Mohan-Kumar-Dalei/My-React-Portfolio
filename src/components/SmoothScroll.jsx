// components/SmoothScroll.jsx
import { useEffect } from "react";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const SmoothScroll = ({ children }) => {
    useEffect(() => {
        // Only create ScrollSmoother if it's not a touch device or if you specifically want it on touch
        // For better mobile compatibility, often it's best to disable smoother on small screens.
        // You can use a media query check or screen width check here.
        let smoother;

        // Check if ScrollSmoother should be active (e.g., disable on touch devices or smaller screens)
        // A common practice is to only enable it for desktop for better performance and fewer mobile glitches.
        const isDesktop = window.matchMedia("(min-width: 1024px)").matches; // Example breakpoint

        if (isDesktop && !smoother) { // Prevent creating multiple instances
            smoother = ScrollSmoother.create({
                wrapper: "#smooth-wrapper",
                content: "#smooth-content",
                smooth: 2.5, // higher = smoother
                effects: true,
                // Consider adding normalizeScroll: true if you still see issues,
                // but it can sometimes interfere with native scrolling.
                // normalizeScroll: true,
            });
        }

        return () => {
            if (smoother) {
                smoother.kill();
            }
        };
    }, []);

    return (
        // Add a basic CSS reset for the body/html to prevent unwanted overflow
        // You would typically put this in your global CSS, but for demonstration,
        // we'll mention relevant styles to ensure the smooth-wrapper works correctly.
        // Ensure that body and html have overflow-x: hidden to prevent horizontal scroll
        // and avoid a rightward shift.
        <div id="smooth-wrapper" style={{ overflowX: "hidden", position: "relative" }}>
            <div id="smooth-content">
                {children}
            </div>
        </div>
    );
};

export default SmoothScroll;