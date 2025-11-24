"use client";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ServiceHero from "../../components/service-hero";
import ServiceFeatures from "../../components/service-features";
import ServiceProcess from "../../components/service-process";
import ServiceTech from "../../components/service-tech";

export default function DigitalMarketingPage() {
  const features = [
    { title: "SEO Strategy", description: "Improve organic visibility and traffic" },
    { title: "Paid Media", description: "ROI-focused campaigns on search & social" },
    { title: "Content", description: "Content that converts and builds brands" },
    { title: "Analytics", description: "Data-driven optimizations and reporting" },
  ];

  const process = [
    { step: "01", title: "Audit", description: "Analyze current performance and gaps" },
    { step: "02", title: "Plan", description: "Channel strategy and creative roadmap" },
    { step: "03", title: "Execute", description: "Run campaigns and content programs" },
    { step: "04", title: "Optimize", description: "Iterate with A/B tests and analytics" },
  ];

  const technologies = ["Google Analytics", "Google Ads", "Meta Ads", "SEO Tools"];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ServiceHero
        title="Digital Marketing"
        subtitle="Data-driven marketing that converts"
        description="Performance marketing, SEO and content strategies that move business KPIs."
      />
      <ServiceFeatures features={features} />
      <ServiceProcess process={process} />
      <ServiceTech technologies={technologies} />
      <Footer />
    </main>
  );
}