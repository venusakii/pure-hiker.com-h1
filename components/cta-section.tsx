import { Button } from "@/components/ui/button"
import { Cog } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-b from-card to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-10 animate-gear">
        <Cog className="w-full h-full text-primary" />
      </div>
      <div
        className="absolute bottom-10 right-10 w-40 h-40 opacity-10 animate-gear"
        style={{ animationDirection: "reverse", animationDuration: "25s" }}
      >
        <Cog className="w-full h-full text-primary" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground">
            Precision Starts <span className="text-primary animate-glow">Here</span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed">
            Join the future of smart preservation. Discover equipment that combines industrial precision with home
            convenience.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/reviews">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-medium group"
              >
                <span className="flex items-center gap-2">
                  Shop Now
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg font-medium border-secondary hover:bg-secondary/10 bg-transparent"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          <div className="pt-8 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-3xl font-display font-bold text-primary mb-1">1000+</p>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-display font-bold text-primary mb-1">4.8/5</p>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-display font-bold text-primary mb-1">24/7</p>
              <p className="text-sm text-muted-foreground">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
