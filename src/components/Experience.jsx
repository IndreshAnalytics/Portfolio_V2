import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaBuilding, FaLayerGroup, FaArrowRight } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
    // Strategic Domains
    const strategicDomains = [
        "Banking",
        "E-commerce",
        "Enterprise Data Environments"
    ];

    const experiences = [
        {
            company: "Quauto Technologies Pvt Ltd",
            role: "Senior Analytics Engineer",
            duration: "Aug 2023 - Present",
            description: (
                <>
                    <div style={{ marginBottom: '15px' }}>
                        Specializing in <span className="tech-keyword">End-to-End Microsoft Fabric architectures</span> for the last 8 months.
                        Leading the modernization of data platforms using <span className="tech-keyword">OneLake</span> and <span className="tech-keyword">Medallion Architecture</span>.
                    </div>

                    <div className="workflow-section">
                        <div className="workflow-title">Fabric Engineering Workflow</div>
                        <div className="workflow-steps">
                            <span>SQL & Alteryx (Ingestion)</span>
                            <FaArrowRight className="workflow-arrow" />
                            <span className="tech-keyword">Microsoft Fabric (Shortcuts/Gold Layer)</span>
                            <FaArrowRight className="workflow-arrow" />
                            <span>Power BI (Executive Intelligence)</span>
                        </div>
                    </div>
                </>
            ),
            location: "Pune, India"
        },
        {
            company: "Capgemini",
            role: "Sr. Analyst/Software Engineer",
            duration: "Jan 2023 - Aug 2023",
            description: (
                <>
                    Executed cloud migration strategies for <span className="tech-keyword">Global Solutions</span> providers.
                    Migrated legacy reporting systems to modern BI architectures, standardizing global data protocols for high-volume transactional databases.
                </>
            ),
            location: "Pune, India"
        },
        {
            company: "Capgemini",
            role: "Analyst/Software Engineer",
            duration: "Jun 2021 - Dec 2022",
            description: (
                <>
                    Engineered robust SQL-based data governance workflows for <span className="tech-keyword">Enterprise Data Environments</span>.
                    Eliminated manual redundancy by automating the extraction and validation of sensitive transactional data.
                </>
            ),
            location: "Pune, India"
        }
    ];

    return (
        <section id="experience" className="experience-section">
            {/* Background Spheres */}
            <div className="spheres-container">
                <div className="floating-sphere" style={{ width: '300px', height: '300px', top: '-50px', left: '-50px', animationDuration: '25s' }}></div>
                <div className="floating-sphere" style={{ width: '200px', height: '200px', bottom: '10%', right: '-50px', listStyle: 'none', background: 'radial-gradient(circle at 30% 30%, rgba(100, 255, 218, 0.05), rgba(100, 255, 218, 0.01))', animationDuration: '18s', animationDelay: '-5s' }}></div>
                <div className="floating-sphere" style={{ width: '100px', height: '100px', top: '40%', right: '20%', animationDuration: '30s', animationDelay: '-10s' }}></div>
            </div>

            <div className="glass-resume-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="resume-header"
                >
                    <h2>Professional Experience</h2>
                </motion.div>

                {/* Strategic Domains */}
                <motion.div
                    className="strategic-domains"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    {strategicDomains.map((domain, i) => (
                        <span key={i} className="domain-pill">{domain}</span>
                    ))}
                </motion.div>

                <div className="experiences-list">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="experience-card"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <div className="exp-card-header">
                                <div>
                                    <h3 className="exp-role">{exp.role}</h3>
                                    <div className="exp-company">
                                        <FaBuilding size={14} /> {exp.company}
                                    </div>
                                </div>
                                <div className="exp-duration">
                                    <FaCalendarAlt size={12} style={{ marginRight: '6px' }} />
                                    {exp.duration}
                                </div>
                            </div>

                            <div className="exp-description">
                                {exp.description}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
