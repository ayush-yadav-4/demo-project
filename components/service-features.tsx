"use client"

import { CheckCircle } from "lucide-react"

interface Feature {
  title: string
  description: string
}

interface ServiceFeaturesProps {
  features: Feature[]
}

export function ServiceFeatures({ features }: ServiceFeaturesProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Key Features</h2>
        <p className="text-foreground/60 text-center mb-16 max-w-2xl mx-auto">
          Everything you need to succeed with our service
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={feature.title} className="animate-slide-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-foreground/60 text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
