import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
// import AILabs from './components/AILabs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import JarvisMesh from './components/JarvisMesh';
import Preloader from './components/Preloader';
import SystemArchitecture from './components/SystemArchitecture';


// Animation variants for scroll reveal
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

function App() {
  // Theme logic removed - Permanent Light Theme
  const theme = 'light';

  const [loading, setLoading] = useState(true);
  console.log('App.jsx: component rendering, loading state:', loading);

  useEffect(() => {
    // Simulate loading time (e.g., for 3D assets)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);
  // toggleTheme function removed

  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Global 3D Background */}
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }}>
            <JarvisMesh theme={theme} />
          </div>

          <Navbar theme={theme} />
          <Hero />

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
            <About />
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
            <SystemArchitecture />
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
            <Experience />
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
            <Skills />
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
            <Contact />
          </motion.div>

          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
