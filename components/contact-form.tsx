"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    }, 1000)
  }

  if (submitted) {
    return (
      <div className="bg-card border border-accent/50 rounded-xl p-8 text-center animate-fade-in">
        <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
        <p className="text-foreground/60">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          placeholder="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-card border-border hover:border-accent/50 transition-colors"
        />
        <Input
          placeholder="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-card border-border hover:border-accent/50 transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          placeholder="Phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="bg-card border-border hover:border-accent/50 transition-colors"
        />
        <Input
          placeholder="Company Name"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="bg-card border-border hover:border-accent/50 transition-colors"
        />
      </div>

      <div>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground hover:border-accent/50 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <option value="">Select a Service</option>
          <option value="web-development">Website Development</option>
          <option value="app-development">App Development</option>
          <option value="digital-marketing">Digital Marketing</option>
          <option value="erp-solutions">ERP Solutions</option>
          <option value="software-development">Software Development</option>
          <option value="payment-gateway">Payment Gateway</option>
          <option value="other">Other</option>
        </select>
      </div>

      <Textarea
        placeholder="Tell us about your project..."
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        rows={6}
        className="bg-card border-border hover:border-accent/50 transition-colors resize-none"
      />

      <Button type="submit" disabled={loading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
        {loading ? "Sending..." : "Send Message"}
      </Button>

      <p className="text-xs text-foreground/60 text-center">
        We respect your privacy. Your information will be kept confidential.
      </p>
    </form>
  )
}
