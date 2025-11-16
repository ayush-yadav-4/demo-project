"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#FFF5EB] to-white z-10">
        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight text-[#1E1E1E]">
            Get in{" "}
            <span className="text-[#F2A46F]">
              Touch
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#6A6A6A] max-w-2xl mx-auto leading-relaxed">
            Have questions or ready to start your next project? We'd love to hear from you.
            Get in touch with our team today.
          </p>
        </div>
      </section>

      {/* Contact Section with Background Image */}
      <section 
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden z-20"
        style={{
          backgroundImage: "url('/footersection-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        {/* Smooth Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/20 to-white/40" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {/* Email Card */}
              <div className="p-6 rounded-xl bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-[#F2A46F]/30 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#F2A46F]/10">
                    <Mail className="w-6 h-6 text-[#F2A46F]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1E1E1E] mb-1">Email</h3>
                    <p className="text-[#6A6A6A] text-sm">info@rupesafe.com</p>
                    <p className="text-[#6A6A6A] text-sm">support@rupesafe.com</p>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-6 rounded-xl bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-[#F2A46F]/30 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#F2A46F]/10">
                    <Phone className="w-6 h-6 text-[#F2A46F]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1E1E1E] mb-1">Phone</h3>
                    <p className="text-[#6A6A6A] text-sm">+1 (555) 123-4567</p>
                    <p className="text-[#6A6A6A] text-sm">+1 (555) 987-6543</p>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-6 rounded-xl bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-[#F2A46F]/30 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#F2A46F]/10">
                    <MapPin className="w-6 h-6 text-[#F2A46F]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1E1E1E] mb-1">Location</h3>
                    <p className="text-[#6A6A6A] text-sm">123 Business Street</p>
                    <p className="text-[#6A6A6A] text-sm">New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="p-8 rounded-xl bg-white/90 backdrop-blur-sm border border-gray-200 shadow-soft-lg">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#FFF5EB] z-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1E1E1E] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#6A6A6A]">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="space-y-4">
            {/* FAQ Items */}
            <details className="p-6 rounded-lg border border-gray-200 bg-white hover:border-[#F2A46F]/30 transition-all duration-300 group cursor-pointer">
              <summary className="font-bold text-[#1E1E1E] flex items-center justify-between">
                What is your typical project timeline?
                <span className="group-open:rotate-180 transition-transform duration-300">→</span>
              </summary>
              <p className="text-[#6A6A6A] mt-4">
                Project timelines vary based on scope and complexity. Most projects range from 4-12 weeks. We'll provide a detailed timeline after the initial consultation.
              </p>
            </details>

            <details className="p-6 rounded-lg border border-gray-200 bg-white hover:border-[#F2A46F]/30 transition-all duration-300 group cursor-pointer">
              <summary className="font-bold text-[#1E1E1E] flex items-center justify-between">
                Do you offer support after project completion?
                <span className="group-open:rotate-180 transition-transform duration-300">→</span>
              </summary>
              <p className="text-[#6A6A6A] mt-4">
                Yes, we offer comprehensive post-launch support and maintenance packages tailored to your needs.
              </p>
            </details>

            <details className="p-6 rounded-lg border border-gray-200 bg-white hover:border-[#F2A46F]/30 transition-all duration-300 group cursor-pointer">
              <summary className="font-bold text-[#1E1E1E] flex items-center justify-between">
                What technologies do you specialize in?
                <span className="group-open:rotate-180 transition-transform duration-300">→</span>
              </summary>
              <p className="text-[#6A6A6A] mt-4">
                We specialize in modern web technologies, mobile development, cloud platforms, and enterprise solutions. We're platform-agnostic and choose the best tools for your specific needs.
              </p>
            </details>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
