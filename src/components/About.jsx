import { React, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Layout, Server, Shield, Database, Brush, Gauge, Settings,
  MapPin, Users, Heart, Zap, Rocket, Award, BookOpen, Mail, Calendar,
  Lightbulb, Users2, Box, GraduationCap, BarChart2, Cpu, ArrowRight
} from 'lucide-react';
import { useLocation } from 'react-router-dom';

const AboutPage = () => {
  const location = useLocation();
    
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  // Existing services data
  const services = [
    {
      icon: <Code />,
      title: 'Custom Web Development',
      description: 'Building tailored websites that perfectly align with your business needs using cutting-edge technologies and best practices.'
    },
    {
      icon: <Layout />,
      title: 'User-Friendly Interfaces',
      description: 'Creating intuitive and responsive user interfaces that provide seamless navigation and exceptional user experience.'
    },
    {
      icon: <Settings />,
      title: 'Admin Panels',
      description: 'Developing powerful admin dashboards with comprehensive controls for efficient content and user management.'
    },
    {
      icon: <Database />,
      title: 'Database Integration',
      description: 'Implementing secure and scalable database solutions to manage your business data effectively.'
    },
    {
      icon: <Shield />,
      title: 'Secure Solutions',
      description: 'Prioritizing security in every project with industry-standard protocols and best practices for data protection.'
    },
    {
      icon: <Gauge />,
      title: 'Performance Optimization',
      description: 'Ensuring fast loading times and smooth performance across all devices and platforms.'
    },
    {
      icon: <Server />,
      title: 'Scalable Architecture',
      description: 'Building robust systems that grow with your business, from startups to enterprise-level applications.'
    },
    {
      icon: <Brush />,
      title: 'Modern Design',
      description: 'Implementing contemporary design trends while maintaining professional aesthetics and brand consistency.'
    }
  ];

  // New data for added sections
  const milestones = [
    {
      date: "June 2024",
      title: "Vision Ignited",
      description: (
        <>
          Idea for WebHostDevs conceived by <strong className="text-blue-600 dark:text-blue-400 font-semibold">Founder : Mohammed Mudabbir Pasha Co-Founder : Sidhheshwar Reddy</strong>
        </>
      ),
      icon: <Lightbulb className="w-5 h-5" />
    },
    {
      date: "July 2024",
      title: "Team Formation",
      description: "Passionate developers, designers, and strategists assembled including co-founder Siddeshwar Reddy",
      icon: <Users2 className="w-5 h-5" />
    },
    {
      date: "August 2024",
      title: "First Project Delivered",
      description: "First client project launched successfully by founding team",
      icon: <Box className="w-5 h-5" />
    },
    {
      date: "October 2024",
      title: "First UI/UX Workshop",
      description: "High-value training session attended by 50+ participants",
      icon: <Brush className="w-5 h-5" />
    },
    {
      date: "December 2024",
      title: "3 Projects Live",
      description: "Early credibility established with unique client solutions",
      icon: <Server className="w-5 h-5" />
    },
    {
      date: "January 2025",
      title: "Broader Reach",
      description: "Expanded services beyond the city, strengthening market presence",
      icon: <MapPin className="w-5 h-5" />
    },
    {
      date: "February 2025",
      title: "5–7 Projects Delivered",
      description: "Multiple eCommerce, SaaS, and corporate websites completed",
      icon: <Award className="w-5 h-5" />
    },
    {
      date: "March 2025",
      title: "Web Dev Masterclass Launched",
      description: "Beginner-friendly program with mentorship and real-world projects",
      icon: <GraduationCap className="w-5 h-5" />,
      isLatest: true
    }
  ];

  const capabilities = [
    {
      title: "Build",
      tagline: "Tailored digital experiences",
      icon: <Code className="w-6 h-6" />,
      items: [
        "Custom Web Development",
        "User-Friendly Interfaces",
        "Modern Design"
      ]
    },
    {
      title: "Secure",
      tagline: "Protection at every layer",
      icon: <Shield className="w-6 h-6" />,
      items: [
        "Secure Solutions",
        "Database Integration",
        "Admin Panels"
      ]
    },
    {
      title: "Scale",
      tagline: "Growth-ready architecture",
      icon: <Rocket className="w-6 h-6" />,
      items: [
        "Scalable Architecture",
        "Performance Optimization"
      ]
    }
  ];

  const differentiators = [
    {
      title: "Tailored Solutions",
      description: "Custom-built applications designed for your specific business requirements",
      icon: <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
    },
    {
      title: "Security-First",
      description: "Enterprise-grade protection built into every layer of our solutions",
      icon: <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
    },
    {
      title: "Performance Optimized",
      description: "Lightning-fast applications with seamless user experiences",
      icon: <Gauge className="w-5 h-5 text-blue-600 dark:text-blue-400" />
    },
    {
      title: "Future-Proof",
      description: "Scalable architecture that grows with your business needs",
      icon: <Server className="w-5 h-5 text-blue-600 dark:text-blue-400" />
    }
  ];

  return (
    <div className="pt-16">
      {/* Existing Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative bg-blue-600 dark:bg-blue-800 py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold text-white sm:text-5xl md:text-6xl"
          >
            About WebHostDevs
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Empowering businesses with cutting-edge web solutions and user-friendly admin panels
          </motion.p>
        </div>
      </motion.section>

      {/* Existing Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What We Do</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Delivering comprehensive web development solutions that drive business growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
            >
              WebHostDevs 
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              WebHostDevs empowers businesses with innovative web solutions and digital growth. 
              We specialize in creating custom digital experiences that combine modern design 
              with enterprise-grade functionality to drive measurable results.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <div className="flex items-center gap-2 bg-white dark:bg-gray-700 px-5 py-3 rounded-xl shadow-sm">
              <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                <p className="font-medium text-gray-700 dark:text-gray-200">Hyderabad, Telangana</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 bg-white dark:bg-gray-700 px-5 py-3 rounded-xl shadow-sm">
              <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Team</p>
                <p className="font-medium text-gray-700 dark:text-gray-200">11–50 employees</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 bg-white dark:bg-gray-700 px-5 py-3 rounded-xl shadow-sm">
              <Heart className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Followers</p>
                <p className="font-medium text-gray-700 dark:text-gray-200">136 professionals</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Leadership</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              The visionaries behind WebHostDevs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Founder Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white text-4xl font-bold">
                MP
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                <span className="text-blue-600 dark:text-blue-400">Mohammed Mudabbir Pasha</span>
              </h3>
              <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4">Founder & CEO</p>
              <p className="text-gray-600 dark:text-gray-300">
                Visionary leader with expertise in full-stack development and digital strategy. 
                Passionate about creating impactful web solutions.
              </p>
            </motion.div>
            
            {/* Co-Founder Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center text-white text-4xl font-bold">
                SR
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                <span className="text-emerald-600 dark:text-emerald-400">Siddeshwar Reddy</span>
              </h3>
              <p className="text-lg text-emerald-600 dark:text-emerald-400 font-medium mb-4">Co-Founder</p>
              <p className="text-gray-600 dark:text-gray-300">
                Technical expert specializing in scalable architectures and performance optimization. 
                Drives innovation in our development processes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Capabilities</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Comprehensive solutions tailored to your business needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 mb-4 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {capability.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                  {capability.tagline}
                </p>
                <ul className="space-y-2">
                  {capability.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
  {/* Journey Section */}
   <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50/30 to-emerald-50/40 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-6">
        <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
        </svg>
        <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Our Story</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Our Journey</h2>
      <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Milestones in our commitment to excellence and innovation
      </p>
    </motion.div>
    
    <div className="relative">
      {/* Enhanced Progress rail */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-400 via-emerald-500 to-emerald-600 dark:from-emerald-500 dark:to-emerald-700 rounded-full shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full blur-sm opacity-50"></div>
        <motion.div
          className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/40 to-transparent rounded-full"
          animate={{
            y: [0, '200px', 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="space-y-16">
        {/* March 2023 - Founded */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0 * 0.1 }}
          className="relative flex justify-start items-center"
        >
          <div className="w-full md:w-1/2">
            <div className="bg-white/80 backdrop-blur-sm dark:bg-gray-700/80 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 mr-16 md:mr-20 border border-gray-100 dark:border-gray-600 relative">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Founded
              </h3>
              <p className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold mb-3 uppercase tracking-wide">
                March 2024
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Launched with a vision to empower tech enthusiasts and build innovative digital solutions.
              </p>
            </div>
          </div>
          {/* Timeline Icon */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg z-10">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
        </motion.div>

        {/* June 2023 - Core Team Expansion */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 * 0.1 }}
          className="relative flex justify-end items-center"
        >
          <div className="w-full md:w-1/2">
            <div className="bg-white/80 backdrop-blur-sm dark:bg-gray-700/80 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ml-16 md:ml-20 border border-gray-100 dark:border-gray-600 relative">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Core Team Expansion
              </h3>
              <p className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold mb-3 uppercase tracking-wide">
                June 2024
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Welcomed Sideshwar as Co-Founder, strengthening leadership and technical expertise.
              </p>
            </div>
          </div>
          {/* Timeline Icon */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg z-10">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
          </div>
        </motion.div>

        {/* August 2023 - First Web Development Batch */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2 * 0.1 }}
          className="relative flex justify-start items-center"
        >
          <div className="w-full md:w-1/2">
            <div className="bg-white/80 backdrop-blur-sm dark:bg-gray-700/80 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 mr-16 md:mr-20 border border-gray-100 dark:border-gray-600 relative">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                First Web Development Batch
              </h3>
              <p className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold mb-3 uppercase tracking-wide">
                August 2024
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Successfully trained <span className="font-semibold text-emerald-600 dark:text-emerald-400">50+ members</span> in foundational web development, marking the start of structured learning programs.
              </p>
            </div>
          </div>
          {/* Timeline Icon */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg z-10">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
        </motion.div>

        {/* September 2023 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 3 * 0.1 }}
          className="relative flex justify-end items-center"
        >
          <div className="w-full md:w-1/2">
            <div className="bg-white/80 backdrop-blur-sm dark:bg-gray-700/80 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ml-16 md:ml-20 border border-gray-100 dark:border-gray-600 relative">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Web Development Batch 2 
              </h3>
              <p className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold mb-3 uppercase tracking-wide">
                September 2024
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Graduated <span className="font-semibold text-emerald-600 dark:text-emerald-400">50+ skilled developers</span>, with many securing internships and freelance projects.
              </p>
            </div>
          </div>
          {/* Timeline Icon */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg z-10">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
            </svg>
          </div>
        </motion.div>

        {/* October 2023 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 4 * 0.1 }}
          className="relative flex justify-start items-center"
        >
          <div className="w-full md:w-1/2">
            <div className="bg-white/80 backdrop-blur-sm dark:bg-gray-700/80 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 mr-16 md:mr-20 border border-gray-100 dark:border-gray-600 relative">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Project Execution Phase
              </h3>
              <p className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold mb-3 uppercase tracking-wide">
                October 2024
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Successfully delivered <span className="font-semibold text-emerald-600 dark:text-emerald-400">2-3 high-quality projects</span>, enhancing real-world development experience.
              </p>
            </div>
          </div>
          {/* Timeline Icon */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg z-10">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 1v4m8-4v4" />
            </svg>
          </div>
        </motion.div>

        {/* November 2023 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 5 * 0.1 }}
          className="relative flex justify-end items-center"
        >
          <div className="w-full md:w-1/2">
            <div className="bg-white/80 backdrop-blur-sm dark:bg-gray-700/80 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ml-16 md:ml-20 border border-gray-100 dark:border-gray-600 relative">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Bootcamp & Batch 3 Launch
              </h3>
              <p className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold mb-3 uppercase tracking-wide">
                November 2024
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Conducted an intensive Web Development Bootcamp, followed by Batch 3 with <span className="font-semibold text-emerald-600 dark:text-emerald-400">50+ members</span>.
              </p>
            </div>
          </div>
          {/* Timeline Icon */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg z-10">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </motion.div>

        {/* December 2023 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 6 * 0.1 }}
          className="relative flex justify-start items-center"
        >
          <div className="w-full md:w-1/2">
            <div className="bg-white/80 backdrop-blur-sm dark:bg-gray-700/80 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 mr-16 md:mr-20 border border-gray-100 dark:border-gray-600 relative">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                High-Profile Client Collaboration
              </h3>
              <p className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold mb-3 uppercase tracking-wide">
                December 2024
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Started working with a <span className="font-semibold text-emerald-600 dark:text-emerald-400">premium client</span>, delivering scalable and high-performance solutions.
              </p>
            </div>
          </div>
          {/* Timeline Icon */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg z-10">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
        </motion.div>

        {/* January 2024 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 7 * 0.1 }}
          className="relative flex justify-end items-center"
        >
          <div className="w-full md:w-1/2">
            <div className="bg-white/80 backdrop-blur-sm dark:bg-gray-700/80 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ml-16 md:ml-20 border border-gray-100 dark:border-gray-600 relative">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Team Expansion
              </h3>
              <p className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold mb-3 uppercase tracking-wide">
                January 2025
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Expanded the core team with new developers and mentors, boosting operational capacity.
              </p>
            </div>
          </div>
          {/* Timeline Icon */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg z-10">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
        </motion.div>

        {/* February 2024 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 8 * 0.1 }}
          className="relative flex justify-start items-center"
        >
          <div className="w-full md:w-1/2">
            <div className="bg-white/80 backdrop-blur-sm dark:bg-gray-700/80 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 mr-16 md:mr-20 border border-gray-100 dark:border-gray-600 relative">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Web Hosting & Dev Batch 4
              </h3>
              <p className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold mb-3 uppercase tracking-wide">
                February 2025
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Launched Batch 4 with <span className="font-semibold text-emerald-600 dark:text-emerald-400">60+ members</span>, focusing on full-stack development & web hosting solutions.
              </p>
            </div>
          </div>
          {/* Timeline Icon */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg z-10">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
            </svg>
          </div>
        </motion.div>

        {/* April 2024 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 9 * 0.1 }}
          className="relative flex justify-end items-center"
        >
          <div className="w-full md:w-1/2">
            <div className="bg-white/80 backdrop-blur-sm dark:bg-gray-700/80 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ml-16 md:ml-20 border border-gray-100 dark:border-gray-600 relative">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                UI/UX Workshop at SNIST
              </h3>
              <p className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold mb-3 uppercase tracking-wide">
                April 2025
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Conducted a UI/UX workshop at SNIST College, attended by <span className="font-semibold text-emerald-600 dark:text-emerald-400">70+ participants</span>, led by our founders.
              </p>
            </div>
          </div>
          {/* Timeline Icon */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg z-10">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5z" />
            </svg>
          </div>
        </motion.div>

        {/* July 2024 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 10 * 0.1 }}
          className="relative flex justify-start items-center"
        >
          <div className="w-full md:w-1/2">
            <div className="bg-white/80 backdrop-blur-sm dark:bg-gray-700/80 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 mr-16 md:mr-20 border border-gray-100 dark:border-gray-600 relative">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Team Growth & Specialization
              </h3>
              <p className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold mb-3 uppercase tracking-wide">
                July 2025
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Formed a dedicated team of <span className="font-semibold text-emerald-600 dark:text-emerald-400">20+ professionals</span>, specializing in development, design, and mentorship.
              </p>
            </div>
          </div>
          {/* Timeline Icon */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg z-10">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
        </motion.div>

        {/* August 2024 - Latest */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 11 * 0.1 }}
          className="relative flex justify-end items-center"
        >
          <div className="w-full md:w-1/2">
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ml-16 md:ml-20 border-2 border-emerald-200 dark:border-emerald-600/30 relative">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Web Development Batch 5
                </h3>
                <span className="px-3 py-1 text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
                  CURRENT
                </span>
              </div>
              <p className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold mb-3 uppercase tracking-wide">
                August 2025
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Kicked off Batch 5 with <span className="font-semibold text-emerald-600 dark:text-emerald-400">20+ aspiring developers</span>, continuing our mission to nurture tech talent.
              </p>
            </div>
          </div>
          {/* Timeline Icon - Animated */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg z-10">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Call to Action
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <div className="inline-flex items-center gap-6  px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          <span className="font-semibold ">Join Our Next Journey</span>
        </div>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Be part of our continuing story of innovation and growth
        </p>
      </motion.div> */}
    </div>
  </div>
</section>

      {/* Highlights Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Highlights</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Feature Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium text-white">
                    Flagship Program
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Web Dev Masterclass
                </h3>
                <p className="text-blue-100 mb-6">
                  Our beginner-friendly yet industry-ready program offers mentorship, real-world project experience, 
                  performance optimization insights, and a verified certificate — reflecting our dedication to 
                  nurturing the next generation of developers.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-blue-200 mt-0.5" />
                    <div>
                      <p className="text-sm text-blue-100 font-medium">Includes</p>
                      <p className="text-white">Verified Certificate</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-blue-200 mt-0.5" />
                    <div>
                      <p className="text-sm text-blue-100 font-medium">Benefits</p>
                      <p className="text-white">Resume Boost • Mentor Guidance</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Secondary Highlight Cards */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl shadow-lg h-full"
              >
                <div className="w-12 h-12 mb-6 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Users2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Trusted by Growing Businesses
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  From startups to established brands, we've delivered tailored solutions for diverse business needs, 
                  including eCommerce platforms, SaaS applications, and corporate websites.
                </p>
              </motion.div>
              
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl shadow-lg h-full"
              >
                <div className="w-12 h-12 mb-6 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Shaping Future Developers
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Through workshops and masterclasses, we've empowered 500+ learners with practical web development 
                  skills and industry insights.
                </p>
              </motion.div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why Work With Us</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Our approach to delivering exceptional web solutions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  {item.icon}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 dark:bg-blue-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Let's Build Together</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Ready to elevate your digital presence? Contact us to discuss your project.
            </p>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:info@webhostdevs.com"
              className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg text-lg shadow-lg transition"
            >
              Get in Touch <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;