import {React, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useLocation } from 'react-router-dom';


import ms from '../assets/ms.png'
import ams from '../assets/ams.png'
import lb from '../assets/lb.png'
import suhas from '../assets/suhas.png'
import marichi from '../assets/marichi.png'
import slot from '../assets/slotbook.png'
import bmc from '../assets/bmc.png'
import dlvb from '../assets/dlvb.png'
import invent from '../assets/invent.png'
import sp from '../assets/sp.png'
import gsc from '../assets/gsc.png'
import UrbanNest from '../assets/UrbanNest.png'
import InteriorVision from '../assets/InteriorVision.png'
import GastroNova from '../assets/GastroNova.png'
import SriMaha from '../assets/SriMaha.png'
import Kakamani from '../assets/Kakamani.png'
import Vivenza from '../assets/Vivenza.png'
import Bakliv from '../assets/Bakliv.png'
import Baba from '../assets/Baba.png'
import AadhyaEdu from '../assets/AadhyaEdu.png'



const Projects = () => {
  const location = useLocation();
  
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location]);

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
      title: 'Labneh',
      category: 'web',
      image: lb,
      description: 'Developed a responsive website for a food restaurant using ReactJS, Bootstrap, and APIs, delivering a seamless and engaging user experience.',
      technologies: ['React', 'TailwindCSS'],
      link: 'https://labneh.in',
      github: '#'
    },
    {
      title: 'DLVB IMPLEX PVT LTD',
      category: 'web',
      image: dlvb,
      description: 'Designed and developed a professional website for DLVB IMPEX PVT. LTD., a healthcare pioneer committed to innovation, compassionate care, and empowering communities.',
      technologies: ['Next.js', 'Tailwind CSS', 'React'],
      link: 'https://dlvbimpexpvtltd.com/',
      github: '#'
    },
    {
      title: 'Marichi Ventures',
      category: 'web',
      image: marichi,
      description: 'Marichi Ventures: A dynamic website showcasing their business services, built with a focus on modern design, responsiveness, and user engagement, developed by WebHostDevs.'
    },

    {
      title: 'The SP Industries',
      category: 'web',
      image: sp,
      description: 'Manufacturer of Corrugated Boxes with Export quality in Bengaluru & Hosur, India. One of the Emerging Corrugated Box Manufacturers & Suppliers in Bengaluru & Hosur, India.'
    },


    {
      title: 'Ghar Se Catering',
      category: 'web',
      image: gsc,
      description: 'Ghar Se Catering is a comprehensive platform for discovering, comparing, and booking Homely catering services, complete with detailed vendor profiles and seamless user interaction.'
    },


    {

      title: 'Slot Booking',
      category: 'web',
      image: slot,
      description: 'The slot booking website is a user-friendly platform for selecting, managing, and confirming time slots for events or services with real-time availability updates.'
    },
    {
      title: 'Inventoy Management',
      category: 'web',
      image: invent,
      description: 'The inventory management system is a streamlined platform for tracking, organizing, and managing stock levels, orders, and deliveries efficiently.'
    },
    {
      title: 'Real Estate Website',
      category: 'web',
      image: suhas,
      description: 'Property listing and management platform'
    },
    {
      title: 'UrbanNest Housing Search',
      category: 'web',
      image: UrbanNest,
      description: 'A React-based house-searching app that helps users find rental and for-sale properties easily. Features responsive design, smooth navigation, and intuitive search for an enhanced user experience.'
    },
    {
      title: 'Interior Vision',
      category: 'web',
      image: InteriorVision,
      description: 'A sleek, modern website showcasing interior design services, portfolios, and inspiration. Features elegant visuals and responsive layouts to engage clients and highlight the brand’s aesthetic.'
    },
    {
      title: 'Gastro Nova',
      category: 'web',
      image: GastroNova,
      description: 'A healthcare website focused on advancing GI therapeutics through ethical marketing and doctor-centric engagement. Features a clean, professional design that fosters trust and long-term medical partnerships.'
    },
    {
      title: 'Bakliv',
      category: 'web',
      image: Bakliv,
      description: 'A professional pharmaceutical website showcasing 25 years of expertise and commitment to quality healthcare solutions. Focused on trust, scientific credibility, and easy navigation to highlight reliable, high-quality products.'
    },
    {
      title: 'Kakamani Enterprises',
      category: 'web',
      image: Kakamani,
      description: 'A responsive website highlighting cost-effective, reliable warehouse storage and material handling solutions. Showcases their nationwide reach and customer-focused service through a clean, informative design.'
    },
    {
      title: 'Aadhya Edu',
      category: 'web',
      image: AadhyaEdu,
      description: 'A tech-enabled platform that makes overseas education accessible by helping students and partners find and apply to top global universities. Features a modern, responsive design for easy navigation and user engagement.'
    },
    {
      title: 'Sri Maha Spices',
      category: 'web',
      image: SriMaha,
      description: 'A premium catering website that showcases their five-star expertise and dedication to turning every event into a memorable celebration through refined visuals and seamless user navigation.'
    },
    {
      title: 'Baba Tours And Travels',
      category: 'web',
      image: Baba,
      description: 'A travel services website built to showcase a versatile fleet of vehicles for all occasions—from city tours and school trips to weddings and corporate outings.'
    },
    {
      title: 'Vivenza',
      category: 'web',
      image: Vivenza,
      description: 'A luxury farmhouse website designed to showcase the elegance, comfort, and grandeur of Moinabad’s most premium event destination.'
    },
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