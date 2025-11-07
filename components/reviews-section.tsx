"use client"

import { useState, useEffect } from "react"
import { Star, Quote } from "lucide-react"
import { reviews } from "@/lib/reviews-data"
import { Card } from "@/components/ui/card"

export function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const displayReviews = reviews.slice(0, 3)

  return (
    <section className="py-20 bg-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
            Engineers & Explorers <span className="text-primary">Speak</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Real experiences from professionals who rely on Pure-Hiker equipment in the field and laboratory.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {displayReviews.map((review, index) => (
            <Card
              key={review.id}
              className="bg-background border-border p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 relative"
            >
              <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/10" />

              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(review.rating) ? "fill-primary text-primary" : "text-muted"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-foreground/90 leading-relaxed mb-6 text-sm">"{review.content}"</p>

                <div className="border-t border-border pt-4">
                  <p className="font-display font-semibold text-foreground">{review.author}</p>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination dots */}
        
      </div>
    </section>
  )
}
