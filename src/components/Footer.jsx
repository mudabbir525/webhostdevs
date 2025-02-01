import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const links = {
    services: [
      { name: 'Web Development', href: '/services#web-development' },
      { name: 'Mobile Apps', href: '/services#mobile-apps' },
      { name: 'UI/UX Design', href: '/services#ui-ux-design' },
      { name: 'SEO Services', href: '/services#seo' },
      { name: 'API Integration', href: '/services#api' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Projects', href: '/projects' },
      { name: 'Our Team', href: '/about#team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, label: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, label: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center text-center">
          {/* Company Info */}
          <div className="space-y-4 max-w-sm">
            <h2 className="text-2xl font-bold text-white mb-4">WebHostDevs</h2>
            <p className="text-gray-400">
              Your go-to web development solution for creating stunning and functional digital experiences.
            </p>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href="https://linkedin.com/company/webhostdevs"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div className="w-full">
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {links.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="w-full">
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {links.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center text-center">
            <div className="flex items-center justify-center">
              <Mail className="w-5 h-5 mr-2 text-blue-400" />
              <span>info@webhostdevs.com</span>
            </div>
            <div className="flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2 text-blue-400" />
              <span>+91 8328497607</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-5 h-5 mr-2 text-blue-400" />
              <span>Hyderabad</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} WebHostDevs. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              {links.legal.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;