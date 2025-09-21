import React from "react";

const PersonalAboutSection = () => {
  return (
    <section id="about" className="max-w-[900px] mx-auto px-6 py-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        About Me
      </h2>
      <p className="text-lg leading-relaxed text-justify">
        Hi, Im <strong>Krishna</strong>. Im a Senior Full Stack .NET Developer (Contractor) 
        with over ten years of hands-on experience—but what really defines me isnt just the 
        technology, its how I approach people and problems.
      </p>
      <p className="text-lg leading-relaxed text-justify mt-4">
        I love turning complex requirements into clean, scalable solutions. Whether Im 
        architecting a cloud-native system with .NET 8, ASP.NET Core, Angular or Blazor, or 
        helping a teammate get unstuck, I find joy in breaking big challenges into 
        reliable, elegant results.
      </p>
      <p className="text-lg leading-relaxed text-justify mt-4">
        I thrive as a contractor because it keeps me learning and delivering impact quickly, 
        while working with diverse teams across banking, finance, and healthcare domains. 
        For me, building software is as much about people and trust as it is about code.
      </p>
    </section>
  );
};

export default PersonalAboutSection;
