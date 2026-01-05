import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

import HackerText from './HackerText';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const basePath = import.meta.env.BASE_URL;

    // Theme logic moved to App.jsx for global state sharing

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };

    // Anti-gravity floating animation for the entire navbar
    const navVariants = {
        float: {
            y: [0, -10, 0],
            rotateX: [0, 2, 0], // Subtle tilt
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const linkBaseClass = "nav-link-item";

    return (
        <motion.nav
            className="navbar glass-panel"
            variants={navVariants}
            animate="float"
            whileHover={{
                scale: 1.02,
                rotateX: 0,
                boxShadow: "0 20px 50px rgba(56, 189, 248, 0.2)"
            }}
        >


            {/* Desktop Links */}
            <div className="nav-links">
                <motion.a
                    href="#about"
                    className={linkBaseClass}
                    whileHover={{ y: -5, textShadow: "0 0 8px rgba(56, 189, 248, 0.8)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    About
                </motion.a>
                <motion.a
                    href="https://github.com/IndreshAnalytics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkBaseClass}
                    whileHover={{ y: -5, textShadow: "0 0 8px rgba(56, 189, 248, 0.8)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    Projects
                </motion.a>
                <motion.a
                    href={`${basePath}resume/Indresh_Tiwari_Resume.html`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-resume"
                    whileHover={{ y: -5, textShadow: "0 0 8px rgba(56, 189, 248, 0.8)" }}
                >
                    Resume
                </motion.a>
                <motion.a
                    href="#contact"
                    className="btn-premium"
                    whileHover={{
                        y: -5,
                        boxShadow: "0 0 30px rgba(56, 189, 248, 0.8), 0 0 60px rgba(56, 189, 248, 0.4)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    Contact
                </motion.a>
            </div>

            {/* Theme Toggle Button Removed for Single Theme */}

            {/* Mobile Toggle */}
            <div className="mobile-toggle" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                    >
                        <a href="#about" onClick={toggleMenu}>About</a>
                        <a href="#skills" onClick={toggleMenu}>Skills</a>
                        <a href="https://github.com/IndreshAnalytics" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>Projects</a>
                        <a href={`${basePath}/resume/Indresh_Tiwari_Resume.html`} target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>Resume</a>
                        <a href="#contact" className="btn-premium" onClick={toggleMenu}>Contact</a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
