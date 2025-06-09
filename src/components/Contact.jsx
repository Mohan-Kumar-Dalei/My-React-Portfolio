/* eslint-disable no-unused-vars */
import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';

const Contact = () => {
    const sectionRef = useRef(null);
    const leftColRef = useRef(null);
    const rightColRef = useRef(null);
    const formWrapperRef = useRef(null);
    const [formHeight, setFormHeight] = useState('auto');
    const [submissionStatus, setSubmissionStatus] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmissionStatus('sending');
        setErrorMessage('');

        const formData = new FormData(event.target);

        try {
            const response = await fetch("https://formspree.io/f/xanjeelj", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            });

            const result = await response.json();

            if (response.ok) {
                setFormHeight(formWrapperRef.current?.offsetHeight || 'auto');
                setSubmissionStatus('success');
                event.target.reset();
            } else {
                setErrorMessage(result.message || 'An error occurred.');
                setSubmissionStatus('error');
            }
        } catch (error) {
            setErrorMessage('Submission failed. Please try again later.');
            setSubmissionStatus('error');
        }
    };

    useLayoutEffect(() => {
        const gsap = window.gsap;
        const ScrollTrigger = window.ScrollTrigger;

        if (!gsap || !ScrollTrigger) return;
        gsap.registerPlugin(ScrollTrigger);

        let gsapContext;
        let observer;

        const setupGsap = () => {
            gsapContext = gsap.context(() => {
                gsap.from(leftColRef.current, {
                    opacity: 0,
                    x: -100,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: leftColRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    }
                });

                gsap.from(rightColRef.current, {
                    opacity: 0,
                    x: 100,
                    duration: 1.2,
                    ease: 'power3.out',
                    delay: 0.2,
                    scrollTrigger: {
                        trigger: rightColRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    }
                });
            }, sectionRef);
        };

        if (sectionRef.current) {
            observer = new window.IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        setupGsap();
                        observer.disconnect();
                    }
                },
                {
                    rootMargin: '300px',
                    threshold: 0,
                }
            );
            observer.observe(sectionRef.current);
        }

        return () => {
            if (observer) observer.disconnect();
            if (gsapContext) gsapContext.revert();
        };
    }, []);

    const resetForm = () => {
        setSubmissionStatus(null);
    };

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="w-full bg-[#111111] text-white flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
            <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:items-stretch">
                {/* Left Column */}
                <div ref={leftColRef} className="w-full flex flex-col">
                    <div className="bg-gradient-to-br from-[#1a090d]/60 to-[#2a1a1f]/60 backdrop-blur-md
                            border border-yellow-900/40 shadow-xl rounded-2xl p-3 flex-grow flex">
                        <iframe
                            title="Google Maps Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239486.82022839446!2d85.6582352849132!3d20.3011964648784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1717234035999!5m2!1sen!2sin"
                            className="w-full h-[450px] md:h-full rounded-lg filter grayscale invert contrast-90 hue-rotate-180"
                            allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>

                {/* Right Column */}
                <div
                    ref={rightColRef}
                    style={{ height: submissionStatus === 'success' ? `${formHeight}px` : 'auto' }}
                    className="bg-gradient-to-br from-[#1a090d]/60 to-[#2a1a1f]/60 backdrop-blur-md
                            border border-yellow-900/40 shadow-xl rounded-2xl p-8 md:p-10 flex flex-col justify-center"
                >
                    {submissionStatus === 'success' ? (
                        <div className="h-full flex flex-col justify-center items-center text-center">
                            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500 backdrop-blur-md
                            border border-yellow-900 shadow-xl">Thank You!</h2>
                            <p className="text-yellow-300 text-lg mb-6">Your message has been sent successfully. I will get back to you as soon as possible.</p>
                            <button onClick={resetForm} className="py-3 px-6 bg-gradient-to-br from-[#1a090d]/60 to-[#2a1a1f]/60 backdrop-blur-md
                            border border-yellow-900/40 shadow-xl rounded-lg text-white font-bold text-lg hover:from-amber-600 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300">
                                Send Another Message
                            </button>
                        </div>
                    ) : (
                        <div ref={formWrapperRef}>
                            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500 mb-4">Contact Me</h2>
                            <p className="text-white mb-8 text-lg">Let's create something extraordinary.</p>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Full Name</label>
                                    <input type="text" name="name" id="name" placeholder="Your Name" required className="w-full backdrop-blur-md p-4 bg-[#1a090d] rounded-lg border border-yellow-900/40 shadow-xl placeholder-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                                    <input type="email" name="email" id="email" placeholder="your.email@example.com" required className="w-full backdrop-blur-md p-4 bg-[#1a090d] rounded-lg  border border-yellow-900/40 shadow-xl placeholder-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                    <textarea name="message" id="message" rows="4" placeholder="Your message..." required className="w-full backdrop-blur-md p-4 bg-[#1a090d] rounded-lg border border-yellow-900/40 shadow-xl placeholder-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300 resize-none"></textarea>
                                </div>
                                <div>
                                    <button type="submit" disabled={submissionStatus === 'sending'} className="w-full cursor-pointer backdrop-blur-md py-4 px-6 bg-[#1a090d] rounded-lg border border-yellow-900/40 text-white font-bold text-lg hover:bg-[#8b5f4f40] focus:outline-none focus:ring-4 focus:ring-amber-500/50 transform hover:scale-105 transition-all duration-300 disabled:opacity-50">
                                        {submissionStatus === 'sending' ? 'Sending...' : 'Send Inquiry'}
                                    </button>
                                </div>
                                {submissionStatus === 'error' && <p className="text-center font-medium text-red-400">{errorMessage}</p>}
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
