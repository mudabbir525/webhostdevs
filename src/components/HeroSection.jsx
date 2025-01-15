import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Brackets, Database } from 'lucide-react';

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

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 h-full">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="border-r border-blue-500/20" />
          ))}
        </div>
      </div>

      {/* Floating Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        {[Terminal, Code2, Brackets, Database].map((Icon, index) => (
          <motion.div
            key={index}
            initial={{ y: Math.random() * 100 }}
            animate={{ 
              y: [Math.random() * 100, Math.random() * -100],
              x: [Math.random() * 100, Math.random() * -100]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 2
            }}
            className="absolute text-blue-500/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          >
            <Icon size={48} />
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Start Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors duration-200"
              >
                View Our Work
              </motion.button>
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