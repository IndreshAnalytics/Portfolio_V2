import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

const HackerText = ({ text, className = "" }) => {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef(null);

    const scramble = useCallback(() => {
        let iteration = 0;

        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText(() =>
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        // Return random char for unresolved, or space if you want a typewriter feel
                        // keeping random for hacker feel, but ensuring strict index order
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(intervalRef.current);
            }

            // Clean 1-by-1 increment
            iteration += 1;
        }, 50); // Slightly slower for clearer 1-by-1 effect
    }, [text]);

    // Scramble on mount
    useEffect(() => {
        scramble();
        return () => clearInterval(intervalRef.current);
    }, [scramble]);

    // Also trigger on hover for interactivity
    return (
        <motion.span // Changed to span for inline flow
            className={className}
            onMouseEnter={scramble}
            // Removed slide-in animation which caused "moving" feel
            style={{ fontFamily: 'monospace', cursor: 'pointer', display: 'inline-block', color: 'var(--text-main)' }}
        >
            {displayText}
        </motion.span>
    );
};

export default HackerText;
