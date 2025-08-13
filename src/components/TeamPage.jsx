import React from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

import { useLocation } from 'react-router-dom';

import sohail from '../assets/Team/sohail.webp';
import siddesh from '../assets/Team/siddesh.jpg';
import bharadwaj from '../assets/Team/bharadwaj.jpg';

import adithya from '../assets/Team/adithya.webp';
import afshan from '../assets/Team/afshan.webp';
import akshat from '../assets/Team/akshat.webp';
import nirvignya from '../assets/Team/nirvignya.webp';
import sirichandana from '../assets/Team/sirichandana.webp';
import srinidhi from '../assets/Team/srinidhi.webp';
import vishal from '../assets/Team/vishal.webp';
import vennela from '../assets/Team/vennela.webp';
import kc from '../assets/Team/kc.webp';
import abhi from '../assets/Team/abhi.jpg';
import rahul from '../assets/Team/rahul.jpeg';
import harshita from '../assets/Team/harshita.jpeg';
import ashrith from '../assets/Team/ashrith.jpg';
import rakesh from '../assets/Team/rakesh.jpeg';
import nitin from '../assets/Team/nitin.jpeg';
import prem from '../assets/Team/prem.jpeg';
import yagna from '../assets/Team/yagna.jpeg';
import rupa from '../assets/Team/rupa.jpg';
import karthik from '../assets/Team/karthik.png';
import varun from '../assets/Team/varun.png';
import hasini from '../assets/Team/hasini.jpg';
import sadhik from '../assets/Team/sadhik.jpg';
import vivek from '../assets/Team/vivek.jpg';
import kiran from '../assets/Team/kiran.png';

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
      name: "Rahul Reddy",
      role: "Dot Net Developer",
      description: "At WebHostDevs, Rahul is committed to delivering seamless and efficient web solutions that enhance user experience and business operations.",
      email: "info@webhostdevs.com",
      linkedin: "https://www.linkedin.com/in/",
      image : rahul
    },
    
    {
      name: "Adithya Naik",
      role: "Full Stack Developer ",
      description: "Develops both frontend and backend features for web applications. Works with senior developers to implement and maintain code across the technology stack.",
      email: "adithyanaik@webhostdevs.com",
      linkedin: "https://www.linkedin.com/in/adithyanaik/",
      image : adithya
    },
    {
      name: "Vishal",
      role: "Backend Developer ",
      description: "Focuses on server-side application development and database management. Implements APIs and maintains backend infrastructure under supervision.",
      email: "vishal@webhostdevs.com",
      linkedin: "https://www.linkedin.com/in/vishal-arya-dacha-558084256",
      image : vishal 
    },
    {
      name: "Vennela",
      role: "Full Stack Developer (Intern)",
      description: "Builds and maintains web applications    across the full technology stack. Implements features and fixes bugs under senior developer guidance.",
      email: "vennelabittla@webhostdevs.com",
      linkedin: "https://www.linkedin.com/in/vennela-bittla-667bb4336",
      image : vennela

    },
    {
      name: "Karthikeya Naik",
      role: "Full Stack Developer (Intern)",
      description: "Builds and maintains web applications    across the full technology stack. Implements features and fixes bugs under senior developer guidance.",
      email: "banothkarthik8@gmail.com",
      linkedin: "https://www.linkedin.com/in/karthikeyanaik/",
      image : karthik

    },
    {
      name: "Rupa Samala",
      role: "Full Stack Developer (Intern)",
      description: "Builds and maintains web applications    across the full technology stack. Implements features and fixes bugs under senior developer guidance.",
      email: "rupasamala87@gmail.com",
      linkedin: "https://www.linkedin.com/in/rupa-samala-041590271/",
      image : rupa

    },
    {
      name: "Varunkanth Sanchu",
      role: "Full Stack Developer (Intern)",
      description: "Builds and maintains web applications    across the full technology stack. Implements features and fixes bugs under senior developer guidance.",
      email: "varunsunchu59@gmail.com",
      linkedin: "https://www.linkedin.com/in/varunkanth059/",
      image : varun

    },
    {
      name: "Nitin Kakumanu",
      role: "Full Stack Developer (Intern)",
      description: "Builds and maintains web applications    across the full technology stack. Implements features and fixes bugs under senior developer guidance.",
      email: "nitinkakumanu@gmail.com",
      linkedin: "https://www.linkedin.com/in/nitin-kakumanu-92b88a27b/",
      image : nitin

    },
    {
      name: "Rakesh Mulpuri",
      role: "Full Stack Developer (Intern)",
      description: "Builds and maintains web applications    across the full technology stack. Implements features and fixes bugs under senior developer guidance.",
      email: "mulpurirakesh05@gmail.com",
      linkedin: "https://www.linkedin.com/in/rakesh-mulpuri-a8706b255/",
      image : rakesh

    },
    {
      name: "Nirvignya Ageer",
      role: "Full Stack Developer (Intern)",
      description: "Builds and maintains web applications    across the full technology stack. Implements features and fixes bugs under senior developer guidance.",
      email: "ageernirvignya@gmail.com",
      linkedin: "https://www.linkedin.com/in/nirvignya-ageer-694a65317/",
      image : nirvignya

    },
    {
      name: "Prem Podara",
      role: "Full Stack Developer (Intern)",
      description: "Builds and maintains web applications    across the full technology stack. Implements features and fixes bugs under senior developer guidance.",
      email: "20027cm044@gmail.com",
      linkedin: "https://www.linkedin.com/in/premgoud-podara-842733274/",
      image : prem

    },
    {
      name: "Harshita Bingi",
      role: "Business Development Lead",
      description: "Drives growth by identifying new business opportunities, building client relationships, and developing strategic partnerships. Collaborates with sales and marketing teams.",
      email: "harshitabingi@gmail.com",
      linkedin: "https://www.linkedin.com/in/harshita-bingi/",
      image : harshita

    },
    {
      name: "Hasini Palreddy",
      role: "Business Developer (Intern)",
      description: " Assists in lead generation, market analysis, and tracking sales efforts. Works with cross-functional teams to support partnership development and strategic initiatives.",
      email: "palreddyhasini@gmail.com",
      linkedin: "https://www.linkedin.com/in/hasinipalreddy/",
      image : hasini

    },
    {
      name: "Sadhik Shaik",
      role: "Business Development (Intern)",
      description: "Assists in lead generation, market analysis, and tracking sales efforts. Works with cross-functional teams to support partnership development and strategic initiatives.",
      email: "sadhikshaik9618@gmail.com",
      linkedin: "https://www.linkedin.com/in/sadhik-shaik-1878b8312/",
      image : sadhik

    },
    {
      name: "Sai Kiran Jagiri",
      role: "Business Development(Intern)",
      description: " Assists in lead generation, market analysis, and tracking sales efforts. Works with cross-functional teams to support partnership development and strategic initiatives.",
      email: "jagirisaikiran2004@gmail.com",
      linkedin: "https://www.linkedin.com/in/saikirangoudjagiri/",
      image : kiran

    },
    {
      name: "Afshan Mohammed",
      role: "UI/UX Designer (Intern)",
      description: "Supports the UI/UX team in user research, wireframing, prototyping, and usability testing. Collaborates with designers and developers to enhance user experience and ensure design consistency across products.",
      email: "mohammadafshan323@gmail.com",
      linkedin: "https://www.linkedin.com/in/mohammed-afshan-b188b8276/",
      image : afshan

    },
    {
      name: "Ashrith Guttula",
      role: "UI/UX Designer (Intern)",
      description: "Supports the UI/UX team in user research, wireframing, prototyping, and usability testing. Collaborates with designers and developers to enhance user experience and ensure design consistency across products.",
      email: "ashrith.g.8704@gmail.com",
      linkedin: "https://www.linkedin.com/in/ashrit-guttula",
      image : ashrith

    },
    {
      name: "Vivek Begari",
      role: "UI/UX Designer (Intern)",
      description: "Supports the UI/UX team in user research, wireframing, prototyping, and usability testing. Collaborates with designers and developers to enhance user experience and ensure design consistency across products.",
      email: "begarivivek630@gmail.com",
      linkedin: "https://www.linkedin.com/in/begarivivek/",
      image : vivek

    },
    {
      name: "Yagnasri Padma Akula",
      role: "FrontEnd Developer (Intern)",
      description: "Assists in developing and maintaining user-facing features for web applications using HTML, CSS, and JavaScript. Works closely with designers and backend developers to implement responsive and interactive interfaces.",
      email: "yagnasri@webhostdevs.com",
      linkedin: "https://www.linkedin.com/in/yagnasri-akula-860039298/",
      image : yagna

    },

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