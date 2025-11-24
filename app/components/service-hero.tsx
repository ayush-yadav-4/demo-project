import React from 'react';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ title, subtitle, description }) => {
  return (
    <section className="hero bg-primary text-white p-8">
      <h1 className="text-4xl font-bold">{title}</h1>
      <h2 className="text-2xl mt-2">{subtitle}</h2>
      <p className="mt-4">{description}</p>
    </section>
  );
};

export default ServiceHero;