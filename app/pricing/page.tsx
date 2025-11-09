"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    description: "Perfect for small projects",
    price: "$2,999",
    period: "per project",
    features: [
      "Up to 5 pages",
      "Basic design",
      "Mobile responsive",
      "Basic SEO",
      "1 round of revisions",
      "3 months support",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    description: "For growing businesses",
    price: "$7,999",
    period: "per project",
    features: [
      "Up to 20 pages",
      "Advanced design",
      "Mobile responsive",
      "Full SEO optimization",
      "5 rounds of revisions",
      "6 months support",
      "Analytics integration",
      "Form integration",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "Custom solutions",
    price: "Custom",
    period: "quote",
    features: [
      "Unlimited pages",
      "Premium design",
      "Mobile responsive",
      "Enterprise SEO",
      "Unlimited revisions",
      "12 months support",
      "Custom integrations",
      "Database integration",
      "API development",
      "Dedicated account manager",
    ],
    highlighted: false,
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
        </div>

        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Simple, Transparent <span className="text-accent">Pricing</span>
          </h1>
          <p className="text-lg text-foreground/60 leading-relaxed">
            Choose the perfect plan for your business. We offer flexible solutions for projects of any size.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`rounded-xl border transition-all duration-300 animate-slide-in-up ${
                  plan.highlighted
                    ? "border-accent bg-card ring-2 ring-accent/50 transform md:scale-105"
                    : "border-border bg-card hover:border-accent/50"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.highlighted && (
                  <div className="px-6 py-3 bg-accent/20 border-b border-accent/50 text-accent text-sm font-semibold text-center">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-foreground/60 text-sm mb-6">{plan.description}</p>

                  <div className="mb-8">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-foreground/60 ml-2">/{plan.period}</span>
                  </div>

                  <Link href="/contact" className="w-full mb-8 block">
                    <Button size="lg" className="w-full" variant={plan.highlighted ? "default" : "outline"}>
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>

                  <div className="space-y-4">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Frequently Asked Questions</h2>
          <p className="text-foreground/60 text-center mb-16">Have questions? We're here to help.</p>

          <div className="space-y-6">
            {[
              {
                q: "Can I customize my plan?",
                a: "All our plans can be customized to meet your specific needs. Contact our team to discuss your requirements.",
              },
              {
                q: "What is included in support?",
                a: "Support includes bug fixes, updates, and technical assistance. For Enterprise plans, you get a dedicated account manager.",
              },
              {
                q: "Do you offer payment plans?",
                a: "Yes, we can arrange payment plans for larger projects. Contact us to discuss flexible payment options.",
              },
              {
                q: "What if I need to scale up?",
                a: "Our plans are flexible and scalable. You can upgrade or modify your plan anytime based on your evolving needs.",
              },
            ].map((faq, index) => (
              <div
                key={faq.q}
                className="p-6 rounded-lg border border-border bg-card animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <h3 className="font-semibold text-foreground mb-3">{faq.q}</h3>
                <p className="text-foreground/60 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
