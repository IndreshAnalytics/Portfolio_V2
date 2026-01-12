import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DataEcosystem = () => {
    const [activeNode, setActiveNode] = useState(null);
    const [isHovered, setIsHovered] = useState(false);

    // Chart Data Configurations
    const chartData = {
        default: [40, 60, 30, 80, 50],
        finance: [80, 20, 90, 40, 70], // Spiky for Risk
        retail: [30, 45, 60, 80, 95], // Rising for Churn/Sales
        healthcare: [50, 50, 50, 50, 50], // Stable
        manufacturing: [90, 85, 80, 40, 30] // Declining for waste/efficiency
    };

    const getChartColor = (node) => {
        switch (node) {
            case 'Finance': return '#FF6B6B'; // Red
            case 'E-commerce': return '#4ECDC4'; // Teal
            case 'Healthcare': return '#45B7D1'; // Blue
            case 'Manufacturing': return '#FFA07A'; // Orange
            default: return '#2E74B5';
        }
    };

    return (
        <section className="py-20 bg-white relative overflow-hidden h-[600px] flex items-center justify-center font-sans text-gray-800">

            {/* Background Chart Visualization */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                <div className="flex items-end space-x-4 h-64 w-3/4 justify-center">
                    {chartData[activeNode ? activeNode.toLowerCase().replace('-', '') : 'default']?.map((height, i) => (
                        <motion.div
                            key={i}
                            layout
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%`, backgroundColor: getChartColor(activeNode) }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            className="w-12 rounded-t-lg opacity-50"
                        />
                    ))}
                </div>
            </div>

            <div className="relative z-10 w-full max-w-4xl mx-auto text-center" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>

                <h2 className="text-3xl font-bold mb-12 text-[#2E74B5] tracking-tight uppercase">
                    Universal Data Ecosystem
                </h2>

                <div className="relative w-[500px] h-[500px] mx-auto flex items-center justify-center">

                    {/* Center Node */}
                    <motion.div
                        className="w-32 h-32 rounded-full shadow-2xl bg-[#2E74B5] flex items-center justify-center text-white font-bold text-xl cursor-pointer relative z-20"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{ boxShadow: isHovered ? "0px 0px 30px rgba(46, 116, 181, 0.6)" : "0px 0px 10px rgba(46, 116, 181, 0.2)" }}
                    >
                        Power BI

                        {/* Pulse Effect */}
                        <motion.div
                            className="absolute inset-0 rounded-full border-4 border-[#2E74B5]"
                            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>

                    {/* Satellite Nodes */}
                    <AnimatePresence>
                        {isHovered && (
                            <>
                                {['Finance', 'Healthcare', 'E-commerce', 'Manufacturing'].map((industry, index) => {
                                    // Calculate position in a circle
                                    const angle = (index / 4) * 2 * Math.PI;
                                    const radius = 160; // Distance from center
                                    const x = Math.cos(angle) * radius;
                                    const y = Math.sin(angle) * radius;

                                    return (
                                        <motion.div
                                            key={industry}
                                            initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                                            animate={{
                                                x,
                                                y,
                                                opacity: 1,
                                                scale: activeNode === industry ? 1.2 : 1
                                            }}
                                            exit={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                                            whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                                            transition={{ type: "spring", stiffness: 200, damping: 15, delay: index * 0.1 }}
                                            onClick={() => setActiveNode(industry)}
                                            className={`absolute w-24 h-24 rounded-full shadow-lg flex items-center justify-center text-xs font-bold cursor-pointer transition-colors duration-300 border-2
                                        ${activeNode === industry ? 'bg-white text-[#2E74B5] border-[#2E74B5]' : 'bg-[#f0f4f8] text-gray-600 border-gray-200'}
                                    `}
                                            style={{
                                                top: '50%',
                                                left: '50%',
                                                marginTop: '-3rem', // Half of height
                                                marginLeft: '-3rem' // Half of width
                                            }}
                                        >
                                            {industry}
                                        </motion.div>
                                    );
                                })}
                            </>
                        )}
                    </AnimatePresence>

                    {/* Connection Lines (Optional visual flair - simplified for now) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20">
                        {/* Logic to draw lines would go here, simpler to rely on physics motion for effect */}
                    </svg>

                </div>

                <motion.div
                    className="mt-8 h-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeNode ? 1 : 0 }}
                >
                    {activeNode && (
                        <p className="text-lg text-gray-600">
                            Applying <strong>Data Modeling</strong> & <strong>DAX</strong> to solve
                            <span className="font-bold text-[#2E74B5]"> {activeNode === 'Finance' ? 'Risk Calculation' : activeNode === 'E-commerce' ? 'Customer Churn' : activeNode === 'Healthcare' ? 'Patient Readmission' : 'Supply Chain Efficiency'} </span>
                            problems.
                        </p>
                    )}
                </motion.div>

            </div>
        </section>
    );
};

export default DataEcosystem;
