import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFileCsv, FaDatabase, FaFileExcel, FaServer, FaCloud } from "react-icons/fa";

// Tooltip Component for Extraction Modal
const TooltipItem = ({ icon: Icon, title, description, color }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'help' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '12px',
                borderRadius: '50%',
                color: color,
                fontSize: '1.5rem',
                marginBottom: '8px',
                transition: 'all 0.3s ease',
                boxShadow: isHovered ? `0 0 15px ${color}` : 'none'
            }}>
                <Icon />
            </div>
            <span style={{ fontSize: '0.8rem', color: '#ccc' }}>{title}</span>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        style={{
                            position: 'absolute',
                            bottom: '100%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            background: '#222',
                            border: `1px solid ${color}`,
                            padding: '10px',
                            borderRadius: '8px',
                            width: '200px',
                            textAlign: 'center',
                            zIndex: 10,
                            boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                            marginBottom: '10px',
                            pointerEvents: 'none' // Prevent tooltip from flickering if cursor moves slightly
                        }}
                    >
                        <p style={{ margin: 0, fontSize: '0.75rem', color: '#fff', lineHeight: '1.4' }}>
                            {description}
                        </p>
                        {/* Little Arrow */}
                        <div style={{
                            position: 'absolute',
                            bottom: '-6px',
                            left: '50%',
                            marginLeft: '-6px',
                            width: 0,
                            height: 0,
                            borderLeft: '6px solid transparent',
                            borderRight: '6px solid transparent',
                            borderTop: `6px solid ${color}`
                        }} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const nodes = [
    {
        id: 1,
        label: 'Data Sources (Extract)',
        color: '#61dafb',
        details: 'SQL, Excel & Python Integration.',
        tech: 'Primary: SQL/Excel | Secondary: Python',
        modalContent: (
            <>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <h3 style={{ color: '#fff', marginBottom: '8px', textAlign: 'center' }}>Extraction Strategy</h3>
                    <p style={{ color: '#aaa', textAlign: 'center', marginBottom: '25px', fontSize: '0.9rem' }}>
                        Foundation of High-Quality Data
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', marginBottom: '30px', gap: '10px' }}>
                        <TooltipItem
                            icon={FaServer}
                            title="Structured SQL"
                            color="#61dafb"
                            description="Primary: High-performance querying from MS SQL Server & Warehouses."
                        />
                        <TooltipItem
                            icon={FaFileExcel}
                            title="Flat Files"
                            color="#25D366"
                            description="Primary: Standardizing business data from Excel & CSV inputs."
                        />
                        <TooltipItem
                            icon={FaCloud}
                            title="Cloud Connectors"
                            color="#fca311"
                            description="Secondary: Seamlessly connecting to SharePoint, OneDrive & Web APIs."
                        />
                    </div>

                    <div style={{
                        marginTop: '20px',
                        padding: '15px',
                        background: 'rgba(97, 218, 251, 0.1)',
                        borderLeft: '4px solid #61dafb',
                        borderRadius: '0 8px 8px 0'
                    }}>
                        <p style={{ margin: 0, fontStyle: 'italic', color: '#e0e0e0', fontSize: '0.9rem' }}>
                            "Combining on-premise power with cloud flexibility."
                        </p>
                    </div>
                </motion.div>
            </>
        )
    },
    {
        id: 2,
        label: 'ETL Processing',
        color: '#fca311',
        details: 'Power Query & Alteryx.',
        tech: 'Primary: M-Code | Secondary: Alteryx',
        modalContent: (
            <>
                <h4 style={{ color: '#fff', marginBottom: '10px' }}>Preparation & Cleaning</h4>
                <p style={{ color: '#ccc', marginBottom: '15px' }}>Transforming chaos into clarity:</p>
                <ul style={{ color: '#aaa', textAlign: 'left', marginBottom: '20px' }}>
                    <li><strong>Power Query (M):</strong> (Primary) The engine for cleaning, filtering, and standardizing data.</li>
                    <li><strong>Alteryx:</strong> (Advanced) Deployed for high-scale blending and complex workflow automation.</li>
                </ul>
                <div style={{ fontSize: '0.9rem', color: '#fca311', borderLeft: '2px solid #fca311', paddingLeft: '10px' }}>
                    "Scalable ETL workflows ensuring reporting accuracy."
                </div>
            </>
        )
    },
    {
        id: 3,
        label: 'Advanced Logic',
        color: '#96bf48',
        details: 'DAX & Python Logic.',
        tech: 'Primary: DAX | Secondary: Python',
        modalContent: (
            <>
                <h4 style={{ color: '#fff', marginBottom: '10px' }}>Intelligence Engine</h4>
                <p style={{ color: '#ccc', marginBottom: '15px' }}>Business rules and statistical depth:</p>
                <ul style={{ color: '#aaa', textAlign: 'left', marginBottom: '20px' }}>
                    <li><strong>DAX Measures:</strong> (Primary) Core business logic for MTD, YTD, Variances, and KPIs.</li>
                    <li><strong>Python Integration:</strong> (Advanced) Executing custom logic/stats when standard tools reach their limit.</li>
                </ul>
                <div style={{ fontSize: '0.9rem', color: '#96bf48', borderLeft: '2px solid #96bf48', paddingLeft: '10px' }}>
                    "Beyond basic sums—delivering actionable intelligence."
                </div>
            </>
        )
    },
    {
        id: 4,
        label: 'Power BI Delivery',
        color: '#cc5de8',
        details: 'Total Lifecycle Ownership.',
        tech: 'Visuals, Service, RLS',
        modalContent: (
            <>
                <h4 style={{ color: '#fff', marginBottom: '10px' }}>The Final Masterpiece</h4>
                <p style={{ color: '#ccc', marginBottom: '15px' }}>Total ownership of the insight lifecycle:</p>
                <ul style={{ color: '#aaa', textAlign: 'left', marginBottom: '20px' }}>
                    <li><strong>Dashboard Design:</strong> Intuitive, stakeholder-centric UX.</li>
                    <li><strong>Governance:</strong> Managing Workspaces, RLS Security, and Schedule Refresh.</li>
                    <li><strong>Distribution:</strong> Seamless sharing via Power BI Service.</li>
                </ul>
                <div style={{ fontSize: '0.9rem', color: '#cc5de8', borderLeft: '2px solid #cc5de8', paddingLeft: '10px' }}>
                    "Secure, automated, and beautiful delivery of insights."
                </div>
            </>
        )
    },
];

