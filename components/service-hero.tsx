"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceHeroProps {
  title: string
  subtitle: string
  description: string
}

export function ServiceHero({ title, subtitle, description }: ServiceHeroProps) {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">{title}</h1>
          <p className="text-xl text-accent mb-4 font-semibold">{subtitle}</p>
          <p className="text-lg text-foreground/60 leading-relaxed mb-8">{description}</p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="relative rounded-2xl overflow-hidden glass">
          <div className="aspect-video bg-gradient-to-br from-primary/20 via-transparent to-accent/20 flex items-center justify-center">
            <img src="/placeholder.svg?key=service" alt={title} className="w-full h-full object-cover opacity-80" />
          </div>
        </div>
      </div>
    </section>
  )
}
