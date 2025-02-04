import React from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

import { useLocation } from 'react-router-dom';

import sohail from '../assets/sohail.webp';
import siddesh from '../assets/siddesh.jpg';
import bharadwaj from '../assets/bharadwaj.jpg';

import adithya from '../assets/adithya.webp';
import afshan from '../assets/afshan.webp';
import akshat from '../assets/akshat.webp';
import nirvignya from '../assets/nirvignya.webp';
import sirichandana from '../assets/sirichandana.webp';
import srinidhi from '../assets/srinidhi.webp';
import vishal from '../assets/vishal.webp';
import vennela from '../assets/vennela.webp';
import kc from '../assets/kc.webp';
import { Link } from "react-router-dom";



const TeamPage = () => {
    const location = useLocation();
    
      useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, [location]);
  
  const founders = [
    {
      name: "Mohammed Mudabbir Pasha",
      role: "Founder & CEO",
      description: "Leads company vision, strategy, and overall direction. Makes key business decisions and oversees all major operations while ensuring company growth and success.",
      email: "ceo@webhostdevs.com",
      linkedin: "https://www.linkedin.com/in/mohammed-mudabbir-pasha/",
      image: sohail,
    },
    {
      name: "Siddeshwar Reddy",
      role: "Co-Founder & COO",
      description: "Manages day-to-day operations and business processes. Oversees team efficiency, resource allocation, and implements organizational strategies to achieve company goals.",
      email: "siddesh@webhostdevs.com",
      linkedin: "https://www.linkedin.com/in/siddesh7077/",
      image: siddesh,
    }
  ];

  const teamMembers = [
    {
      name: "Krishna Chaitanya",
      role: "Technical lead, Full Stack developer",
      description: "Leads technical architecture and development across projects. Mentors development team and ensures code quality while managing system infrastructure and scalability.",
      email: "info@webhostdevs.com",
      linkedin: "https://www.linkedin.com/in/krishnachaitanya10",
      image : kc
    },
    {
      name: "Siri Chandana",
      role: "Strategic Consultant",
      description: "Analyzes business requirements and provides strategic recommendations for project success. Ensures alignment between client needs and technical solutions.",
      email: "info@webhostdevs.com",
      linkedin: "https://www.linkedin.com/in/siri-chandana-99ba59214/",
      image: sirichandana
    },
    {
      name: " B Shiva rama Bharadwaj",
      role: "SEO Specialist",
      description: "SEO Specialist and Digital Marketer skilled in boosting website visibility, optimizing content for search performance, and refining strategies based on analytics to drive results.",
      email: "info@webhostdevs.com",
      linkedin: "https://www.linkedin.com/in/buddhiraju-shiva-rama-bharadwaj-163828225/",
      image: bharadwaj
    },
    {
      name: "Akshat",
      role: "Figma Designer",
      description: "Creates user interface designs and interactive prototypes. Develops design systems and ensures consistent user experience across platforms.",
      email: "info@webhostdevs.com",
      linkedin: "https://www.linkedin.com/in/akshatvarahagiri/",
      image: akshat
    },
    {
      name: "Srinidhi",
      role: "Graphic Designer",
      description: "Designs visual assets and marketing materials. Creates and maintains brand identity elements while ensuring design consistency.",
      email: "info@webhostdevs.com",
      linkedin: "https://www.linkedin.com/in/srinidhirao-k-561b85334/",
      image : srinidhi
    },
    {
      name: "Mohammed Afshan",
      role: "Technical Business Analyst (Intern)",
      description: "Analyzes business requirements and translates them into technical specifications. Assists in project documentation and    requirement gathering.",
      email: "info@webhostdevs.com",
      linkedin: "https://www.linkedin.com/in/mohammed-afshan-b188b8276/",
      image : afshan
    },
    {
      name: "Adithya Naik",
      role: "Full Stack Developer (Intern)",
      description: "Develops both frontend and backend features for web applications. Works with senior developers to implement and maintain code across the technology stack.",
      email: "adithyanaik@webhostdevs.com",
      linkedin: "https://www.linkedin.com/in/adithyanaik/",
      image : adithya
    },
    {
      name: "Vennela",
      role: "Full Stack Developer (Intern)",
      description: "Builds and maintains web applications    across the full technology stack. Implements features and fixes bugs under senior developer guidance.",
      email: "vennelabittla@webhostdevs.com",
      linkedin: "https://www.linkedin.com/in/vennela-bittla-667bb4336",
      image : vennela

    },{
      name: "Nirvignya",
      role: "Full Stack Developer (Intern)",
      description: "Develops and tests web applications using full-stack technologies. Collaborates with team members to implement new features and maintain existing code.",
      email: "nirvignya@webhostdevs.com",
      linkedin: "https://www.linkedin.com/in/nirvignya-ageer-694a65317",
      image : nirvignya
    },
    {
      name: "Vishal",
      role: "Backend Developer (Intern)",
      description: "Focuses on server-side application development and database management. Implements APIs and maintains backend infrastructure under supervision.",
      email: "vishal@webhostdevs.com",
      linkedin: "https://www.linkedin.com/in/vishal-arya-dacha-558084256",
      image : vishal 
    }

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-blue-600 dark:bg-blue-800">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          className="absolute inset-0  bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
        />
        <div className="relative px-4 py-20 text-center">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 mt-12"
          >
            Meet Our Team
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto mt-2"
          >
            The passionate individuals behind WebHostDevs' success
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Founders Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-xl overflow-hidden bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="p-4 flex flex-col items-center text-center">
                <div className="w-48 h-48 mb-2 rounded-full overflow-hidden">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-2">{founder.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 text-lg mb-2">{founder.role}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg">{founder.description}</p>
                <div className="flex space-x-4">
                  <a 
                    href={`mailto:${founder.email}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
                    aria-label={`Email ${founder.name}`}
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                  <a 
                    href={founder.linkedin}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
                    aria-label={`${founder.name}'s LinkedIn profile`}
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Members Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 place-items-center"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-xl overflow-hidden bg-white dark:bg-slate-800 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6 flex flex-col min-h-[400px]  items-center text-center">
                <div className="w-32 h-32 mb-4 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">{member.name}</h3>
                <p className="text-blue-500 dark:text-blue-400 mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{member.description}</p>
                <div className="flex space-x-4">
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a 
                    href={member.linkedin}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TeamPage;