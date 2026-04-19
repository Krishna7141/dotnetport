import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import imgs from '../utils/skillImgs';

function extractLanguageName(path) {
  const parts = path.split('/');  
  const fileName = parts[parts.length - 1];
  const languageName = fileName.split('-')[0].split('.')[0]; 
  return languageName;
}

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id='skills' className='max-w-[1280px] min-h-[700px] mx-auto py-20 px-6'>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='flex flex-col gap-3 mb-16'
      >
        <h2 className='text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
          Skills & Expertise
        </h2>
        <p className='text-xl text-center text-gray-600'>Tools & Technologies I Work With</p>
        <div className='w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full'></div>
      </motion.div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className='flex flex-row mx-auto max-w-[1280px] px-4 md:px-16 items-center justify-center flex-wrap gap-8 md:gap-10'
      >
        {imgs.map((icon, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.15, 
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.3 }
            }}
            className='flex flex-col items-center group cursor-pointer'
          >
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300'></div>
              <div className='relative bg-white p-5 rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-blue-200'>
                <img 
                  className='h-[90px] md:h-[100px] object-contain' 
                  src={icon}
                  alt={extractLanguageName(icon)}
                  loading='lazy'
                />
              </div>
            </div>
            <p className='text-center pt-3 text-[15px] font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300'>
              {extractLanguageName(icon)}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Optional: Skill Categories */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className='mt-16 text-center'
      >
        <div className='flex flex-wrap justify-center gap-4 max-w-4xl mx-auto'>
          {['Backend', 'Frontend', 'Cloud & DevOps', 'Databases', 'Tools'].map((category, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className='px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-full text-blue-700 font-medium shadow-sm hover:shadow-md transition-all duration-300'
            >
              {category}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;