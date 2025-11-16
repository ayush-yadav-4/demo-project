"use client"

import { BarChart3, TrendingUp, Users, Globe, Award, Clock } from "lucide-react"

const stats = [
  { 
    value: "500+", 
    label: "Usage Intelligence", 
    description: "See how every team uses digital tools in real-time",
    icon: BarChart3,
    stat: "689",
  },
  { 
    value: "81%", 
    label: "Overall Adoption", 
    description: "Teams actively using digital solutions",
    icon: TrendingUp,
    stat: "81%",
  },
  { 
    value: "78%", 
    label: "Enablement & Adoption", 
    description: "Teams enabled with proper training",
    icon: Users,
    stat: "78%",
  },
  { 
    value: "+51%", 
    label: "Velocity Gain", 
    description: "Connect digital usage to speed and performance gains",
    icon: TrendingUp,
    stat: "+51%",
  },
]

export function CompanyStats() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-4 text-balance">
            Everything you need to scale digital adoption
          </h2>
          <p className="text-lg text-[#6A6A6A] max-w-2xl mx-auto">
            From usage intelligence to productivity insights—everything you need to drive measurable digital adoption.
          </p>
        </div>

        {/* Features Grid - 2x2 layout with alternating left/right design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            const isLeft = index % 2 === 0
            return (
              <div
                key={stat.label}
                className={`relative p-8 rounded-xl border border-gray-200 bg-white hover:border-[#F2A46F]/30 transition-all duration-500 group overflow-hidden animate-slide-in-up shadow-soft hover:shadow-soft-lg ${
                  isLeft ? 'md:pr-12' : 'md:pl-12'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Soft gradient background with glassmorphism */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F7D5B5]/10 via-[#E8E1F0]/5 to-[#FEE8D0]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm" />
                
                {/* Animated gradient thumbnail - positioned based on left/right */}
                <div 
                  className={`absolute top-0 w-24 h-24 bg-gradient-to-br from-[#F7D5B5] to-[#E8E1F0] rounded-br-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 ${
                    isLeft ? 'left-0' : 'right-0 rounded-bl-3xl rounded-br-none'
                  }`}
                />
                
                <div className={`relative z-10 space-y-4 ${isLeft ? '' : 'text-right'}`}>
                  {/* Icon and Stat */}
                  <div className={`flex items-start justify-between ${isLeft ? '' : 'flex-row-reverse'}`}>
                    <div className="w-12 h-12 rounded-lg bg-[#F2A46F]/10 flex items-center justify-center group-hover:bg-[#F2A46F]/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-[#F2A46F]" />
                    </div>
                    <div className={isLeft ? 'text-right' : 'text-left'}>
                      <p className="text-4xl md:text-5xl font-bold text-[#F2A46F] mb-1 group-hover:scale-110 transition-transform duration-300">
                        {stat.stat}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={isLeft ? 'text-left' : 'text-right'}>
                    <h3 className="text-2xl font-bold text-[#1E1E1E] mb-2 group-hover:text-[#F2A46F] transition-colors duration-300">
                      {stat.label}
                    </h3>
                    <p className="text-[#6A6A6A] text-sm leading-relaxed">
                      {stat.description}
                    </p>
                  </div>

                  {/* Animated progress bar effect */}
                  <div className={`h-1 bg-gray-100 rounded-full overflow-hidden ${isLeft ? '' : 'ml-auto'}`} style={{ width: isLeft ? '100%' : '100%' }}>
                    <div 
                      className={`h-full bg-gradient-to-r from-[#F2A46F] to-[#F7D5B5] rounded-full transition-all duration-1000 group-hover:w-full ${
                        isLeft ? '' : 'bg-gradient-to-l'
                      }`}
                      style={{ width: "0%", animationDelay: `${index * 200}ms` }}
                    />
                  </div>
                </div>

                {/* Floating particles effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute top-4 w-2 h-2 bg-[#F2A46F] rounded-full animate-float ${isLeft ? 'right-4' : 'left-4'}`} style={{ animationDelay: "0s" }} />
                  <div className={`absolute bottom-8 w-1.5 h-1.5 bg-[#F7D5B5] rounded-full animate-float ${isLeft ? 'left-8' : 'right-8'}`} style={{ animationDelay: "0.5s" }} />
                  <div className={`absolute top-1/2 w-1 h-1 bg-[#E8E1F0] rounded-full animate-float ${isLeft ? 'right-1/4' : 'left-1/4'}`} style={{ animationDelay: "1s" }} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
