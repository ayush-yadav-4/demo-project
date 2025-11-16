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
import { Button } from "@/components/ui/button"
import Link from "next/link"

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
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Companies Section */}
      <CompaniesSection />
      
      {/* Services Preview */}
      <ServicesPreview />
      
      {/* About Ruesafe */}
      <AboutRuesafe />
      
      {/* Company Stats */}
      <CompanyStats />
      
      {/* Why Choose Us */}
      <WhyChooseUs />
      
      {/* Client Reviews */}
      <ClientReviews />
      
      {/* CTA Section */}
      <CTASection />

      {/* Smooth Transition Gradient */}
      <div className="h-32 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none" />

      {/* Image Section Before Footer with Fixed Background */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center px-4 py-20 overflow-hidden"
        style={{
          backgroundImage: "url('/footersection-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        
        {/* Smooth Gradient Overlay - Subtle white overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/20 to-white/40" />
        
        {/* Content */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-[#1E1E1E] mb-6">
            Ready to turn AI adoption into measurable gains?
          </h2>
          
          <p className="text-xl text-[#6A6A6A] mb-12 leading-relaxed">
            Join hundreds of companies that are already transforming their AI strategy with our platform.
          </p>

          <Link href="/contact">
            <Button 
              size="lg" 
              className="bg-[#1E1E1E] hover:bg-[#2A2A2A] text-white px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Book a Demo →
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
