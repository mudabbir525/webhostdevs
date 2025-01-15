import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Shield, Database, Brush, Gauge, Settings } from 'lucide-react';

const AboutPage = () => {
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

  return (
    <div className="pt-16">
      {/* Hero Section */}
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

      {/* Company Overview Grid */}
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
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
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
    </div>
  );
};

export default AboutPage;