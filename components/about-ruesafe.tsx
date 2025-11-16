"use client"

import { Eye, TrendingDown, Lightbulb } from "lucide-react"

export function AboutRuesafe() {
  const problems = [
    {
      icon: Eye,
      title: "No Visibility",
      description: "Your teams use various tools and platforms, but you have no idea how much—or how well they're performing.",
    },
    {
      icon: TrendingDown,
      title: "No Impact Measurement",
      description: "You invested in digital solutions. But did they actually improve delivery speed or quality?",
    },
    {
      icon: Lightbulb,
      title: "No Guidance",
      description: "Some teams excel with technology, others struggle. You have no way to scale what works across the organization.",
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Left aligned */}
        <div className="mb-16 animate-fade-in">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-4 text-left">
              Digital transformation is everywhere, but invisible.
            </h2>
            <p className="text-lg text-[#6A6A6A] text-left">
              Your teams use digital tools every day, but you still don't know if they're actually working well or driving real business impact.
            </p>
          </div>
        </div>

        {/* Problem Cards - 3 side by side with alternating layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            const isEven = index % 2 === 0
            return (
              <div
                key={problem.title}
                className={`relative p-8 rounded-xl border border-gray-200 bg-white hover:border-[#F2A46F]/30 transition-all duration-300 group overflow-hidden animate-slide-in-up shadow-soft hover:shadow-soft-lg ${
                  isEven ? 'md:translate-y-0' : 'md:translate-y-8'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F7D5B5]/0 to-[#E8E1F0]/0 group-hover:from-[#F7D5B5]/10 group-hover:to-[#E8E1F0]/10 transition-all duration-500" />
                
                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-[#F2A46F]/10 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-gray-600 group-hover:text-[#F2A46F] transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-[#1E1E1E] mb-3 group-hover:text-[#F2A46F] transition-colors duration-300">
                      {problem.title}
                    </h3>
                    <p className="text-[#6A6A6A] leading-relaxed text-sm">
                      {problem.description}
                    </p>
                  </div>
                </div>

                {/* Subtle shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
