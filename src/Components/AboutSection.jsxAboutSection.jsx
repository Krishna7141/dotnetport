import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="max-w-[800px] mx-auto py-16 px-6 text-center">
      <h2 className="text-4xl font-bold mb-8">About Me</h2>
      <p className="mb-6 text-lg leading-relaxed">
        Hi, I’m <strong>Krishna Vamsi Chelluboina</strong>, a <strong>Senior Full-Stack .NET Developer (Contractor)</strong> with
        10+ years of experience. I love turning complex problems into clean, scalable solutions using
        <strong> .NET 8/9, ASP.NET Core, Angular, Blazor, Azure, AWS</strong>, and modern databases.
      </p>
      <p className="mb-6 text-lg leading-relaxed">
        I’ve delivered enterprise-grade systems in <strong>Banking & Finance</strong> (PCI-DSS–compliant payment processing, loan
        origination) and <strong>Healthcare</strong> (HIPAA/FHIR integrations). Currently at Capital One, I write code, mentor developers,
        and lead sprint planning—because great software comes from open collaboration, not just great code.
      </p>
      <p className="text-lg leading-relaxed">
        Beyond work, I stay curious—exploring AI, new architecture patterns, and enjoying travel and reading.
        For me, building software isn’t just shipping features; it’s about <strong>building trust and creating
        products that improve lives</strong>.
      </p>
    </section>
  );
};

export default AboutSection;
