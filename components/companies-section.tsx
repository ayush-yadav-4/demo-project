"use client"

import { useState } from "react"

const companies = [
  "TechCorp",
  "InnovateLabs",
  "DataViz",
  "CloudSync",
  "SecureNet",
  "FinFlow",
  "DigitalFirst",
  "StartupHub",
  "BrandVista",
  "EnterpriseSoft",
  "TechStart",
  "CloudTech",
  "GrowthHub",
  "InnovateTech",
]

export function CompaniesSection() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-foreground/60 text-sm font-semibold mb-8 uppercase tracking-wide">
          Our Partners
        </p>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div
            className={`flex gap-12 items-center ${!isPaused ? "animate-scroll-right" : ""}`}
            style={{
              animation: !isPaused ? "scroll-right 50s linear infinite" : "none",
            }}
          >
            {/* Render companies multiple times for seamless loop */}
            {[...Array(4)].map((_, loopIndex) =>
              companies.map((company, index) => (
                <div
                  key={`${company}-${loopIndex}-${index}`}
                  className="flex-shrink-0 px-8 py-4 opacity-60 hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="text-lg md:text-xl font-semibold text-foreground whitespace-nowrap">
                    {company}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