const SystemArchitecture = () => {
    const [selectedNode, setSelectedNode] = useState(null);

    return (
        <section className="sys-arch-container" style={{ padding: '4rem 2rem', color: '#fff' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>End-to-End Development Process</h2>

            <div className="flow-diagram" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                {nodes.map((node, index) => (
                    <React.Fragment key={node.id}>
                        <motion.div
                            layoutId={node.id}
                            onClick={() => setSelectedNode(node)}
                            whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgb(255,255,255)" }}
                            style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                background: 'rgba(255,255,255,0.05)',
                                backdropFilter: 'blur(10px)',
                                border: `2px solid ${node.color}`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                cursor: 'pointer',
                                position: 'relative'
                            }}
                        >
                            <h4 style={{ fontSize: '0.9rem', margin: 0 }}>{node.label}</h4>
                        </motion.div>

                        {/* Arrow Connector (except last item) */}
                        {index < nodes.length - 1 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.2 }}
                                style={{ alignSelf: 'center', fontSize: '2rem', color: '#2D3436', fontWeight: 'bold' }}
                            >
                                ➔
                            </motion.div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            <AnimatePresence>
                {selectedNode && (
                    <motion.div
                        layoutId={selectedNode.id}
                        className="node-modal"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={() => setSelectedNode(null)}
                        style={{
                            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                            display: 'flex', justifyContent: 'center', alignItems: 'center',
                            backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 50
                        }}
                    >
                        <motion.div
                            style={{
                                background: '#1a1a1a',
                                padding: '2.5rem',
                                borderRadius: '20px',
                                border: `1px solid ${selectedNode.color}`, // Thinner border
                                maxWidth: '550px',
                                width: '90%',
                                boxShadow: `0 0 30px rgba(0,0,0,0.5), 0 0 10px ${selectedNode.color}40`, // Colored glow
                                position: 'relative'
                            }}
                            onClick={(e) => e.stopPropagation()} // Prevent click through
                        >
                            {/* Render the custom modal content directly */}
                            {selectedNode.modalContent}

                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '25px' }}>
                                <button
                                    onClick={() => setSelectedNode(null)}
                                    style={{
                                        padding: '10px 24px',
                                        border: `1px solid ${selectedNode.color}`,
                                        background: 'transparent',
                                        color: selectedNode.color,
                                        cursor: 'pointer',
                                        borderRadius: '30px',
                                        fontSize: '0.9rem',
                                        fontWeight: '600',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = selectedNode.color;
                                        e.target.style.color = '#1a1a1a';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'transparent';
                                        e.target.style.color = selectedNode.color;
                                    }}
                                >
                                    Close View
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default SystemArchitecture;
