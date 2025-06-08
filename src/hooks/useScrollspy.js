import { useState, useEffect } from 'react';

/**
 * Yeh ek custom hook hai jo scroll karne par active section ko track karta hai.
 * @param {string[]} sectionIds - Sabhi sections ki IDs ka array (jaise ['home', 'about', ...]).
 * @param {number} offset - Viewport ke top se ek offset, jisse active section aasaani se detect ho.
 * @returns {string} - Current active section ki ID.
 */
const useScrollspy = (sectionIds, offset = 150) => {
    const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

    useEffect(() => {
        const handleScroll = () => {
            let currentSectionId = '';

            for (const sectionId of sectionIds) {
                const section = document.getElementById(sectionId);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    // Check karein ki section viewport mein hai ya nahi
                    if (rect.top <= offset && rect.bottom >= offset) {
                        currentSectionId = sectionId;
                        break;
                    }
                }
            }

            if (activeSection !== currentSectionId) {
                setActiveSection(currentSectionId);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sectionIds, offset, activeSection]);

    return activeSection;
};

export default useScrollspy;