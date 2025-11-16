"use client"

import { Star } from "lucide-react"
import { useState } from "react"

const reviews = [
  {
    author: "Sarah Johnson",
    role: "CEO, TechCorp",
    content:
      "RupeSafe transformed our entire digital infrastructure. Their team is professional, innovative, and delivers results.",
    rating: 5,
    avatar: "👩‍💼",
  },
  {
    author: "Michael Chen",
    role: "Founder, InnovateLabs",
    content: "The web application they built exceeded our expectations. Fast, scalable, and beautifully designed.",
    rating: 5,
    avatar: "👨‍💻",
  },
  {
    author: "Emily Rodriguez",
    role: "Product Manager, DataViz",
    content:
      "Working with RupeSafe was a game-changer. They understand business needs and translate them into perfect solutions.",
    rating: 5,
    avatar: "👩‍🔬",
  },
  {
    author: "David Thompson",
    role: "CTO, CloudSync",
    content:
      "Exceptional ERP implementation. The system is robust, user-friendly, and has improved our operations significantly.",
    rating: 5,
    avatar: "👨‍💼",
  },
  {
    author: "Lisa Wang",
    role: "Founder, GrowthHub",
    content: "The digital marketing strategies increased our revenue by 200%. Truly exceptional team and results!",
    rating: 5,
    avatar: "👩‍💼",
  },
  {
    author: "James Patterson",
    role: "VP Product, InnovateTech",
    content: "Payment gateway integration was seamless. Best implementation experience we've had.",
    rating: 5,
    avatar: "👨‍💻",
  },
  {
    author: "Maria Garcia",
    role: "Director, DigitalFirst",
    content: "Outstanding mobile app development. The user experience is flawless and engagement has tripled.",
    rating: 5,
    avatar: "👩‍💼",
  },
  {
    author: "Robert Kim",
    role: "CEO, StartupHub",
    content: "RupeSafe helped us launch our platform in record time. Their expertise is unmatched.",
    rating: 5,
    avatar: "👨‍💼",
  },
  {
    author: "Jennifer Lee",
    role: "CMO, BrandVista",
    content: "Their digital marketing campaigns generated incredible ROI. We've seen 300% growth in leads.",
    rating: 5,
    avatar: "👩‍💼",
  },
  {
    author: "Thomas Anderson",
    role: "CTO, EnterpriseSoft",
    content: "The software solution they developed streamlined our entire workflow. Highly recommended!",
    rating: 5,
    avatar: "👨‍💻",
  },
  {
    author: "Amanda White",
    role: "Founder, TechStart",
    content: "Professional, responsive, and results-driven. RupeSafe is our go-to partner for all digital needs.",
    rating: 5,
    avatar: "👩‍💼",
  },
  {
    author: "Christopher Brown",
    role: "VP Engineering, CloudTech",
    content: "Best development team we've worked with. They deliver on time and exceed expectations every time.",
    rating: 5,
    avatar: "👨‍💼",
  },
]

export function ClientReviews() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-4 text-balance">
            What Our <span className="text-[#F2A46F]">Clients Say</span>
          </h2>
          <p className="text-lg text-[#6A6A6A] max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their businesses with RupeSafe
          </p>
        </div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div
            className={`flex gap-6 pb-4 ${!isPaused ? "animate-scroll-right" : ""}`}
            style={{
              animation: !isPaused ? "scroll-right 60s linear infinite" : "none",
            }}
          >
            {/* Render reviews multiple times for seamless loop */}
            {[...Array(3)].map((_, loopIndex) =>
              reviews.map((review, index) => (
                <div
                  key={`${review.author}-${loopIndex}-${index}`}
                  className="min-w-96 p-8 rounded-xl border border-gray-200 bg-white hover:border-[#F2A46F]/30 transition-all duration-300 hover:shadow-soft-lg"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F2A46F] text-[#F2A46F]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-[#6A6A6A] mb-6 italic leading-relaxed">"{review.content}"</p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{review.avatar}</span>
                    <div>
                      <p className="font-semibold text-[#1E1E1E]">{review.author}</p>
                      <p className="text-sm text-[#6A6A6A]">{review.role}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
