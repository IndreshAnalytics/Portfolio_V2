import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
    return (
        <motion.div
            className="preloader"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: '#050810',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
                flexDirection: 'column'
            }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{ position: 'relative' }}
            >
                <div style={{
                    width: '60px',
                    height: '60px',
                    border: '2px solid rgba(56, 189, 248, 0.3)',
                    borderRadius: '50%',
                    borderTopColor: '#38bdf8',
                    animation: 'spin 1s linear infinite'
                }} />

                {/* Spin Keyframes injected via style tag for simplicity */}
                <style>
                    {`
                        @keyframes spin {
                            0% { transform: rotate(0deg); }
                            100% { transform: rotate(360deg); }
                        }
                    `}
                </style>
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{
                    color: '#38bdf8',
                    marginTop: '20px',
                    fontFamily: "'Space Grotesk', sans-serif",
                    letterSpacing: '2px',
                    fontSize: '0.9rem'
                }}
            >
                INITIALIZING SYSTEM...
            </motion.h2>
        </motion.div>
    );
};

export default Preloader;
