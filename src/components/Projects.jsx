import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'web',
      image: '/api/placeholder/600/400',
      description: 'A full-featured e-commerce platform with payment integration',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      github: '#'
    },
    {
      title: 'Healthcare Dashboard',
      category: 'dashboard',
      image: '/api/placeholder/600/400',
      description: 'Analytics dashboard for healthcare providers',
      technologies: ['React', 'D3.js', 'Firebase'],
      link: '#',
      github: '#'
    },
    {
      title: 'Restaurant App',
      category: 'mobile',
      image: '/api/placeholder/600/400',
      description: 'Mobile app for restaurant ordering and reservations',
      technologies: ['React Native', 'Express', 'PostgreSQL'],
      link: '#',
      github: '#'
    },
    {
      title: 'Real Estate Website',
      category: 'web',
      image: '/api/placeholder/600/400',
      description: 'Property listing and management platform',
      technologies: ['Next.js', 'Tailwind CSS', 'Strapi'],
      link: '#',
      github: '#'
    },
    {
      title: 'Fitness Tracker',
      category: 'mobile',
      image: '/api/placeholder/600/400',
      description: 'Mobile app for tracking workouts and nutrition',
      technologies: ['React Native', 'TypeScript', 'Redux'],
      link: '#',
      github: '#'
    },
    {
      title: 'Analytics Platform',
      category: 'dashboard',
      image: '/api/placeholder/600/400',
      description: 'Business intelligence and analytics dashboard',
      technologies: ['Vue.js', 'Python', 'AWS'],
      link: '#',
      github: '#'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
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
                    <a
                      href={project.github}
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Source
                    </a>
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