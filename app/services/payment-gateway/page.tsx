"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatures } from "@/components/service-features"
import { ServiceProcess } from "@/components/service-process"
import { ServiceTech } from "@/components/service-tech"

export default function PaymentGatewayPage() {
  const features = [
    { title: "Secure Processing", description: "PCI DSS compliant payment processing" },
    { title: "Multiple Methods", description: "Support for credit cards, digital wallets, and more" },
    { title: "Fast Transactions", description: "Ultra-fast payment processing" },
    { title: "Global Support", description: "Accept payments from customers worldwide" },
    { title: "Fraud Detection", description: "Advanced security to prevent fraudulent transactions" },
    { title: "Easy Integration", description: "Simple API for seamless integration" },
  ]

  const process = [
    { step: "01", title: "Setup", description: "Configure payment gateway accounts" },
    { step: "02", title: "Integration", description: "Integrate APIs into your platform" },
    { step: "03", title: "Testing", description: "Test payment flows thoroughly" },
    { step: "04", title: "Compliance", description: "Ensure PCI DSS compliance" },
    { step: "05", title: "Launch", description: "Go live with payment processing" },
    { step: "06", title: "Monitoring", description: "Monitor transactions and security" },
  ]

  const technologies = [
    "Stripe",
    "PayPal",
    "Square",
    "Razorpay",
    "Adyen",
    "Node.js",
    "PostgreSQL",
    "Webhooks",
    "SSL/TLS",
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ServiceHero
        title="Payment Gateway"
        subtitle="Secure payment processing for your business"
        description="Integrate reliable payment processing into your platform with enterprise-grade security and support."
      />
      <ServiceFeatures features={features} />
      <ServiceProcess process={process} />
      <ServiceTech technologies={technologies} />
      <Footer />
    </main>
  )
}
