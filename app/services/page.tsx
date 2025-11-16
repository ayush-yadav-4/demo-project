"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const services = [
    {
        title: "Website Development",
        shortDescription:
            "Modern, responsive websites built with latest technologies.",
        fullDescription:
            "Modern, responsive websites built with latest technologies to engage your audience and drive conversions. We create beautiful, fast, and SEO-optimized websites that convert visitors into customers.",
        href: "/services/web-development",
        features: [
            "Responsive Design",
            "SEO Optimized",
            "High Performance",
            "Modern Stack",
        ],
        image: "/modern-tech-office.png",
        gradient: "from-[#F7D5B5] to-[#FFF5EB]",
    },
    {
        title: "App Development",
        shortDescription:
            "Native and cross-platform mobile apps for exceptional experiences.",
        fullDescription:
            "Native and cross-platform mobile apps that deliver exceptional user experiences across all devices. From iOS to Android, we build apps that users love and businesses trust.",
        href: "/services/app-development",
        features: [
            "iOS & Android",
            "Cross-platform",
            "User Friendly",
            "Native Performance",
        ],
        image: "/placeholder.jpg",
        gradient: "from-[#E8E1F0] to-[#F5F0FA]",
    },
    {
        title: "Digital Marketing",
        shortDescription:
            "Strategic marketing solutions to boost your online presence.",
        fullDescription:
            "Strategic marketing solutions to boost your online presence, drive growth, and maximize ROI. We help you reach the right audience with the right message at the right time.",
        href: "/services/digital-marketing",
        features: ["SEO", "Social Media", "Content Marketing", "Analytics"],
        image: "/placeholder.jpg",
        gradient: "from-[#FEE8D0] to-[#FFF5EB]",
    },
    {
        title: "ERP Solutions",
        shortDescription:
            "Integrate and streamline your business processes with custom ERP.",
        fullDescription:
            "Integrate and streamline your business processes with custom ERP systems designed for scale. Transform your operations with intelligent automation and real-time insights.",
        href: "/services/erp-solutions",
        features: ["Enterprise Ready", "Scalable", "Secure", "Real-time Analytics"],
        image: "/placeholder.jpg",
        gradient: "from-[#F5C7A8] to-[#FEE8D0]",
    },
    {
        title: "Software Development",
        shortDescription:
            "Tailored software solutions for complex business challenges.",
        fullDescription:
            "Tailored software solutions designed to solve complex business challenges and drive innovation. We build custom applications that scale with your business.",
        href: "/services/software-development",
        features: ["Custom Built", "Scalable", "Maintainable", "Cloud Native"],
        image: "/modern-tech-office.png",
        gradient: "from-[#F7D5B5] to-[#FFF5EB]",
    },
    {
        title: "Payment Gateway",
        shortDescription:
            "Secure payment processing integrated seamlessly into your platform.",
        fullDescription:
            "Secure payment processing integrated seamlessly into your platform with global payment support. Accept payments from anywhere in the world with confidence.",
        href: "/services/payment-gateway",
        features: ["Secure", "Fast", "Reliable", "Multi-currency"],
        image: "/placeholder.jpg",
        gradient: "from-[#E8E1F0] to-[#F5F0FA]",
    },
]

