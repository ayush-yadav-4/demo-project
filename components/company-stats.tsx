"use client"

const stats = [
  { value: "500+", label: "PROJECTS DELIVERED", description: "Successfully completed across all service verticals" },
  { value: "150+", label: "HAPPY CLIENTS", description: "From startups to enterprises worldwide" },
  { value: "50+", label: "TEAM MEMBERS", description: "Experts in their respective domains" },
  { value: "25+", label: "COUNTRIES SERVED", description: "Global reach and local expertise" },
  { value: "15+", label: "YEARS OF EXPERIENCE", description: "Industry-leading expertise and innovation" },
  { value: "99.9%", label: "UPTIME GUARANTEE", description: "Reliable and consistent service delivery" },
]

export function CompanyStats() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-accent/5" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            RupeSafe Stats at a Glance
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Our impact measured in successful projects, satisfied clients, and years of expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative p-8 rounded-xl border border-border bg-card/50 backdrop-blur hover:border-accent/50 transition-all duration-300 group overflow-hidden animate-slide-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 space-y-3 text-center">
                <p 
                  className="text-5xl md:text-6xl font-bold mb-2 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, oklch(0.75 0.2 150) 0%, oklch(0.85 0.25 150) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.value}
                </p>
                <p className="font-semibold text-foreground text-sm uppercase tracking-wider">{stat.label}</p>
                <p className="text-xs text-foreground/60">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
