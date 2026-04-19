import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiMail, FiDownload } from 'react-icons/fi';
import { RiTwitterXLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import KrishImg from '../assets/picture1.png';
import signatureImg from '../assets/signature1.png';

const HeroSection = () => {
  const socialLinks = [
    { 
      icon: FiLinkedin, 
      url: 'https://www.linkedin.com/in/krishna-chelluboina/', 
      color: 'hover:text-blue-700',
      label: 'LinkedIn'
    },
    { 
      icon: FiMail, 
      url: 'mailto:kvchelluboina@gmail.com', 
      color: 'hover:text-red-600',
      label: 'Email'
    },
    { 
      icon: RiTwitterXLine, 
      url: 'https://x.com/krish127228?s=21', 
      color: 'hover:text-gray-900',
      label: 'Twitter'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <>
      {/* Desktop Version */}
      <section 
        id='home' 
        className='hidden md:flex min-h-screen gap-12 max-w-[1280px] pt-24 pb-16 mx-auto px-20 justify-between items-center'
      >
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className='flex flex-row w-[57%] gap-20 items-center'
        >
          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className='flex flex-col gap-6 justify-center'
          >
            {socialLinks.map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to={social.url} target='_blank' aria-label={social.label}>
                  <social.icon className={`text-blue-600 transition-colors duration-300 ${social.color}`} size={32}/>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content */}
          <div className='flex flex-col gap-7 w-full'>
            <motion.p 
              variants={itemVariants}
              className='text-5xl font-poppins font-[900] text-blue-700'
            >
              <span className='font-semibold text-gray-800'>Hi, I'm </span>
              Krishna Chelluboina
            </motion.p>

            <motion.div variants={itemVariants}>
              <TypeAnimation
                sequence={[
                  'Senior Full-Stack .NET Developer', 2000,
                  '.NET Cloud & Microservices Engineer', 2000,
                  'Solutions Architect', 2000,
                  'Problem Solver', 2000,
                ]}
                wrapper='span'
                speed={50}
                className='text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
                repeat={Infinity}
              />
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className='text-lg text-gray-700 leading-relaxed'
            >
              A Senior Full Stack .NET Developer with <strong>10+ years</strong> of experience. 
              I love turning complex problems into clean, scalable solutions and believe great code 
              is as much about <strong className='text-blue-600'>people</strong> as it is about <strong className='text-blue-600'>technology</strong>.
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className='text-base text-blue-600 font-medium italic'
            >
              Dark mode is not a feature for me it is a lifestyle
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className='flex gap-4 mt-2'
            >
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-8 rounded-lg font-semibold shadow-lg transition-all duration-300"
              >
                Contact Me
              </motion.a>
              <motion.a 
                href="#work"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 py-3 px-8 rounded-lg font-semibold transition-all duration-300"
              >
                View Work
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Profile Image with Signature - Desktop */}
        <motion.div 
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className='flex flex-col items-center justify-start w-[43%] gap-0'
        >
          {/* Picture Container */}
          <div className='relative w-full max-w-[500px]'>
            <motion.img 
              src={KrishImg} 
              className='w-full h-auto object-contain drop-shadow-2xl'
              alt='Krishna Chelluboina'
              whileHover={{ scale: 1.02 }}
            />
          </div>
          
          {/* Signature directly below picture - no gap */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className='w-full max-w-[500px] flex justify-center -mt-4'
          >
            <img 
              src={signatureImg} 
              alt="Krishna Chelluboina Signature"
              className="w-64 h-auto opacity-90 transition-opacity duration-700 hover:opacity-100" 
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Mobile Version */}
      <section 
        id='home-mobile' 
        className='flex flex-col md:hidden max-w-[1280px] pt-24 pb-12 mx-auto'
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='flex flex-col items-center gap-8 px-6'
        >
          {/* Profile Image Mobile */}
          <div className='flex flex-col items-center w-full gap-0'>
            <div className='relative w-full max-w-[320px]'>
              <img 
                src={KrishImg} 
                className='w-full h-auto object-contain drop-shadow-2xl'
                alt='Krishna Chelluboina'
              />
            </div>
            
            {/* Signature below profile picture on mobile - no gap */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className='w-full max-w-[320px] flex justify-center -mt-3'
            >
              <img 
                src={signatureImg} 
                alt="Krishna Chelluboina Signature"
                className="w-48 h-auto opacity-90" 
              />
            </motion.div>
          </div>

          {/* Content Mobile */}
          <div className='flex flex-col gap-6 text-center'>
            <p className='text-4xl font-poppins font-[900] text-blue-700'>
              <span className='font-semibold text-gray-800'>Hi, I'm </span>
              Krishna Chelluboina
            </p>
            
            <TypeAnimation
              sequence={[
                'Senior Full-Stack .NET Developer', 2000,
                '.NET Cloud & Microservices Engineer', 2000,
                'Solutions Architect', 2000,
                'Problem Solver', 2000,
              ]}
              wrapper='span'
              speed={50}
              className='text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
              repeat={Infinity}
            />

            <p className='text-base text-gray-700 leading-relaxed'>
              A Senior Full Stack .NET Developer with <strong>10+ years</strong> of experience 
              turning complex problems into scalable solutions.
            </p>

            <p className='text-sm text-blue-600 font-medium italic'>
              Dark mode is not a feature for me it is a lifestyle
            </p>

            {/* Social Links Mobile */}
            <div className='flex gap-6 justify-center mt-4'>
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link to={social.url} target='_blank' aria-label={social.label}>
                    <social.icon className={`text-blue-600 ${social.color}`} size={32}/>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className='flex flex-col gap-3 mt-4'>
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-8 rounded-lg font-medium shadow-lg"
              >
                Contact Me
              </a>
              <a 
                href="#work" 
                className="border-2 border-blue-600 text-blue-600 py-3 px-8 rounded-lg font-medium"
              >
                View Work
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
