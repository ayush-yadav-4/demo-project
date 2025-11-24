"use client";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ServiceHero from "../../components/service-hero";
import ServiceFeatures from "../../components/service-features";
import ServiceProcess from "../../components/service-process";
import ServiceTech from "../../components/service-tech";

export default function WebDevelopmentPage() {
  const features = [
    { title: "Next.js & React", description: "Modern React apps with SSR and static options" },
    { title: "Performance", description: "Optimized for speed and Core Web Vitals" },
    { title: "Accessibility", description: "Inclusive designs built for everyone" },
    { title: "SEO", description: "Technical SEO baked into architecture" },
  ];

  const process = [
    { step: "01", title: "Discovery", description: "Understand goals, metrics and constraints" },
    { step: "02", title: "Design", description: "Craft accessible, responsive UI systems" },
    { step: "03", title: "Build", description: "Ship robust frontend and backend services" },
    { step: "04", title: "Optimize", description: "Measure and iterate to improve outcomes" },
  ];

  const technologies = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Node.js"];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ServiceHero
        title="Web Development"
        subtitle="High-performance, scalable web applications"
        description="We build fast, accessible web products using modern frameworks and best practices."
      />
      <ServiceFeatures features={features} />
      <ServiceProcess process={process} />
      <ServiceTech technologies={technologies} />
      <Footer />
    </main>
  );
}