import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(10);

    useEffect(() => {
        const redirectTimer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(redirectTimer);
                    navigate('/');
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(redirectTimer);
    }, [navigate]);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
            <div className="max-w-2xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    {/* 404 Text */}
                    <motion.h1
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 100 }}
                        className="text-9xl font-bold text-blue-600 dark:text-blue-500 mb-8"
                    >
                        404
                    </motion.h1>

                    {/* WebHostDevs Logo/Text */}
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        WebHostDevs
                    </h2>

                    {/* Error Message */}
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                        Oops! The page you're looking for doesn't exist.
                    </p>

                    {/* Redirect Message */}
                    <p className="text-gray-500 dark:text-gray-400 mb-8">
                        Redirecting to homepage in <span className="font-bold text-blue-600 dark:text-blue-500">{countdown}</span> seconds...
                    </p>

                    {/* Home Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/')}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                        <Home className="w-5 h-5" />
                        Go to Homepage
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;