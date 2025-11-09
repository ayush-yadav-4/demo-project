"use client"

interface ServiceTechProps {
  technologies: string[]
}

export function ServiceTech({ technologies }: ServiceTechProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Technologies We Use</h2>
        <p className="text-foreground/60 text-center mb-16 max-w-2xl mx-auto">Built with modern, proven technologies</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={tech}
              className="p-4 rounded-lg border border-border bg-card hover:border-accent/50 transition-all duration-300 text-center animate-slide-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <p className="font-semibold text-foreground">{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
