import React from "react";
import { motion } from "framer-motion";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const Privacy = () => {
  const location = useLocation();
  
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location]);
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-blue-50 dark:bg-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            {...fadeIn}
            className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent sm:text-5xl lg:text-6xl"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-blue-700 dark:text-blue-200 leading-relaxed"
          >
            At WebHostDevs, we value the privacy of our users. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Information We Collect */}
            <motion.div {...fadeIn} className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                1. Information We Collect
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                We collect the following types of information:
              </p>
              <ul className="list-none pl-4 mt-4 space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                  <span className="ml-4 text-gray-700 dark:text-gray-300">
                    <strong className="text-blue-700 dark:text-blue-300">Personal Information:</strong> Name, email address, phone number, etc.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                  <span className="ml-4 text-gray-700 dark:text-gray-300">
                    <strong className="text-blue-700 dark:text-blue-300">Non-Personal Information:</strong> Data about how you interact with our website.
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* How We Use Your Information */}
            <motion.div {...fadeIn} className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                2. How We Use Your Information
              </h2>
              <ul className="list-none pl-4 mt-4 space-y-3">
                {["To provide, personalize, and improve our services",
                  "To respond to inquiries and customer support",
                  "For marketing and promotional purposes (if applicable)",
                  "To monitor and analyze website usage"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                    <span className="ml-4 text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Cookies and Tracking Technologies */}
            <motion.div {...fadeIn} className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                3. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                We use cookies to enhance user experience. You can disable cookies in your browser settings, but it may affect how you use our website.
              </p>
            </motion.div>

            {/* Data Sharing and Disclosure */}
            <motion.div {...fadeIn} className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                4. Data Sharing and Disclosure
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                We do not sell your personal data. However, we may share your information with trusted third parties, such as analytics tools or payment processors, for the purpose of improving our services.
              </p>
            </motion.div>

            {/* Data Security */}
            <motion.div {...fadeIn} className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                5. Data Security
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                We take security seriously and implement industry-standard measures to protect your information. However, no system is 100% secure, and we cannot guarantee the absolute safety of your data.
              </p>
            </motion.div>

            {/* Retention of Data */}
            <motion.div {...fadeIn} className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                6. Retention of Data
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                We retain your personal data for as long as necessary to fulfill the purposes outlined in this Privacy Policy. You may request to delete or modify your data at any time.
              </p>
            </motion.div>

            {/* User Rights */}
            <motion.div {...fadeIn} className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                7. User Rights
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                You have the right to access, update, or delete your personal information. You may also opt out of marketing communications.
              </p>
            </motion.div>

            {/* Third-Party Links */}
            <motion.div {...fadeIn} className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                8. Third-Party Links
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Our website may contain links to third-party sites. We are not responsible for the privacy practices of these sites.
              </p>
            </motion.div>

            {/* Changes to This Privacy Policy */}
            <motion.div {...fadeIn} className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                9. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                We may update this Privacy Policy from time to time. The most recent version will be posted on this page with the date of the last update.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div {...fadeIn} className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                10. Contact Information
              </h2>
              <p className="mt-4 text-blue-700 dark:text-blue-200">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a 
                  href="mailto:info@webhostdevs.com" 
                  className="font-semibold text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100 transition-colors"
                >
                  info@webhostdevs.com
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;