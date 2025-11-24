import React from 'react';

interface ServiceTechProps {
  technologies: string[];
}

const ServiceTech: React.FC<ServiceTechProps> = ({ technologies }) => {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-4">Technologies We Use</h2>
      <ul className="list-disc pl-5">
        {technologies.map((tech, index) => (
          <li key={index} className="text-lg">{tech}</li>
        ))}
      </ul>
    </section>
  );
};

export default ServiceTech;