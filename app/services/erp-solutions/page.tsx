"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Database, ArrowRight } from "lucide-react";

import ServiceHero from "../../components/service-hero";
import ServiceFeatures from "../../components/service-features";
import ServiceProcess from "../../components/service-process";
import ServiceTech from "../../components/service-tech";

export default function ERPSolutionsPage() {
  const features = [
    { title: "Process Automation", description: "Automate finance, HR and operations" },
    { title: "Realtime Reporting", description: "Live dashboards for decision making" },
    { title: "Integrations", description: "Connect to your existing systems via APIs" },
    { title: "Security", description: "Role-based access and audit trails" },
  ];

  const process = [
    { step: "01", title: "Assessment", description: "Map existing processes and needs" },
    { step: "02", title: "Design", description: "Blueprint the ERP modules and workflows" },
    { step: "03", title: "Implement", description: "Configure and develop integrations" },
    { step: "04", title: "Adopt", description: "Train users and monitor adoption" },
  ];

  const technologies = ["Postgres", "Node.js", "Redis", "GraphQL", "AWS"];

  return (
    <main className="min-h-screen bg-background bg-gray-100">
      <div className="relative">
        <div className="absolute -left-32 top-8 w-80 h-80 rounded-full bg-blue-300/6 blur-3xl animate-blob pointer-events-none" />
        <ServiceHero
          title="ERP Solutions"
          subtitle="Unified systems to run your business"
          description="We deliver ERP systems that centralize operations, reporting and team workflows."
        />

        <section className="max-w-7xl mx-auto px-6 py-12">
          <motion.h3 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-slate-900 mb-6">
            ERP features that scale
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f) => (
              <motion.div key={f.title} whileHover={{ translateY: -6 }} className="p-6 bg-white rounded-2xl shadow border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                    <Database className="w-5 h-5" />
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
              Talk ERP <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}