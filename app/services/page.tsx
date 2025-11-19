'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Code, Smartphone, TrendingUp, Database, Boxes, CheckCircle } from 'lucide-react';

const services = [
	{
		id: 'website-development',
		title: 'Website Development',
		icon: Code,
		description:
			'Build stunning, responsive websites that engage users and drive results.',
		features: [
			'Custom responsive design',
			'SEO optimization',
			'Fast loading performance',
			'Mobile-first approach',
			'CMS integration',
			'Analytics setup',
		],
		image: '/img-1.png',
	},
	{
		id: 'app-development',
		title: 'App Development',
		icon: Smartphone,
		description:
			'Create powerful mobile and web applications for all platforms.',
		features: [
			'iOS & Android development',
			'Cross-platform solutions',
			'Cloud integration',
			'Real-time notifications',
			'Offline functionality',
			'App store deployment',
		],
		image: '/img-2.png',
	},
	{
		id: 'digital-marketing',
		title: 'Digital Marketing',
		icon: TrendingUp,
		description:
			'Grow your online presence with strategic marketing solutions.',
		features: [
			'SEO & SEM campaigns',
			'Social media marketing',
			'Content strategy',
			'Email marketing',
			'Analytics & reporting',
			'Brand building',
		],
		image: '/img-1.png',
	},
	{
		id: 'erp-systems',
		title: 'ERP Systems',
		icon: Database,
		description:
			'Streamline operations with integrated enterprise solutions.',
		features: [
			'System implementation',
			'Process optimization',
			'Data migration',
			'User training',
			'Custom modules',
			'24/7 support',
		],
		image: '/img-2.png',
	},
	{
		id: 'custom-software',
		title: 'Custom Software',
		icon: Boxes,
		description: 'Tailored software solutions for unique business needs.',
		features: [
			'Requirements analysis',
			'Architecture design',
			'Development & testing',
			'Deployment support',
			'Maintenance & updates',
			'Scalability planning',
		],
		image: '/img-1.png',
	},
	{
		id: 'consulting',
		title: 'Technology Consulting',
		icon: CheckCircle,
		description:
			'Expert guidance for your digital transformation journey.',
		features: [
			'Digital strategy',
			'Technology audit',
			'Implementation roadmap',
			'Team augmentation',
			'Best practices review',
			'Risk assessment',
		],
		image: '/img-2.png',
	},
];

export default function Services() {
	return (
		<div className="min-h-screen bg-gray-100">
			{/* Background Moving Elements */}
			<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
				<div className="absolute top-10 left-10 w-72 h-72 bg-blue-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
				<div className="absolute top-40 right-10 w-72 h-72 bg-purple-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
			</div>

			{/* Header Section */}
			<section
				className="relative py-24 text-white overflow-hidden"
				style={{
					backgroundImage: 'url(/footersection-1.png)',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div className="absolute inset-0 bg-black/50"></div>
				<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
						Our Services
					</h1>
					<p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
						Comprehensive technology solutions tailored to your business needs
					</p>
				</div>
			</section>

			{/* Services Grid */}
			<section className="py-20 relative z-10">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid md:grid-cols-2 gap-12">
						{services.map((service, index) => {
							const IconComponent = service.icon;
							return (
								<Card
									key={service.id}
									className="border-0 overflow-hidden bg-white hover:shadow-2xl transition-all duration-300 group animate-in fade-in slide-in-from-bottom-8"
									style={{
										animationDelay: `${index * 100}ms`,
									}}
								>
									<div className="grid md:grid-cols-2 gap-0 h-full">
										{/* Image */}
										<div className="relative overflow-hidden h-80 md:h-full">
											<img
												src={service.image}
												alt={service.title}
												className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-transparent"></div>
										</div>

										{/* Content */}
										<div className="p-8 flex flex-col justify-between">
											<div>
												<div className="flex items-center gap-3 mb-4">
													<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
														<IconComponent className="h-6 w-6 text-white" />
													</div>
													<h3 className="text-2xl font-bold text-gray-900">
														{service.title}
													</h3>
												</div>
												<p className="text-gray-600 mb-6">
													{service.description}
												</p>

												<div className="space-y-3 mb-6">
													{service.features.map((feature, i) => (
														<div
															key={i}
															className="flex items-center gap-2"
														>
															<div className="w-2 h-2 bg-blue-600 rounded-full"></div>
															<span className="text-sm text-gray-700">
																{feature}
															</span>
														</div>
													))}
												</div>
											</div>

											<Link href="/contact">
												<Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
													Get Started
													<ArrowRight className="ml-2 h-4 w-4" />
												</Button>
											</Link>
										</div>
									</div>
								</Card>
							);
						})}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section
				className="relative py-20 text-white overflow-hidden z-10"
				style={{
					backgroundImage: 'url(/footersection-1.png)',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div className="absolute inset-0 bg-black/60"></div>
				<div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						Ready to Get Started?
					</h2>
					<p className="text-xl mb-8 text-blue-100">
						Let's discuss how our services can transform your business
					</p>
					<Link href="/contact">
						<Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
							Contact Us Today
							<ArrowRight className="ml-2 h-5 w-5" />
						</Button>
					</Link>
				</div>
			</section>
		</div>
	);
}
