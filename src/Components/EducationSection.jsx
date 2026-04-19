import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiAward, FiTrendingUp } from 'react-icons/fi';
import { GoMortarBoard } from 'react-icons/go';

const EducationSection = () => {
  return (
    <section id='education' className="max-w-[1280px] mx-auto px-6 md:px-10 py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='flex flex-col gap-3 mb-16 text-center'
      >
        <h2 className='text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
          Education
        </h2>
        <p className='text-xl text-gray-600'>Academic Background & Qualifications</p>
        <div className='w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full'></div>
      </motion.div>

      <div className='flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='flex-1 w-full'
        >
          <motion.div 
            whileHover={{ y: -5 }}
            className='bg-white rounded-2xl shadow-xl p-8 border-2 border-transparent hover:border-blue-200 transition-all duration-300'
          >
            <div className='flex items-start gap-4 mb-6'>
              <div className='p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl'>
                <GoMortarBoard className='text-white' size={32}/>
              </div>
              <div className='flex-1'>
                <h3 className='text-2xl font-bold text-gray-800 mb-2'>
                  Bachelor of Technology
                </h3>
                <p className='text-lg text-blue-600 font-semibold mb-1'>
                  Computer Science and Engineering
                </p>
                <p className='text-gray-600 font-medium'>
                  Lovely Professional University
                </p>
              </div>
            </div>

            <div className='space-y-3'>
              <div className='flex items-center gap-3 text-gray-700'>
                <FiCalendar className='text-blue-600' size={20}/>
                <span className='font-medium'>2012 - 2016</span>
              </div>

              <div className='flex items-center gap-3'>
                <FiAward className='text-green-600' size={20}/>
                <span className='font-bold text-lg bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent'>
                  89.9% Aggregate
                </span>
              </div>

              <div className='flex items-center gap-3 text-gray-700'>
                <FiTrendingUp className='text-purple-600' size={20}/>
                <span className='font-medium'>First Class with Distinction</span>
              </div>
            </div>

            <div className='mt-6 pt-6 border-t border-gray-200'>
              <p className='text-sm text-gray-600 leading-relaxed'>
                <strong className='text-gray-800'>Key Focus Areas:</strong> Data Structures, 
                Algorithms, Database Management, Software Engineering, Web Technologies, 
                and Cloud Computing
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='hidden md:block'
        >
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl opacity-30'></div>
              <GoMortarBoard className='relative text-blue-600' size={220}/>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Certifications Section (Optional) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className='mt-16 max-w-4xl mx-auto'
      >
        <h3 className='text-2xl font-bold text-center text-gray-800 mb-8'>
          Continuous Learning & Certifications
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {[
            'Microsoft Azure Certified',
            'AWS Solutions Architect',
            '.NET Core Specialist'
          ].map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className='text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200 shadow-sm hover:shadow-md transition-all duration-300'
            >
              <FiAward className='mx-auto text-blue-600 mb-2' size={28}/>
              <p className='font-semibold text-gray-800'>{cert}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;