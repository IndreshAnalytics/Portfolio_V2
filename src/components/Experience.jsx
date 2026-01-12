import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaBuilding } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
    // Strategic Domains - kept as it adds nice flavor
    const strategicDomains = [
        "Banking",
        "E-commerce",
        "Enterprise Data Environments"
    ];

    const experiences = [
        {
            company: "Quauto Technologies",
            role: "Senior Power BI Developer / Business Analyst",
            duration: "Aug 2023 - Present",
            description: (
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                    <li style={{ marginBottom: '8px' }}><strong>Requirement Gathering & Analysis:</strong> Executed the initial discovery phase, collaborating directly with clients to translate vague business goals into precise technical specifications and KPI definitions.</li>
                    <li style={{ marginBottom: '8px' }}><strong>Solution Architecture & Modeling:</strong> Designed and implemented scalable <strong>Star Schema data models</strong> (optimizing Facts and Dimensions) to support high-performance reporting on large-scale enterprise datasets.</li>
                    <li style={{ marginBottom: '8px' }}><strong>ETL Orchestration:</strong> Built and maintained robust backend data pipelines using <strong>MS SQL and Alteryx</strong>, automating the extraction, transformation, and loading of data from disparate sources.</li>
                    <li style={{ marginBottom: '8px' }}><strong>Advanced Development:</strong> Developed 10+ interactive dashboards using complex <strong>DAX measures</strong>, Calculation Groups, and Row-Level Security (RLS) to ensure data granularity and security.</li>
                    <li style={{ marginBottom: '8px' }}><strong>Performance Optimization:</strong> Optimized SQL queries and Power BI dataset refresh schedules, successfully reducing report latency by 40% and improving render times.</li>
                    <li style={{ marginBottom: '8px' }}><strong>UAT & Deployment:</strong> Managed the End-to-End <strong>User Acceptance Testing (UAT)</strong> lifecycle, iterating on dashboard features based on stakeholder feedback before final production deployment.</li>
                </ul>
            ),
            location: "Remote"
        },
        {
            company: "Capgemini",
            role: "Sr. Analyst / Software Engineer",
            duration: "Jan 2023 - Aug 2023",
            description: (
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                    <li style={{ marginBottom: '8px' }}><strong>Legacy Migration:</strong> Executed the technical transition of legacy reporting systems to modern <strong>Cloud-based BI architectures</strong> using SQL and Power BI, ensuring zero downtime.</li>
                    <li style={{ marginBottom: '8px' }}><strong>Data Standardization:</strong> Implemented standard global data protocols for high-volume transactional databases using <strong>Advanced SQL</strong>, ensuring consistency across regional reporting units.</li>
                    <li style={{ marginBottom: '8px' }}><strong>Pipeline Scalability:</strong> Contributed to the migration of on-premise data marts to <strong>Azure Cloud</strong>, creating scalable data pipelines that support enterprise-level reporting.</li>
                    <li style={{ marginBottom: '8px' }}><strong>Stakeholder Collaboration:</strong> Acted as a bridge between technical engineering teams and non-technical business units to ensure alignment on data definitions.</li>
                </ul>
            ),
            location: "Pune, India"
        },
        {
            company: "Capgemini",
            role: "Analyst / Software Engineer",
            duration: "Jun 2021 - Dec 2022",
            description: (
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                    <li style={{ marginBottom: '8px' }}><strong>Data Governance:</strong> Engineered <strong>SQL-based data governance workflows</strong> that eliminated manual redundancy and improved overall data integrity by 30%.</li>
                    <li style={{ marginBottom: '8px' }}><strong>Compliance Automation:</strong> Automated the extraction and validation of sensitive user transactional data using <strong>SQL Scripts</strong>, ensuring compliance with strict data protection standards.</li>
                    <li style={{ marginBottom: '8px' }}><strong>Operational Reporting:</strong> Developed and maintained 6-7 critical operational dashboards using <strong>Power BI</strong>, tracking key performance indicators (KPIs) for internal efficiency.</li>
                </ul>
            ),
            location: "Pune, India"
        }
    ];

    return (
        <section id="experience" className="experience-section">
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
