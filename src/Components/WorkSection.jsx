// WorkSection.jsx
import capitaloneImg from '../assets/capitalone.jpg';
import careingtonImg from '../assets/Careington.jpg';
import corevitasImg from '../assets/corevitas.jpg';
import AMFAMImg from '../assets/AMFAM.png';
import HSBCImg from '../assets/HSBC.png';

const WorkSection = () => {
  return (
    <div id="work" className="max-w-[1280px] mx-auto px-10 py-16">
      <h2 className="text-4xl font-semibold text-center mb-12">Work Experience</h2>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">

        {/* Capital One */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <img src={capitaloneImg} alt="Capital One" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-bold">Senior Full Stack .NET Developer – Capital One</h3>
            <p className="text-gray-500 italic">June 2023 – Present</p>
            <p className="mt-3">
              Architected and delivered a next-generation loan origination and servicing platform
              using .NET 8, ASP.NET Core Web API, and C# 11, automating underwriting and reducing loan approval time.
            </p>
          </div>
        </div>

        {/* Careington */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <img src={careingtonImg} alt="Careington" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-bold">Full Stack .NET Developer – Careington</h3>
            <p className="text-gray-500 italic">Nov 2021 – May 2023</p>
            <p className="mt-3">
              Designed and developed HIPAA-compliant healthcare applications with .NET 6 and Azure/AWS,
              built FHIR APIs, and implemented event-driven architecture with Kafka and RabbitMQ.
            </p>
          </div>
        </div>

        {/* Corevitas */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <img src={corevitasImg} alt="Corevitas" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-bold">Full Stack .NET Developer – Corevitas</h3>
            <p className="text-gray-500 italic">May 2020 – Oct 2021</p>
            <p className="mt-3">
              Developed healthcare applications using .NET Core and Angular; modernized legacy systems;
              and implemented secure FHIR/HL7 integrations.
            </p>
          </div>
        </div>

        {/* American Family Insurance (AMFAM) */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <img src={AMFAMImg} alt="American Family Insurance" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-bold">Full Stack .NET Developer – American Family Insurance</h3>
            <p className="text-gray-500 italic">Feb 2018 – Apr 2020</p>
            <p className="mt-3">
              Built insurance policy management modules using ASP.NET MVC, C#, and SQL Server;
              enhanced claims processing and ensured compliance with SOX and PCI-DSS standards.
            </p>
          </div>
        </div>

        {/* HSBC – LAST */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <img src={HSBCImg} alt="HSBC" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-bold">Full Stack .NET Developer – HSBC</h3>
            <p className="text-gray-500 italic">Jan 2015 – Nov 2017</p>
            <p className="mt-3">
              Engineered banking applications for global transactions, integrating .NET Core,
              SQL Server, and secure API gateways for high-volume financial services.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WorkSection;
