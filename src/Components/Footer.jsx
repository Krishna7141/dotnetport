import React from 'react';
import { motion } from 'framer-motion';
import { AiFillLinkedin, AiOutlineGoogle, AiFillGithub } from 'react-icons/ai';
import { FiHeart, FiCode } from 'react-icons/fi';
import { RiTwitterXLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: AiFillLinkedin, 
      url: 'https://www.linkedin.com/in/krishna-chelluboina/', 
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    { 
      icon: AiOutlineGoogle, 
      url: 'mailto:kvchelluboina@gmail.com', 
      label: 'Email',
      color: 'hover:text-red-400'
    },
    { 
      icon: RiTwitterXLine, 
      url: 'https://x.com/krish127228?s=21', 
      label: 'Twitter',
      color: 'hover:text-gray-300'
    },
  ];

  const quickLinks = [
    { name: 'Home', path: '#home' },
    { name: 'Skills', path: '#skills' },
    { name: 'Work', path: '#work' },
    { name: 'Education', path: '#education' },
    { name: 'About', path: '#about' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <footer className='bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white'>
      <div className='max-w-[1280px] mx-auto px-6 md:px-10 py-16'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-12'>
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className='text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
              Krishna Chelluboina
            </h3>
            <p className='text-gray-300 leading-relaxed mb-4'>
              Senior Full Stack .NET Developer passionate about building scalable, 
              cloud-native solutions that make a difference.
            </p>
            <div className='flex items-center gap-2 text-gray-300'>
              <FiCode className='text-blue-400' size={20} />
              <span className='text-sm'>Building the future, one line at a time</span>
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className='text-xl font-bold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.path}
                    className='text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group'
                  >
                    <span className='w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300'></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className='text-xl font-bold mb-4'>Let's Connect</h3>
            <p className='text-gray-300 mb-6'>
              Follow me on social media or drop me a message!
            </p>
            <div className='flex gap-4'>
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link 
                    to={social.url} 
                    target='_blank' 
                    aria-label={social.label}
                    className={`text-gray-300 ${social.color} transition-all duration-300`}
                  >
                    <social.icon size={36} />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.a
              href='#contact'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='inline-block mt-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300'
            >
              Start a Project
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className='border-t border-gray-700 mb-8'></div>

        {/* Bottom Footer */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-gray-400 text-sm flex items-center gap-2'
          >
            <span>© {currentYear} Krishna Chelluboina.</span>
            <span className='hidden md:inline'>•</span>
            <span className='flex items-center gap-1'>
              Built with <FiHeart className='text-red-500' size={16} /> and React
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='text-gray-400 text-sm'
          >
            <span>Designed & Developed with passion</span>
          </motion.div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className='fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50'
          aria-label='Scroll to top'
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
