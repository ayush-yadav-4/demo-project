import React, { FormEvent } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

type Props = {};

export default function ContactSection(_: Props) {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // placeholder - integrate with your API or service
    // alert or send to API
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gray-100">
      {/* vertical faint center gradient line */}
      <div className="pointer-events-none absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-brand-200 to-transparent opacity-70" />

      <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-2 gap-16 relative">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <p className="text-sm font-semibold text-brand-600 uppercase">Get In Touch</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900">
              Ready to start your <br /> <span className="text-brand-600">Digital Journey?</span>
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl">
              Share a few details and we’ll get back within one business day.
            </p>
          </div>

          <div className="glass-card bg-white/95 backdrop-blur-lg rounded-3xl p-6 animate-float shadow-xl">
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-brand-600 flex items-center justify-center transition-colors hover:bg-brand-600 hover:text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="font-semibold text-slate-900">+1 (555) 123-4567</p>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-brand-600 flex items-center justify-center transition-colors hover:bg-brand-600 hover:text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-semibold text-slate-900">hello@rupesafe.com</p>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-brand-600 flex items-center justify-center transition-colors hover:bg-brand-600 hover:text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Visit</p>
                  <p className="font-semibold text-slate-900">123 Tech Park, City</p>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Right column - form */}
        <div className="relative">
          {/* decorative blobs */}
          <div className="absolute -top-12 -left-12 w-72 h-72 rounded-full bg-brand-600/5 pointer-events-none blur-3xl" />
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-purple-600/5 pointer-events-none blur-3xl" />

          <div className="glass-card bg-white/95 backdrop-blur-lg rounded-3xl p-6 shadow-xl relative z-10">
            {/* marquee header */}
            <div
              className="mb-6 py-3 overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
              }}
            >
              <div className="flex gap-6 whitespace-nowrap animate-scroll-left">
                {[
                  "Start Project",
                  "•",
                  "Get Quote",
                  "•",
                  "Consultation",
                  "•",
                  "Start Project",
                ].map((t, i) => (
                  <span key={t + i} className="text-sm font-semibold text-slate-500">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="first"
                  placeholder="First name"
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:shadow-md focus:-translate-y-0.5 transition"
                />
                <input
                  name="last"
                  placeholder="Last name"
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:shadow-md focus:-translate-y-0.5 transition"
                />
              </div>

              <input
                name="email"
                placeholder="Email"
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:shadow-md transition"
              />

              <select name="service" className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:shadow-md transition">
                <option>Web Development</option>
                <option>App Development</option>
                <option>ERP Solutions</option>
                <option>Digital Marketing</option>
              </select>

              <textarea name="message" rows={5} placeholder="Tell us about your project" className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:shadow-md transition" />

              <button type="submit" className="w-full inline-flex items-center justify-center gap-3 py-3 rounded-xl bg-blue-400 text-white font-bold shadow-md hover:-translate-y-0.5 transition">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>

            {/* orbit animation - bottom-right */}
            <div className="absolute -bottom-32 -right-32 w-72 h-72 rounded-full border border-slate-200 flex items-center justify-center animate-spin-slow opacity-40">
              <div className="relative w-full h-full">
                {/* perimeter small circles that counter-rotate */}
                <div className="absolute w-12 h-12 rounded-full bg-white shadow flex items-center justify-center left-1/2 top-6 transform -translate-x-1/2">
                  <svg className="w-5 h-5 text-brand-600" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" /></svg>
                </div>
                <div className="absolute w-12 h-12 rounded-full bg-white shadow right-6 top-1/2 transform translate-y-[-50%]">
                  <svg className="w-5 h-5 text-purple-500" viewBox="0 0 24 24" fill="none"><rect x="7" y="7" width="10" height="10" stroke="currentColor" strokeWidth="1.5" /></svg>
                </div>
                <div className="absolute w-12 h-12 rounded-full bg-white shadow left-6 bottom-6">
                  <svg className="w-5 h-5 text-cyan-500" viewBox="0 0 24 24" fill="none"><path d="M4 12h16" stroke="currentColor" strokeWidth="1.5" /></svg>
                </div>
                {/* counter-rotate wrapper to keep icons upright */}
                <div className="absolute inset-0 animate-spin-reverse-slow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}