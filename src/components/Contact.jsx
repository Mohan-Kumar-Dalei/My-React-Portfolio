/* eslint-disable no-unused-vars */
import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';

const Contact = () => {
    // Refs for animation targets
    const sectionRef = useRef(null);
    const leftColRef = useRef(null);
    const rightColRef = useRef(null);

    // State for form submission
    const [submissionStatus, setSubmissionStatus] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    // Form submission handler
    const handleSubmit = async (event) => {
        event.preventDefault();

        setSubmissionStatus('sending');
        setErrorMessage('');
        const formData = new FormData(event.target);

        formData.append("access_key", "17a68c11-3e40-4879-ba02-65457533f959");
        formData.append("subject", "New Contact Form Submission from Portfolio");
        formData.append("from_name", "My Portfolio");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (result.success) {
                setSubmissionStatus('success');
                event.target.reset();
            } else {
                console.error("Error from Web3Forms:", result);
                setErrorMessage(result.message || 'An error occurred.');
                setSubmissionStatus('error');
            }
        } catch (error) {
            console.error("Submission Error:", error);
            setErrorMessage('Submission failed. Please check your CORS settings in your Web3Forms account by adding "localhost".');
            setSubmissionStatus('error');
        }
    };

    // Animation logic using the IntersectionObserver pattern to initialize ScrollTrigger
    useLayoutEffect(() => {
        const gsap = window.gsap;
        const ScrollTrigger = window.ScrollTrigger;

        if (!gsap || !ScrollTrigger) {
            console.error("GSAP or ScrollTrigger not loaded");
            return;
        }

        gsap.registerPlugin(ScrollTrigger);

        let gsapContext;
        let observer;

        // This function sets up the GSAP animations with ScrollTrigger.
        // It's called by the IntersectionObserver when the section is near the viewport.
        const setupGsap = () => {
            gsapContext = gsap.context(() => {
                // Animate the left column (map)
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

                // Animate the right column (form)
                gsap.from(rightColRef.current, {
                    opacity: 0,
                    x: 100,
                    duration: 1.2,
                    ease: 'power3.out',
                    delay: 0.2, // A slight delay for a staggered effect
                    scrollTrigger: {
                        trigger: rightColRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    }
                });
            }, sectionRef);
        };


        if (sectionRef.current) {
            // This observer triggers the animation setup when the section is 300px from the viewport
            observer = new window.IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        setupGsap();
                        observer.disconnect(); // Disconnect after firing once to prevent re-triggering
                    }
                },
                {
                    rootMargin: '300px', // Trigger when 300px away
                    threshold: 0,
                }
            );
            observer.observe(sectionRef.current);
        }

        // Cleanup function to revert animations and disconnect the observer
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
                            className="w-full h-[450px] md:h-full rounded-lg filter grayscale invert contrast(0.9) hue-rotate(180deg)"
                            allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>

                {/* Right Column */}
                <div ref={rightColRef} className="bg-gradient-to-br from-[#1a090d]/60 to-[#2a1a1f]/60 backdrop-blur-md
                            border border-yellow-900/40 shadow-xl rounded-2xl p-8 md:p-10 flex flex-col justify-center">
                    {submissionStatus === 'success' ? (
                        <div className="text-center">
                            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#1a090d]/60 to-[#2a1a1f]/60 backdrop-blur-md
                            border border-yellow-900/40 shadow-xl">Thank You!</h2>
                            <p className="text-gray-300 text-lg mb-6">Your message has been sent successfully. I will get back to you as soon as possible.</p>
                            <button onClick={resetForm} className="py-3 px-6 bg-gradient-to-br from-[#1a090d]/60 to-[#2a1a1f]/60 backdrop-blur-md
                            border border-yellow-900/40 shadow-xl rounded-lg text-white font-bold text-lg hover:from-amber-600 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300">
                                Send Another Message
                            </button> 
                        </div>
                    ) : (
                        <>
                            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500 mb-4">Contact Me</h2>
                            <p className="text-white mb-8 text-lg">Let's create something extraordinary.</p>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                                <input type="hidden" name="to" value="mohankumardalei2001@gmail.com" />
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
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
