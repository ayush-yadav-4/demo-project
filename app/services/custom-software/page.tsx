"use client";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ServiceHero from "../../components/service-hero";
import ServiceFeatures from "../../components/service-features";
import ServiceProcess from "../../components/service-process";
import ServiceTech from "../../components/service-tech";

export default function CustomSoftwarePage() {
  const features = [
    { title: "Scalable Architecture", description: "Design systems that grow with you" },
    { title: "Security-first", description: "Built with security and compliance in mind" },
    { title: "API Integrations", description: "Connect internal and external systems" },
    { title: "Testing & CI/CD", description: "Quality pipelines and test automation" },
  ];

  const process = [
    { step: "01", title: "Discovery", description: "Gather requirements & constraints" },
    { step: "02", title: "Design", description: "Prototypes, UX and architecture" },
    { step: "03", title: "Build", description: "Iterative delivery with CI/CD" },
    { step: "04", title: "Operate", description: "Monitoring, SRE & support" },
  ];

  const technologies = ["Node.js", "TypeScript", "Docker", "Postgres", "Kubernetes"];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ServiceHero
        title="Custom Software"
        subtitle="Tailored systems built for your workflows"
        description="Custom platforms and services designed to fit your business needs and constraints."
      />
      <ServiceFeatures features={features} />
      <ServiceProcess process={process} />
      <ServiceTech technologies={technologies} />
      <Footer />
    </main>
  );
}