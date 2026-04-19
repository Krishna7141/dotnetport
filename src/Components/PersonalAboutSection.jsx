import React from "react";
import { motion } from 'framer-motion';
import { FiCode, FiHeart, FiUsers, FiZap } from 'react-icons/fi';

const PersonalAboutSection = () => {
  const values = [
    {
      icon: FiCode,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable solutions that stand the test of time'
    },
    {
      icon: FiUsers,
      title: 'Collaboration',
      description: 'Building great software through teamwork and open communication'
    },
    {
      icon: FiZap,
      title: 'Innovation',
      description: 'Staying curious and exploring new technologies and patterns'
    },
    {
      icon: FiHeart,
      title: 'Impact',
      description: 'Creating products that improve lives and solve real problems'
    }
  ];

  return (
    <section id="about" className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 bg-gradient-to-br from-blue-50/50 to-purple-50/50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='flex flex-col gap-3 mb-12 text-center'
      >
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className='text-xl text-gray-600'>Beyond the Code</p>
        <div className='w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full'></div>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12"
        >
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
            Hi, I'm <strong className="text-blue-600">Krishna</strong>. I'm a Senior Full Stack .NET Developer (Contractor) 
            with over ten years of hands-on experience—but what really defines me isn't just the 
            technology, it's how I approach people and problems.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
            I love turning complex requirements into clean, scalable solutions. Whether I'm 
            architecting a cloud-native system with <strong className="text-blue-600">.NET 8, ASP.NET Core, Angular</strong> or <strong className="text-blue-600">Blazor</strong>, or 
            helping a teammate get unstuck, I find joy in breaking big challenges into 
            reliable, elegant results.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            I thrive as a contractor because it keeps me learning and delivering impact quickly, 
            while working with diverse teams across <strong className="text-purple-600">banking, finance, and healthcare</strong> domains. 
            For me, building software is as much about <strong className="text-blue-600">people and trust</strong> as it is about code.
          </p>
        </motion.div>

        {/* Core Values Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-200"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                  <value.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Beyond Development</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl mb-2">🌙</div>
              <p className="font-medium">Dark Mode Enthusiast</p>
              <p className="text-sm text-blue-100 mt-1">It's a lifestyle, not a feature</p>
            </div>
            <div>
              <div className="text-4xl mb-2">✈️</div>
              <p className="font-medium">Travel Lover</p>
              <p className="text-sm text-blue-100 mt-1">Exploring new places & cultures</p>
            </div>
            <div>
              <div className="text-4xl mb-2">📚</div>
              <p className="font-medium">Continuous Learner</p>
              <p className="text-sm text-blue-100 mt-1">Always exploring new tech</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalAboutSection;
