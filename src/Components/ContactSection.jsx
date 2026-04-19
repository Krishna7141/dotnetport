import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TbBrandTelegram } from 'react-icons/tb';
import { FiMail, FiUser, FiMessageSquare, FiSend } from 'react-icons/fi';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    setIsSubmitting(true);
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id='contact' className='max-w-[1280px] mx-auto px-6 md:px-10 py-20'>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='flex flex-col gap-3 mb-16 text-center'
      >
        <h2 className='text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
          Get In Touch
        </h2>
        <p className='text-xl text-gray-600'>Let's Build Something Amazing Together</p>
        <div className='w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full'></div>
      </motion.div>

      <div className='grid md:grid-cols-2 gap-12 max-w-6xl mx-auto'>
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='space-y-8'
        >
          <div>
            <h3 className='text-3xl font-bold text-gray-800 mb-4'>Let's Connect!</h3>
            <p className='text-lg text-gray-600 leading-relaxed mb-6'>
              I'm always interested in hearing about new projects, opportunities, or just having a chat about technology. 
              Feel free to reach out!
            </p>
          </div>

          <div className='space-y-6'>
            <motion.div 
              whileHover={{ x: 10 }}
              className='flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200'
            >
              <div className='p-3 bg-blue-600 rounded-lg'>
                <FiMail className='text-white' size={24} />
              </div>
              <div>
                <p className='text-sm text-gray-600 font-medium'>Email</p>
                <a href='mailto:kvchelluboina@gmail.com' className='text-blue-600 font-semibold hover:underline'>
                  kvchelluboina@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ x: 10 }}
              className='flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200'
            >
              <div className='p-3 bg-purple-600 rounded-lg'>
                <FiUser className='text-white' size={24} />
              </div>
              <div>
                <p className='text-sm text-gray-600 font-medium'>LinkedIn</p>
                <a 
                  href='https://www.linkedin.com/in/krishna-chelluboina/' 
                  target='_blank' 
                  rel='noopener noreferrer'
                  className='text-purple-600 font-semibold hover:underline'
                >
                  Krishna Chelluboina
                </a>
              </div>
            </motion.div>
          </div>

          <div className='bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white'>
            <h4 className='text-2xl font-bold mb-4'>Availability</h4>
            <p className='text-blue-100 leading-relaxed'>
              Currently open to <strong>contract opportunities</strong> and interesting projects. 
              Typical response time: <strong>within 24 hours</strong>.
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form 
            className='bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-100'
            action='https://formsubmit.co/kvchelluboina@gmail.com' 
            target='_blank' 
            method='POST'
            onSubmit={handleSubmit}
          >
            <div className='space-y-6'>
              {/* Name & Email Row */}
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Full Name <span className='text-red-500'>*</span>
                  </label>
                  <div className='relative'>
                    <FiUser className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400' size={20} />
                    <input
                      type='text'
                      name='name'
                      required
                      placeholder='John Doe'
                      className='w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-300'
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Email Address <span className='text-red-500'>*</span>
                  </label>
                  <div className='relative'>
                    <FiMail className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400' size={20} />
                    <input
                      type='email'
                      name='email'
                      required
                      placeholder='john@example.com'
                      className='w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-300'
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  Subject <span className='text-gray-400 text-xs'>(Optional)</span>
                </label>
                <input
                  type='text'
                  name='subject'
                  placeholder='Project Inquiry / Collaboration'
                  className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-300'
                  value={formState.subject}
                  onChange={(e) => setFormState({...formState, subject: e.target.value})}
                />
              </div>

              {/* Message */}
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  Message <span className='text-red-500'>*</span>
                </label>
                <div className='relative'>
                  <FiMessageSquare className='absolute left-4 top-4 text-gray-400' size={20} />
                  <textarea
                    name='message'
                    required
                    rows='5'
                    placeholder='Hey Krishna, I am interested in discussing a project...'
                    className='w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none'
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type='submit'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white'></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend size={20} />
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;