"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AuthModal } from "./auth-modal"
import { useTheme } from "./theme-provider"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [authTab, setAuthTab] = useState<"signin" | "signup">("signin")
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleAuthClick = (tab: "signin" | "signup") => {
    setAuthTab(tab)
    setAuthModalOpen(true)
    setIsOpen(false)
  }

  return (
    <>
      <nav 
        className={`fixed w-full top-0 z-40 transition-all duration-300 ${
          scrolled 
            ? "glass-dark dark:glass backdrop-blur-md border-b border-accent/20 animate-navbar-glow" 
            : "glass-dark dark:glass backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo with animation */}
            <Link 
              href="/" 
              className="flex items-center gap-2 group relative"
            >
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/70 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent/30">
                  <span className="text-accent-foreground font-bold text-sm">R</span>
                </div>
                <div className="absolute inset-0 bg-accent/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
              <span className="font-bold text-xl text-foreground group-hover:text-accent transition-colors duration-300">
                RupeSafe
              </span>
              <Star className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -top-1 -right-1 animate-pulse fill-accent/40" />
            </Link>

            {/* Desktop Navigation with hover effects */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-foreground/80 hover:text-accent transition-all duration-300 group py-2"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span 
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent/50 group-hover:w-full transition-all duration-300"
                  />
                  <span className="absolute inset-0 bg-accent/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </Link>
              ))}
            </div>

            {/* Right side - Auth & Theme */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle with animation */}
              <button
                onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
                className="relative p-2 hover:bg-accent/10 rounded-lg transition-all duration-300 group"
                aria-label="Toggle theme"
              >
                <div className="absolute inset-0 bg-accent/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-accent group-hover:rotate-180 transition-transform duration-500 relative z-10" />
                ) : (
                  <Moon className="w-5 h-5 text-accent group-hover:-rotate-12 transition-transform duration-300 relative z-10" />
                )}
              </button>

              {/* Auth Buttons with animations */}
              <Button
                variant="outline"
                size="sm"
                className="hidden sm:inline-flex bg-transparent border-accent/30 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
                onClick={() => handleAuthClick("signin")}
              >
                Sign In
              </Button>
              <Button
                size="sm"
                className="hidden sm:inline-flex bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground transition-all duration-300 shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:scale-105"
                onClick={() => handleAuthClick("signup")}
              >
                Sign Up
              </Button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 hover:bg-accent/10 rounded-lg transition-all duration-300 relative group"
                aria-label="Toggle menu"
              >
                <div className="absolute inset-0 bg-accent/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {isOpen ? (
                  <X className="w-5 h-5 relative z-10 group-hover:rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu with slide animation */}
          {isOpen && (
            <div className="md:hidden pb-4 space-y-4 animate-slide-in-down border-t border-accent/20 mt-4 pt-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-foreground/80 hover:text-accent transition-all duration-300 py-2 px-2 rounded-md hover:bg-accent/10 relative group"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-r-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              ))}
              <div className="flex gap-2 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 bg-transparent border-accent/30 hover:border-accent/50 hover:bg-accent/10"
                  onClick={() => handleAuthClick("signin")}
                >
                  Sign In
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground shadow-lg shadow-accent/30"
                  onClick={() => handleAuthClick("signup")}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Auth Modal */}
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} initialTab={authTab} />
    </>
  )
}
