import React from 'react';
import { motion } from 'framer-motion';

const FlyInText = ({ text = "INDRESH TIWARI", direction = "right" }) => {
    // Split text into individual characters
    const letters = text.split("");

    // Container variants for staggering children
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05, // Fast stagger for a "wave" effect
                delayChildren: 0.2
            }
        }
    };

    // Determine start position based on direction
    const startX = direction === "left" ? "-100vw" : "100vw";

    // Child variants for individual letter animation
    const letterVariants = {
        hidden: {
            x: startX, // Dynamic start position
            opacity: 0,
            rotate: 10 // Slight rotation for kinetic feel
        },
        visible: {
            x: 0,
            opacity: 1,
            rotate: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                mass: 0.8
            }
        }
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden', // Prevent horizontal scroll during fly-in
            width: 'auto' // Changed from 100% to auto to prevent forced expansion
        }}>
            <motion.div
                style={{
                    display: 'flex',
                    flexWrap: 'nowrap', // Changed from wrap to nowrap to keep name solid
                    justifyContent: 'center'
                }}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {letters.map((char, index) => (
                    <motion.span
                        key={index}
                        variants={letterVariants}
                        style={{
                            fontFamily: "'Space Grotesk', monospace", // Monospace aesthetic
                            fontSize: 'clamp(2rem, 5vw, 5rem)', // Responsive big text
                            fontWeight: '800',
                            color: 'var(--text-main)', // Adaptive color
                            textTransform: 'uppercase',
                            display: 'inline-block',
                            marginRight: char === " " ? '0.5em' : '0.02em', // Handle spaces
                            textShadow: '0 0 20px var(--primary-glow)' // Adaptive glow
                        }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.div>
        </div>
    );
};

export default FlyInText;
