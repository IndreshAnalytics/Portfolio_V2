import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-container" style={{
                display: 'grid',
                gridTemplateColumns: '55% 45%',
                gap: '4rem',
                maxWidth: '1400px',
                margin: '0 auto',
                alignItems: 'center',
                padding: '0 5%',
                position: 'relative',
                zIndex: 10,
                height: '100vh',
                minHeight: '600px'
            }}>
                {/* Left Column: Content */}
                <div className="hero-content" style={{ textAlign: 'left', paddingTop: '6rem' }}>

                    {/* Name with Neon Glow - Moved First */}
                    <h1 className="neon-text" style={{
                        fontSize: '4.5rem',
                        lineHeight: '1.1',
                        margin: 0,
                        fontWeight: '800',
                        color: '#fff',
                        textShadow: '0 0 10px rgba(100, 255, 218, 0.3), 0 0 20px rgba(100, 255, 218, 0.2)',
                        marginBottom: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                    }}>
                        INDRESH TIWARI
                    </h1>

                    {/* Job Title - Moved Below Name */}
                    <span className="highlight-text" style={{
                        fontSize: '1.5rem',
                        display: 'block',
                        marginBottom: '1rem', // Increased margin below title before paragraph
                        color: '#64ffda', // Cyan accent
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        fontWeight: '500'
                    }}>
                        SENIOR ANALYTICS ENGINEER | QUAUTO TECHNOLOGIES
                    </span>

                    <motion.p
                        style={{
                            fontSize: '1.25rem',
                            color: '#8892b0', // Slate blue-grey
                            maxWidth: '100%',
                            marginBottom: '2.5rem',
                            lineHeight: '1.6'
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Engineering End-to-End Data Architectures for Global Enterprise Solutions.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        style={{ display: 'flex', gap: '20px', justifyContent: 'flex-start' }}
                    >


                        {/* Secondary Button */}
                        <MagneticButton>
                            <a href="/resume/Indresh_Tiwari_Resume.html" target="_blank" rel="noopener noreferrer" className="btn-glass">
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
                    className="hero-avatar"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end', // Align to right
                        alignItems: 'center',
                        position: 'relative',
                        height: '100%'
                    }}
                >
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '650px', // Slightly larger
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}>
                        <img
                            src="/final_avatar_navy.png"
                            alt="Indresh Tiwari - Senior Analytics Engineer"
                            style={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'contain',
                                maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
                                filter: 'drop-shadow(0 0 30px rgba(10, 25, 47, 0.8))' // Deep shadow for depth
                            }}
                        />
                        {/* Geometric / Tech Background Element behind avatar could go here if needed, 
                             but CSS pattern on body/hero will handle general ambience */}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
export default Hero;
