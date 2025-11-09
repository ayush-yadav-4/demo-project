"use client"

interface ProcessStep {
  step: string
  title: string
  description: string
}

interface ServiceProcessProps {
  process: ProcessStep[]
}

export function ServiceProcess({ process }: ServiceProcessProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Our Process</h2>
        <p className="text-foreground/60 text-center mb-16 max-w-2xl mx-auto">
          A proven methodology to deliver exceptional results
        </p>

        <div className="space-y-8">
          {process.map((item, index) => (
            <div key={item.step} className="relative animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                    <span className="text-lg font-bold text-accent">{item.step}</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-foreground/60">{item.description}</p>
                </div>
              </div>
              {index < process.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-12 bg-gradient-to-b from-accent to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
