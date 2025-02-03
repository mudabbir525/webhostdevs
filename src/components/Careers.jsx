import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from '@formspree/react';
import { Send, Users, Code, Bookmark } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Careers = () => {
    const location = useLocation();
    const [state, handleSubmit] = useForm("myzkjnay");

    // Scroll to top on location change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location]);

    // Scroll to top when form submission succeeds
    useEffect(() => {
        if (state.succeeded) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [state.succeeded]);

    const benefits = [
        {
            icon: <Code className="w-6 h-6" />,
            title: "Latest Technologies",
            description: "Work with cutting-edge tech stack and modern development tools"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Collaborative Environment",
            description: "Join a team of passionate developers and designers"
        },
        {
            icon: <Bookmark className="w-6 h-6" />,
            title: "Growth Opportunities",
            description: "Regular learning sessions and career advancement paths"
        }
    ];

    if (state.succeeded) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
                <div className="max-w-7xl mx-auto px-4 py-32 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Thank You for Your Application!
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            We've received your application and will get back to you soon.
                        </p>
                    </motion.div>
                </div>
            </div>
        );
    }

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
                        Join Our Team
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-blue-100"
                    >
                        Build the future of web development with us
                    </motion.p>
                </div>
            </section>

            {/* About Section */}
            <section className="max-w-7xl mx-auto px-4 py-16">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        About WebHostDevs
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                        WebHostDevs is a tech-driven startup focused on delivering innovative web and mobile solutions. 
                        We specialize in full-stack web development, UI/UX design, and app development for iOS and Android. 
                        Our mission is to help businesses of all sizes build a strong online presence through high-quality, 
                        tailored digital experiences. With a skilled team and a commitment to excellence, we're dedicated 
                        to turning ideas into impactful solutions that drive growth and engagement.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                        At WebHostDevs, we pride ourselves on building long-term partnerships with our clients. Our approach 
                        is centered around understanding each client's unique needs and delivering bespoke solutions that align 
                        with their goals. Whether it's creating a brand-new website, developing a mobile application, or improving 
                        existing systems, we ensure that our clients get the best possible results.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                        We believe in the power of collaboration, continuous learning, and staying ahead of the curve. 
                        Our team is always experimenting with new technologies and development practices, ensuring we are 
                        at the forefront of the ever-changing tech industry. Join us and be part of a team that is passionate 
                        about innovation, quality, and making a real difference in the world of web development.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
                        >
                            <div className="text-blue-600 dark:text-blue-400 mb-4">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Application Form */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                        Apply Now
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Full Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                required
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                required
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Cover Letter
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                            />
                        </div>

                        <div>
                            <label htmlFor="resume" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Resume / Portfolio (URL)
                            </label>
                            <input
                                id="resume"
                                type="url"
                                name="resume"
                                placeholder="https://your-link.com"
                                required
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                            />
                        </div>

                        <div>
                            <label htmlFor="whyHire" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Why Should We Hire You?
                            </label>
                            <textarea
                                id="whyHire"
                                name="whyHire"
                                rows={4}
                                required
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                            />
                        </div>

                        <motion.button
                            type="submit"
                            disabled={state.submitting}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50"
                        >
                            <Send className="w-5 h-5" />
                            {state.submitting ? "Submitting..." : "Submit Application"}
                        </motion.button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Careers;