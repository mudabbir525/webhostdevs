import React from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  Code2, 
  Brackets, 
  Database, 
  Cpu, 
  Server, 
  Cloud, 
  Code, 
  Bug, 
  GitBranch, 
  // Package, 
  // Settings, 
  // Layers, 
  // FileCode, 
  // Globe, 
  // Shield 
} from "lucide-react";

import { Link } from "react-router-dom";

const HeroSection = () => {
  const codeSnippets = [
    {
      language: 'React',
      code: `function App() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}`,
    },
    {
      language: 'JavaScript',
      code: `async function getData() {
  const response = await 
    fetch('/api/data');
  return response.json();
}`,
    },
    {
      language: 'CSS',
      code: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const icons = [
    Terminal, 
    Code2, 
    Brackets, 
    Database, 
    Cpu,           // Represents processing power, computing
    Server,        // Represents backend, hosting
    Cloud,         // Represents cloud computing, storage
    Code,          // Represents coding in general
    Bug,           // Represents debugging, fixing issues
    GitBranch,     // Represents version control (Git)
    // Package,       // Represents dependencies, package management
    // Settings,      // Represents configurations, dev tools
    // Layers,        // Represents multi-layer architecture
    // FileCode,      // Represents source code files
    // Globe,         // Represents web development
    // Shield,        // Represents cybersecurity, security
  ];
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0">
      <div className="grid grid-cols-8 h-full opacity-0.1">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className="border-r border-blue-500/10 dark:border-blue-400/10 bg-blue-50/10 dark:bg-blue-900/10 backdrop-blur-sm"
          />
        ))}
      </div>
    </div>

      {/* Floating Icons */}
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          initial={{ 
            y: Math.random() * 100,
            rotate: Math.random() * 20 - 10
          }}
          animate={{ 
            y: [Math.random() * 100, Math.random() * -100],
            x: [Math.random() * 100, Math.random() * -100],
            rotate: [Math.random() * 20 - 10, Math.random() * -20 + 10]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index ,
            ease: "easeInOut"
          }}
          className="absolute text-blue-500/30 dark:text-blue-400/30 drop-shadow-lg"
          style={{
            left: `${Math.random() * 80 + 10}%`,  // Keep icons away from edges
            top: `${Math.random() * 80 + 10}%`    // Keep icons away from edges
          }}
        >
          <Icon 
            size={64} 
            className="transform hover:scale-110 transition-transform duration-300"
          />
        </motion.div>
      ))}
    </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            <motion.h1 
              variants={item}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white"
            >
              Your Go-To{' '}
              <span className="text-blue-600 dark:text-blue-400">
                Web Development
              </span>{' '}
              Solution
            </motion.h1>
            
            <motion.p 
              variants={item}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300"
            >
              We transform your ideas into powerful digital solutions using cutting-edge technologies and creative innovation.
            </motion.p>
            
            <motion.div variants={item} className="flex flex-wrap gap-4">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Start Project
              </motion.button>
              </Link>
              <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors duration-200"
              >
                View Our Work
              </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Animated Code Blocks */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            {codeSnippets.map((snippet, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {snippet.language}
                  </span>
                </div>
                <pre className="p-4 text-sm text-gray-800 dark:text-gray-200 font-mono overflow-x-auto">
                  {snippet.code}
                </pre>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;