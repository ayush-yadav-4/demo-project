"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Code2, 
  Database, 
  Cloud, 
  Lock, 
  Smartphone, 
  Globe, 
  Cpu, 
  Zap,
  CheckCircle2,
  ArrowRight,
  Layers,
  Settings
} from "lucide-react";

export default function CustomSoftwarePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-blue-100">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-70" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6">
                <Code2 className="w-4 h-4" />
                <span>Custom Software Development</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                Tailored Solutions for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Complex Challenges
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                We build scalable, secure, and high-performance software tailored to your unique business needs. From enterprise platforms to specialized tools, we turn your vision into reality.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center gap-2">
                  Start Your Project <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#process" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-all">
                  Our Process
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-2 border border-slate-100">
                <Image 
                  src="/custom-software-hero.jpg" 
                  alt="Custom Software Development" 
                  width={600} 
                  height={400} 
                  className="rounded-xl w-full h-auto"
                />
                
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">99.9% Uptime</div>
                    <div className="text-xs text-slate-500">Guaranteed Reliability</div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">High Performance</div>
                    <div className="text-xs text-slate-500">Optimized Architecture</div>
                  </div>
                </motion.div>
              </div>
              
              {/* Decorative Blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Key Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Custom Software?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Off-the-shelf solutions often fall short. Custom software gives you exactly what you need to scale and succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Layers,
                title: "Scalable Architecture",
                desc: "Built to grow with your business, handling increased loads without compromising performance."
              },
              {
                icon: Lock,
                title: "Enhanced Security",
                desc: "Custom security protocols designed specifically for your data and compliance requirements."
              },
              {
                icon: Settings,
                title: "Seamless Integration",
                desc: "Perfectly integrates with your existing tools and workflows, eliminating data silos."
              },
              {
                icon: Zap,
                title: "Optimized Performance",
                desc: "Lean code and efficient algorithms ensure your application runs lightning fast."
              },
              {
                icon: Cloud,
                title: "Cloud Native",
                desc: "Leverage the power of the cloud for flexibility, reliability, and cost-efficiency."
              },
              {
                icon: Smartphone,
                title: "Cross-Platform",
                desc: "Accessible on any device, ensuring your team can work from anywhere."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-slate-100 group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <feature.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Tech Stack Marquee */}
      <section className="py-16 bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-10">
          <h3 className="text-2xl font-bold text-white">Powered by Modern Technologies</h3>
        </div>
        
        <div className="flex gap-12 animate-scroll-left whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center">
              {["React", "Node.js", "Python", "AWS", "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "Redis", "GraphQL"].map((tech) => (
                <span key={tech} className="text-2xl font-bold text-slate-400 hover:text-white transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* 4. Process Section */}
      <section id="process" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Development Process</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A transparent, agile approach ensuring we deliver value at every step.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block -translate-x-1/2" />

            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                desc: "We dive deep into your business goals, user needs, and technical requirements to build a solid roadmap."
              },
              {
                step: "02",
                title: "Design & Prototyping",
                desc: "Creating intuitive UI/UX designs and interactive prototypes to visualize the solution before coding."
              },
              {
                step: "03",
                title: "Agile Development",
                desc: "Iterative development with regular sprints, keeping you involved and adaptable to changes."
              },
              {
                step: "04",
                title: "Testing & QA",
                desc: "Rigorous testing including automated, manual, and security tests to ensure a bug-free launch."
              },
              {
                step: "05",
                title: "Deployment & Support",
                desc: "Smooth deployment to production followed by ongoing maintenance and optimization."
              }
            ].map((item, idx) => (
              <div key={idx} className={`relative flex items-center justify-between mb-12 md:mb-24 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="hidden md:block w-5/12" />
                
                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center z-10 shadow-lg border-4 border-white hidden md:flex">
                  {item.step}
                </div>

                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full md:w-5/12 bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
                >
                  <div className="md:hidden inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-4">
                    Step {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Your Custom Solution?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Let's discuss your project requirements and how we can help you achieve your business goals with custom software.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-all shadow-xl">
            Get a Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </main>
  );
}