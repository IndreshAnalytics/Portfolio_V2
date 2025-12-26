import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: "End-to-End Banking Analytics Suite (Origination to Recovery)",
            desc: "Comprehensive logic covering Account Origination (KYC/Onboarding), Performance Monitoring, and Collections & Recovery. Built predictive models to optimize recovery strategies and reduce bad debt.",
            tags: ["Power BI", "Python", "Predictive Modeling", "Banking"],
            github: "https://github.com/indreshtiwari20",
            live: "#"
        },
        {
            title: "Shopify Marketing Analytics (Personal Project)",
            desc: "Engineered a unified customer journey view by integrating sales and behavior metrics. Applied Python-based clustering to segment high-value customers for targeted campaigns.",
            tags: ["Shopify", "Python", "Clustering", "Marketing"],
            github: "https://github.com/indreshtiwari20",
            live: "#"
        },
        {
            title: "Clinical & Operational Performance Dashboard",
            desc: "Centralized healthcare analytics platform enabling operational teams to track patient flow, resource utilization, and efficiency metrics across hospital units.",
            tags: ["Healthcare", "Tableau", "Operations"],
            github: "https://github.com/indreshtiwari20",
            live: "#"
        }
    ];

    return (
        <section id="projects" className="section">
            <h2 className="section-title">Featured Projects</h2>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card glass"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                            <div className="project-tags">
                                {project.tags.map(tag => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-icon">
                                    <FaGithub /> Code
                                </a>
                                <a href={project.live} className="btn-icon">
                                    <FaExternalLinkAlt /> Live Demo
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
