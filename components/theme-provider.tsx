"use client"

import { type ReactNode, useEffect, useState, useContext, createContext } from "react"

interface ThemeProviderProps {
  children: ReactNode
  attribute?: string
  defaultTheme?: string
  enableSystem?: boolean
}

// Create a context for theme
const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: (theme: string) => {},
})

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "dark",
  enableSystem = true,
}: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState(defaultTheme)

  useEffect(() => {
    setMounted(true)

    // Check localStorage for theme preference
    const savedTheme = localStorage.getItem("theme") || defaultTheme
    setTheme(savedTheme)

    // Apply theme
    if (attribute === "class") {
      const html = document.documentElement
      if (savedTheme === "dark") {
        html.classList.add("dark")
      } else {
        html.classList.remove("dark")
      }
    }
  }, [attribute, defaultTheme])

  useEffect(() => {
    if (!mounted) return

    // Update theme
    const html = document.documentElement
    if (attribute === "class") {
      if (theme === "dark") {
        html.classList.add("dark")
      } else {
        html.classList.remove("dark")
      }
    }
    localStorage.setItem("theme", theme)
  }, [theme, attribute, mounted])

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme)
  }

  if (!mounted) {
    return <>{children}</>
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
