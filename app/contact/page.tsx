"use client";

import React from "react";
import ContactSection from "@/app/components/ContactSection";

export default function ContactPage() {
  return (
    <main className="font-sans bg-brand-50 min-h-screen">
      {/* header in separate white container matching Services header */}
      <header className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide">Contact</p>

          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Get in touch — <span className="text-blue-500">Start a Project</span>
          </h1>

          <p className="mt-4 text-slate-600">Share a few details and we’ll get back within one business day.</p>
        </div>
      </header>

      {/* Contact form & section */}
      <ContactSection />
    </main>
  );
}
