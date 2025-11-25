"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import * as Icons from "lucide-react";

/*
  ServicesPage.tsx
  - Uses lucide-react icons (install with: npm i lucide-react)
  - Requires your Tailwind config (you provided) and the global animation CSS utilities (spin-left/right, scrollLeft/Right, pulse-ring, glass-card, marquee-container etc.)
*/

const SERVICES = [
  {
    id: "web-development",
    title: "Web Development",
    icon: "Globe",
    marquee: ["Globe", "Layout", "Code"],
    description:
      "High-performance, scalable web applications optimized for speed, accessibility and SEO. We build with modern stacks to produce resilient user experiences.",
    features: ["Next.js / React", "Tailwind CSS", "SEO Optimized", "Performance & Accessibility"],
  },
  {
    id: "app-development",
    title: "App Development",
    icon: "Smartphone",
    marquee: ["Smartphone", "Wifi"],
    description:
      "Native and cross-platform mobile solutions for iOS and Android. Focus on responsive UI, native performance and deep device integration.",
    features: ["Flutter / React Native", "iOS & Android", "Hardware Integration", "App Store Release"],
  },
  {
    id: "erp-solutions",
    title: "ERP Solutions",
    icon: "Database",
    marquee: ["Database", "BarChart3"],
    description:
      "End-to-end ERP systems that automate finance, HR and supply-chain workflows with analytics and cloud-first architectures.",
    features: ["Automation", "Data Analytics", "Cloud Integration", "Process Orchestration"],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    icon: "Megaphone",
    marquee: ["Megaphone", "Share2"],
    description:
      "Data-driven marketing to grow traffic and conversions — SEO, content, social media and targeted paid campaigns tuned for ROI.",
    features: ["SEO & Content", "Social Media", "PPC & Ads", "Conversion Optimization"],
  },
  {
    id: "custom-software",
    title: "Custom Software",
    icon: "Cpu",
    marquee: ["Cpu", "Terminal"],
    description:
      "Custom-built systems tailored to unique business needs — secure, scalable and API-first architectures to accelerate operations.",
    features: ["Scalable Architecture", "Security-first", "API-first", "Continuous Delivery"],
  },
  {
    id: "technology-consulting",
    title: "Tech Consulting",
    icon: "Lightbulb",
    marquee: ["Lightbulb", "Target"],
    description:
      "Strategy, audits and transformation programs to align technology investments with business outcomes.",
    features: ["Digital Transformation", "Technology Audits", "Roadmapping & Strategy", "Governance"],
  },
];

function Icon({ name, ...props }: { name: string; [k: string]: any }) {
  const Comp = (Icons as any)[name] ?? Icons.Box;
  return <Comp {...props} />;
}

