import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Image, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ams from '../assets/ams.png'

const Confidential = () => {
    const navigate = useNavigate();

    const confidentialProjects = [
        {
            title: 'Admin Panel [Mahaspice]',
            category: 'dashboard',
            image: ams, // Replace with your image import
            description: 'The Mahaspice admin panel is a powerful dashboard for managing orders, menus, payments, and customer interactions efficiently in real time.',
            driveLink: 'https://drive.google.com/drive/folders/1lt40DC53sLX5OqdSyHrMpASxcocj8oYU?usp=sharing'
        }
    ];

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
                        Confidential Projects
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-blue-100"
                    >
                        These projects are under NDA and cannot be publicly shared
                    </motion.p>
                </div>
            </section>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Back Button */}
                <div className="mb-8">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate(-1)}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Go Back
                    </motion.button>
                </div>

                {/* Description */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
                    <div className="text-center">
                        <p className="text-gray-600 dark:text-gray-300 text-lg">
                            Due to confidentiality agreements, we cannot provide direct links to these projects.
                            However, we can share some screenshots to showcase our work while maintaining client privacy.
                        </p>
                    </div>
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {confidentialProjects.map((project) => (
                        <motion.div
                            key={project.title}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
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

                                <div className="flex justify-end">
                                    <a
                                        href={project.driveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-2"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        View in Drive
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

export default Confidential;