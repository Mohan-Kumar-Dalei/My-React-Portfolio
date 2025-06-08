import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import BackgroundBeams from './BackgroundBeams'; // Assumes BackgroundBeams component is available
import gsap from 'gsap'; // Assumes GSAP library is available
import { Power3 } from 'gsap/all'; // Import Power3 ease from GSAP
import styled from 'styled-components';
import { Link } from 'react-scroll';

const modernTypeSequence = [
    'MERN Stack Developer',
    'FullStack Developer',
    'Modern Web Developer'
];

const StyledWrapper = styled.div`
  .Btn {
    width: 200px;
    height: 56px;
    font-size: 1.15rem;
    border: none;
    border-radius: 12px;
    background: linear-gradient(to right,#77530a,#ffd277,#77530a,#77530a,#ffd277,#77530a);
    background-size: 250%;
    background-position: left;
    color: #ffd277;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition-duration: 1s;
    overflow: hidden;
    font-weight: 700;
    letter-spacing: 0.03em;
    padding: 0 1.5rem;
  }
  @media (max-width: 640px) {
    .Btn {
      width: 100%;
      min-width: 0;
      font-size: 1rem;
      height: 58px;
      padding: 0 1rem;
    }
  }
  @media (max-width: 400px) {
    .Btn {
      font-size: 0.95rem;
      height: 42px;
      padding: 0 0.5rem;
    }
  }
  .Btn::before {
    position: absolute;
    content: "Contact Me";
    color: #ffd277;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 97%;
    height: 90%;
    border-radius: 10px;
    transition-duration: 1s;
    background-color: rgba(0, 0, 0, 0.842);
    background-size: 200%;
    font-size: inherit;
    font-weight: 700;
  }
  .Btn:hover {
    background-position: right;
    transition-duration: 1s;
  }
  .Btn:hover::before {
    background-position: right;
    transition-duration: 1s;
  }
  .Btn:active {
    transform: scale(0.95);
  }
      svg {
    margin-left: 0.5rem;
    color: #D4AF37;
    animation: bounce-resume 1s infinite alternate;
  }
  @keyframes bounce-resume {
    0% { transform: translateY(0); }
    100% { transform: translateY(-7px); }
  }
`;

const ResumeButton = () => (
    <a
        href="https://drive.google.com/file/d/1tKB59gNLc1dUHKwKMWRVbqpE23wdE-To/view?usp=sharing"
        download
        target='__blank'
        title="Download Resume (CV)"
        className="flex items-center justify-center gap-2 rounded-full font-bold text-base sm:text-lg text-[#F3E9ED] bg-gradient-to-br from-[#1a090d]/60 to-[#2a1a1f]/60 backdrop-blur-md border border-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#FFD600]/80 focus:outline-none focus:ring-2 focus:ring-[#FFD600]"
        style={{ minWidth: '200px', height: '60px', }}
    >
        Resume
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="22" height="22" className='animate-bounce'>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
        </svg>
    </a>
);