export default function ServicesPage() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Intersection reveal
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("active");
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal-card").forEach((el) => obs.observe(el));

    // Scroll tracker calculation
    const onScroll = () => {
      const sec = sectionRef.current;
      const tracker = trackerRef.current;
      if (!sec || !tracker) return;
      const rect = sec.getBoundingClientRect();
      const windowH = window.innerHeight;
      const sectionTop = rect.top;
      const sectionH = rect.height;
      // progress where center of viewport maps across section range
      let progress = (windowH / 2 - sectionTop) / (sectionH - windowH / 2);
      progress = Math.max(0, Math.min(1, progress));
      tracker.style.top = `${progress * 100}%`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main className="font-sans text-slate-700 bg-gray-100 selection:bg-brand-600 selection:text-white overflow-x-hidden">
      {/* Header */}
      <section className="pt-28 pb-6 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-brand-600 font-bold tracking-wider text-sm uppercase mb-4 block">Our Expertise</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            Driving Innovation Through <span className="text-brand-600">Technology</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-6">
            Follow our digital transformation roadmap — strategy, engineering, and growth-focused delivery that scales your business.
          </p>

          {/* SVG connector to services */}
          <svg className="w-full h-12 text-brand-200" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M50 0 V 100" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>
      </section>

      {/* Partners marquee */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="glass-card rounded-3xl p-4 flex items-center justify-between gap-4 overflow-hidden">
            <div>
              <h4 className="text-sm text-brand-600 font-bold uppercase tracking-wide">Trusted By</h4>
              <p className="text-slate-500 text-sm">Partners who trust our work</p>
            </div>
            <div className="w-full md:w-2/3 overflow-hidden marquee-container">
              <div className="flex gap-8 items-center animate-scroll-left w-max text-slate-600">
                {["Acme Corp", "Bluewave", "Cloudify", "DataForge", "InfraWorks", "Nimbus"].map((p, i) => (
                  <span key={p + i} className="px-4 py-2 rounded-full bg-white/60 text-sm font-medium">
                    {p}
                  </span>
                ))}
                {/* duplicate to make continuous */}
                {["Acme Corp", "Bluewave", "Cloudify", "DataForge", "InfraWorks"].map((p, i) => (
                  <span key={"d" + p + i} className="px-4 py-2 rounded-full bg-white/60 text-sm font-medium">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services roadmap */}
      <section ref={sectionRef} id="services-section" className="pb-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Central road line + tracker */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 hidden md:block rounded-full bg-gradient-to-b from-brand-600 via-brand-600 to-brand-200">
            <div
              ref={trackerRef}
              id="scroll-tracker"
              className="absolute w-4 h-4 bg-white border-4 border-brand-600 rounded-full -translate-x-1/2 left-1/2 shadow-[0_0_18px_rgba(37,99,235,0.8)]"
              style={{ top: "0%" }}
            />
          </div>

          {/* Mobile road */}
          <div className="absolute left-8 top-0 bottom-0 w-1 md:hidden rounded-full bg-gradient-to-b from-brand-600 via-brand-600 to-brand-200" />

          <div className="space-y-20 pt-10">
            {SERVICES.map((s, idx) => {
              const right = idx % 2 === 0; // 0 -> right card, 1 -> left card
              return (
                <article key={s.id} className="relative grid md:grid-cols-2 gap-8 items-center reveal-card service-item">
                  {right ? <div className="hidden md:block" /> : null}

                  {/* Marker circle on center line */}
                  <div
                    className={`absolute left-8 md:left-1/2 w-8 h-8 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 z-10 flex items-center justify-center marker-pulse ${
                      s.title.includes("App") ? "bg-purple-600" : s.title.includes("Digital") ? "bg-orange-600" : "bg-brand-600"
                    }`}
                  >
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>

                  {/* Card */}
                                    <div className={`${right ? "ml-16 md:ml-12" : "ml-16 md:ml-0 md:mr-12 order-2 md:order-1"}`}>
                                      <div className="bg-white rounded-2xl p-6 shadow glass-card">
                                        <div className="flex items-center gap-4 mb-4">
                                          <div className="p-3 rounded-lg bg-brand-50 text-brand-600">
                                            <Icon name={s.icon} size={24} />
                                          </div>
                                          <div>
                                            <h3 className="text-xl font-semibold text-slate-900">{s.title}</h3>
                                            <p className="text-sm text-slate-500">{s.description}</p>
                                          </div>
                                        </div>
                  
                                        <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-600">
                                          {s.features.map((f) => (
                                            <li key={f} className="flex items-center gap-2">
                                              <Icons.Check className="w-4 h-4 text-brand-600" />
                                              {f}
                                            </li>
                                          ))}
                                        </ul>
                  
                                        <div className="mt-4 flex items-center justify-between">
                                          <div className="flex gap-2 text-slate-500">
                                            {s.marquee.map((m) => (
                                              <Icon key={m} name={m} size={16} />
                                            ))}
                                          </div>
                                          <Link href={`#${s.id}`} className="text-sm text-brand-600 font-medium">
                                            Learn more →
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </article>
                                );
                              })}
                            </div>
                          </div>
                        </section>
                      </main>
                    );
                  }