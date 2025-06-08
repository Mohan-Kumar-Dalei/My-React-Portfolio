import { useEffect } from "react";
import gsap from "gsap";

const useSectionAnimations = (enabled = true) => {
    useEffect(() => {
        if (!enabled) return; // 🛑 Don't run animation if disabled

        // Your GSAP animations for sections here
        const timeout = setTimeout(() => {
            gsap.from(".reveal-section", {
                opacity: 0,
                y: 50,
                stagger: 0.3,
                duration: 1,
                ease: "power3.out",
            });
        }, 100); // slight delay to wait for DOM

        return () => clearTimeout(timeout);
    }, [enabled]);
};

export default useSectionAnimations;
