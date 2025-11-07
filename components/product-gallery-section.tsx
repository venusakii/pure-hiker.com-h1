"use client"

import { useState } from "react"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products-data"
import { Button } from "@/components/ui/button"

const categories = [
  { id: "all", label: "All Products" },
  { id: "home", label: "Home" },
  { id: "lab", label: "Laboratory" },
  { id: "portable", label: "Portable" },
]

export function ProductGallerySection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProducts = activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory)

  return (
    <section className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
            Precision <span className="text-primary">Equipment</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our curated selection of freeze-drying equipment, each engineered for specific applications and
            performance requirements.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "hover:border-primary hover:text-primary"
              }
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
