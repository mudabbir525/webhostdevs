import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Coffee } from 'lucide-react';

const AboutPage = () => {
  const team = [
    {
      name: 'John Smith',
      role: 'Founder & CEO',
      image: '/api/placeholder/400/400',
      bio: 'With over 10 years of experience in web development and digital strategy.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Lead Developer',
      image: '/api/placeholder/400/400',
      bio: 'Full-stack developer with expertise in React and Node.js.'
    },
    {
      name: 'Michael Chen',
      role: 'UI/UX Designer',
      image: '/api/placeholder/400/400',
      bio: 'Creative designer focused on creating intuitive user experiences.'
    },
    {
      name: 'Emily Brown',
      role: 'Project Manager',
      image: '/api/placeholder/400/400',
      bio: 'Certified project manager with a track record of successful deliveries.'
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
            We're a team of passionate developers and designers creating amazing digital experiences.
          </motion.p>
        </div>
      </motion.section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Values</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              The principles that guide our work and relationships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Users />, title: 'Client Focus', description: 'Your success is our priority' },
              { icon: <Target />, title: 'Excellence', description: 'Striving for perfection in every project' },
              { icon: <Award />, title: 'Innovation', description: 'Embracing new technologies and ideas' },
              { icon: <Coffee />, title: 'Collaboration', description: 'Working together to achieve more' }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-blue-400">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Team</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Meet the experts behind WebHostDevs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;