"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Code, ArrowRight } from "lucide-react";

import ServiceHero from "../../components/service-hero";
import ServiceFeatures from "../../components/service-features";
import ServiceProcess from "../../components/service-process";
import ServiceTech from "../../components/service-tech";

export default function WebDevelopmentPage() {
  const features = [
    { title: "Next.js & React", description: "Modern React apps with SSR and static options" },
    { title: "Performance", description: "Optimized for speed and Core Web Vitals" },
    { title: "Accessibility", description: "Inclusive designs built for everyone" },
    { title: "SEO", description: "Technical SEO baked into architecture" },
  ];

  const process = [
    { step: "01", title: "Discovery", description: "Understand goals, metrics and constraints" },
    { step: "02", title: "Design", description: "Craft accessible, responsive UI systems" },
    { step: "03", title: "Build", description: "Ship robust frontend and backend services" },
    { step: "04", title: "Optimize", description: "Measure and iterate to improve outcomes" },
  ];

  const technologies = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Node.js"];

  return (
    <main className="min-h-screen bg-background bg-gray-100">
      <div className="relative overflow-hidden">
        <div className="absolute -right-20 -top-24 w-72 h-72 rounded-full bg-blue-300/8 blur-3xl animate-blob pointer-events-none" />
        <ServiceHero
          title="Web Development"
          subtitle="High-performance, scalable web applications"
          description="We build fast, accessible web products using modern frameworks and best practices."
        />

        <section className="max-w-7xl mx-auto px-6 py-12">
          <motion.h3 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-slate-900 mb-6">
            Core capabilities
          </motion.h3>

          <ServiceFeatures features={features} />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div className="p-6 rounded-2xl bg-white shadow-lg hover:-translate-y-2 transition" whileHover={{ scale: 1.02 }}>
              <h4 className="font-semibold text-slate-900">Performance-first architecture</h4>
              <p className="text-sm text-slate-600 mt-2">Server-side rendering, edge caching and critical performance tuning.</p>
            </motion.div>

            <motion.div className="p-6 rounded-2xl bg-white shadow-lg hover:-translate-y-2 transition" whileHover={{ scale: 1.02 }}>
              <h4 className="font-semibold text-slate-900">Accessible by default</h4>
              <p className="text-sm text-slate-600 mt-2">We bake accessibility into components and patterns for real users.</p>
            </motion.div>
          </div>

          <div className="mt-10">
            <ServiceProcess process={process} />
          </div>

          <div className="mt-10">
            <ServiceTech technologies={technologies} />
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact" className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
              Work with us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}