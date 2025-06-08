import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiJavascript,
    SiReact,
    SiMongodb,
    SiExpress,
    SiNodedotjs,
    SiMysql,
    SiJenkins, // Reverted to SiJenkins for Java icon to resolve import error
    SiGithub,
    SiFigma,
} from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const skills = [
    { name: 'HTML5', icon: <SiHtml5 className="text-5xl text-orange-500" /> },
    { name: 'CSS3', icon: <SiCss3 className="text-5xl text-blue-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-5xl text-cyan-400" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-5xl text-yellow-500" /> },
    { name: 'React.js', icon: <SiReact className="text-5xl text-sky-400" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-5xl text-lime-500" /> },
    { name: 'Express.js', icon: <SiExpress className="text-5xl text-gray-400" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-5xl text-green-500" /> },
    { name: 'MySQL', icon: <SiMysql className="text-5xl text-blue-700" /> },
    { name: 'Java', icon: <SiJenkins className="text-5xl text-red-500" /> }, // Using SiJenkins as Java substitute
    { name: 'Git/GitHub', icon: <SiGithub className="text-5xl text-white" /> },
    { name: 'Figma', icon: <SiFigma className="text-5xl text-purple-400" /> },
];

export default function Skills() {
    const gridRef = useRef(null);
    const observerRef = useRef(null);


    useLayoutEffect(() => {
        let ctx;
        let observer;
        let triggered = false;

        function setupGsap() {
            if (triggered) return;
            triggered = true;
            const cards = gridRef.current?.querySelectorAll('.skill-card');
            if (!cards || cards.length === 0) return;
            ctx = gsap.context(() => {
                gsap.set(cards, { opacity: 0, y: 40 });
                gsap.to(cards, {
                    opacity: 1,
                    y: 0,
                    stagger: 0.12,
                    duration: 0.7,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: `top 80%`,
                        toggleActions: 'play none none reverse',
                    },
                });
            }, gridRef);
        }

        if (gridRef.current) {
            observer = new window.IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        setupGsap();
                        observer.disconnect();
                    }
                },
                {
                    root: null,
                    rootMargin: '300px', // Trigger when 300px from viewport
                    threshold: 0
                }
            );
            observer.observe(gridRef.current);
            observerRef.current = observer;
        }

        return () => {
            if (observerRef.current) observerRef.current.disconnect();
            ctx && ctx.revert();
        };
    }, []);

    return (
        // Adjusted background to be a deeper maroon/black blend
        <section id="skills" className="py-20 px-6 sm:px-8 lg:px-12 bg-[#111111] text-[#F3E9ED] relative overflow-hidden">
            {/* Optional: Subtle background gradient/overlay for depth - Adjusted opacity */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-16 text-center text-[#FFD600] relative z-10">
                My <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-500">Skills</span>
            </h2>

            <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 md:gap-10 max-w-7xl mx-auto relative z-10">
                {skills.map(({ name, icon }, index) => (
                    <div
                        key={`skill-${name}-${index}`}
                        className="skill-card
                            relative flex flex-col items-center space-y-4 p-6 sm:p-8 rounded-xl
                            bg-gradient-to-br from-[#1a090d]/60 to-[#2a1a1f]/60 backdrop-blur-md
                            border border-yellow-900/40 shadow-xl
                            hover:scale-105 hover:shadow-2xl hover:border-[#FFD600]/80
                            transition-all duration-300 ease-in-out cursor-pointer group
                            overflow-hidden
                        "
                    >
                        {/* Subtle inner glow effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#FFD600]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Icon */}
                        <div className="text-current transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,214,0,0.5)]">
                            {icon}
                        </div>

                        {/* Skill Name */}
                        <p className="text-lg sm:text-xl font-semibold text-[#F3E9ED] group-hover:text-[#FFD600] transition-colors duration-300">
                            {name}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}