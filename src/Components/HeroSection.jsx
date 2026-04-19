import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiMail, FiDownload, FiArrowRight, FiCode, FiZap } from 'react-icons/fi';
import { RiTwitterXLine, RiRocketLine, RiMoonLine } from 'react-icons/ri';
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
      bgColor: 'hover:bg-blue-50',
      label: 'LinkedIn'
    },
    { 
      icon: FiMail, 
      url: 'mailto:kvchelluboina@gmail.com', 
      color: 'hover:text-red-600',
      bgColor: 'hover:bg-red-50',
      label: 'Email'
    },
    { 
      icon: RiTwitterXLine, 
      url: 'https://x.com/krish127228?s=21', 
      color: 'hover:text-gray-900',
      bgColor: 'hover:bg-gray-50',
      label: 'Twitter'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.85, rotateZ: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateZ: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      {/* Desktop Version - Ultra Modern */}
      <section 
        id='home' 
        className='hidden md:flex min-h-screen gap-12 max-w-[1280px] pt-24 pb-16 mx-auto px-20 justify-between items-center relative overflow-hidden'
      >
        {/* Animated Background Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className='flex flex-row w-[57%] gap-12 items-center relative z-10'
        >
          {/* Social Links - Modern Pills */}
          <motion.div 
            variants={itemVariants}
            className='flex flex-col gap-4 justify-center'
          >
            {socialLinks.map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.15, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to={social.url} 
                  target='_blank' 
                  aria-label={social.label}
                  className={`flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-lg transition-all duration-300 ${social.bgColor} border border-gray-100`}
                >
                  <social.icon className={`text-blue-600 transition-colors duration-300 ${social.color}`} size={22}/>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content */}
          <div className='flex flex-col gap-6 w-full'>
            {/* Badge */}
            <motion.div 
              variants={itemVariants}
              className='inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full w-fit border border-blue-100'
            >
              <span className='relative flex h-3 w-3'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-3 w-3 bg-green-500'></span>
              </span>
              <span className='text-sm font-semibold text-gray-700'>Available for opportunities</span>
            </motion.div>

            {/* Title with Modern Typography */}
            <motion.div variants={itemVariants}>
              <p className='text-6xl font-poppins font-black leading-tight'>
                <span className='text-gray-800'>Hi, I'm </span>
                <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]'>
                  Krishna Chelluboina
                </span>
              </p>
            </motion.div>

            {/* Animated Role */}
            <motion.div variants={itemVariants} className='flex items-center gap-3'>
              <FiCode className='text-blue-600' size={28} />
              <TypeAnimation
                sequence={[
                  'Senior Full-Stack .NET Developer', 2000,
                  '.NET Cloud & Microservices Engineer', 2000,
                  'Solutions Architect', 2000,
                  'Tech Innovator', 2000,
                ]}
                wrapper='span'
                speed={50}
                className='text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'
                repeat={Infinity}
              />
            </motion.div>

            {/* Description with Modern Styling */}
            <motion.p 
              variants={itemVariants}
              className='text-lg text-gray-600 leading-relaxed max-w-xl'
            >
              A passionate Full Stack Developer with <span className='font-bold text-blue-600'>10+ years</span> of experience 
              crafting elegant solutions. I transform complex challenges into scalable, 
              high-performance applications with cutting-edge technologies.
            </motion.p>

            {/* Cool Quote Box */}
            <motion.div 
              variants={itemVariants}
              className='relative p-5 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-blue-200/50 backdrop-blur-sm'
            >
              <div className='absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full'></div>
              <p className='text-base text-gray-700 font-medium italic pl-3 flex items-center gap-2'>
                "Dark mode isn't a feature for me — it's a lifestyle."
                <RiMoonLine className='text-blue-600' size={20} />
              </p>
            </motion.div>

            {/* CTA Buttons - Modern Glass Design */}
            <motion.div 
              variants={itemVariants}
              className='flex gap-4 mt-4'
            >
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative">Let's Connect</span>
                <FiArrowRight className="relative group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a 
                href="#work"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                View My Work
                <FiDownload className="text-blue-600" size={18} />
              </motion.a>
            </motion.div>

            {/* Tech Stats */}
            <motion.div 
              variants={itemVariants}
              className='flex gap-8 mt-4'
            >
              <div className='text-center'>
                <p className='text-3xl font-bold text-blue-600'>10+</p>
                <p className='text-sm text-gray-600 font-medium'>Years Exp</p>
              </div>
              <div className='w-px bg-gray-300'></div>
              <div className='text-center'>
                <p className='text-3xl font-bold text-purple-600'>50+</p>
                <p className='text-sm text-gray-600 font-medium'>Projects</p>
              </div>
              <div className='w-px bg-gray-300'></div>
              <div className='text-center'>
                <p className='text-3xl font-bold text-pink-600'>100%</p>
                <p className='text-sm text-gray-600 font-medium'>Dedication</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Profile Image with Modern Card Design */}
        <motion.div 
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className='relative w-[43%] z-10'
        >
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className='relative'
          >
            {/* Glowing Ring */}
            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl opacity-30 animate-pulse'></div>
            
            {/* Image Container with Modern Border */}
            <div className='relative rounded-full p-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'>
              <div className='relative rounded-full p-1 bg-white'>
                <motion.img 
                  src={KrishImg} 
                  className='w-full h-auto object-contain rounded-full'
                  alt='Krishna Chelluboina'
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
            
            {/* Signature with Modern Styling - Transparent/Gradient Background */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 1 }}
              className='absolute -bottom-8 left-1/2 -translate-x-1/2 w-full flex justify-center'
            >
              <div className='relative px-8 py-3 bg-gradient-to-br from-blue-50/80 via-purple-50/80 to-pink-50/80 backdrop-blur-md rounded-2xl shadow-2xl border border-blue-200/50'>
                <img 
                  src={signatureImg} 
                  alt="Krishna Chelluboina Signature"
                  className="h-16 w-auto" 
                />
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className='absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl'
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <FiZap className='text-white' size={32} />
            </motion.div>
            
            <motion.div
              className='absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-xl'
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <RiRocketLine className='text-white' size={28} />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Mobile Version - Ultra Modern */}
      <section 
        id='home-mobile' 
        className='flex flex-col md:hidden max-w-[1280px] pt-20 pb-12 mx-auto relative overflow-hidden'
      >
        {/* Animated Background */}
        <div className="absolute top-10 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='flex flex-col items-center gap-8 px-6 relative z-10'
        >
          {/* Profile Image - Mobile Modern */}
          <div className='relative w-full max-w-[280px]'>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              {/* Glow Effect */}
              <div className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-30'></div>
              
              {/* Image with Gradient Border */}
              <div className='relative rounded-full p-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'>
                <div className='rounded-full p-1 bg-white'>
                  <img 
                    src={KrishImg} 
                    className='w-full h-auto object-contain rounded-full'
                    alt='Krishna Chelluboina'
                  />
                </div>
              </div>
              
              {/* Badge */}
              <div className='absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg'>
                <FiZap className='text-white' size={28} />
              </div>
            </motion.div>
            
            {/* Signature - Mobile - Transparent/Gradient Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className='mt-6 flex justify-center'
            >
              <div className='px-6 py-2 bg-gradient-to-br from-blue-50/80 via-purple-50/80 to-pink-50/80 backdrop-blur-md rounded-xl shadow-xl border border-blue-200/50'>
                <img 
                  src={signatureImg} 
                  alt="Krishna Chelluboina Signature"
                  className="h-12 w-auto" 
                />
              </div>
            </motion.div>
          </div>

          {/* Content - Mobile */}
          <div className='flex flex-col gap-5 text-center'>
            {/* Badge */}
            <div className='inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full mx-auto border border-blue-100'>
              <span className='relative flex h-2 w-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500'></span>
              </span>
              <span className='text-xs font-semibold text-gray-700'>Open to opportunities</span>
            </div>

            <h1 className='text-4xl font-black leading-tight'>
              <span className='text-gray-800'>Hi, I'm </span>
              <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'>
                Krishna Chelluboina
              </span>
            </h1>
            
            <div className='flex items-center justify-center gap-2'>
              <FiCode className='text-blue-600' size={24} />
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer', 2000,
                  '.NET Expert', 2000,
                  'Cloud Architect', 2000,
                  'Tech Innovator', 2000,
                ]}
                wrapper='span'
                speed={50}
                className='text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
                repeat={Infinity}
              />
            </div>

            <p className='text-base text-gray-600 leading-relaxed'>
              <span className='font-bold text-blue-600'>10+ years</span> of experience crafting 
              elegant, scalable solutions with cutting-edge technologies.
            </p>

            {/* Quote Box - Mobile */}
            <div className='p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-200/50'>
              <p className='text-sm text-gray-700 font-medium italic flex items-center justify-center gap-2'>
                "Dark mode isn't a feature — it's a lifestyle."
                <RiMoonLine className='text-blue-600' size={18} />
              </p>
            </div>

            {/* Stats - Mobile */}
            <div className='flex gap-6 justify-center mt-2'>
              <div>
                <p className='text-2xl font-bold text-blue-600'>10+</p>
                <p className='text-xs text-gray-600'>Years</p>
              </div>
              <div className='w-px bg-gray-300'></div>
              <div>
                <p className='text-2xl font-bold text-purple-600'>50+</p>
                <p className='text-xs text-gray-600'>Projects</p>
              </div>
              <div className='w-px bg-gray-300'></div>
              <div>
                <p className='text-2xl font-bold text-pink-600'>100%</p>
                <p className='text-xs text-gray-600'>Dedicated</p>
              </div>
            </div>

            {/* Social Links - Mobile Pills */}
            <div className='flex gap-4 justify-center mt-4'>
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link 
                    to={social.url} 
                    target='_blank' 
                    aria-label={social.label}
                    className={`flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-lg ${social.bgColor} border border-gray-100`}
                  >
                    <social.icon className={`text-blue-600 ${social.color}`} size={20}/>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons - Mobile */}
            <div className='flex flex-col gap-3 mt-4'>
              <a 
                href="#contact" 
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-xl flex items-center justify-center gap-2"
              >
                Let's Connect
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#work" 
                className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2"
              >
                View My Work
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
