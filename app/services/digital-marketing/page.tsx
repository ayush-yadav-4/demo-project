"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatures } from "@/components/service-features"
import { ServiceProcess } from "@/components/service-process"
import { ServiceTech } from "@/components/service-tech"

export default function DigitalMarketingPage() {
  const features = [
    { title: "SEO Optimization", description: "Rank higher on search engines and attract organic traffic" },
    { title: "Social Media", description: "Strategic campaigns across all major social platforms" },
    { title: "Content Marketing", description: "Engaging content that converts and builds authority" },
    { title: "Email Marketing", description: "Targeted campaigns that drive engagement and sales" },
    { title: "Analytics", description: "Data-driven insights to optimize your campaigns" },
    { title: "Lead Generation", description: "Attract qualified leads that convert to customers" },
  ]

  const process = [
    { step: "01", title: "Audit", description: "Analyze current digital presence and competition" },
    { step: "02", title: "Strategy", description: "Create comprehensive marketing roadmap" },
    { step: "03", title: "Implementation", description: "Execute campaigns across channels" },
    { step: "04", title: "Optimization", description: "Test, analyze, and refine campaigns" },
    { step: "05", title: "Reporting", description: "Monthly reports with actionable insights" },
    { step: "06", title: "Growth", description: "Scale successful campaigns and strategies" },
  ]

  const technologies = [
    "Google Analytics",
    "SEMrush",
    "HubSpot",
    "Buffer",
    "Mailchimp",
    "Canva",
    "WordPress",
    "Meta Ads",
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ServiceHero
        title="Digital Marketing"
        subtitle="Strategic marketing that drives growth and customer engagement"
        description="Grow your business with data-driven digital marketing strategies tailored to your goals and budget."
      />
      <ServiceFeatures features={features} />
      <ServiceProcess process={process} />
      <ServiceTech technologies={technologies} />
      <Footer />
    </main>
  )
}