export default function ServicesPage() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-[#FFF5EB] to-white">
                <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight text-[#1E1E1E]">
                        Our{" "}
                        <span className="text-[#F2A46F]">
                            Services
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-[#6A6A6A] max-w-2xl mx-auto leading-relaxed">
                        Comprehensive digital solutions designed to transform your business
                        and drive sustainable growth. We don't do one-size-fits-all. Our
                        solutions combine industry expertise with cutting-edge capabilities.
                    </p>
                </div>
            </section>

            {/* Services Grid - Inspired by Wolters Kluwer */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 relative bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div
                                key={service.href}
                                className="group relative"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <Link href={service.href}>
                                    <div className="relative h-full rounded-xl border border-gray-200 bg-white hover:border-[#F2A46F]/30 transition-all duration-300 hover:shadow-soft-lg overflow-hidden animate-slide-in-up">
                                        {/* Image Section - Smaller */}
                                        <div
                                            className={`relative h-40 w-full bg-gradient-to-br ${service.gradient} overflow-hidden`}
                                        >
                                            <div className="absolute inset-0 opacity-20">
                                                <Image
                                                    src={service.image}
                                                    alt={service.title}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent" />
                                        </div>

                                        {/* Content Section */}
                                        <div className="p-5 space-y-3">
                                            <h3 className="text-xl font-bold text-[#1E1E1E] group-hover:text-[#F2A46F] transition-colors duration-300">
                                                {service.title}
                                            </h3>

                                            <p className="text-[#6A6A6A] text-sm leading-relaxed line-clamp-2">
                                                {service.shortDescription}
                                            </p>

                                            {/* Features - Compact */}
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {service.features
                                                    .slice(0, 2)
                                                    .map((feature) => (
                                                        <div
                                                            key={feature}
                                                            className="flex items-center gap-1.5 text-xs text-[#6A6A6A]"
                                                        >
                                                            <CheckCircle2 className="w-3 h-3 text-[#F2A46F]" />
                                                            <span>{feature}</span>
                                                        </div>
                                                    ))}
                                            </div>

                                            {/* CTA */}
                                            <div className="flex items-center gap-2 text-[#F2A46F] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-2">
                                                <span className="text-sm font-semibold">
                                                    Explore Service
                                                </span>
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                            </div>
                                        </div>

                                        {/* Hover Description Overlay */}
                                        {hoveredIndex === index && (
                                            <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-xl p-6 flex flex-col justify-center animate-fade-in z-20 border-2 border-[#F2A46F]/30">
                                                <h4 className="text-lg font-bold text-[#1E1E1E] mb-3">
                                                    {service.title}
                                                </h4>
                                                <p className="text-[#6A6A6A] text-sm leading-relaxed mb-4">
                                                    {service.fullDescription}
                                                </p>
                                                <div className="space-y-2 mb-4">
                                                    {service.features.map((feature) => (
                                                        <div
                                                            key={feature}
                                                            className="flex items-center gap-2 text-sm text-[#6A6A6A]"
                                                        >
                                                            <CheckCircle2 className="w-4 h-4 text-[#F2A46F] flex-shrink-0" />
                                                            <span>{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="flex items-center gap-2 text-[#F2A46F] font-semibold text-sm">
                                                    <span>Learn More</span>
                                                    <ArrowRight className="w-4 h-4" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section with Background Image */}
            <section 
                className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
                style={{
                    backgroundImage: "url('/footersection-1.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed"
                }}
            >
                {/* Smooth Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/20 to-white/40" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="relative p-12 rounded-xl border border-gray-200 bg-white/90 shadow-soft-lg backdrop-blur-sm">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#F7D5B5]/20 via-transparent to-[#E8E1F0]/20 rounded-xl" />
                        <div className="relative z-10 space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E]">
                                Ready to Transform Your Business?
                            </h2>
                            <p className="text-lg text-[#6A6A6A] max-w-2xl mx-auto">
                                Lets discuss how our services can help you achieve your goals and
                                drive innovation.
                            </p>
                            <Link href="/contact">
                                <button className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 bg-[#1E1E1E] hover:bg-[#2A2A2A] text-white shadow-soft-lg hover:scale-105">
                                    <span>Get Started</span>
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

export function ServiceCard({
    icon: Icon,
    title,
    description,
    href,
}: ServiceCardProps) {
    return (
        <Link href={href}>
            <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl mb-4 h-48 bg-gray-100">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300 z-10" />
                    <img
                        src={`/service-${title.toLowerCase()}.png`}
                        alt={title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none"
                        }}
                    />
                </div>
                <h3 className="text-xl font-semibold text-[#1E1E1E] mb-2">
                    {title}
                </h3>
                <p className="text-[#6A6A6A] text-sm">{description}</p>
            </div>
        </Link>
    )
}
