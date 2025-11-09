"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatures } from "@/components/service-features"
import { ServiceProcess } from "@/components/service-process"
import { ServiceTech } from "@/components/service-tech"

export default function ERPSolutionsPage() {
  const features = [
    { title: "Enterprise Ready", description: "Designed for organizations of any size" },
    { title: "Streamlined Operations", description: "Integrate all business processes in one platform" },
    { title: "Real-time Analytics", description: "Get insights into business performance instantly" },
    { title: "Inventory Management", description: "Track and manage inventory efficiently" },
    { title: "Financial Management", description: "Complete accounting and financial control" },
    { title: "Scalable Architecture", description: "Grows with your business needs" },
  ]

  const process = [
    { step: "01", title: "Assessment", description: "Evaluate current processes and requirements" },
    { step: "02", title: "Planning", description: "Design ERP solution tailored to your needs" },
    { step: "03", title: "Customization", description: "Configure and customize the system" },
    { step: "04", title: "Migration", description: "Transfer data from legacy systems" },
    { step: "05", title: "Training", description: "Comprehensive training for your team" },
    { step: "06", title: "Support", description: "Ongoing support and optimization" },
  ]

  const technologies = [
    "SAP",
    "Oracle",
    "Microsoft Dynamics",
    "NetSuite",
    "PostgreSQL",
    "Cloud Infrastructure",
    "APIs",
    "Business Intelligence",
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ServiceHero
        title="ERP Solutions"
        subtitle="Integrate and automate your entire business"
        description="Transform your business operations with enterprise-grade ERP solutions that improve efficiency and reduce costs."
      />
      <ServiceFeatures features={features} />
      <ServiceProcess process={process} />
      <ServiceTech technologies={technologies} />
      <Footer />
    </main>
  )
}
