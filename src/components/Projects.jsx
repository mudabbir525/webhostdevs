import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import ms from '../assets/ms.png'
import ams from '../assets/ams.png'
import lb from '../assets/lb.png'
import suhas from '../assets/suhas.png'
import marichi from '../assets/marichi.png'
import slot from '../assets/slotbook.png'
import bmc from '../assets/bmc.png'
import invent from '../assets/invent.png'

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Mahaspice',
      category: 'web',
      image: ms,
      description: 'Mahaspice is a food delivery platform offering diverse menus, secure payment options, and real-time order updates through an integrated message gateway for a seamless user experience.',
      technologies: ['React', 'Php', 'TailwindCSS', 'SQL', 'Razor Pay'],
      link: 'https://www.mahaspice.in',
      github: '#'
    },
    {
      title: 'Admin Panel [Mahaspice]',
      category: 'dashboard',
      image: ams,
      description: 'The Mahaspice admin panel is a powerful dashboard for managing orders, menus, payments, and customer interactions efficiently in real time.',
      technologies: ['React', 'Php', 'TailwindCSS'],
      link: 'projects/confidential',
      
    },
    {
      title: 'Book My Cater',
      category: 'web',
      image: bmc,
      description: 'Book My Caterer is a comprehensive platform for discovering, comparing, and booking catering services, complete with detailed vendor profiles and seamless user interaction.',
      technologies: ['React', 'PHP', 'TailwindCSS'],
      link: 'https://book-my-cater.vercel.app',
    },
    {
      title: 'Labneh',
      category: 'web',
      image: lb,
      description: 'Labneh: A responsive food restaurant website built using ReactJS, Bootstrap, and APIs for seamless user experience.',
      technologies: ['React', 'TailwindCSS'],
      link: 'https://labneh.in',
      github: '#'
    },
    {
      title: 'Real Estate Website',
      category: 'web',
      image: suhas,
      description: 'Property listing and management platform',
      technologies: ['Next.js', 'Tailwind CSS', 'React'],
      link: 'https://suhas-constructions.vercel.app',
      github: '#'
    },
    {
      title: 'Marichi Ventures',
      category: 'web',
      image: marichi,
      description: 'Marichi Ventures: A dynamic website showcasing their business services, built with a focus on modern design, responsiveness, and user engagement, developed by WebHostDevs.',
      technologies: ['React', 'TailwindCSS', 'PHP', 'SQL', 'EmailJS'],
      link: 'https://marichiventures.com',
      github: '#'
    },
    {
      title: 'Slot Booking',
      category: 'web',
      image: slot,
      description: 'The slot booking website is a user-friendly platform for selecting, managing, and confirming time slots for events or services with real-time availability updates.',
      technologies: ['HTML', 'CSS', 'SQL' , 'PHP'],
      link: 'https://siddeshbooking.freewebhostmost.com',
      github: '#'
    },
    {
      title: 'Inventoy Management',
      category: 'web',
      image: invent,
      description: 'The inventory management system is a streamlined platform for tracking, organizing, and managing stock levels, orders, and deliveries efficiently.',
      technologies: ['HTML', 'CSS', 'SQL' , 'PHP'],
      link: 'https://siddeshbooking.freewebhostmost.com',
      github: '#'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    // { id: 'mobile', label: 'Mobile Apps' },
    { id: 'dashboard', label: 'Dashboards' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="bg-blue-600 dark:bg-blue-800 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Our Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100"
          >
            Showcase of our best work and successful projects
          </motion.p>
        </div>
      </section>

      {/* Filter Buttons */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 
                ${filter === category.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href={project.link}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    {/* <a
                      href={project.github}
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Source
                    </a> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;