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
                        I am a <strong>Senior Analytics Engineer</strong> and <strong>End-to-End Data Specialist</strong> with 4+ years of experience across the enterprise landscape.
                        <br /><br />
                        My expertise lies in building robust <strong>Automated Data Pipelines</strong>—transforming raw, disparate data sources into structured, actionable insights using <strong>MS SQL, Alteryx, and Power BI</strong>.
                        <br /><br />
                        Currently at <strong>Quauto Technologies</strong>, I manage the full data lifecycle for high-priority enterprise initiatives, focusing on data integrity, process automation, and scalable cloud delivery.
                    </p>
                </motion.div>
            </div>
        </section >
    );
};

export default About;
