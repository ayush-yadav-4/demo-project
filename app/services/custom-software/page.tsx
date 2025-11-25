"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Cpu, ArrowRight } from "lucide-react";

import ServiceHero from "../../components/service-hero";
import ServiceFeatures from "../../components/service-features";
import ServiceProcess from "../../components/service-process";
import ServiceTech from "../../components/service-tech";

export default function CustomSoftwarePage() {
  const features = [
    { title: "Scalable Architecture", description: "Design systems that grow with you" },
    { title: "Security-first", description: "Built with security and compliance in mind" },
    { title: "API Integrations", description: "Connect internal and external systems" },
    { title: "Testing & CI/CD", description: "Quality pipelines and test automation" },
  ];

  const process = [
    { step: "01", title: "Discovery", description: "Gather requirements & constraints" },
    { step: "02", title: "Design", description: "Prototypes, UX and architecture" },
    { step: "03", title: "Build", description: "Iterative delivery with CI/CD" },
    { step: "04", title: "Operate", description: "Monitoring, SRE & support" },
  ];

  const technologies = ["Node.js", "TypeScript", "Docker", "Postgres", "Kubernetes"];

  return (
    <main className="min-h-screen bg-background bg-gray-100">
      <div className="relative overflow-hidden">
        <div className="absolute -left-16 top-6 w-64 h-64 rounded-full bg-blue-300/8 blur-3xl animate-blob pointer-events-none" />
        <ServiceHero
          title="Custom Software"
          subtitle="Tailored systems built for your workflows"
          description="Custom platforms and services designed to fit your business needs and constraints."
        />

        <section className="max-w-7xl mx-auto px-6 py-12">
          <motion.h3 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-slate-900 mb-6">
            Tailored engineering, delivered
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f) => (
              <motion.div key={f.title} whileHover={{ translateY: -6 }} className="p-6 bg-white rounded-2xl shadow border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{f.title}</h4>
                    <p className="text-sm text-slate-600 mt-1">{f.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <ServiceProcess process={process} />
          </div>

          <div className="mt-10">
            <ServiceTech technologies={technologies} />
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact" className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
              Talk to us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}