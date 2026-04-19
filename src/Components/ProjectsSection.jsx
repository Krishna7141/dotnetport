import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Enterprise Loan Origination Platform',
      description: 'Built a scalable loan processing system using .NET 8, reducing approval time by 40%',
      tech: ['.NET 8', 'Azure', 'Angular', 'SQL Server'],
      stars: '95%',
      impact: 'Capital One',
    },
    {
      title: 'Healthcare FHIR Integration',
      description: 'Developed HIPAA-compliant healthcare data exchange platform with real-time processing',
      tech: ['.NET 6', 'FHIR', 'Kafka', 'AWS'],
      stars: '92%',
      impact: 'Careington',
    },
    {
      title: 'Banking Transaction System',
      description: 'High-volume financial transaction system handling millions of transactions daily',
      tech: ['.NET Core', 'Redis', 'PostgreSQL', 'Docker'],
      stars: '98%',
      impact: 'HSBC',
    },
  ];

  return (
    <section id="projects" className="max-w-[1280px] mx-auto px-6 md:px-10 py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='flex flex-col gap-3 mb-16 text-center'
      >
        <h2 className='text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
          Featured Projects
        </h2>
        <p className='text-xl text-gray-600'>Enterprise Solutions That Deliver Impact</p>
        <div className='w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full'></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-2xl shadow-lg p-6 border-2 border-transparent hover:border-blue-200 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                <FiGithub className="text-white" size={24} />
              </div>
              <div className="flex items-center gap-1 text-yellow-500">
                <FiStar size={16} />
                <span className="text-sm font-semibold">{project.stars}</span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  <strong className="text-gray-700">{project.impact}</strong>
                </span>
                <FiExternalLink className="text-blue-600" size={20} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
