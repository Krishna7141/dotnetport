import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navLinks = [
    { id: 1, name: 'Home', path: '#home' },
    { id: 2, name: 'Skills', path: '#skills' },
    { id: 3, name: 'Work', path: '#work' },
    { id: 4, name: 'Education', path: '#education' },
    { id: 5, name: 'About', path: '#about' },
    { id: 6, name: 'Contact', path: '#contact' }
  ];

  const [activeLink, setActiveLink] = useState('');

  const scrollActive = () => {
    const scrollY = window.scrollY;
    
    // Update scrolled state for navbar background
    setScrolled(scrollY > 50);
    
    navLinks.forEach((current) => {
      const section = document.querySelector(current.path);
      if (section) {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveLink(current.path);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollActive);
    return () => {
      window.removeEventListener('scroll', scrollActive);
    };
  }, []);

  const handleNavClick = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-lg' 
            : 'bg-white shadow-md'
        }`}
      >
        <div className='max-w-[1280px] mx-auto hidden md:flex flex-row px-10 py-3 items-center justify-between'>
          <Link to={'https://www.linkedin.com/in/krishna-chelluboina/'} target='_blank'>
            <motion.img 
              whileHover={{ scale: 1.05 }}
              src={Logo} 
              className='h-14' 
              alt='Krishna Chelluboina Logo' 
            />
          </Link>
          
          <div className='flex gap-1'>
            {navLinks.map((item) => (
              <motion.div 
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href={item.path}
                  className={`px-5 py-2 rounded-lg text-base font-medium transition-all duration-300 relative group ${
                    activeLink === item.path 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-300 ${
                    activeLink === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className='flex md:hidden justify-between items-center px-5 py-3'>
          <img src={Logo} className='h-14' alt='Logo' />
          <button 
            onClick={() => setIsNavOpen(!isNavOpen)}
            className='text-gray-700 focus:outline-none'
            aria-label='Toggle Navigation'
          >
            {isNavOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className='fixed top-[70px] right-0 h-screen w-full bg-white z-40 md:hidden'
          >
            <div className='flex flex-col mt-8 mx-auto items-center gap-4 px-6'>
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className='w-full'
                >
                  <a
                    href={item.path}
                    onClick={handleNavClick}
                    className={`block w-full text-center py-4 px-6 rounded-xl text-lg font-medium transition-all duration-300 ${
                      activeLink === item.path
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;