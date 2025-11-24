import React from 'react';

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface ServiceProcessProps {
  process: ProcessStep[];
}

const ServiceProcess: React.FC<ServiceProcessProps> = ({ process }) => {
  return (
    <section className="service-process">
      <h2 className="text-2xl font-bold mb-4">Our Process</h2>
      <ol className="list-decimal pl-5">
        {process.map((step) => (
          <li key={step.step} className="mb-3">
            <h3 className="font-semibold">{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default ServiceProcess;