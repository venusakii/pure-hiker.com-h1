"use client"

import { useEffect, useRef } from "react"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            entry.target.classList.remove("opacity-0", "translate-y-10")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-in-section")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-card relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 metal-texture opacity-50" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 fade-in-section opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Engineering the Future of <span className="text-primary">Preservation</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          </div>

          <div
            className="space-y-8 fade-in-section opacity-0 translate-y-10 transition-all duration-700"
            style={{ transitionDelay: "200ms" }}
          >
            <p className="text-lg text-foreground/90 leading-relaxed text-center">
              We merge industrial precision with nature's simplicity — technology that extends life, not complexity.
            </p>

            <div className="grid md:grid-cols-2 gap-8 pt-8">
              <div className="bg-background/50 backdrop-blur-sm border border-border p-8 rounded-lg">
                <h3 className="font-display text-2xl font-semibold mb-4 text-primary">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver professional-grade freeze-drying technology to homes and field operations worldwide. We
                  believe preservation should be precise, efficient, and accessible to everyone.
                </p>
              </div>

              <div className="bg-background/50 backdrop-blur-sm border border-border p-8 rounded-lg">
                <h3 className="font-display text-2xl font-semibold mb-4 text-primary">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A future where food preservation meets laboratory precision, where explorers and families alike can
                  trust their equipment to perform flawlessly in any environment.
                </p>
              </div>
            </div>

            {/* Process visualization */}
            <div className="mt-16 bg-gradient-to-b from-background to-card border border-border rounded-lg p-8">
              <h3 className="font-display text-3xl font-bold text-center mb-12 text-foreground">
                Inside the Mechanism
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto border-2 border-primary">
                    <span className="text-3xl font-display font-bold text-primary">1</span>
                  </div>
                  <h4 className="font-display text-xl font-semibold text-foreground">Freeze Phase</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Down to -40°C</p>
                  <p className="text-xs text-muted-foreground">Rapid freezing preserves cellular structure</p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto border-2 border-primary">
                    <span className="text-3xl font-display font-bold text-primary">2</span>
                  </div>
                  <h4 className="font-display text-xl font-semibold text-foreground">Vacuum Extraction</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Moisture removed at molecular level</p>
                  <p className="text-xs text-muted-foreground">Sublimation process ensures quality retention</p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto border-2 border-primary">
                    <span className="text-3xl font-display font-bold text-primary">3</span>
                  </div>
                  <h4 className="font-display text-xl font-semibold text-foreground">Storage Ready</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Preserve nutrients for years</p>
                  <p className="text-xs text-muted-foreground">Sealed and ready for long-term storage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
