"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import * as Icons from "lucide-react";

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
      "We engineer high-performance, scalable web applications using cutting-edge technologies like Next.js and React. From dynamic Single Page Applications (SPAs) to complex, enterprise-grade SaaS platforms, we deliver robust digital solutions tailored to your growth.",
    features: ["Next.js & React", "Tailwind CSS", "SEO & Performance", "Accessibility"],
  },
  {
    id: "app-development",
    title: "App Development",
    icon: "smartphone",
    marquee: ["smartphone", "tablet", "wifi", "bluetooth", "battery"],
    description:
      "Create impactful mobile experiences with our native and cross-platform development services. We utilize Flutter and React Native to deliver seamless, high-fidelity user experiences across both iOS and Android devices, ensuring maximum reach and engagement.",
    features: ["Flutter / React Native", "iOS & Android", "Offline support", "CI/CD"],
  },
  {
    id: "erp-solutions",
    title: "ERP Solutions",
    icon: "database",
    marquee: ["bar-chart-3", "users", "pie-chart", "trending-up", "building"],
    description:
      "Streamline your entire business operation with our custom ERP solutions. We unify critical functions like finance, HR, supply chain, and operations into a single, automated ecosystem, providing real-time reporting and actionable business intelligence.",
    features: ["Process Automation", "Data Analytics", "Cloud Integration", "Role-based Security"],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    icon: "megaphone",
    marquee: ["megaphone", "share-2", "thumbs-up", "search", "mail"],
    description:
      "Accelerate your brand's growth with our data-driven digital marketing strategies. We combine technical SEO, engaging social media management, and precision-targeted PPC campaigns to drive traffic, generate leads, and maximize your return on investment.",
    features: ["SEO Strategy", "Social Media", "PPC", "CRO"],
  },
  {
    id: "custom-software",
    title: "Custom Software",
    icon: "cpu",
    marquee: ["cpu", "command", "terminal", "hard-drive", "monitor"],
    description:
      "Solve unique business challenges with bespoke software solutions designed specifically for your workflows. We build secure, API-first, and highly scalable applications that integrate seamlessly with your existing infrastructure and evolve with your business.",
    features: ["Scalable Architecture", "Security-first", "API Integrations", "Testing & CI/CD"],
  },
  {
    id: "technology-consulting",
    title: "Tech Consulting",
    icon: "lightbulb",
    marquee: ["briefcase", "presentation", "line-chart", "lightbulb", "users"],
    description:
      "Navigate the complex technology landscape with our expert consulting services. We provide strategic advisory, in-depth technical audits, and governance frameworks to align your IT infrastructure with your long-term business objectives and drive innovation.",
    features: ["Roadmapping", "Audits", "Cloud Strategy", "Governance"],
  },
];

