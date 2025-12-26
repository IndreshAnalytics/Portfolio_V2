import React from 'react';
import { motion } from 'framer-motion';
import { FaGitAlt, FaCheckCircle, FaCodeBranch } from 'react-icons/fa';

const commits = [
    { id: 'a1b2c3d', msg: 'feat(risk): optimize roll-rate calculation query', date: '2h ago', author: 'IndreshTiwari' },
    { id: 'x9y8z7', msg: 'fix(api): handle Shopify webhook timeout 504', date: '5h ago', author: 'IndreshTiwari' },
    { id: 'f5g6h7', msg: 'chore(pipeline): upgrade Snowflake connector v2.0', date: '1d ago', author: 'IndreshTiwari' },
    { id: 'm4n5o6', msg: 'feat(ui): implement glassmorphism dashboard', date: '2d ago', author: 'IndreshTiwari' },
    { id: 'p1q2r3', msg: 'refactor(auth): secure OAuth2 token exchange with Banking API', date: '3d ago', author: 'IndreshTiwari' },
];

const GitActivityFeed = () => {
    return (
        <div className="git-feed-container" style={{
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(5px)',
            borderLeft: '1px solid #333',
            padding: '20px',
            color: '#0f0',
            fontFamily: 'monospace',
            height: '100%',
            overflowY: 'auto'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', borderBottom: '1px solid #333', paddingBottom: '10px' }}>
                <FaGitAlt style={{ fontSize: '1.5rem', marginRight: '10px', color: '#ff4b4b' }} />
                <h3 style={{ margin: 0, fontSize: '1.1rem', textTransform: 'uppercase' }}>Live Commit Log</h3>
            </div>

            <div className="commits-list">
                {commits.map((commit, i) => (
                    <motion.div
                        key={commit.id}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        style={{ marginBottom: '15px', fontSize: '0.85rem' }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', color: '#888', marginBottom: '3px' }}>
                            <FaCodeBranch style={{ marginRight: '5px', fontSize: '0.7rem' }} />
                            <span style={{ marginRight: '10px' }}>{commit.id}</span>
                            <span>{commit.date}</span>
                        </div>
                        <div style={{ paddingLeft: '20px', position: 'relative' }}>
                            <div style={{
                                position: 'absolute', left: '6px', top: '0', bottom: '-15px',
                                width: '1px', background: '#333'
                            }}></div>
                            <FaCheckCircle style={{ position: 'absolute', left: '2px', top: '2px', fontSize: '10px', color: '#50fa7b' }} />
                            <span style={{ color: '#f8f8f2' }}>{commit.msg}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div style={{ marginTop: '20px', fontSize: '0.8rem', color: '#666', textAlign: 'center' }}>
                &gt; System Operational. Syncing with Mainframe... <span className="blink">_</span>
            </div>

            <style>{`
        .blink { animation: blinker 1s linear infinite; }
        @keyframes blinker { 50% { opacity: 0; } }
      `}</style>
        </div>
    );
};

export default GitActivityFeed;
