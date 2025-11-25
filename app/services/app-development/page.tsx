"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, Smartphone, ArrowRight } from "lucide-react";

import ServiceHero from "../../components/service-hero";
import ServiceFeatures from "../../components/service-features";
import ServiceProcess from "../../components/service-process";
import ServiceTech from "../../components/service-tech";

export default function AppDevelopmentPage() {
  const features = [
    { title: "iOS & Android", description: "Native apps for both Apple and Android platforms" },
    { title: "Cross-Platform", description: "Build once, deploy everywhere with React Native" },
    { title: "User Focused", description: "Intuitive interfaces designed for user engagement" },
    { title: "Offline Ready", description: "Works seamlessly even without internet connection" },
    { title: "Push Notifications", description: "Keep users engaged with timely notifications" },
    { title: "Analytics", description: "Built-in tracking and performance monitoring" },
  ];

  const process = [
    { step: "01", title: "Strategy", description: "Define app goals, features, and user personas" },
    { step: "02", title: "Design", description: "Create beautiful UI/UX for mobile experience" },
    { step: "03", title: "Development", description: "Code native or cross-platform app" },
    { step: "04", title: "Testing", description: "Rigorous QA on real devices" },
    { step: "05", title: "Launch", description: "Submit to App Store and Google Play" },
    { step: "06", title: "Growth", description: "App store optimization and updates" },
  ];

  const technologies = ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Node.js", "MongoDB", "AWS"];

  return (
    <main className="min-h-screen bg-background bg-gray-100">
      <div className="relative overflow-hidden">
        {/* decorative blobs */}
        <div className="absolute -left-20 -top-24 w-72 h-72 rounded-full bg-blue-300/10 blur-3xl animate-blob pointer-events-none" />
        <div className="absolute -right-24 top-10 w-56 h-56 rounded-full bg-purple-300/8 blur-3xl animate-blob animation-delay-2000 pointer-events-none" />

        <ServiceHero
          title="App Development"
          subtitle="Native & cross-platform mobile apps users love"
          description="Transform your ideas into powerful mobile applications that engage users and drive business success."
        />

        <section className="max-w-7xl mx-auto px-6 py-12">
          <motion.h3 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-slate-900 mb-6">
            What we deliver
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="p-5 bg-white rounded-2xl shadow-lg border border-white/20"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                    <Smartphone className="w-5 h-5" />
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
              Start a Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}