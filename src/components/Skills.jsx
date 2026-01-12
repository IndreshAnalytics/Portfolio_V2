import React from 'react';
import { motion } from 'framer-motion';
import { FaChartBar, FaCogs, FaCloud } from 'react-icons/fa';

const Skills = () => {
    // Aligned with Resume Skills Section
    const technicalSkills = [
        {
            category: "BI & Analysis",
            icon: <FaChartBar />,
            skills: [
                { name: "Power BI", level: 95, label: "Expert" },
                { name: "DAX", level: 95, label: "Expert" },
                { name: "Power Query", level: 90, label: "Advanced" },
                { name: "Tableau", level: 80, label: "Proficient" },
                { name: "Business Analysis", level: 90, label: "Advanced" },
                { name: "Requirement Gathering", level: 95, label: "Expert" },
                { name: "UAT", level: 90, label: "Advanced" }
            ]
        },
        {
            category: "Engineering",
            icon: <FaCogs />,
            skills: [
                { name: "SQL Server", level: 90, label: "Advanced" },
                { name: "Alteryx", level: 85, label: "Proficient" },
                { name: "Python", level: 75, label: "Use-case" },
                { name: "Data Modeling (Star Schema)", level: 95, label: "Expert" },
                { name: "ETL Automation", level: 85, label: "Advanced" }
            ]
        },
        {
            category: "Cloud/AI",
            icon: <FaCloud />,
            skills: [
                { name: "Azure", level: 80, label: "Proficient" },
                { name: "Jira / Git", level: 85, label: "Advanced" },
                { name: "Figma", level: 70, label: "Intermediate" },
                { name: "ChatGPT / Copilot", level: 90, label: "Advanced" }
            ]
        }
    ];

    return (
        <section id="skills" className="section">
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                <h2 className="section-title" style={{ marginBottom: '10px' }}>Technical Skills</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Core Competencies & Technology Stack</p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '30px'
            }}>
                {technicalSkills.map((section, index) => (
                    <motion.div
                        key={index}
                        className="glass"
                        style={{ padding: '30px' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                            <span style={{ fontSize: '2rem', color: 'var(--primary-glow)' }}>{section.icon}</span>
                            <h3 style={{ margin: 0 }}>{section.category}</h3>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {section.skills.map((skill, i) => (
                                <div key={i}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.95rem' }}>
                                        <strong>{skill.name}</strong>
                                        <span style={{ color: 'var(--primary-glow)', fontSize: '0.85rem' }}>{skill.label}</span>
                                    </div>
                                    <div style={{
                                        height: '6px',
                                        background: 'rgba(255,255,255,0.1)',
                                        borderRadius: '3px',
                                        overflow: 'hidden'
                                    }}>
                                        <motion.div
                                            style={{
                                                height: '100%',
                                                background: 'var(--primary-glow)',
                                                borderRadius: '3px',
                                                width: 0
                                            }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
