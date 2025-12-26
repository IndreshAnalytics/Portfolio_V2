import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaBuilding } from 'react-icons/fa';

const Experience = () => {
    const experiences = [
        {
            company: "Quauto Technologies Pvt Ltd",
            role: "Senior Analytics Engineer",
            duration: "Aug 2023 - Present",
            desc: (
                <>
                    <strong>Full-Stack Data Lifecycle.</strong> Architecting automated pipelines using MS SQL for modeling, Alteryx for orchestration, and Power BI for delivery.
                    <br /><br />
                    <strong>Versatility:</strong> Dual focus on high-integrity <strong>Banking Data Systems</strong> and innovative <strong>AI-Driven Data Tabulation</strong> projects, ensuring ability to solve complex problem sets across industries.
                </>
            ),
            location: "Pune, India"
        },
        {
            company: "Capgemini",
            role: "Sr. Analyst/Software Engineer",
            duration: "Jan 2023 - Aug 2023",
            desc: "Healthcare Cloud Migration: Led the technical transition of legacy reporting systems to modern cloud-based BI architectures. Standardized global data protocols for transactional healthcare databases.",
            location: "Pune, India"
        },
        {
            company: "Capgemini",
            role: "Analyst/Software Engineer",
            duration: "Jun 2021 - Dec 2022",
            desc: "Engineered robust SQL-based data governance workflows. Eliminated manual redundancy by automating the extraction and validation of sensitive patient transactional data.",
            location: "Pune, India"
        }
    ];

    return (
        <section id="experience" className="section">
            <h2 className="section-title">Work Experience</h2>
            <div className="experience-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="glass"
                        style={{
                            marginBottom: '20px',
                            padding: '30px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            borderLeft: '4px solid var(--primary-color)'
                        }}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                            <h3 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--text-main)' }}>{exp.role}</h3>
                            <span style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                color: 'var(--text-secondary)',
                                fontSize: '0.9rem',
                                background: 'rgba(255,255,255,0.05)',
                                padding: '5px 10px',
                                borderRadius: '15px'
                            }}>
                                <FaCalendarAlt /> {exp.duration}
                            </span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary-color)', fontWeight: 'bold' }}>
                            <FaBuilding />
                            <span>{exp.company}</span>
                        </div>

                        <p style={{ marginTop: '10px', lineHeight: '1.6' }}>{exp.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
