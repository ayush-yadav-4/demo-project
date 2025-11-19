'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface TeamMember {
  name: string;
  role: string;
  description: string;
}

export default function About() {
  const [counters, setCounters] = useState({
    experience: 0,
    team: 0,
    clients: 0,
    projects: 0
  });

  useEffect(() => {
    const targets = { experience: 15, team: 50, clients: 250, projects: 500 };
    const timings = { experience: 30, team: 30, clients: 30, projects: 30 };

    Object.entries(targets).forEach(([key, target]) => {
      const interval = setInterval(() => {
        setCounters(prev => ({
          ...prev,
          [key]: prev[key as keyof typeof counters] < target
            ? prev[key as keyof typeof counters] + Math.ceil(target / 50)
            : target
        }));
      }, timings[key as keyof typeof timings]);

      return () => clearInterval(interval);
    });
  }, []);

  const teamMembers: TeamMember[] = [
    {
      name: 'Expert Leadership',
      role: 'Technical Direction',
      description: 'Guiding innovation and technical excellence'
    },
    {
      name: 'Dedicated Developers',
      role: 'Development Team',
      description: 'Crafting quality code and solutions'
    },
    {
      name: 'Creative Designers',
      role: 'Design Team',
      description: 'Creating beautiful and intuitive interfaces'
    },
    {
      name: 'Support Specialists',
      role: 'Client Support',
      description: 'Ensuring client success and satisfaction'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Background Moving Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
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
            About RupeSafe
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Building digital solutions that transform businesses
          </p>
        </div>
      </section>

      {/* About Us Section - NO BACKGROUND */}
      <section className="relative py-24 bg-white z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-gray-900">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-in-left">
                Our Story
              </h2>
              <p className="text-lg mb-4 text-gray-600 animate-slide-in-left animation-delay-200">
                Founded with a vision to revolutionize how businesses leverage technology, RupeSafe has grown to become a trusted partner for digital transformation.
              </p>
              <p className="text-lg text-gray-600 animate-slide-in-left animation-delay-400">
                We believe in creating solutions that are not just technically excellent but also strategically aligned with business goals. Our team combines deep industry expertise with cutting-edge technology knowledge.
              </p>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: 'Years of Experience', value: counters.experience, suffix: '+' },
              { label: 'Team Members', value: counters.team, suffix: '+' },
              { label: 'Happy Clients', value: counters.clients, suffix: '+' },
              { label: 'Projects Completed', value: counters.projects, suffix: '+' }
            ].map((stat, index) => (
              <Card
                key={index}
                className="border-2 border-blue-500 bg-gradient-to-br from-blue-50 to-white p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Talented professionals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="border-0 bg-gray-50 hover:shadow-2xl transition-all duration-300 overflow-hidden group animate-in fade-in slide-in-from-bottom-4"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-40 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'Constantly pushing boundaries and exploring new technologies'
              },
              {
                title: 'Excellence',
                description: 'Delivering high-quality solutions with attention to detail'
              },
              {
                title: 'Integrity',
                description: 'Building trust through transparency and ethical practices'
              },
              {
                title: 'Collaboration',
                description: 'Working closely with clients as true partners'
              },
              {
                title: 'Reliability',
                description: 'Consistently delivering on promises and expectations'
              },
              {
                title: 'Growth',
                description: 'Empowering businesses to reach their full potential'
              }
            ].map((value, index) => (
              <Card
                key={index}
                className="border-2 border-gray-200 bg-white p-8 hover:border-blue-600 hover:shadow-xl transition-all duration-300 group animate-in fade-in slide-in-from-bottom-4"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
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
            Let's Work Together
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Ready to start your digital transformation journey?
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
