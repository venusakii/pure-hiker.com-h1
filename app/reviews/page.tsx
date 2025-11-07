"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products-data"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ReviewsPage() {
  const [categoryFilter, setCategoryFilter] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("rating")

  let filteredProducts = categoryFilter === "all" ? products : products.filter((p) => p.category === categoryFilter)

  // Sort products
  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating
      case "price-low":
        return Number.parseInt(a.price.replace(/[^0-9]/g, "")) - Number.parseInt(b.price.replace(/[^0-9]/g, ""))
      case "price-high":
        return Number.parseInt(b.price.replace(/[^0-9]/g, "")) - Number.parseInt(a.price.replace(/[^0-9]/g, ""))
      case "capacity":
        return Number.parseInt(b.capacity) - Number.parseInt(a.capacity)
      default:
        return 0
    }
  })

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        {/* Header */}
        <section className="bg-gradient-to-b from-background to-card py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-display font-bold text-foreground mb-6">
                Product <span className="text-primary">Reviews</span>
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-6" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                Explore our comprehensive collection of freeze-drying equipment. Each product is carefully selected for
                quality, performance, and reliability.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="bg-card border-b border-border py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Category:</span>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant={categoryFilter === "all" ? "default" : "outline"}
                    onClick={() => setCategoryFilter("all")}
                    className={categoryFilter === "all" ? "bg-primary text-primary-foreground" : ""}
                  >
                    All
                  </Button>
                  <Button
                    size="sm"
                    variant={categoryFilter === "home" ? "default" : "outline"}
                    onClick={() => setCategoryFilter("home")}
                    className={categoryFilter === "home" ? "bg-primary text-primary-foreground" : ""}
                  >
                    Home
                  </Button>
                  <Button
                    size="sm"
                    variant={categoryFilter === "lab" ? "default" : "outline"}
                    onClick={() => setCategoryFilter("lab")}
                    className={categoryFilter === "lab" ? "bg-primary text-primary-foreground" : ""}
                  >
                    Lab
                  </Button>
                  <Button
                    size="sm"
                    variant={categoryFilter === "portable" ? "default" : "outline"}
                    onClick={() => setCategoryFilter("portable")}
                    className={categoryFilter === "portable" ? "bg-primary text-primary-foreground" : ""}
                  >
                    Portable
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="capacity">Capacity</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Products grid */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No products found matching your filters.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
