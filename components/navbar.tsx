"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AuthModal } from "./auth-modal"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [authTab, setAuthTab] = useState<"signin" | "signup">("signin")
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
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
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-soft" 
            : "bg-white/60 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-[#F2A46F] to-[#F7D5B5] rounded-lg flex items-center justify-center shadow-soft">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="font-bold text-xl text-[#1E1E1E]">
                RupeSafe
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[#6A6A6A] hover:text-[#1E1E1E] transition-colors duration-200 text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right side - Auth */}
            <div className="flex items-center gap-4">
              {/* Auth Buttons */}
              <Button
                variant="outline"
                size="sm"
                className="hidden sm:inline-flex border-gray-300 hover:border-[#F2A46F] hover:bg-[#FFF5EB] text-[#1E1E1E]"
                onClick={() => handleAuthClick("signin")}
              >
                Sign In
              </Button>
              <Button
                size="sm"
                className="hidden sm:inline-flex bg-[#1E1E1E] hover:bg-[#2A2A2A] text-white"
                onClick={() => handleAuthClick("signup")}
              >
                Book a Demo
              </Button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-5 h-5 text-[#1E1E1E]" />
                ) : (
                  <Menu className="w-5 h-5 text-[#1E1E1E]" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pb-4 space-y-4 border-t border-gray-200 mt-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-[#6A6A6A] hover:text-[#1E1E1E] transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex gap-2 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-gray-300 hover:border-[#F2A46F]"
                  onClick={() => handleAuthClick("signin")}
                >
                  Sign In
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-[#1E1E1E] hover:bg-[#2A2A2A] text-white"
                  onClick={() => handleAuthClick("signup")}
                >
                  Book a Demo
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
