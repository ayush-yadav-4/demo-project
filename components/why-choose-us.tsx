"use client"

import { CheckCircle2, Zap, Shield, TrendingUp, Users, Lightbulb } from "lucide-react"

const features = [
	{
		icon: CheckCircle2,
		title: "Proven Expertise",
		description: "Years of experience delivering enterprise-grade solutions across industries",
	},
	{
		icon: Zap,
		title: "Fast Implementation",
		description: "Quick deployment and integration with minimal disruption to your operations",
	},
	{
		icon: Shield,
		title: "Security First",
		description: "Industry-leading security standards and compliance certifications",
	},
	{
		icon: TrendingUp,
		title: "Scalability",
		description: "Solutions that grow with your business, from startups to enterprises",
	},
	{
		icon: Users,
		title: "24/7 Support",
		description: "Dedicated support team available round the clock for your peace of mind",
	},
	{
		icon: Lightbulb,
		title: "Innovation",
		description: "Cutting-edge technology and continuous updates to stay ahead",
	},
]

export function WhyChooseUs() {
	return (
		<section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="text-center mb-20 animate-fade-in">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						Why Choose RupeSafe?
					</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						We deliver comprehensive solutions backed by expert teams and proven
						methodologies
					</p>
				</div>

				{/* Left-Right Alternating Layout */}
				<div className="space-y-16">
					{/* Row 1 - Left Content, Right Image */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div className="animate-slide-in-left">
							<div className="space-y-6">
								<div className="inline-block px-4 py-2 bg-orange-100 rounded-full">
									<span className="text-orange-600 font-semibold text-sm">
										Our Advantage
									</span>
								</div>
								<h3 className="text-3xl md:text-4xl font-bold text-gray-900">
									Expert-Driven Solutions
								</h3>
								<p className="text-lg text-gray-600 leading-relaxed">
									Our team of certified professionals brings deep expertise and
									industry knowledge to every project. We don't just build
									solutions—we build partnerships.
								</p>
								<div className="space-y-4">
									<div className="flex gap-3">
										<CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
										<span className="text-gray-700">
											Certified professionals with 15+ years experience
										</span>
									</div>
									<div className="flex gap-3">
										<CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
										<span className="text-gray-700">
											Proven track record across Fortune 500 companies
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className="h-96 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center animate-slide-in-right">
							<div className="text-center">
								<div className="text-6xl mb-4">👥</div>
								<p className="text-gray-600 font-semibold">Expert Team</p>
							</div>
						</div>
					</div>

					{/* Row 2 - Right Image, Left Content */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div className="h-96 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center order-2 lg:order-1 animate-slide-in-left">
							<div className="text-center">
								<div className="text-6xl mb-4">⚡</div>
								<p className="text-gray-600 font-semibold">Fast Implementation</p>
							</div>
						</div>
						<div className="order-1 lg:order-2 animate-slide-in-right">
							<div className="space-y-6">
								<div className="inline-block px-4 py-2 bg-blue-100 rounded-full">
									<span className="text-blue-600 font-semibold text-sm">
										Speed & Efficiency
									</span>
								</div>
								<h3 className="text-3xl md:text-4xl font-bold text-gray-900">
									Rapid Deployment
								</h3>
								<p className="text-lg text-gray-600 leading-relaxed">
									We understand that time is money. Our agile methodology ensures
									quick implementation without compromising quality or security.
								</p>
								<div className="space-y-4">
									<div className="flex gap-3">
										<Zap className="w-6 h-6 text-blue-500 flex-shrink-0" />
										<span className="text-gray-700">
											Average deployment in 4-6 weeks
										</span>
									</div>
									<div className="flex gap-3">
										<Zap className="w-6 h-6 text-blue-500 flex-shrink-0" />
										<span className="text-gray-700">
											Minimal downtime and seamless migration
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Row 3 - Left Content, Right Image */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div className="animate-slide-in-left">
							<div className="space-y-6">
								<div className="inline-block px-4 py-2 bg-green-100 rounded-full">
									<span className="text-green-600 font-semibold text-sm">
										Security & Support
									</span>
								</div>
								<h3 className="text-3xl md:text-4xl font-bold text-gray-900">
									Enterprise-Grade Security
								</h3>
								<p className="text-lg text-gray-600 leading-relaxed">
									Security isn't an afterthought—it's built into every layer of our
									solutions. We maintain the highest compliance standards.
								</p>
								<div className="space-y-4">
									<div className="flex gap-3">
										<Shield className="w-6 h-6 text-green-500 flex-shrink-0" />
										<span className="text-gray-700">
											ISO 27001, SOC 2, and GDPR compliant
										</span>
									</div>
									<div className="flex gap-3">
										<Shield className="w-6 h-6 text-green-500 flex-shrink-0" />
										<span className="text-gray-700">
											24/7 monitoring and incident response
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className="h-96 rounded-2xl bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center animate-slide-in-right">
							<div className="text-center">
								<div className="text-6xl mb-4">🔒</div>
								<p className="text-gray-600 font-semibold">Secure Infrastructure</p>
							</div>
						</div>
					</div>
				</div>

				{/* Features Grid */}
				<div className="mt-24 pt-24 border-t border-gray-200">
					<h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
						Core Capabilities
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{features.map((feature, index) => {
							const Icon = feature.icon
							return (
								<div
									key={index}
									className="p-8 rounded-xl bg-white border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300 group animate-fade-in-up"
									style={{ animationDelay: `${index * 100}ms` }}
								>
									<Icon className="w-8 h-8 text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
									<h4 className="text-lg font-bold text-gray-900 mb-2">
										{feature.title}
									</h4>
									<p className="text-gray-600">{feature.description}</p>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}
