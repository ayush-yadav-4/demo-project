"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Users, Target, Zap, Award } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Users,
      title: "People First",
      description: "We believe in building strong relationships with our clients and team",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every project and solution we deliver",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We embrace new technologies and innovative approaches to problem-solving",
    },
    {
      icon: Award,
      title: "Quality",
      description: "Quality is never compromised in our work and deliverables",
    },
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
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
        </div>

        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            About <span className="text-accent">Ruesafe</span>
          </h1>
          <p className="text-lg text-foreground/60 leading-relaxed">
            Transforming businesses through innovative digital solutions since 2010
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Our Story</h2>

          <div className="prose prose-invert max-w-none space-y-6 text-foreground/70">
            <p>
              Founded in 2010, Ruesafe started as a small team of passionate developers with a mission to help
              businesses embrace digital transformation. What began in a modest office has grown into a leading
              technology solutions company serving over 150 clients worldwide.
            </p>

            <p>
              Our journey has been marked by continuous innovation, client success, and a commitment to excellence.
              We've delivered over 500 projects spanning web development, mobile apps, digital marketing, ERP systems,
              and custom software solutions.
            </p>

            <p>
              Today, Ruesafe stands as a trusted partner for businesses looking to scale, innovate, and thrive in the
              digital world. Our team of 50+ skilled professionals works tirelessly to ensure every client receives the
              highest quality solutions and support.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Our Values</h2>
          <p className="text-foreground/60 text-center mb-16 max-w-2xl mx-auto">
            Guiding principles that shape everything we do
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="p-8 rounded-xl border border-border bg-card hover:border-accent/50 transition-all duration-300 text-center animate-slide-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-foreground/60">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Our Team</h2>
          <p className="text-foreground/60 text-center mb-16 max-w-2xl mx-auto">
            50+ talented professionals dedicated to your success
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div
                key={member.role}
                className="p-8 rounded-xl border border-border bg-card text-center animate-slide-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-4xl font-bold text-accent mb-2">{member.count}</p>
                <h3 className="font-bold text-foreground mb-2">{member.role}</h3>
                <p className="text-sm text-foreground/60">{member.experience} experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">Achievements</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in" style={{ animationDelay: "0ms" }}>
              <p className="text-5xl font-bold text-accent mb-2">500+</p>
              <p className="text-foreground/60">Projects Completed</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "100ms" }}>
              <p className="text-5xl font-bold text-accent mb-2">150+</p>
              <p className="text-foreground/60">Happy Clients</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "200ms" }}>
              <p className="text-5xl font-bold text-accent mb-2">50+</p>
              <p className="text-foreground/60">Team Members</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "300ms" }}>
              <p className="text-5xl font-bold text-accent mb-2">14+</p>
              <p className="text-foreground/60">Years in Business</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
