'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Background Moving Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Header Section */}
      <section
        className="relative py-24 text-white overflow-hidden z-10"
        style={{
          backgroundImage: 'url(/footersection-1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Get in Touch
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Let's discuss how we can help your business grow
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info */}
            <div className="md:col-span-1 space-y-6">
              <Card className="border-2 border-blue-500 bg-white p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-blue-600">+1 (555) 123-4567</p>
                  </div>
                </div>
              </Card>

              <Card className="border-2 border-blue-500 bg-white p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-blue-600">info@rupesafe.com</p>
                  </div>
                </div>
              </Card>

              <Card className="border-2 border-blue-500 bg-white p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-blue-600">123 Tech Street, Silicon Valley</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Form */}
            <div className="md:col-span-2">
              <Card className="border-0 bg-white p-8 shadow-lg">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Full Name
                      </label>
                      <Input
                        type="text"
                        placeholder="Your name"
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-600 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-600 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      placeholder="Your phone number"
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-600 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Subject
                    </label>
                    <Input
                      type="text"
                      placeholder="How can we help?"
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-600 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us more about your project..."
                      rows={6}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-600 outline-none"
                    />
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-20 text-white overflow-hidden z-10"
        style={{
          backgroundImage: 'url(/footersection-1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's start your digital transformation journey today
          </p>
          <Link href="/services">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
