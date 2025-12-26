import React from 'react';
import { motion } from 'framer-motion';

const DataMesh = () => {
    // Define nodes specifically based on user skills
    const nodes = [
        { id: 1, label: "Power BI", x: 20, y: 20 },
        { id: 2, label: "SQL", x: 80, y: 30 },
        { id: 3, label: "Python", x: 50, y: 50 },
        { id: 4, label: "Data Viz", x: 20, y: 80 },
        { id: 5, label: "Insights", x: 80, y: 80 },
    ];

    // Define connections between nodes
    const connections = [
        { from: 1, to: 3 }, // Power BI - Python
        { from: 1, to: 2 }, // Power BI - SQL
        { from: 3, to: 5 }, // Python - Insights
        { from: 2, to: 5 }, // SQL - Insights
        { from: 4, to: 1 }, // Data Viz - Power BI
        { from: 4, to: 3 }, // Data Viz - Python
    ];

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Connections */}
                {connections.map((conn, i) => {
                    const fromNode = nodes.find(n => n.id === conn.from);
                    const toNode = nodes.find(n => n.id === conn.to);
                    return (
                        <motion.line
                            key={i}
                            x1={fromNode.x}
                            y1={fromNode.y}
                            x2={toNode.x}
                            y2={toNode.y}
                            stroke="rgba(99, 102, 241, 0.2)" // Indigo low opacity
                            strokeWidth="0.5"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.5, delay: i * 0.2 }}
                        />
                    );
                })}
            </svg>

            {/* Nodes */}
            {nodes.map((node, i) => (
                <motion.div
                    key={node.id}
                    style={{
                        position: 'absolute',
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                        transform: 'translate(-50%, -50%)',
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 + 1 }}
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                        className="glass"
                        style={{
                            padding: '8px 16px',
                            background: 'rgba(255, 255, 255, 0.9)',
                            border: '1px solid rgba(99, 102, 241, 0.3)',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                            borderRadius: '20px',
                            fontWeight: '600',
                            fontSize: '0.9rem',
                            color: '#0f172a',
                            whiteSpace: 'nowrap',
                            cursor: 'default'
                        }}
                    >
                        {node.label}
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
};

export default DataMesh;
