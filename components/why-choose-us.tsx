"use client"

import { CheckCircle2, Zap, Shield, Users, Target, Award } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description: "We deliver projects on time, every time. Our agile methodology ensures rapid development without compromising quality.",
    color: "from-yellow-500/20 to-orange-500/10",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Your data and applications are protected with industry-leading security measures and compliance standards.",
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Work with seasoned professionals who bring years of experience and cutting-edge expertise to every project.",
    color: "from-purple-500/20 to-pink-500/10",
  },
  {
    icon: Target,
    title: "Goal-Oriented Approach",
    description: "We align our solutions with your business objectives, ensuring every project drives measurable results.",
    color: "from-green-500/20 to-emerald-500/10",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "500+ successful projects and 150+ satisfied clients speak to our commitment to excellence.",
    color: "from-amber-500/20 to-yellow-500/10",
  },
  {
    icon: CheckCircle2,
    title: "24/7 Support",
    description: "Round-the-clock support ensures your systems run smoothly and issues are resolved quickly.",
    color: "from-indigo-500/20 to-blue-500/10",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-aurora" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob-rotate" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-accent/20 rounded-full border border-accent/50 mb-4">
            <span className="text-accent text-sm font-semibold">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            The <span className="text-accent">RupeSafe</span> Advantage
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            We combine technical excellence with business acumen to deliver solutions that drive real results
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="relative p-8 rounded-xl border border-border bg-card/50 hover:border-accent/50 transition-all duration-300 group overflow-hidden animate-slide-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-foreground/60 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

