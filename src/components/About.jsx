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
                    <p style={{ fontSize: '1.1rem', textAlign: 'justify' }}>
                        Results-driven <strong>Senior Power BI Developer</strong> and <strong>Business Analyst</strong> specializing in End-to-End BI Solution Architecture. Expert in managing the full data lifecycle—from gathering raw business requirements to deploying scalable Power BI datasets. Proven track record of orchestrating complex ETL pipelines using <strong>SQL and Alteryx</strong>, reducing reporting latency by 40%, and leading successful UAT phases for global enterprise stakeholders.
                    </p>
                </motion.div>
            </div>
        </section >
    );
};

export default About;
