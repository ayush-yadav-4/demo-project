"use client"

export function AboutRuesafe() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-primary/5 to-accent/5" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <div className="inline-block px-4 py-2 bg-accent/20 rounded-full border border-accent/50 mb-4">
                <span className="text-accent text-sm font-semibold">About RupeSafe</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance mb-6">
                Your trusted partner in digital transformation and innovative technology solutions.
              </h2>
            </div>

            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p className="text-lg">
                RupeSafe builds secure, scalable digital products that help businesses grow. We combine practical strategy with modern engineering to deliver measurable results.
              </p>
              <p className="text-lg">
                From web and mobile to enterprise systems, we focus on clarity, reliability, and business impact.
              </p>
            </div>
          </div>

          <div className="space-y-8 animate-slide-in-right">
            {/* Mission */}
            <div className="p-6 rounded-xl border border-border bg-card/50 hover:border-accent/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="text-accent">Our Mission</span>
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                To accelerate business transformation through innovative technology solutions, fostering trust and enabling sustainable growth for our clients.
              </p>
            </div>

            {/* Vision */}
            <div className="p-6 rounded-xl border border-border bg-card/50 hover:border-accent/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="text-accent">Our Vision</span>
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                To be a global leader in digital innovation, creating transformative solutions that empower businesses to thrive in the digital age.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
