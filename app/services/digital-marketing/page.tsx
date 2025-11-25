"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Megaphone, ArrowRight } from "lucide-react";

import ServiceHero from "../../components/service-hero";
import ServiceFeatures from "../../components/service-features";
import ServiceProcess from "../../components/service-process";
import ServiceTech from "../../components/service-tech";

export default function DigitalMarketingPage() {
  const features = [
    { title: "SEO Strategy", description: "Improve organic visibility and traffic" },
    { title: "Paid Media", description: "ROI-focused campaigns on search & social" },
    { title: "Content", description: "Content that converts and builds brands" },
    { title: "Analytics", description: "Data-driven optimizations and reporting" },
  ];

  const process = [
    { step: "01", title: "Audit", description: "Analyze current performance and gaps" },
    { step: "02", title: "Plan", description: "Channel strategy and creative roadmap" },
    { step: "03", title: "Execute", description: "Run campaigns and content programs" },
    { step: "04", title: "Optimize", description: "Iterate with A/B tests and analytics" },
  ];

  const technologies = ["Google Analytics", "Google Ads", "Meta Ads", "SEO Tools"];

  return (
    <main className="min-h-screen bg-background bg-gray-100">
      <div className="relative overflow-hidden">
        <div className="absolute -right-20 top-4 w-64 h-64 rounded-full bg-blue-300/8 blur-3xl animate-blob pointer-events-none" />
        <ServiceHero
          title="Digital Marketing"
          subtitle="Data-driven marketing that converts"
          description="Performance marketing, SEO and content strategies that move business KPIs."
        />

        <section className="max-w-7xl mx-auto px-6 py-12">
          <motion.h3 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-slate-900 mb-6">
            Growth-first services
          </motion.h3>

          <ServiceFeatures features={features} />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div className="p-6 rounded-2xl bg-white shadow-lg hover:-translate-y-2 transition" whileHover={{ scale: 1.02 }}>
              <h4 className="font-semibold text-slate-900">Campaigns tuned to ROI</h4>
              <p className="text-sm text-slate-600 mt-2">We focus on measurable uplift and cost-effective acquisition.</p>
            </motion.div>

            <motion.div className="p-6 rounded-2xl bg-white shadow-lg hover:-translate-y-2 transition" whileHover={{ scale: 1.02 }}>
              <h4 className="font-semibold text-slate-900">Content that converts</h4>
              <p className="text-sm text-slate-600 mt-2">Creative messaging built from user intent and data signals.</p>
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
              Grow with us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}