"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatures } from "@/components/service-features"
import { ServiceProcess } from "@/components/service-process"
import { ServiceTech } from "@/components/service-tech"

export default function WebDevelopmentPage() {
  const features = [
    { title: "Responsive Design", description: "Works perfectly on all devices and screen sizes" },
    { title: "SEO Optimized", description: "Built for search engines from the ground up" },
    { title: "High Performance", description: "Lightning-fast loading speeds for better UX" },
    { title: "Modern Stack", description: "Built with the latest frameworks and technologies" },
    { title: "Secure", description: "Enterprise-grade security and SSL encryption" },
    { title: "Scalable", description: "Architecture designed to grow with your business" },
  ]

  const process = [
    { step: "01", title: "Discovery", description: "We understand your vision, goals, and target audience" },
    { step: "02", title: "Planning", description: "Create detailed wireframes and design mockups" },
    { step: "03", title: "Development", description: "Build using cutting-edge technologies and best practices" },
    { step: "04", title: "Testing", description: "Comprehensive testing across all platforms" },
    { step: "05", title: "Launch", description: "Deploy to production with zero downtime" },
    { step: "06", title: "Support", description: "Ongoing maintenance and optimization" },
  ]

  const technologies = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Vercel", "Docker"]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ServiceHero
        title="Website Development"
        subtitle="Modern, high-performance websites that drive business growth"
        description="We create stunning, responsive websites that not only look great but also convert visitors into customers."
      />
      <ServiceFeatures features={features} />
      <ServiceProcess process={process} />
      <ServiceTech technologies={technologies} />
      <Footer />
    </main>
  )
}
