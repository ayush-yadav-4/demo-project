"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Users, Target, Zap, Award, TrendingUp, Globe } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const values = [
    {
      icon: Users,
      title: "People First",
      description: "We believe in building strong relationships with our clients and team",
      color: "from-[#F7D5B5] to-[#FFF5EB]",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every project and solution we deliver",
      color: "from-[#E8E1F0] to-[#F5F0FA]",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We embrace new technologies and innovative approaches to problem-solving",
      color: "from-[#FEE8D0] to-[#FFF5EB]",
    },
    {
      icon: Award,
      title: "Quality",
      description: "Quality is never compromised in our work and deliverables",
      color: "from-[#F5C7A8] to-[#FEE8D0]",
    },
  ]

  const achievements = [
    { icon: TrendingUp, value: "500+", label: "Projects Completed", color: "text-[#F2A46F]" },
    { icon: Users, value: "150+", label: "Happy Clients", color: "text-[#F2A46F]" },
    { icon: Globe, value: "25+", label: "Countries Served", color: "text-[#F2A46F]" },
    { icon: Award, value: "15+", label: "Years Experience", color: "text-[#F2A46F]" },
  ]

  const team = [
    { role: "Founder & CEO", count: "1", experience: "15+ years" },
    { role: "Senior Developers", count: "12", experience: "8+ years" },
    { role: "Designers", count: "8", experience: "6+ years" },
    { role: "Project Managers", count: "10", experience: "5+ years" },
    { role: "QA Engineers", count: "6", experience: "4+ years" },
    { role: "Support Team", count: "5", experience: "3+ years" },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Modern */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-[#FFF5EB] via-white to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <div className="inline-block px-4 py-2 bg-[#F2A46F]/10 rounded-full border border-[#F2A46F]/20 mb-4">
                <span className="text-[#F2A46F] text-sm font-semibold">About RupeSafe</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#1E1E1E] leading-tight">
                Transforming businesses through innovative digital solutions
              </h1>
              <p className="text-lg text-[#6A6A6A] leading-relaxed">
                Since 2010, we've been helping companies embrace digital transformation and achieve their goals.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-soft-lg animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F7D5B5] via-[#E8E1F0] to-[#FEE8D0]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft-lg">
                    <span className="text-4xl font-bold text-[#F2A46F]">R</span>
                  </div>
                  <p className="text-[#1E1E1E] font-semibold text-lg">RupeSafe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements - Modern Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <div
                  key={achievement.label}
                  className="relative p-6 rounded-xl border border-gray-200 bg-white hover:border-[#F2A46F]/30 transition-all duration-300 group overflow-hidden animate-slide-in-up shadow-soft hover:shadow-soft-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F7D5B5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-[#F2A46F]/10 flex items-center justify-center mb-4 group-hover:bg-[#F2A46F]/20 transition-colors">
                      <Icon className={`w-6 h-6 ${achievement.color}`} />
                    </div>
                    <p className={`text-4xl font-bold mb-2 ${achievement.color}`}>{achievement.value}</p>
                    <p className="text-sm text-[#6A6A6A] font-medium">{achievement.label}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Company Story - Modern Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#FFF5EB]/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[#1E1E1E]">Our Story</h2>
              <div className="space-y-4 text-[#6A6A6A] leading-relaxed">
                <p className="text-lg">
                  Founded in 2010, RupeSafe started as a small team of passionate developers with a mission to help
                  businesses embrace digital transformation. What began in a modest office has grown into a leading
                  technology solutions company serving over 150 clients worldwide.
                </p>
                <p className="text-lg">
                  Our journey has been marked by continuous innovation, client success, and a commitment to excellence.
                  We've delivered over 500 projects spanning web development, mobile apps, digital marketing, ERP systems,
                  and custom software solutions.
                </p>
                <p className="text-lg">
                  Today, RupeSafe stands as a trusted partner for businesses looking to scale, innovate, and thrive in the
                  digital world. Our team of 50+ skilled professionals works tirelessly to ensure every client receives the
                  highest quality solutions and support.
                </p>
              </div>
            </div>
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-soft-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F7D5B5] via-[#E8E1F0] to-[#FEE8D0] p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#F2A46F] rounded-full"></div>
                    <span className="text-[#1E1E1E] font-semibold">Innovation Driven</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#F2A46F] rounded-full"></div>
                    <span className="text-[#1E1E1E] font-semibold">Client Focused</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#F2A46F] rounded-full"></div>
                    <span className="text-[#1E1E1E] font-semibold">Results Oriented</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Enhanced */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1E1E1E] mb-4">Our Values</h2>
            <p className="text-[#6A6A6A] max-w-2xl mx-auto">
              Guiding principles that shape everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="relative p-8 rounded-xl border border-gray-200 bg-white hover:border-[#F2A46F]/30 transition-all duration-300 group overflow-hidden animate-slide-in-up shadow-soft hover:shadow-soft-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative z-10 text-center">
                    <div className="w-14 h-14 rounded-lg bg-[#F2A46F]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#F2A46F]/20 transition-colors">
                      <Icon className="w-7 h-7 text-[#F2A46F]" />
                    </div>
                    <h3 className="font-bold text-[#1E1E1E] mb-2">{value.title}</h3>
                    <p className="text-sm text-[#6A6A6A]">{value.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team - Modern Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF5EB]/30 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1E1E1E] mb-4">Our Team</h2>
            <p className="text-[#6A6A6A] max-w-2xl mx-auto">
              50+ talented professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div
                key={member.role}
                className="relative p-6 rounded-xl border border-gray-200 bg-white text-center animate-slide-in-up shadow-soft hover:shadow-soft-lg hover:border-[#F2A46F]/30 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#F7D5B5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <div className="relative z-10">
                  <p className="text-4xl font-bold text-[#F2A46F] mb-2">{member.count}</p>
                  <h3 className="font-bold text-[#1E1E1E] mb-2">{member.role}</h3>
                  <p className="text-sm text-[#6A6A6A]">{member.experience} experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
