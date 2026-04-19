// WorkSection.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiBriefcase, FiTrendingUp } from 'react-icons/fi';
import capitaloneImg from '../assets/capitalone.jpg';
import careingtonImg from '../assets/Careington.jpg';
import corevitasImg from '../assets/corevitas.jpg';
import AMFAMImg from '../assets/AMFAM.png';
import HSBCImg from '../assets/HSBC.png';

const WorkSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: 'Capital One',
      role: 'Senior Full Stack .NET Developer',
      period: 'June 2023 – Present',
      image: capitaloneImg,
      description:
        'Architected and delivered a next-generation loan origination and servicing platform using .NET 8, ASP.NET Core Web API, and C# 11, automating underwriting and reducing loan approval time by 40%.',
      skills: ['.NET 8', 'Azure', 'Microservices', 'Angular'],
      current: true,
    },
    {
      company: 'Careington',
      role: 'Full Stack .NET Developer',
      period: 'Nov 2021 – May 2023',
      image: careingtonImg,
      description:
        'Designed and developed HIPAA-compliant healthcare applications with .NET 6 and Azure/AWS, built FHIR APIs, and implemented event-driven architecture with Kafka and RabbitMQ.',
      skills: ['.NET 6', 'FHIR', 'Kafka', 'AWS'],
    },
    {
      company: 'Corevitas',
      role: 'Full Stack .NET Developer',
      period: 'May 2020 – Oct 2021',
      image: corevitasImg,
      description:
        'Developed healthcare applications using .NET Core and Angular; modernized legacy systems with microservices architecture; implemented secure FHIR/HL7 integrations.',
      skills: ['.NET Core', 'Angular', 'HL7', 'SQL Server'],
    },
    {
      company: 'American Family Insurance',
      role: 'Full Stack .NET Developer',
      period: 'Feb 2018 – Apr 2020',
      image: AMFAMImg,
      description:
        'Built insurance policy management modules using ASP.NET MVC, C#, and SQL Server; enhanced claims processing workflows and ensured compliance with SOX and PCI-DSS standards.',
      skills: ['ASP.NET MVC', 'C#', 'SQL Server', 'SOX'],
    },
    {
      company: 'HSBC',
      role: 'Full Stack .NET Developer',
      period: 'Jan 2015 – Nov 2017',
      image: HSBCImg,
      description:
        'Engineered banking applications for global transactions, integrating .NET Core, SQL Server, and secure API gateways for high-volume financial services.',
      skills: ['.NET Core', 'Banking APIs', 'Security', 'SQL Server'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="work" className="max-w-[1280px] mx-auto px-6 md:px-10 py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Work Experience
        </h2>
        <p className="text-xl text-gray-600">10+ Years of Building Scalable Solutions</p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 ${
              exp.current ? 'border-blue-400' : 'border-transparent hover:border-blue-200'
            } relative group`}
          >
            {exp.current && (
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <FiTrendingUp size={12} />
                  Current
                </span>
              </div>
            )}

            <div className="relative overflow-hidden">
              <img
                src={exp.image}
                alt={exp.company}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {exp.company}
              </h3>

              <div className="flex items-center gap-2 text-blue-600 font-semibold mb-3">
                <FiBriefcase size={18} />
                <span className="text-sm">{exp.role}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-500 mb-4">
                <FiCalendar size={16} />
                <span className="text-sm italic">{exp.period}</span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-blue-700 text-xs font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {[
          { label: 'Years Experience', value: '10+' },
          { label: 'Projects Delivered', value: '50+' },
          { label: 'Technologies', value: '30+' },
          { label: 'Happy Clients', value: '20+' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              {stat.value}
            </div>
            <div className="text-gray-600 font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WorkSection;
