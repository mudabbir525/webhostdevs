import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Contact = () => {
  const location = useLocation();
  
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [state, setState] = useState({ succeeded: false, submitting: false, error: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ ...state, submitting: true });

    try {
      const response = await fetch('https://formspree.io/f/myzkjboo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setState({ succeeded: true, submitting: false, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setState({ succeeded: false, submitting: false, error: error.message });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              Thank You for Contacting Us!
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We've received your message and will get back to you soon.
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-blue-600 dark:bg-blue-800 py-20 px-4 text-center">
        <motion.h1 className="text-4xl font-bold text-white">Contact Us</motion.h1>
        <motion.p className="text-xl text-blue-100">Get in touch with our team</motion.p>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Contact Information</h2>
          <div className="space-y-6">
            {[{ icon: <Phone />, title: 'Phone', details: '+91 8328497607', link: 'tel:+918328497607' },
              { icon: <Mail />, title: 'Email', details: 'info@webhostdevs.com', link: 'mailto:info@webhostdevs.com' },
              { icon: <MapPin />, title: 'Office', details: 'Hyderabad', link: '#' }].map((info, index) => (
              <a key={index} href={info.link} className="flex items-start space-x-4 text-gray-600 hover:text-blue-600">
                <div className="text-blue-600">{info.icon}</div>
                <div>
                  <h3 className="font-medium text-gray-900">{info.title}</h3>
                  <p>{info.details}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-2 border rounded-lg"></textarea>
            </div>
            <motion.button type="submit" disabled={state.submitting} className="w-full py-3 px-6 text-white font-medium bg-blue-600 rounded-lg hover:bg-blue-700">
              {state.submitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
