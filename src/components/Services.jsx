import {React, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone,  ShoppingCart,  Figma, Database, Globe } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

const Services = () => {
  const location = useLocation();
      
        useEffect(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, [location]);
  const services = [
    {
      icon: <Code />,
      title: "Web Development",
      description: "Custom website development using modern technologies like React, Next.js, and Node.js.",
      features: [
        "Responsive Design",
        "Performance Optimization",
        "SEO-friendly Structure",
        "Modern UI/UX",
      ]
    },
    // {
    //   icon: <Smartphone />,
    //   title: "Mobile Development",
    //   description: "Native and cross-platform mobile applications for iOS and Android.",
    //   features: [
    //     "Native Development",
    //     "Cross-platform Solutions",
    //     "App Store Optimization",
    //     "Performance Analytics",
    //   ]
    // },
    {
      icon: <Figma />,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance user experience and engagement.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Visual Design",
      ]
    },
    {
      icon: <Database />,
      title: "Backend Development",
      description: "Robust server-side solutions with secure and scalable architecture.",
      features: [
        "API Development",
        "Database Design",
        "Cloud Integration",
        "Security Implementation",
      ]
    },
    {
      icon: <ShoppingCart />,
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with secure payment integration.",
      features: [
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Processing",
        "Customer Analytics",
      ]
    },
    {
      icon: <Globe />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence.",
      features: [
        "SEO Optimization",
        "Content Strategy",
        "Social Media Marketing",
        "Analytics & Reporting",
      ]
    }
  ];

  const plans = [
    {
      name: "Basic",
      price: "Custom",
      features: [
        "5 Pages Website",
        "Basic SEO",
        "Mobile Responsive",
        "1 Month Support",
        "Basic Analytics",
      ],
      isFeatured: false
    },
    {
      name: "Professional",
      price: "Custom",
      features: [
        "10 Pages Website",
        "Advanced SEO",
        "Mobile Responsive",
        "3 Months Support",
        "Advanced Analytics",
        "E-commerce Integration",
        "Custom Features"
      ],
      isFeatured: true
    },
    {
      name: "Advanced",
      price: "Custom",
      features: [
        "Unlimited Pages",
        "Premium SEO",
        "Mobile Responsive",
        "6 Months Support",
        "Premium Analytics",
        "E-commerce Integration",
        "Custom Features",
        "Priority Support",
        "Custom Integrations"
      ],
      isFeatured: false
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-blue-600 dark:bg-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold text-white sm:text-5xl"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Comprehensive web solutions tailored to your business needs
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-blue-600 dark:text-blue-400">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Pricing Plans
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Choose the perfect plan for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 ${
                  plan.isFeatured ? 'ring-2 ring-blue-600 dark:ring-blue-400' : ''
                }`}
              >
                {plan.isFeatured && (
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-4">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  ₹{plan.price}
                </span>
                  {plan.price !== "Custom" && (
                    <span className="ml-1 text-gray-600 dark:text-gray-300">/project</span>
                  )}
                </div>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to ="/contact">
                <button className="mt-8 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Get Started  
                </button>
              </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;