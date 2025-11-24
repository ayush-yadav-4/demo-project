"use client";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ServiceHero from "../../components/service-hero";
import ServiceFeatures from "../../components/service-features";
import ServiceProcess from "../../components/service-process";
import ServiceTech from "../../components/service-tech";

export default function ERPSolutionsPage() {
  const features = [
    { title: "Process Automation", description: "Automate finance, HR and operations" },
    { title: "Realtime Reporting", description: "Live dashboards for decision making" },
    { title: "Integrations", description: "Connect to your existing systems via APIs" },
    { title: "Security", description: "Role-based access and audit trails" },
  ];

  const process = [
    { step: "01", title: "Assessment", description: "Map existing processes and needs" },
    { step: "02", title: "Design", description: "Blueprint the ERP modules and workflows" },
    { step: "03", title: "Implement", description: "Configure and develop integrations" },
    { step: "04", title: "Adopt", description: "Train users and monitor adoption" },
  ];

  const technologies = ["Postgres", "Node.js", "Redis", "GraphQL", "AWS"];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ServiceHero
        title="ERP Solutions"
        subtitle="Unified systems to run your business"
        description="We deliver ERP systems that centralize operations, reporting and team workflows."
      />
      <ServiceFeatures features={features} />
      <ServiceProcess process={process} />
      <ServiceTech technologies={technologies} />
      <Footer />
    </main>
  );
}