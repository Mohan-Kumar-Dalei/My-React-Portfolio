/* eslint-disable no-unused-vars */
import React, { useRef, useLayoutEffect, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const Projects = () => {
    const main = useRef(null);
    const titleRef = useRef(null);
    useLayoutEffect(() => {
        const gsap = window.gsap;
        const ScrollTrigger = window.ScrollTrigger;

        if (gsap && ScrollTrigger && main.current) {
            gsap.registerPlugin(ScrollTrigger);
            const ctx = gsap.context(() => {
                if (titleRef.current) {
                    gsap.fromTo(
                        titleRef.current,
                        { opacity: 0, y: 50 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 1,
                            ease: 'power3.out',
                            scrollTrigger: {
                                trigger: titleRef.current,
                                start: 'top 90%',
                                toggleActions: 'play none none reverse',
                            },
                        }
                    );
                }
            }, main);
            return () => ctx.revert();
        }
    }, []);
    useEffect(() => {
        const swiperEl = document.querySelector('swiper-container');
        if (swiperEl) {
            const params = {
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                loop: false, 
                navigation: false,
                pagination: { clickable: true },
                coverflowEffect: {
                    rotate: 30,
                    stretch: 0,
                    depth: 150,
                    modifier: 1,
                    slideShadows: true,
                },
            };
            Object.assign(swiperEl, params);
            swiperEl.initialize();
        }
    }, []);

    // **Projects Data:** अब 'image' फील्ड या तो लोकल पाथ होगा या Lottie URL
    const projects = [
        {
            title: 'Project Alpha',
            description: 'A modern web application portfolio built with React and Node.js.',
            image: '/images/portfolio-landing.png', // लोकल इमेज का पाथ
            technologies: ['React', 'Node.js', 'GSAP'],
            link: '#',
        },
        {
            title: 'Project Beta',
            description: 'An e-commerce platform with real-time inventory management. Coming Soon...',
            image: 'https://lottie.host/4339ed6a-7bf7-4827-8083-b313e78aedee/MiN8YAGYMh.lottie', // Lottie URL
            technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
            link: '#',
        },
        {
            title: 'Project Gamma',
            description: 'A social media dashboard with analytics and reporting features. Coming Soon...',
            image: 'https://lottie.host/4339ed6a-7bf7-4827-8083-b313e78aedee/MiN8YAGYMh.lottie', // एक और Lottie URL
            technologies: ['React', 'D3.js', 'Express'],
            link: '#',
        },
        // आप यहाँ और प्रोजेक्ट्स जोड़ सकते हैं
        // {
        //     title: 'Project Delta',
        //     description: 'A project with a local image.',
        //     image: '/images/your-local-image.jpg',
        //     technologies: ['HTML', 'CSS', 'JS'],
        //     link: '#',
        // },
    ];

    // Helper function to check if the image is a Lottie URL
    const isLottieUrl = (url) => {
        return url.startsWith('https://lottie.host/') || url.endsWith('.json') || url.endsWith('.lottie');
    };

    return (
        <section
            id="projects"
            ref={main}
            className="min-h-screen w-full bg-[#111111] px-4 py-20 flex flex-col items-center text-[#F3E9ED] overflow-hidden"
        >
            <h2
                ref={titleRef}
                className="text-4xl sm:text-5xl font-bold uppercase tracking-wide mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-500"
            >
                My Projects
            </h2>

            {/* Carousel implementation with Swiper Web Components */}
            <div className="w-full max-w-7xl">
                <swiper-container init="false">
                    {projects.map((project, index) => (
                        <swiper-slide key={`project-${index}`} style={{ width: '350px', height: 'auto' }}>
                            <div
                                className="bg-gradient-to-br from-[#1a090d]/60 to-[#2a1a1f]/60 backdrop-blur-md
                                       border border-yellow-900/40 shadow-xl rounded-xl overflow-hidden flex flex-col h-full w-full"
                            >
                                <div className="relative h-56 w-full flex-shrink-0 flex items-center justify-center">
                                    {/* Conditional Rendering: Lottie या Image */}
                                    {isLottieUrl(project.image) ? (
                                        <DotLottieReact
                                            src={project.image}
                                            loop
                                            autoplay
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    ) : (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover px-1"
                                        />
                                    )}
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                                    <p className="text-[#F3E9ED]/80 mb-4 flex-grow">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={`${project.title}-tech-${techIndex}`}
                                                className="px-3 py-1 bg-[#1a090d]/20 rounded-full text-sm font-medium border border-[#FFD600]/80 text-[#F3E9ED]/90"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <a
                                        href={project.link}
                                        className="inline-block mt-auto w-full text-center px-6 py-3 bg-gradient-to-r from-[#1a090d] to-[#2a1a1f] rounded-lg text-[#FFD600] font-semibold hover:opacity-90 transition-opacity border border-[#FFD600]"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </swiper-slide>
                    ))}
                </swiper-container>
            </div>

            {/* Styles for Carousel Navigation (इसमें कोई बदलाव नहीं) */}
            <style>{`
                swiper-container {
                    width: 100%;
                    padding-top: 50px;
                    padding-bottom: 50px;
                }
                swiper-slide {
                    background-position: center;
                    background-size: cover;
                    width: 350px;
                    height: auto;
                }
                swiper-container::part(button-next),
                swiper-container::part(button-prev) {
                    color: #FFD600;
                    top: 50%;
                    transform: translateY(-50%) scale(0.8);
                    transition: color 0.3s;
                }
                swiper-container::part(pagination) {
                    bottom: 10px;
                }
                swiper-container::part(pagination-bullet) {
                    background-color: #FFD600;
                    opacity: 0.6;
                }
                swiper-container::part(pagination-bullet-active) {
                    opacity: 1;
                }
            `}</style>
        </section>
    );
};

export default Projects;