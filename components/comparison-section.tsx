"use client"

import { Star } from "lucide-react"
import { products } from "@/lib/products-data"

const comparisonProducts = products.slice(0, 5)

export function ComparisonSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 metal-texture opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
            Precision in <span className="text-primary">Numbers</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Compare key specifications across our top-rated models to find the perfect match for your needs.
          </p>
        </div>

        <div className="max-w-6xl mx-auto overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Table Header */}
            <div className="grid grid-cols-5 gap-4 mb-4">
              <div className="bg-card border border-border p-4 rounded-lg">
                <p className="font-display font-semibold text-foreground">Model</p>
              </div>
              <div className="bg-card border border-border p-4 rounded-lg text-center">
                <p className="font-display font-semibold text-foreground">Capacity</p>
              </div>
              <div className="bg-card border border-border p-4 rounded-lg text-center">
                <p className="font-display font-semibold text-foreground">Power</p>
              </div>
              <div className="bg-card border border-border p-4 rounded-lg text-center">
                <p className="font-display font-semibold text-foreground">Noise</p>
              </div>
              <div className="bg-card border border-border p-4 rounded-lg text-center">
                <p className="font-display font-semibold text-foreground">Rating</p>
              </div>
            </div>

            {/* Table Rows */}
            {comparisonProducts.map((product, index) => (
              <div
                key={product.id}
                className="grid grid-cols-5 gap-4 mb-3 group hover:translate-x-2 transition-transform duration-300"
              >
                <div className="bg-card border border-border p-4 rounded-lg group-hover:border-primary transition-colors">
                  <p className="font-medium text-foreground text-sm line-clamp-2">{product.name}</p>
                </div>
                <div className="bg-card border border-border p-4 rounded-lg text-center group-hover:border-primary transition-colors">
                  <p className="text-foreground font-semibold">{product.capacity}</p>
                </div>
                <div className="bg-card border border-border p-4 rounded-lg text-center group-hover:border-primary transition-colors">
                  <p className="text-foreground font-semibold">{product.power}</p>
                </div>
                <div className="bg-card border border-border p-4 rounded-lg text-center group-hover:border-primary transition-colors">
                  <p className="text-foreground font-semibold">{product.noise}</p>
                </div>
                <div className="bg-card border border-border p-4 rounded-lg text-center group-hover:border-primary transition-colors">
                  <div className="flex items-center justify-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="/reviews"
            className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2 group"
          >
            View All Specifications
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
