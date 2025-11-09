"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { SignUpForm } from "./sign-up-form"
import { SignInForm } from "./sign-in-form"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  initialTab?: "signin" | "signup"
}

export function AuthModal({ isOpen, onClose, initialTab = "signin" }: AuthModalProps) {
  const [tab, setTab] = useState<"signin" | "signup">(initialTab)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border sticky top-0 bg-card">
          <h2 className="text-xl font-bold text-foreground">{tab === "signin" ? "Sign In" : "Sign Up"}</h2>
          <button onClick={onClose} className="p-1 hover:bg-foreground/10 rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {tab === "signin" ? <SignInForm onSuccess={onClose} /> : <SignUpForm onSuccess={onClose} />}

          {/* Tab Switch */}
          <div className="mt-6 text-center text-sm text-foreground/60">
            {tab === "signin" ? (
              <>
                Don't have an account?{" "}
                <button onClick={() => setTab("signup")} className="text-accent hover:underline font-semibold">
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button onClick={() => setTab("signin")} className="text-accent hover:underline font-semibold">
                  Sign in
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