const COLOR_CLASSES = [
  { 
    // Web Dev - Blue
    bg: "bg-blue-600", 
    glow: "from-blue-500/40 via-cyan-400/40 to-blue-600/40", 
    orbitBg: "bg-blue-50/80", 
    orbitText: "text-blue-600", 
    rgb: "37,99,235",
    border: "bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600",
    tint: "bg-blue-50/40"
  },
  { 
    // App Dev - Purple
    bg: "bg-purple-600", 
    glow: "from-purple-500/40 via-pink-500/40 to-purple-600/40", 
    orbitBg: "bg-purple-50/80", 
    orbitText: "text-purple-600", 
    rgb: "147,51,234",
    border: "bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600",
    tint: "bg-purple-50/40"
  },
  { 
    // ERP - Emerald
    bg: "bg-emerald-600", 
    glow: "from-emerald-500/40 via-teal-400/40 to-emerald-600/40", 
    orbitBg: "bg-emerald-50/80", 
    orbitText: "text-emerald-600", 
    rgb: "16,185,129",
    border: "bg-gradient-to-br from-emerald-500 via-teal-400 to-emerald-600",
    tint: "bg-emerald-50/40"
  },
  { 
    // Marketing - Orange
    bg: "bg-orange-600", 
    glow: "from-orange-500/40 via-red-400/40 to-orange-600/40", 
    orbitBg: "bg-orange-50/80", 
    orbitText: "text-orange-600", 
    rgb: "234,88,12",
    border: "bg-gradient-to-br from-orange-500 via-red-400 to-orange-600",
    tint: "bg-orange-50/40"
  },
  { 
    // Custom Software - Indigo
    bg: "bg-indigo-600", 
    glow: "from-indigo-500/40 via-violet-400/40 to-indigo-600/40", 
    orbitBg: "bg-indigo-50/80", 
    orbitText: "text-indigo-600", 
    rgb: "79,70,229",
    border: "bg-gradient-to-br from-indigo-500 via-violet-400 to-indigo-600",
    tint: "bg-indigo-50/40"
  },
  { 
    // Consulting - Slate
    bg: "bg-slate-600", 
    glow: "from-slate-500/40 via-gray-400/40 to-slate-600/40", 
    orbitBg: "bg-slate-50/80", 
    orbitText: "text-slate-600", 
    rgb: "71,85,105",
    border: "bg-gradient-to-br from-slate-500 via-gray-400 to-slate-600",
    tint: "bg-slate-50/40"
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
    // init lucide if CDN exists
    // @ts-ignore
    if (typeof window !== "undefined" && (window as any).lucide?.createIcons) {
      // @ts-ignore
      (window as any).lucide.createIcons();
    }

    // reveal observer
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("active")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal-card").forEach((el) => obs.observe(el));

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
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main className="font-sans text-slate-700 bg-gray-100 selection:bg-brand-600 selection:text-white overflow-x-hidden relative">
      {/* Header / Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden bg-white">
        {/* Background Gradients (Blue/White Theme) */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/80 rounded-full blur-[80px] opacity-60" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-50/80 rounded-full blur-[80px] opacity-60" />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-sm uppercase tracking-wider mb-6">
            Our Expertise
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-8 tracking-tight">
            Driving Innovation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Through Technology
            </span>
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Follow our roadmap of digital transformation — strategy, engineering, and delivery that scales your business.
          </p>
        </div>
      </section>

      {/* Services roadmap: central tracker + cards
          central line now scoped to this section so it starts just below header and ends above CTA */}
      <section ref={sectionRef} id="services-section" className="relative pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Central vertical line for section only (blue-600) - HIDDEN ON MOBILE */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 md:top-0 bottom-[7rem] md:bottom-[8rem] hidden md:block w-1 bg-blue-600/90 rounded-full z-10 blur-sm pointer-events-none" aria-hidden />

          {/* tracker that moves along the central line - HIDDEN ON MOBILE */}
          <div
            ref={trackerRef}
            id="scroll-tracker"
            className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-white border-4 border-blue-600 shadow-[0_0_15px_rgba(59,130,246,0.85)] z-20 hidden md:block"
            style={{ top: "0%" }}
          />

          <div className="space-y-12 md:space-y-16 pt-10">
            {SERVICES.map((s, idx) => {
              const right = idx % 2 === 0;
              const color = COLOR_CLASSES[idx % COLOR_CLASSES.length];

              return (
                <article key={s.id} className="relative flex flex-col md:grid md:grid-cols-2 gap-8 items-center reveal-card service-item">
                  {right ? <div className="hidden md:block" /> : null}

                  {/* Marker circle on center line - HIDDEN ON MOBILE */}
                  <div
                    className={`absolute left-8 md:left-1/2 w-8 h-8 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 z-30 hidden md:flex items-center justify-center marker-pulse ${
                      s.title.includes("App") ? "bg-purple-600" : s.title.includes("Digital") ? "bg-orange-600" : "bg-blue-600"
                    }`}
                    style={{ ['--pulse-rgb' as any]: color.rgb }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>

                  {/* Card */}
                  <div className={`${right ? "md:ml-12" : "md:mr-12 order-2 md:order-1"} w-full min-w-0`}>
                    {right ? (
                      <div className="absolute top-1/2 right-full h-1 w-12 bg-blue-200 hidden md:block" />
                    ) : (
                      <div className="absolute top-1/2 left-full h-1 w-12 bg-blue-200 hidden md:block" />
                    )}

                    <div className="relative group">
                      {/* Glow effect behind */}
                      <div className={`absolute -inset-2 rounded-[2rem] blur-2xl opacity-40 group-hover:opacity-70 transition duration-500 ${color.border}`} />
                      
                      {/* Gradient Border Wrapper */}
                      <div className={`relative rounded-[2rem] p-[3px] ${color.border} shadow-2xl`}>
                        {/* Inner Card Content */}
                        <div className={`h-full bg-white rounded-[1.8rem] p-5 md:p-8 relative overflow-hidden ${color.tint} backdrop-blur-sm`}>
                          
                          {/* restored animated top element / marquee (no image) */}
                          <div className="w-full max-w-full overflow-hidden mb-6 marquee-container border-b border-slate-300 pb-4">
                            <div className={`flex gap-8 whitespace-nowrap ${right ? "animate-scroll-left" : "animate-scroll-right"} w-max ${!right ? "flex-row-reverse" : ""}`}>
                              {[0, 1, 2].map((rep) => (
                                <div key={rep} className="flex gap-8 items-center text-slate-900">
                                  {s.marquee.map((ic) => (
                                    <div key={ic + rep} className="w-6 h-6 flex items-center justify-center">
                                      <i data-lucide={ic} className="w-6 h-6" />
                                    </div>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="relative z-10 md:w-11/12">
                            <div className={`w-12 h-12 ${color.bg} bg-opacity-10 text-white rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                              <Icon name={s.icon.charAt(0).toUpperCase() + s.icon.slice(1)} size={24} />
                            </div>

                            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">{s.title}</h3>

                            <p className="text-base md:text-lg font-medium text-slate-700 mb-6 leading-relaxed">{s.description}</p>

                            <ul className="list-disc pl-5 text-slate-900 mb-6 space-y-2">
                              {s.features.map((f) => (
                                <li key={f} className="text-sm md:text-base font-bold">{f}</li>
                              ))}
                            </ul>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                              <Link href={`/services/${s.id}`} className="inline-flex items-center text-base font-bold text-blue-700 hover:gap-2 transition-all group-hover:text-blue-800">
                                Explore Service <i data-lucide="arrow-right" className="w-4 h-4 ml-2" />
                              </Link>

                              <Link href="/contact" className="sm:ml-6 inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-full text-sm font-bold shadow-lg hover:bg-slate-800 hover:scale-105 transition-all duration-300">
                                Contact Us
                              </Link>
                            </div>
                          </div>

                          <div className={`absolute -bottom-24 ${right ? "-right-24" : "-left-24"} w-64 h-64 rounded-full border-2 border-slate-300 ${color.orbitBg} orbit-container z-0 overflow-hidden opacity-100`}>
                            <div className={`orbit-item absolute w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-900`} style={{ top: "10%", left: "50%" }}>
                              <i data-lucide="code" className={`w-5 h-5 text-slate-900`} />
                            </div>
                            <div className={`orbit-item absolute w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-900`} style={{ top: "50%", right: "8%" }}>
                              <i data-lucide="cpu" className={`w-5 h-5 text-slate-900`} />
                            </div>
                            <div className={`orbit-item absolute w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-900`} style={{ bottom: "6%", left: "50%" }}>
                              <i data-lucide="cloud" className={`w-5 h-5 text-slate-900`} />
                            </div>
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

      {/* CTA below services */}
      <section className="pt-12 pb-32">
        <div className="max-w-7xl mx-auto px-4 flex justify-center">
          <Link href="/contact" className="px-12 py-5 bg-blue-600 text-white rounded-full font-extrabold text-xl shadow-2xl hover:bg-blue-700 hover:scale-105 transition-all duration-300">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
