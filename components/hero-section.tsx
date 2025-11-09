"use client"

import { ArrowRight, Play, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

const heroTexts = [
  "The Rise of AI-Driven Software Development",
  "Boost productivity and accelerate innovation",
  "Transform your business with cutting-edge solutions",
]

export function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length)
        setIsVisible(true)
      }, 500)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-40">
      {/* Stars Background */}
      <div className="stars-background" />

      {/* Floating Bubbles - Moving bubbles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Rising bubbles */}
        {[
          { size: 60, left: 10, delay: 0, duration: 20 },
          { size: 80, left: 20, delay: 2, duration: 25 },
          { size: 40, left: 30, delay: 4, duration: 18 },
          { size: 100, left: 50, delay: 1, duration: 22 },
          { size: 50, left: 60, delay: 3, duration: 19 },
          { size: 70, left: 70, delay: 5, duration: 24 },
          { size: 45, left: 80, delay: 2.5, duration: 21 },
          { size: 90, left: 15, delay: 1.5, duration: 23 },
          { size: 55, left: 40, delay: 3.5, duration: 20 },
          { size: 65, left: 75, delay: 4.5, duration: 26 },
          { size: 35, left: 25, delay: 0.5, duration: 17 },
          { size: 85, left: 55, delay: 2.2, duration: 27 },
        ].map((bubble, i) => (
          <div
            key={`rising-${i}`}
            className="absolute rounded-full animate-bubble"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.left}%`,
              bottom: '-100px',
              background: `radial-gradient(circle, oklch(0.85 0.25 140 / 0.2) 0%, oklch(0.85 0.25 140 / 0.08) 50%, transparent 100%)`,
              border: `1px solid oklch(0.85 0.25 140 / 0.3)`,
              animationDelay: `${bubble.delay}s`,
              animationDuration: `${bubble.duration}s`,
              backdropFilter: 'blur(2px)',
              boxShadow: `0 0 ${bubble.size}px oklch(0.85 0.25 140 / 0.4)`,
            }}
          />
        ))}
        
        {/* Moving/drifting bubbles */}
        {[
          { size: 45, top: 20, left: 5, delay: 0, duration: 18 },
          { size: 65, top: 40, left: 85, delay: 1, duration: 22 },
          { size: 35, top: 60, left: 10, delay: 2, duration: 20 },
          { size: 55, top: 30, left: 70, delay: 0.5, duration: 24 },
          { size: 75, top: 50, left: 25, delay: 1.5, duration: 19 },
          { size: 40, top: 70, left: 60, delay: 2.5, duration: 21 },
          { size: 50, top: 15, left: 45, delay: 3, duration: 23 },
          { size: 60, top: 80, left: 30, delay: 1.2, duration: 17 },
          { size: 30, top: 35, left: 90, delay: 2.2, duration: 25 },
          { size: 70, top: 55, left: 15, delay: 0.8, duration: 26 },
        ].map((bubble, i) => (
          <div
            key={`moving-${i}`}
            className="absolute rounded-full animate-bubble-move"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              top: `${bubble.top}%`,
              left: `${bubble.left}%`,
              background: `radial-gradient(circle, oklch(0.85 0.25 140 / 0.15) 0%, oklch(0.85 0.25 140 / 0.05) 50%, transparent 100%)`,
              border: `1px solid oklch(0.85 0.25 140 / 0.25)`,
              animationDelay: `${bubble.delay}s`,
              animationDuration: `${bubble.duration}s`,
              backdropFilter: 'blur(1.5px)',
              boxShadow: `0 0 ${bubble.size * 0.8}px oklch(0.85 0.25 140 / 0.3)`,
            }}
          />
        ))}
      </div>

      {/* Animated gradient overlays with light green accents */}
      <div className="absolute inset-0 -z-10">
        {/* Main gradient with light green */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, oklch(0.85 0.25 140 / 0.15) 0%, transparent 50%)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-accent/8 via-transparent to-primary/8" />
        
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1.5" fill="currentColor" className="text-accent" />
              </pattern>
              <pattern id="hexagons" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-accent/20" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-1/4 right-1/5 w-32 h-32 border-2 border-accent/20 rotate-45 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/4 left-1/5 w-24 h-24 border-2 border-accent/15 rotate-12 animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/6 w-20 h-20 border-2 border-accent/10 -rotate-45 animate-float" style={{ animationDelay: "5s" }} />
        
        {/* Animated Nebula Clouds with Color Shifts */}
        <div className="absolute top-10 left-10 w-[600px] h-[400px] bg-gradient-to-br from-primary/25 via-accent/15 to-transparent rounded-full blur-3xl animate-nebula-pulse animate-nebula-color-shift" />
        <div className="absolute bottom-20 right-20 w-[500px] h-[350px] bg-gradient-to-tl from-primary/20 via-accent/12 to-transparent rounded-full blur-3xl animate-nebula-pulse animate-nebula-color-shift" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/3 w-[450px] h-[300px] bg-gradient-to-bl from-primary/15 via-accent/10 to-transparent rounded-full blur-3xl animate-nebula-pulse animate-nebula-color-shift" style={{ animationDelay: "4s" }} />
        <div className="absolute top-1/3 right-1/4 w-[550px] h-[380px] bg-gradient-to-tr from-accent/18 via-primary/12 to-transparent rounded-full blur-3xl animate-nebula-pulse animate-nebula-color-shift" style={{ animationDelay: "6s" }} />
        
        {/* Galaxy Spiral Animation */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] animate-galaxy-spiral opacity-30">
          <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="galaxyGradient">
                <stop offset="0%" stopColor="rgba(144, 238, 144, 0.3)" />
                <stop offset="50%" stopColor="rgba(100, 150, 255, 0.2)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <path
              d="M 100 100 m -80 0 a 80 80 0 1 1 160 0 a 80 80 0 1 1 -160 0"
              fill="none"
              stroke="url(#galaxyGradient)"
              strokeWidth="2"
              transform="rotate(0 100 100)"
            />
            <path
              d="M 100 100 m -60 0 a 60 60 0 1 1 120 0 a 60 60 0 1 1 -120 0"
              fill="none"
              stroke="url(#galaxyGradient)"
              strokeWidth="1.5"
              transform="rotate(45 100 100)"
            />
            <path
              d="M 100 100 m -40 0 a 40 40 0 1 1 80 0 a 40 40 0 1 1 -80 0"
              fill="none"
              stroke="url(#galaxyGradient)"
              strokeWidth="1"
              transform="rotate(90 100 100)"
            />
          </svg>
        </div>
        
        {/* Rotating Planet/Moon with Glow */}
        <div className="absolute top-1/4 right-1/6 w-32 h-32 animate-planet-rotate">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-primary/20 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-accent/10 to-transparent" />
            <div className="absolute -inset-4 rounded-full bg-accent/20 blur-xl animate-cosmic-pulse" />
            <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-primary/40 blur-sm" />
            <div className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-accent/30 blur-sm" />
          </div>
        </div>
        
        {/* Meteor Showers with Trailing Effects */}
        {[
          { top: 10, left: 20, delay: 0, duration: 4 },
          { top: 30, left: 60, delay: 1.5, duration: 4.5 },
          { top: 50, left: 40, delay: 3, duration: 5 },
          { top: 70, left: 80, delay: 4.5, duration: 4 },
          { top: 20, left: 10, delay: 6, duration: 4.5 },
          { top: 60, left: 70, delay: 7.5, duration: 5 },
        ].map((meteor, i) => (
          <div
            key={`meteor-${i}`}
            className="absolute animate-meteor-fall"
            style={{
              top: `${meteor.top}%`,
              left: `${meteor.left}%`,
              animationDelay: `${meteor.delay}s`,
              animationDuration: `${meteor.duration}s`,
            }}
          >
            {/* Meteor head */}
            <div
              className="w-2 h-2 rounded-full"
              style={{
                background: "radial-gradient(circle, oklch(0.98 0 0) 0%, oklch(0.85 0.25 140) 100%)",
                boxShadow: "0 0 10px oklch(0.85 0.25 140 / 0.8), 0 0 20px oklch(0.85 0.25 140 / 0.5)",
              }}
            />
            {/* Meteor trail */}
            <div
              className="absolute top-0 left-0 w-1 h-16"
              style={{
                background: "linear-gradient(to bottom, oklch(0.85 0.25 140 / 0.8) 0%, transparent 100%)",
                transform: "rotate(45deg)",
                transformOrigin: "top left",
              }}
            />
          </div>
        ))}
        
        {/* Comet Trails with Particles */}
        {[
          { startX: 0, startY: 20, delay: 0, duration: 6 },
          { startX: 10, startY: 50, delay: 2, duration: 7 },
          { startX: 20, startY: 80, delay: 4, duration: 6.5 },
        ].map((comet, i) => (
          <div
            key={`comet-${i}`}
            className="absolute animate-comet-trail"
            style={{
              left: `${comet.startX}%`,
              top: `${comet.startY}%`,
              animationDelay: `${comet.delay}s`,
              animationDuration: `${comet.duration}s`,
            }}
          >
            {/* Comet head */}
            <div
              className="w-3 h-3 rounded-full"
              style={{
                background: "radial-gradient(circle, oklch(0.98 0 0) 0%, oklch(0.9 0.3 145) 50%, oklch(0.85 0.25 140) 100%)",
                boxShadow: "0 0 15px oklch(0.85 0.25 140 / 0.9), 0 0 30px oklch(0.85 0.25 140 / 0.6)",
              }}
            />
            {/* Comet tail */}
            <div
              className="absolute top-0 left-0 w-1 h-24"
              style={{
                background: "linear-gradient(to bottom, oklch(0.9 0.3 145 / 0.9) 0%, oklch(0.85 0.25 140 / 0.6) 50%, transparent 100%)",
                transform: "rotate(45deg)",
                transformOrigin: "top left",
              }}
            />
            {/* Comet particles */}
            {[...Array(5)].map((_, j) => (
              <div
                key={`particle-${j}`}
                className="absolute w-1 h-1 rounded-full bg-accent/60 animate-float"
                style={{
                  top: `${j * 5}px`,
                  left: `${j * 3}px`,
                  animationDelay: `${j * 0.2}s`,
                  animationDuration: "2s",
                  boxShadow: "0 0 4px oklch(0.85 0.25 140 / 0.8)",
                }}
              />
            ))}
          </div>
        ))}
        
        {/* Cosmic Waves */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-[800px] h-[200px] bg-gradient-to-r from-transparent via-primary/10 to-transparent rounded-full blur-2xl animate-cosmic-wave" />
          <div className="absolute bottom-1/4 right-0 w-[700px] h-[180px] bg-gradient-to-l from-transparent via-primary/8 to-transparent rounded-full blur-2xl animate-cosmic-wave" style={{ animationDelay: "3s" }} />
          <div className="absolute top-1/2 left-1/4 w-[600px] h-[150px] bg-gradient-to-r from-transparent via-accent/5 to-transparent rounded-full blur-2xl animate-cosmic-wave" style={{ animationDelay: "6s" }} />
        </div>
        
        {/* Star Trails */}
        {[
          { top: 20, left: 15, delay: 0 },
          { top: 40, left: 60, delay: 1 },
          { top: 60, left: 30, delay: 2 },
          { top: 30, left: 80, delay: 0.5 },
          { top: 70, left: 50, delay: 1.5 },
          { top: 50, left: 10, delay: 2.5 },
        ].map((trail, i) => (
          <div
            key={`trail-${i}`}
            className="absolute w-1 h-1 bg-accent rounded-full animate-star-trail"
            style={{
              top: `${trail.top}%`,
              left: `${trail.left}%`,
              animationDelay: `${trail.delay}s`,
              boxShadow: "0 0 6px oklch(0.75 0.2 150 / 0.8), 0 0 12px oklch(0.75 0.2 150 / 0.4)",
            }}
          />
        ))}
        
        {/* Space Drift Elements */}
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-to-br from-primary/20 via-transparent to-accent/10 rounded-full blur-2xl animate-space-drift" />
        <div className="absolute bottom-1/3 left-1/3 w-[250px] h-[250px] bg-gradient-to-tl from-primary/15 via-transparent to-accent/8 rounded-full blur-2xl animate-space-drift" style={{ animationDelay: "5s" }} />
        <div className="absolute top-2/3 right-1/3 w-[200px] h-[200px] bg-gradient-to-bl from-accent/12 via-transparent to-primary/10 rounded-full blur-2xl animate-space-drift" style={{ animationDelay: "10s" }} />
        
        {/* Moving Clouds */}
        {[
          { width: 400, height: 200, top: 10, delay: 0, duration: 35 },
          { width: 500, height: 250, top: 30, delay: 5, duration: 40 },
          { width: 350, height: 180, top: 50, delay: 10, duration: 30 },
          { width: 450, height: 220, top: 70, delay: 15, duration: 38 },
          { width: 380, height: 190, top: 20, delay: 20, duration: 32 },
          { width: 420, height: 210, top: 60, delay: 25, duration: 36 },
        ].map((cloud, i) => (
          <div
            key={`cloud-${i}`}
            className="absolute rounded-full animate-cloud-drift"
            style={{
              width: `${cloud.width}px`,
              height: `${cloud.height}px`,
              top: `${cloud.top}%`,
              left: '-200px',
              background: `radial-gradient(ellipse, oklch(0.15 0.1 250 / 0.4) 0%, oklch(0.1 0.08 250 / 0.2) 50%, transparent 100%)`,
              backdropFilter: 'blur(40px)',
              animationDelay: `${cloud.delay}s`,
              animationDuration: `${cloud.duration}s`,
              opacity: 0.4,
            }}
          />
        ))}
        
        {/* Floating Clouds */}
        {[
          { width: 300, height: 150, top: 15, left: 20, delay: 0 },
          { width: 350, height: 175, top: 40, left: 60, delay: 3 },
          { width: 280, height: 140, top: 65, left: 80, delay: 6 },
          { width: 320, height: 160, top: 25, left: 40, delay: 9 },
        ].map((cloud, i) => (
          <div
            key={`float-cloud-${i}`}
            className="absolute rounded-full animate-cloud-float"
            style={{
              width: `${cloud.width}px`,
              height: `${cloud.height}px`,
              top: `${cloud.top}%`,
              left: `${cloud.left}%`,
              background: `radial-gradient(ellipse, oklch(0.12 0.08 250 / 0.3) 0%, oklch(0.08 0.06 250 / 0.15) 50%, transparent 100%)`,
              backdropFilter: 'blur(30px)',
              animationDelay: `${cloud.delay}s`,
              opacity: 0.35,
            }}
          />
        ))}
        
        {/* Large floating orbs with light green gradient */}
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-accent/30 via-accent/10 to-transparent rounded-full blur-3xl animate-aurora" />
        <div
          className="absolute bottom-20 left-1/4 w-[450px] h-[450px] bg-gradient-to-tr from-primary/20 via-transparent to-accent/15 rounded-full blur-3xl animate-blob-rotate"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-gradient-to-bl from-accent/25 via-transparent to-primary/10 rounded-full blur-3xl animate-aurora"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-gradient-to-br from-accent/20 via-transparent to-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/3 w-[420px] h-[420px] bg-gradient-to-tl from-primary/15 via-transparent to-accent/20 rounded-full blur-3xl animate-blob-rotate"
          style={{ animationDelay: "4s" }}
        />

        {/* Small floating particles with light green glow */}
        {[
          { w: 2, h: 2, t: 15, l: 20, d: 0.5, dur: 5, s: 6 },
          { w: 1.5, h: 1.5, t: 35, l: 60, d: 1.2, dur: 6, s: 5 },
          { w: 2.5, h: 2.5, t: 55, l: 80, d: 2.1, dur: 7, s: 7 },
          { w: 1, h: 1, t: 25, l: 40, d: 0.8, dur: 5.5, s: 4 },
          { w: 2, h: 2, t: 70, l: 15, d: 1.5, dur: 6.5, s: 6 },
          { w: 1.5, h: 1.5, t: 45, l: 75, d: 2.5, dur: 5.8, s: 5 },
          { w: 2, h: 2, t: 30, l: 50, d: 0.3, dur: 6.2, s: 7 },
          { w: 1, h: 1, t: 65, l: 35, d: 1.8, dur: 5.3, s: 4 },
          { w: 2.5, h: 2.5, t: 20, l: 85, d: 2.8, dur: 7, s: 8 },
          { w: 1.5, h: 1.5, t: 50, l: 25, d: 1.1, dur: 6, s: 5 },
          { w: 2, h: 2, t: 80, l: 60, d: 0.7, dur: 5.5, s: 6 },
          { w: 1, h: 1, t: 40, l: 90, d: 2.2, dur: 6.8, s: 4 },
        ].map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-accent/40 animate-particle-float"
            style={{
              width: `${particle.w}px`,
              height: `${particle.h}px`,
              top: `${particle.t}%`,
              left: `${particle.l}%`,
              animationDelay: `${particle.d}s`,
              animationDuration: `${particle.dur}s`,
              boxShadow: `0 0 ${particle.s}px oklch(0.85 0.25 140 / 0.6)`,
            }}
          />
        ))}

        {/* Animated grid pattern with green tint */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Animated vertical lines with light green glow */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/30 to-transparent animate-pulse" style={{ animationDelay: "1s", boxShadow: "0 0 10px oklch(0.85 0.25 140 / 0.5)" }} />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-accent/25 to-transparent animate-pulse" style={{ animationDelay: "2s", boxShadow: "0 0 8px oklch(0.85 0.25 140 / 0.4)" }} />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/15 to-transparent animate-pulse" style={{ animationDelay: "3s" }} />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent animate-pulse" style={{ animationDelay: "4s", boxShadow: "0 0 6px oklch(0.85 0.25 140 / 0.3)" }} />

        {/* Floating sparkles */}
        {[
          { t: 25, l: 15, d: 0, dur: 4 },
          { t: 40, l: 60, d: 0.8, dur: 5 },
          { t: 55, l: 80, d: 1.6, dur: 4.5 },
          { t: 30, l: 35, d: 2.4, dur: 5.5 },
          { t: 70, l: 25, d: 3.2, dur: 4.2 },
          { t: 45, l: 75, d: 4, dur: 5.2 },
          { t: 20, l: 50, d: 4.8, dur: 4.8 },
          { t: 65, l: 40, d: 5.6, dur: 5 },
        ].map((sparkle, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute animate-float"
            style={{
              top: `${sparkle.t}%`,
              left: `${sparkle.l}%`,
              animationDelay: `${sparkle.d}s`,
              animationDuration: `${sparkle.dur}s`,
            }}
          >
            <Star className="w-4 h-4 text-accent/60 animate-pulse fill-accent/40" style={{ filter: "drop-shadow(0 0 4px oklch(0.85 0.25 140 / 0.8))" }} />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16">
        <div className="flex flex-col items-center justify-center text-center space-y-12">
          {/* Animated Hero Text with light green gradient */}
          <div className="space-y-8 animate-fade-in">
            <div className="h-32 md:h-40 flex items-center justify-center">
              <h1
                className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-tight transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{
                  background: "linear-gradient(135deg, oklch(0.98 0 0) 0%, oklch(0.85 0.25 140) 30%, oklch(0.9 0.3 145) 70%, oklch(0.85 0.25 140) 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: isVisible ? "0 0 40px oklch(0.85 0.25 140 / 0.4), 0 0 80px oklch(0.85 0.25 140 / 0.2)" : "none",
                  transition: "all 0.7s ease-in-out",
                }}
              >
                {heroTexts[currentTextIndex]}
              </h1>
            </div>

            <p
              className={`text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {currentTextIndex === 0
                ? "Boost productivity and accelerate innovation today with AI embedded in every phase of the software development cycle."
                : currentTextIndex === 1
                  ? "We don't do one-size-fits-all. Our solutions combine industry expertise with cutting-edge capabilities."
                  : "From web development to enterprise systems, we bring together diverse expertise to solve complex challenges."}
            </p>
          </div>

          {/* CTA Buttons with light green gradient */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-up" style={{ animationDelay: "200ms" }}>
              <Link href="/contact">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-lg px-8 py-6 relative overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg, oklch(0.85 0.25 140) 0%, oklch(0.9 0.3 145) 50%, oklch(0.85 0.25 140) 100%)",
                  border: "none",
                  boxShadow: "0 0 25px oklch(0.85 0.25 140 / 0.5), 0 0 50px oklch(0.85 0.25 140 / 0.3)",
                }}
              >
                <span className="relative z-10 font-semibold text-accent-foreground">
                  Take the leap today
                </span>
                <ArrowRight className="ml-2 w-5 h-5 relative z-10 text-accent-foreground" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Button>
              </Link>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 text-lg px-8 py-6 transition-all duration-300 relative overflow-hidden group"
              style={{
                borderColor: "oklch(0.85 0.25 140 / 0.5)",
                boxShadow: "0 0 20px oklch(0.85 0.25 140 / 0.3)",
              }}
            >
              <span className="relative z-10 text-foreground">
                Watch Demo
              </span>
              <Play className="mr-2 w-5 h-5 relative z-10 fill-accent text-accent" />
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(to right, oklch(0.85 0.25 140 / 0.1), transparent)",
                }}
              />
            </Button>
          </div>

          {/* Stats Grid with light green accents */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 animate-fade-in" style={{ animationDelay: "400ms" }}>
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "150+", label: "Happy Clients" },
              { value: "50+", label: "Team Members" },
              { value: "15+", label: "Years Experience" },
            ].map((stat, index) => (
              <div 
                key={stat.label} 
                className="space-y-2 group cursor-default"
                style={{
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)"
                }}
              >
                <p 
                  className="text-3xl md:text-4xl font-bold text-accent transition-all duration-300"
                  style={{
                    textShadow: "0 0 20px oklch(0.85 0.25 140 / 0.5), 0 0 40px oklch(0.85 0.25 140 / 0.3)",
                  }}
                >
                  {stat.value}
                </p>
                <p className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
