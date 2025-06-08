import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative flex items-center justify-center w-full py-6 overflow-hidden bg-gradient-to-r from-[#1a090d] to-[#2a1a1f] text-[#F3E9ED] border-t-2 border-[#FFD600]/50">
            {/* New, More Reliable "Aura" Animation */}
            <motion.div
                className="absolute top-0 w-48 h-48"
                style={{
                    background: 'rgba(255, 214, 0, 0.2)',
                    borderRadius: '50%',
                    filter: 'blur(75px)',
                }}
                initial={{ x: '-150%' }}
                animate={{ x: '150%' }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'mirror',
                    duration: 5,
                    ease: 'easeInOut',
                }}
            />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center space-y-2">
                <div className="flex items-center space-x-2 text-lg font-medium tracking-wide">
                    <span>Developed with</span>

                    {/* Pulsing Heart Icon */}
                    <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="text-red-400"
                    >
                        ❤️
                    </motion.span>

                    <span>by</span>

                    {/* Name with Hover Glow Effect */}
                    <motion.span
                        whileHover={{
                            textShadow: '0px 0px 8px rgba(255, 214, 0, 0.8)',
                            color: '#FFD600',
                        }}
                        transition={{ duration: 0.3 }}
                        className="font-bold cursor-pointer"
                    >
                        Mohan
                    </motion.span>
                </div>

                {/* Copyright Text */}
                <p className="text-xs text-gray-400">
                    © {currentYear} All Rights Reserved
                </p>
            </div>
        </footer>
    ); 
};

export default Footer;
