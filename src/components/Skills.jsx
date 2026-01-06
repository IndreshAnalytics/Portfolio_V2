import React from 'react';
import { motion } from 'framer-motion';
import { FaChartBar, FaCogs, FaBriefcase } from 'react-icons/fa';

const Skills = () => {
    const technicalSkills = [
        {
            category: "Phase 1: Fabric Architecture",
            icon: <FaCogs />,
            skills: [
                { name: "Microsoft Fabric (OneLake)", level: 95, label: "Expert", color: "linear-gradient(90deg, #64ffda 0%, #29b6f6 100%)" },
                { name: "Medallion Architecture", level: 90, label: "Architect", color: "linear-gradient(90deg, #64ffda 0%, #29b6f6 100%)" }
            ]
        },
        {
            category: "Phase 2: Data Engineering",
            icon: <FaCogs />,
            skills: [
                { name: "SQL & Alteryx", level: 90, label: "Advanced", color: "linear-gradient(90deg, #fcece4 0%, #e100ff 100%)" },
                { name: "Semantic Models (DirectLake)", level: 85, label: "Specialist", color: "linear-gradient(90deg, #fcece4 0%, #e100ff 100%)" }
            ]
        },
        {
            category: "Phase 3: Automation & AI",
            icon: <FaCogs />,
            skills: [
                { name: "Python (Pandas)", level: 80, label: "Proficient", color: "linear-gradient(90deg, #0aff9d 0%, #00e5ff 100%)" },
                { name: "Copilot & AI Integration", level: 90, label: "Innovative", color: "linear-gradient(90deg, #0aff9d 0%, #00e5ff 100%)" }
            ]
        },
        {
            category: "Phase 4: Power BI Ecosystem",
            icon: <FaChartBar />,
            skills: [
                { name: "Advanced DAX & Security", level: 95, label: "Expert", color: "linear-gradient(90deg, #ff8c00 0%, #ff0080 100%)" },
                { name: "Governance & Administration", level: 85, label: "Admin", color: "linear-gradient(90deg, #ff8c00 0%, #ff0080 100%)" }
            ]
        }
    ];

    // Business Skills array removed to focus on technical workflow per request

    return (
        <section id="skills" className="section">
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                <h2 className="section-title" style={{ marginBottom: '10px' }}>End-to-End Development Workflow</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>From data extraction to executive strategy.</p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '30px'
            }}>
                {/* Technical Skills Columns */}
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

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                            {section.skills.map((skill, i) => (
                                <div key={i}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.95rem' }}>
                                        <strong>{skill.name}</strong>
                                        <span style={{ color: 'var(--primary-glow)', fontSize: '0.85rem' }}>{skill.label}</span>
                                    </div>
                                    <div style={{
                                        height: '8px',
                                        background: 'rgba(255,255,255,0.1)',
                                        borderRadius: '4px',
                                        overflow: 'hidden'
                                    }}>
                                        <motion.div
                                            style={{
                                                height: '100%',
                                                background: skill.color || 'var(--primary-glow)',
                                                borderRadius: '4px',
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

                {/* Business Skills Column Removed */}
            </div>
        </section>
    );
};

export default Skills;
