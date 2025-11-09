"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ServicesPreview } from "@/components/services-preview"
import { CompaniesSection } from "@/components/companies-section"
import { AboutRuesafe } from "@/components/about-ruesafe"
import { CompanyStats } from "@/components/company-stats"
import { ClientReviews } from "@/components/client-reviews"
import { CTASection } from "@/components/cta-section"
import { WhyChooseUs } from "@/components/why-choose-us"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CompaniesSection />
      <ServicesPreview />
      <AboutRuesafe />
      <CompanyStats />
      <WhyChooseUs />
      <ClientReviews />
      <CTASection />
      <Footer />
    </main>
  )
}
