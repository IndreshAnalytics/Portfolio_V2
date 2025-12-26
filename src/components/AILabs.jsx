import { motion } from 'framer-motion';
import { FaRobot, FaBrain, FaNetworkWired, FaExternalLinkAlt } from 'react-icons/fa';

const AILabs = () => {
    const researchProjects = [
        {
            title: "Banking Logic: Origination to Recovery",
            category: "Process Optimization AI",
            desc: "Developing an AI-driven simulation of the entire banking lifecycle. Using Python to model borrower behavior from 'Origination' (Loan creation) to 'Recovery' (Default prediction), optimizing collector efficiency.",
            stack: ["Python (Scikit-Learn)", "Banking Domain Logic", "Predictive Modeling"],
            icon: <FaNetworkWired />
        },
        {
            title: "Shopify: Intent Recognition",
            category: "E-Commerce Intelligence",
            desc: "A personal research initiative to decode customer intent. Integrating Shopify Webhooks with a local LLM to classify 'Casual Browsers' vs 'High-Intent Buyers' in real-time.",
            stack: ["Shopify API", "Local LLM", "Real-Time Classification"],
            icon: <FaBrain />
        }
    ];

    return (
        <section id="ai-labs" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, #0f0, transparent)' }}></div>

            <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                <FaRobot style={{ color: '#0f0' }} /> AI Innovation Labs <span style={{ fontSize: '0.4em', border: '1px solid #0f0', padding: '2px 5px', borderRadius: '4px', color: '#0f0' }}>RESEARCH</span>
            </h2>

            <div className="project-grid">
                {researchProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="glass"
                        style={{ borderTop: '2px solid #0f0' }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="project-content">
                            <div style={{ fontSize: '2rem', color: '#0f0', marginBottom: '10px' }}>{project.icon}</div>
                            <h3 style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>{project.title}</h3>
                            <span style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', marginBottom: '10px', display: 'block' }}>{project.category}</span>
                            <p style={{ color: '#ccc' }}>{project.desc}</p>
                            <div className="project-tags">
                                {project.stack.map(tag => (
                                    <span key={tag} style={{ borderColor: '#0f0', color: '#fff' }}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default AILabs;
