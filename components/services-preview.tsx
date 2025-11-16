"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
	{
		id: 1,
		title: "Web Development",
		description:
			"Build stunning, responsive websites that convert visitors into customers.",
		href: "/services/web-development",
	},
	{
		id: 2,
		title: "App Development",
		description:
			"Create powerful mobile and desktop applications tailored to your needs.",
		href: "/services/app-development",
	},
	{
		id: 3,
		title: "Digital Marketing",
		description:
			"Reach your audience with data-driven marketing strategies and campaigns.",
		href: "/services/digital-marketing",
	},
	{
		id: 4,
		title: "Software Development",
		description:
			"Enterprise-grade software solutions built for scale and performance.",
		href: "/services/software-development",
	},
	{
		id: 5,
		title: "ERP Solutions",
		description:
			"Streamline your business processes with integrated ERP systems.",
		href: "/services/erp-solutions",
	},
	{
		id: 6,
		title: "Payment Gateway",
		description:
			"Secure payment processing solutions for seamless transactions.",
		href: "/services/payment-gateway",
	},
]

export function ServicesPreview() {
	return (
		<section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						Our Services
					</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Comprehensive solutions to transform your business and drive growth
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<Link key={service.id} href={service.href}>
							<div
								className="group relative p-8 bg-white rounded-xl border border-gray-200 hover:border-orange-500 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer h-full overflow-hidden animate-slide-up"
								style={{
									animationDelay: `${index * 100}ms`,
								}}
							>
								{/* Background gradient on hover */}
								<div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

								{/* Icon/Number */}
								<div className="mb-6">
									<div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform duration-300">
										{String(index + 1).padStart(2, "0")}
									</div>
								</div>

								{/* Title */}
								<h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
									{service.title}
								</h3>

								{/* Description */}
								<p className="text-gray-600 mb-6 leading-relaxed">
									{service.description}
								</p>

								{/* Learn More Link */}
								<div className="flex items-center text-orange-600 font-semibold group-hover:gap-2 gap-1 transition-all duration-300">
									Learn More
									<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
								</div>

								{/* Animated border */}
								<div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full transition-all duration-500" />
							</div>
						</Link>
					))}
				</div>

				{/* Animated Section Below Services */}
				<div className="mt-20">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Stat 1 */}
						<div className="text-center p-8 rounded-xl bg-white border border-gray-200 hover:border-orange-500 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
							<div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">
								500+
							</div>
							<p className="text-gray-600 text-lg">Projects Delivered</p>
						</div>

						{/* Stat 2 */}
						<div className="text-center p-8 rounded-xl bg-white border border-gray-200 hover:border-orange-500 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
							<div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">
								98%
							</div>
							<p className="text-gray-600 text-lg">Client Satisfaction</p>
						</div>

						{/* Stat 3 */}
						<div className="text-center p-8 rounded-xl bg-white border border-gray-200 hover:border-orange-500 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "500ms" }}>
							<div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">
								50+
							</div>
							<p className="text-gray-600 text-lg">Expert Team Members</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
