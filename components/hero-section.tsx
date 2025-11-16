"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 md:pt-40 bg-cover bg-center"
      style={{
        backgroundImage: "url('/Herosection-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-white/20" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1E1E1E] leading-tight">
            Building the future of
            <br />
            <span className="bg-gradient-to-r from-[#1E1E1E] to-[#3A3A3A] bg-clip-text text-transparent">
              Digital Innovation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#6A6A6A] max-w-2xl mx-auto leading-relaxed">
            Helping companies unlock the full power of technology—adopt it confidently, scale it efficiently, and manage it effortlessly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-[#1E1E1E] hover:bg-[#2A2A2A] text-white px-8 py-6 text-base shadow-soft-lg hover:shadow-soft-lg hover:scale-105 transition-all duration-200"
              >
                Book a Demo
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-white text-[#1E1E1E] px-8 py-6 text-base transition-all duration-200"
              >
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
