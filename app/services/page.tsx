"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

type Service = {
  id: string;
  title: string;
  icon: string;
  marquee: string[];
  description: string;
  features: string[];
};

const SERVICES: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    icon: "globe",
    marquee: ["globe", "layout", "code", "server", "database"],
    description:
      "High-performance, scalable web apps using Next.js & React. From SPAs to complex SaaS platforms.",
    features: ["Next.js & React", "Tailwind CSS", "SEO & Performance", "Accessibility"],
  },
  {
    id: "app-development",
    title: "App Development",
    icon: "smartphone",
    marquee: ["smartphone", "tablet", "wifi", "bluetooth", "battery"],
    description:
      "Native and cross-platform mobile solutions delivering smooth UX on iOS and Android.",
    features: ["Flutter / React Native", "iOS & Android", "Offline support", "CI/CD"],
  },
  {
    id: "erp-solutions",
    title: "ERP Solutions",
    icon: "database",
    marquee: ["bar-chart-3", "users", "pie-chart", "trending-up", "building"],
    description:
      "ERP systems to unify finance, HR and operations with automation and realtime reporting.",
    features: ["Process Automation", "Data Analytics", "Cloud Integration", "Role-based Security"],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    icon: "megaphone",
    marquee: ["megaphone", "share-2", "thumbs-up", "search", "mail"],
    description:
      "Data-driven marketing — SEO, social media and paid channels focused on conversions.",
    features: ["SEO Strategy", "Social Media", "PPC", "CRO"],
  },
  {
    id: "custom-software",
    title: "Custom Software",
    icon: "cpu",
    marquee: ["cpu", "command", "terminal", "hard-drive", "monitor"],
    description:
      "Custom software built to your workflows — secure, API-first and scalable.",
    features: ["Scalable Architecture", "Security-first", "API Integrations", "Testing & CI/CD"],
  },
  {
    id: "technology-consulting",
    title: "Tech Consulting",
    icon: "lightbulb",
    marquee: ["briefcase", "presentation", "line-chart", "lightbulb", "users"],
    description:
      "Strategic advisory and technical audits to align technology with business goals.",
    features: ["Roadmapping", "Audits", "Cloud Strategy", "Governance"],
  },
];

const COLOR_CLASSES = [
  { bg: "bg-orange-600", glow: "from-orange-600/12 via-orange-600/6 to-transparent", orbitBg: "bg-orange-50/80", orbitText: "text-orange-600", rgb: "249,115,22" },
  { bg: "bg-emerald-600", glow: "from-emerald-600/12 via-emerald-600/6 to-transparent", orbitBg: "bg-emerald-50/80", orbitText: "text-emerald-600", rgb: "16,185,129" },
  { bg: "bg-emerald-600", glow: "from-emerald-600/12 via-emerald-600/6 to-transparent", orbitBg: "bg-emerald-50/80", orbitText: "text-emerald-600", rgb: "5,150,105" },
  { bg: "bg-orange-600", glow: "from-orange-600/12 via-orange-600/6 to-transparent", orbitBg: "bg-orange-50/80", orbitText: "text-orange-600", rgb: "234,88,12" },
  { bg: "bg-indigo-600", glow: "from-indigo-600/12 via-indigo-600/6 to-transparent", orbitBg: "bg-indigo-50/80", orbitText: "text-indigo-600", rgb: "79,70,229" },
  { bg: "bg-slate-600", glow: "from-slate-600/10 via-slate-600/6 to-transparent", orbitBg: "bg-slate-50/80", orbitText: "text-slate-600", rgb: "71,85,105" },
];

