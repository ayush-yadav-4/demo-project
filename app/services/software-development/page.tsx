"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatures } from "@/components/service-features"
import { ServiceProcess } from "@/components/service-process"
import { ServiceTech } from "@/components/service-tech"

export default function SoftwareDevelopmentPage() {
  const features = [
    { title: "Custom Built", description: "Solutions tailored to your specific needs" },
    { title: "Scalable Design", description: "Architecture that grows with your requirements" },
    { title: "Maintainable Code", description: "Clean, documented, and easy to maintain" },
    { title: "Performance", description: "Optimized for speed and efficiency" },
    { title: "Security", description: "Enterprise-grade security measures" },
    { title: "Integration", description: "Seamlessly integrate with existing systems" },
  ]

  const process = [
    { step: "01", title: "Requirements", description: "Understand your business challenges" },
    { step: "02", title: "Design", description: "Create architecture and technical design" },
    { step: "03", title: "Development", description: "Build using agile methodology" },
    { step: "04", title: "Testing", description: "Comprehensive QA and testing" },
    { step: "05", title: "Deployment", description: "Production deployment and rollout" },
    { step: "06", title: "Maintenance", description: "Long-term support and updates" },
  ]

  const technologies = [
    "JavaScript",
    "Python",
    "Java",
    "Go",
    "Kubernetes",
    "Docker",
    "AWS",
    "Azure",
    "GraphQL",
    "Microservices",
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ServiceHero
        title="Software Development"
        subtitle="Custom solutions for complex business challenges"
        description="Build powerful software solutions tailored to your specific needs with our experienced development team."
      />
      <ServiceFeatures features={features} />
      <ServiceProcess process={process} />
      <ServiceTech technologies={technologies} />
      <Footer />
    </main>
  )
}
