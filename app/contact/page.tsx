"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
  };

  const contactCards = [
    {
      icon: MapPin,
      title: "Head Office",
      details: ["123 Tech Park, Suite 400", "Innovation City, ST 12345"],
      delay: 0,
      link: null
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@rupesafe.com", "support@rupesafe.com"],
      delay: 0.1,
      link: "mailto:hello@rupesafe.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      delay: 0.2,
      link: "tel:+15551234567"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9AM - 6PM", "Sat - Sun: Closed"],
      delay: 0.3,
      link: null
    }
  ];

  return (
    <main className="min-h-screen">
      
      {/* Hero Section - White with Blue Gradient Accents */}
      <section className="relative pt-40 pb-32 overflow-hidden bg-white">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-blue-50 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan-50 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-sm uppercase tracking-wider mb-6">
              Contact Us
            </span>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Touch</span>
            </h1>
            
            <p className="text-xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your financial needs? We're here to help you achieve your goals with personalized solutions and expert guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section - Gray Background */}
      <section className="bg-blue-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-800">Send us a Message</h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* Gradient Border Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 rounded-3xl opacity-70 blur-[2px] group-hover:opacity-100 transition duration-500" />

            <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12 overflow-hidden">
              {/* Gradient Background Tint */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white to-blue-50/20 pointer-events-none" />

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-600"
                  >
                    <option value="">Select a topic</option>
                    <option value="Web Development">Web Development</option>
                    <option value="App Development">App Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="ERP Solutions">ERP Solutions</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                    required
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full md:w-auto px-10 py-4 bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 hover:bg-blue-600 hover:shadow-blue-600/40 transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2 mx-auto md:mx-0"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards - Dark BG, Light Cards */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Contact Information</h2>
            <p className="mt-4 text-slate-400">Reach out to us through any of these channels</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactCards.map((card, index) => {
              const CardWrapper = card.link ? 'a' : 'div';
              const wrapperProps = card.link ? { href: card.link } : {};

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: card.delay }}
                  whileHover={{ y: -10 }}
                  className="h-full"
                >
                  <CardWrapper 
                    {...wrapperProps}
                    className={`block h-full bg-white rounded-3xl p-8 text-center relative overflow-hidden group shadow-xl ${card.link ? 'cursor-pointer' : ''}`}
                  >
                    {/* Decorative background blob */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-2xl -mr-16 -mt-16 transition-all group-hover:bg-blue-100" />
                    
                    <div className="relative z-10 flex flex-col items-center h-full">
                      <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                        <card.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h3>
                      
                      <div className="space-y-2 mt-auto">
                        {card.details.map((detail, idx) => (
                          <p key={idx} className="text-slate-600 text-sm leading-relaxed">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardWrapper>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Find Us</h2>
            <p className="mt-4 text-slate-600">Visit our office for a cup of coffee</p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.665678866956!2d79.08815461493454!3d21.14580038593506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b32753b7b0969!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1625634895621!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-500 relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-32 -mt-32" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mb-32" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Contact Immediately
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Need urgent assistance? Our support team is available 24/7 to help you with your queries.
            </p>
            
            <a 
              href="tel:+15551234567"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-full shadow-xl hover:bg-blue-50 hover:scale-105 transition-all duration-300 group"
            >
              <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Call Now
            </a>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
