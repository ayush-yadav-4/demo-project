"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background with landscape */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FEE8D0] via-[#F5C7A8] to-[#E7AF98] opacity-60" />
        
        {/* Landscape image */}
        <div className="absolute inset-0">
          <img
            src="/Herosection-1.png"
            alt="CTA background"
            className="w-full h-full object-cover opacity-25"
            style={{ objectPosition: "center bottom" }}
          />
          {/* Soft blur overlay */}
          <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />
        </div>
        
        {/* Fade to white at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white to-transparent" />
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-[#F2A46F]/30 rounded-full animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-[#F7D5B5]/40 rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-[#E8E1F0]/30 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-4xl mx-auto text-center animate-fade-in relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6 text-balance">
          Ready to turn digital adoption into measurable gains?
        </h2>

        <p className="text-lg text-[#6A6A6A] mb-8 max-w-2xl mx-auto leading-relaxed">
          Book a demo to see how RupeSafe helps organizations measure, improve, and scale digital adoption across every function.
        </p>

        <div className="flex justify-center">
          <Link href="/contact">
            <Button 
              size="lg" 
              className="bg-[#1E1E1E] hover:bg-[#2A2A2A] text-white px-8 py-6 shadow-soft-lg hover:scale-105 transition-all duration-200 group"
            >
              Book a Demo
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
