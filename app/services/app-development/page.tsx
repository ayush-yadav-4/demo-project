"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatures } from "@/components/service-features"
import { ServiceProcess } from "@/components/service-process"
import { ServiceTech } from "@/components/service-tech"

export default function AppDevelopmentPage() {
  const features = [
    { title: "iOS & Android", description: "Native apps for both Apple and Android platforms" },
    { title: "Cross-Platform", description: "Build once, deploy everywhere with React Native" },
    { title: "User Focused", description: "Intuitive interfaces designed for user engagement" },
    { title: "Offline Ready", description: "Works seamlessly even without internet connection" },
    { title: "Push Notifications", description: "Keep users engaged with timely notifications" },
    { title: "Analytics", description: "Built-in tracking and performance monitoring" },
  ]

  const process = [
    { step: "01", title: "Strategy", description: "Define app goals, features, and user personas" },
    { step: "02", title: "Design", description: "Create beautiful UI/UX for mobile experience" },
    { step: "03", title: "Development", description: "Code native or cross-platform app" },
    { step: "04", title: "Testing", description: "Rigorous QA on real devices" },
    { step: "05", title: "Launch", description: "Submit to App Store and Google Play" },
    { step: "06", title: "Growth", description: "App store optimization and updates" },
  ]

  const technologies = ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Node.js", "MongoDB", "AWS"]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ServiceHero
        title="App Development"
        subtitle="Native and cross-platform mobile apps that users love"
        description="Transform your ideas into powerful mobile applications that engage users and drive business success."
      />
      <ServiceFeatures features={features} />
      <ServiceProcess process={process} />
      <ServiceTech technologies={technologies} />
      <Footer />
    </main>
  )
}