export default function ServicesPage() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // init lucide icons if CDN loaded
    // @ts-ignore
    if (typeof window !== "undefined" && (window as any).lucide?.createIcons) {
      // @ts-ignore
      (window as any).lucide.createIcons();
    }

    // reveal observer
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("active")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal-card").forEach((el) => observer.observe(el));

    // scroll tracker
    const onScroll = () => {
      const sec = sectionRef.current;
      const tracker = trackerRef.current;
      if (!sec || !tracker) return;
      const rect = sec.getBoundingClientRect();
      const windowH = window.innerHeight;
      const sectionTop = rect.top;
      const sectionH = rect.height;
      let progress = (windowH / 2 - sectionTop) / (sectionH - windowH / 2);
      progress = Math.max(0, Math.min(1, progress));
      tracker.style.top = `${progress * 100}%`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main className="font-sans bg-gray-100 text-slate-700 selection:bg-brand-600 selection:text-white relative">
      {/* full-height blurred dark connecting line from header down to bottom */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-slate-800/20 blur-sm z-10 pointer-events-none" aria-hidden />

      {/* Header (white background) */}
      <section className="pt-24 pb-6 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="text-brand-600 font-bold text-sm uppercase mb-4 block">Our Expertise</span>

          {/* bigger header, last two words blue */}
          <h1 className="mt-3 text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-4">
            Driving Innovation <span className="text-blue-500">Through Technology</span>
          </h1>

          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-6">
            Follow our roadmap of digital transformation — strategy, engineering, and delivery that scales your business.
          </p>
        </div>
      </section>

      {/* Services roadmap: central tracker + cards */}
      <section ref={sectionRef} id="services-section" className="relative pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* tracker (moves with scroll) */}
          <div
            ref={trackerRef}
            id="scroll-tracker"
            className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-white border-4 border-brand-600 shadow-[0_0_15px_rgba(37,99,235,0.8)] z-20"
            style={{ top: "0%" }}
          />

          <div className="space-y-20 pt-10">
            {SERVICES.map((s, idx) => {
              const right = idx % 2 === 0;
              const color = COLOR_CLASSES[idx % COLOR_CLASSES.length];

              return (
                <article key={s.id} className="relative grid md:grid-cols-2 gap-8 items-center reveal-card service-item">
                  {right ? <div className="hidden md:block" /> : null}

                  {/* center marker (uses per-card color) */}
                  <div
                    className={`absolute left-8 md:left-1/2 w-8 h-8 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 z-30 flex items-center justify-center marker-pulse ${color.bg}`}
                    style={{ ['--pulse-rgb' as any]: color.rgb }}
                    aria-hidden
                  >
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>

                  {/* Card area */}
                  <div className={`${right ? "ml-16 md:ml-12 relative group" : "ml-16 md:ml-0 md:mr-12 relative order-2 md:order-1"}`}>
                    {/* connector short line to middle */}
                    {right ? (
                      <div className="absolute top-1/2 right-full h-1 w-12 bg-brand-200 hidden md:block" />
                    ) : (
                      <div className="absolute top-1/2 left-full h-1 w-12 bg-brand-200 hidden md:block" />
                    )}

                    <div className="relative">
                      {/* color glow behind card */}
                      <div className={`absolute -inset-3 -z-10 rounded-3xl blur-3xl pointer-events-none bg-gradient-to-r ${color.glow}`} />

                      <div className="glass-card bg-white/95 backdrop-blur-[10px] rounded-3xl p-6 md:p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-xl">
                        {/* marquee area */}
                        <div className="w-full overflow-hidden mb-6 marquee-container border-b border-slate-100 pb-4">
                          <div className={`flex gap-8 whitespace-nowrap ${right ? "animate-scroll-left" : "animate-scroll-right"} w-max ${!right ? "flex-row-reverse" : ""}`}>
                            {[0, 1, 2].map((rep) => (
                              <div key={rep} className="flex gap-8 items-center text-slate-400">
                                {s.marquee.map((ic) => (
                                  <div key={ic + rep} className="w-5 h-5 flex items-center justify-center">
                                    <i data-lucide={ic} className="w-5 h-5 text-slate-400" />
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="relative z-10 md:w-3/4">
                          <div className="w-10 h-10 bg-blue-100 text-brand-600 rounded-lg flex items-center justify-center mb-4">
                            <i data-lucide={s.icon} className={`w-5 h-5 ${color.orbitText}`} />
                          </div>

                          <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>

                          <p className="text-slate-600 mb-4 leading-snug text-sm">{s.description}</p>

                          <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-2 text-sm">
                            {s.features.map((f) => (
                              <li key={f}>{f}</li>
                            ))}
                          </ul>

                          <div className="flex items-center gap-4">
                            <Link href={`/services/${s.id}`} className="inline-flex items-center text-sm font-semibold text-brand-600 hover:gap-2 transition-all">
                              Explore <i data-lucide="arrow-right" className="w-3 h-3 ml-2" />
                            </Link>

                            <Link href="/contact" className="ml-4 inline-flex items-center px-3 py-2 bg-brand-600 text-white rounded-full text-sm shadow-md hover:bg-brand-700 transition">
                              Contact Us
                            </Link>
                          </div>
                        </div>

                        {/* orbit corner - inner icons colored to match marker */}
                        <div className={`absolute -bottom-24 ${right ? "-right-24" : "-left-24"} w-64 h-64 rounded-full border border-white/30 ${color.orbitBg} orbit-container z-0 overflow-hidden`}>
                          <div className={`orbit-item absolute w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center ${color.orbitText}`} style={{ top: "10%", left: "50%" }}>
                            <i data-lucide="code" className={`w-4 h-4 ${color.orbitText}`} />
                          </div>
                          <div className={`orbit-item absolute w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center ${color.orbitText}`} style={{ top: "50%", right: "8%" }}>
                            <i data-lucide="cpu" className={`w-4 h-4 ${color.orbitText}`} />
                          </div>
                          <div className={`orbit-item absolute w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center ${color.orbitText}`} style={{ bottom: "6%", left: "50%" }}>
                            <i data-lucide="cloud" className={`w-4 h-4 ${color.orbitText}`} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {!right ? <div className="hidden md:block order-3" /> : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* separate CTA container further down the page (push button lower) */}
      <section className="pt-12 pb-32">
        <div className="max-w-7xl mx-auto px-4 flex justify-center">
          <Link href="/contact" className="px-12 py-5 bg-brand-600 text-white rounded-full font-extrabold text-xl shadow-2xl">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