const Hero = () => {
    const nameRef = useRef(null);
    const subtitleRef = useRef(null);
    const heroImageRef = useRef(null); // Ref for the hero image
    const parallaxBgRef = useRef(null); // Ref for the blob background
    const rightImageContainerRef = useRef(null); // Ref for the overall right-side container (for parallax effect)
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [typeTextIdx, setTypeTextIdx] = useState(0);
    const typeRef = useRef(null);

    useEffect(() => {
        // GSAP animations for text elements
        if (nameRef.current) {
            gsap.fromTo(
                nameRef.current,
                { y: 60, opacity: 0 },
                { y: 0, opacity: 1, duration: 2, ease: Power3.easeOut, delay: 1 }
            );
        }
        if (subtitleRef.current) {
            gsap.fromTo(
                subtitleRef.current,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: Power3.easeOut, delay: 1.5 }
            );
        }

        // GSAP animation for the overall image container (scale in)
        if (rightImageContainerRef.current) {
            const container = rightImageContainerRef.current;
            gsap.fromTo(container,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1.5, ease: Power3.easeOut, delay: 1.8 }
            );

            // Parallax effect on mouse move
            const handleMouseMove = (e) => {
                const rect = container.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                // Adjust these multiplier values for more or less intense parallax
                const moveXBlob = (x - centerX) * 0.02; // Blob moves with cursor
                const moveYBlob = (y - centerY) * 0.02;
                const moveXImage = (centerX - x) * 0.015; // Image moves slightly against cursor
                const moveYImage = (centerY - y) * 0.015;

                gsap.to(parallaxBgRef.current, { x: moveXBlob, y: moveYBlob, duration: 0.3, overwrite: true });
                gsap.to(heroImageRef.current, { x: moveXImage, y: moveYImage, duration: 0.3, overwrite: true });
            };

            const handleMouseLeave = () => {
                gsap.to([parallaxBgRef.current, heroImageRef.current], { x: 0, y: 0, duration: 0.3, overwrite: true });
            };

            container.addEventListener('mousemove', handleMouseMove);
            container.addEventListener('mouseleave', handleMouseLeave);

            // Cleanup event listeners on component unmount
            return () => {
                container.removeEventListener('mousemove', handleMouseMove);
                container.removeEventListener('mouseleave', handleMouseLeave);
            };
        }

        // Initial animations for blob and image
        if (parallaxBgRef.current) {
            gsap.fromTo(parallaxBgRef.current,
                { opacity: 0, scale: 0.8, rotation: 0 },
                { opacity: 0.75, scale: 1, rotation: 360, duration: 2, ease: Power3.easeOut, delay: 2 } // Blob opacity adjusted to 0.75
            );
        }

        if (heroImageRef.current) {
            gsap.fromTo(heroImageRef.current,
                { opacity: 0, scale: 0.9 },
                { opacity: 1, scale: 1, duration: 1.5, ease: Power3.easeOut, delay: 2.3 }
            );
        }

    }, []); // Empty dependency array means this effect runs once on mount

    useEffect(() => {
        let typingTimeout;
        let erasingTimeout;
        let holdTimeout;
        let isMounted = true;
        const currentText = modernTypeSequence[typeTextIdx];
        let charIdx = 0;

        function typeChar() {
            if (!isMounted) return;
            setDisplayedText(currentText.slice(0, charIdx + 1));
            if (charIdx < currentText.length - 1) {
                charIdx++;
                typingTimeout = setTimeout(typeChar, 32); // smoother, faster typing
            } else {
                setIsTyping(false);
                holdTimeout = setTimeout(() => eraseChar(), 1200);
            }
        }

        function eraseChar() {
            if (!isMounted) return;
            setIsTyping(true);
            if (charIdx > 0) {
                charIdx--;
                setDisplayedText(currentText.slice(0, charIdx));
                erasingTimeout = setTimeout(eraseChar, 18); // smoother, faster erase
            } else {
                setTypeTextIdx(idx => (idx + 1) % modernTypeSequence.length);
            }
        }

        setDisplayedText('');
        setIsTyping(true);
        typeChar();

        return () => {
            isMounted = false;
            clearTimeout(typingTimeout);
            clearTimeout(erasingTimeout);
            clearTimeout(holdTimeout);
        };
    }, [typeTextIdx]);

    useEffect(() => {
        if (typeRef.current) {
            gsap.fromTo(typeRef.current, { opacity: 0.7, y: 0, scale: 1 }, { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: Power3.easeOut });
        }
    }, [displayedText]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTypeTextIdx(idx => (idx + 1) % modernTypeSequence.length);
        }, 1800);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="reveal-section relative w-full min-h-screen h-auto overflow-hidden text-[#F3E9ED] lg:mt-0 font-grotesk bg-[#361421] flex flex-col justify-around">
            {/* Responsive BackgroundBeams wrapper */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <BackgroundBeams
                    beamWidth={2}
                    beamHeight={15}
                    beamNumber={12}
                    lightColor="#FFD600"
                    speed={2}
                    noiseIntensity={2.5}
                    scale={0.2}
                    rotation={0}
                />
            </div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-around p-2 xs:p-4 sm:p-8 gap-4 xs:gap-6 sm:gap-12 w-full h-full">
                {/* Left Content: Personal information and action buttons */}
                <motion.div
                    key="left-hero"
                    initial={false}
                    animate={false}
                    className="w-full lg:w-1/2 text-center sm:text-center md:text-left lg:text-left space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-1 flex flex-col justify-center items-center md:items-start mt-20 xs:mt-8 sm:mt-10 lg:mt-10 pl-5"
                >
                    <p ref={subtitleRef} className="text-xs xs:text-sm sm:text-base md:text-xl text-gray-400 font-semibold tracking-wide font-grotesk">
                        Hello🖐️, My Name is
                    </p>
                    <h1
                        ref={nameRef}
                        className="font-signature text-white w-full text-5xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[6rem] 2xl:text-[8rem] leading-tight tracking-tight"
                        style={{ fontFamily: "'Pacifico', cursive" }}
                    >
                        Mohan Kumar Dalei
                    </h1>
                    <p ref={subtitleRef} className="text-xs xs:text-sm sm:text-base md:text-xl text-gray-400 font-semibold font-grotesk">And I am A</p>

                    {/* Modern GSAP-animated dynamic text */}
                    <h2
                        ref={typeRef}
                        className="text-base xs:text-lg sm:text-2xl md:text-3xl font-extrabold"
                        style={{
                            color: '#FFD600',
                            fontFamily: 'Space Grotesk, Montserrat, sans-serif',

                            display: 'inline-block',
                            willChange: 'opacity, transform',
                            letterSpacing: '0.03em',
                            background: 'linear-gradient(90deg, #FFD600 60%, #E9A319 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            filter: 'drop-shadow(0 2px 8px #FFD60033)'
                        }}
                    >
                        {displayedText}
                        <span
                            style={{
                                display: 'inline-block',
                                width: '1ch',
                                marginLeft: '2px',
                                animation: 'modern-blink-typing 1s steps(1) infinite',
                                borderRight: isTyping ? '3px solid #FFD600' : '3px solid #FFD600',
                                verticalAlign: 'middle',
                                position: 'relative',
                                background: 'none',
                                color: 'transparent',
                                transition: 'border-color 0.2s',
                                opacity: 1
                            }}
                        >
                            &nbsp;
                        </span>
                    </h2>
                    <style>
                        {`
                        @keyframes modern-blink-typing {
                          0%, 49% { opacity: 1; }
                          50%, 100% { opacity: 0; }
                        }
                        `}
                    </style>

                    <p ref={subtitleRef} className="mt-2 xs:mt-3 sm:mt-4 text-gray-300 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-xl text-xs xs:text-sm sm:text-base md:text-lg font-medium font-grotesk leading-relaxed">
                        Aspiring MERN stack developer and learning how to build scalable web apps with React, Node.js, and MongoDB.
                    </p>

                    {/* Action Buttons */}
                    <div ref={subtitleRef} className="mt-6 -ml-6 md:-ml-0 xs:mt-8 flex flex-col sm:flex-row gap-3 xs:gap-4 sm:gap-6 w-full sm:w-auto">
                        <StyledWrapper>
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                className="Btn"
                                style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
                            >
                                Contact Me
                            </Link>
                        </StyledWrapper>
                        <StyledWrapper>
                            <ResumeButton />
                        </StyledWrapper>

                    </div>
                </motion.div>

                {/* Right Content: Irregular Blob with Image Mask and Parallax - FINAL RESPONSIVE HEIGHTS */}
                <div ref={rightImageContainerRef} className="hidden lg:flex w-full lg:w-1/2 h-[160px] sm:h-[400px] md:h-[500px] lg:h-[400px] xl:h-[600px] items-center justify-center relative mt-6 lg:-mt-">
                    {/* Irregular Blob Background (Larger) - Responsive sizes */}
                    <div
                        ref={parallaxBgRef}
                        className="absolute w-[120px] h-[120px] sm:w-[240px] sm:h-[240px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] xl:w-[480px] xl:h-[480px]
                                   aspect-square bg-[#ffd50041] filter blur-3xl opacity-75 z-0 border-[2px] border-[#FFD600]"
                        style={{
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                        }}
                    ></div>

                    {/* Image Container with Mask (Slightly Smaller) - Responsive sizes */}
                    <div
                        className="relative z-10 w-[80px] h-[80px] sm:w-[200px] sm:h-[200px] md:w-[260px] md:h-[260px] lg:w-[320px] lg:h-[320px] xl:w-[400px] xl:h-[400px]
                                   aspect-square border-[1px] border-white border-opacity-30"
                        style={{
                            clipPath: 'polygon(35% 5%, 65% 5%, 95% 35%, 95% 65%, 65% 95%, 35% 95%, 5% 70%, 5% 30%)'
                        }}
                    >
                        <img
                            ref={heroImageRef}
                            src="/hero.png"
                            alt="Mohan Kumar Dalei"
                            className="absolute inset-0 w-full h-full object-cover shadow-2xl border-2 border-[#FFD600]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;