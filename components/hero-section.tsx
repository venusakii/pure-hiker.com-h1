"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Cog, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-card">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 opacity-20 animate-gear">
          <Cog className="w-full h-full text-secondary" />
        </div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 opacity-15 animate-gear"
          style={{ animationDirection: "reverse" }}
        >
          <Cog className="w-full h-full text-secondary" />
        </div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 opacity-10 animate-gear">
          <Cog className="w-full h-full text-secondary" />
        </div>

        {/* Glow effects */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-steam" />
        <div
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-steam"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground tracking-tight">
              Freeze-Dry. <span className="text-primary animate-glow inline-block">Redefined.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">Where Precision Meets Preservation.</p>
          </div>

          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Precision Freeze-Dryers for Home & Field Use.
            <br />
            Engineered for adventurers, professionals, and preservationists.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/reviews">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-medium group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Machines
                  <Cog className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                </span>
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg font-medium border-secondary hover:bg-secondary/10 bg-transparent"
              >
                Learn More
              </Button>
            </Link>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 text-left">
            <div className="bg-card/50 backdrop-blur-sm border border-border p-6 rounded-lg metal-texture">
              <Cog className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">Industrial-Grade Design</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Professional engineering meets home convenience
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border p-6 rounded-lg metal-texture">
              <Zap className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">Energy Efficient</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Advanced technology that saves power and time
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border p-6 rounded-lg metal-texture">
              <svg className="w-10 h-10 text-primary mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">Built to Last</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Durable construction for years of reliable service
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
