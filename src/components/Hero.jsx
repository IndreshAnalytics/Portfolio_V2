import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';
import './Hero.css'; // Import the new CSS file

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-grid">
                {/* Left Column: Content */}
                <div className="hero-content-wrapper">

                    {/* Name with Neon Glow - Moved First */}
                    <h1 className="neon-text hero-name">
                        INDRESH TIWARI
                    </h1>

                    {/* Job Title - Moved Below Name */}
                    <span className="highlight-text hero-title">
                        SENIOR POWER BI DEVELOPER / BUSINESS ANALYST
                    </span>

                    <motion.p
                        className="hero-bio"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Engineering End-to-End Microsoft Fabric Architectures for Global Enterprise Solutions.
                    </motion.p>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >

                        {/* Secondary Button */}
                        <a href={`${import.meta.env.BASE_URL}resume/Indresh_Tiwari_Resume_v2.html`} target="_blank" rel="noopener noreferrer" className="btn-glass">
                            RESUME
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
                                <path d="M12 5v14M5 12l7 7 7-7" />
                            </svg>
                        </a>
                    </MagneticButton>
                </motion.div>
            </div>

            {/* Right Column: Avatar */}
            <motion.div
                className="hero-avatar-wrapper"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="avatar-inner">
                    <img
                        src={`${import.meta.env.BASE_URL}final_avatar_navy.png`}
                        alt="Indresh Tiwari - Senior Analytics Engineer"
                        className="avatar-img"
                    />
                    {/* Geometric / Tech Background Element behind avatar could go here if needed, 
                             but CSS pattern on body/hero will handle general ambience */}
                </div>
            </motion.div>
        </div>
        </section >
    );
};
export default Hero;
