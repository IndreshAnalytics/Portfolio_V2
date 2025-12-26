import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
    const [showPhone, setShowPhone] = useState(false);

    return (
        <section id="contact" className="section">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-container">
                <p>Interested in collaborating or hiring? Let's connect!</p>
                <div className="social-links">
                    <motion.a
                        href="https://www.linkedin.com/in/indreshtiwari/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5 }}
                        className="social-icon"
                    >
                        <FaLinkedin />
                    </motion.a>
                    <motion.a
                        href="https://github.com/IndreshAnalytics"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5 }}
                        className="social-icon"
                    >
                        <FaGithub />
                    </motion.a>
                    <motion.a
                        href="mailto:indreshtiwa@gmail.com"
                        whileHover={{ y: -5 }}
                        className="social-icon"
                    >
                        <FaEnvelope />
                    </motion.a>
                    <div style={{ position: 'relative' }}>
                        <motion.button
                            whileHover={{ y: -5 }}
                            className="social-icon"
                            onClick={() => setShowPhone(!showPhone)}
                            style={{
                                cursor: 'pointer',
                                border: 'none',
                                background: 'transparent',
                                color: 'inherit',
                                fontSize: 'inherit',
                                display: 'flex',
                                alignItems: 'center',
                                padding: 0
                            }}
                        >
                            <FaPhone />
                        </motion.button>
                        <AnimatePresence>
                            {showPhone && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    style={{
                                        position: 'absolute',
                                        top: '140%',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        background: '#112240',
                                        padding: '10px 16px',
                                        borderRadius: '4px',
                                        border: '1px solid #233554',
                                        whiteSpace: 'nowrap',
                                        color: '#64ffda',
                                        fontSize: '0.9rem',
                                        boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
                                        zIndex: 100,
                                        fontWeight: 600
                                    }}
                                >
                                    +91-9926001335
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
