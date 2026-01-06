import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section">
            <h2 className="section-title">About Me</h2>
            <div style={{
                maxWidth: '800px',
                margin: '0 auto',
                textAlign: 'center',
                lineHeight: '1.8',
                color: '#ddd'
            }}>
                <motion.div
                    className="glass"
                    style={{ padding: '40px' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p style={{ fontSize: '1.1rem' }}>
                        I am a <strong>Senior Analytics Engineer</strong> and <strong>Expert Power BI Developer</strong> with 4.5+ years of experience specializing in End-to-End Development.
                        <br /><br />
                        My expertise lies in bridging the gap between complex data environments and executive-level insights, with a focus on <strong>Microsoft Fabric ecosystems</strong> for high-performance reporting.
                        <br /><br />
                        Currently at <strong>Quauto Technologies</strong>, I develop enterprise-grade Power BI solutions using <strong>OneLake and Medallion Architecture</strong> to streamline the analytics lifecycle.
                    </p>
                </motion.div>
            </div>
        </section >
    );
};

export default About;
