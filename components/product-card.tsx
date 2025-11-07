"use client"

import Link from "next/link"
import Image from "next/image"
import { Star, Cog } from "lucide-react"
import type { Product } from "@/lib/products-data"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group relative overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
      <Link href={`/product/${product.slug}`}>
        <div className="relative h-64 overflow-hidden bg-muted">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Animated gear on hover */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Cog className="w-8 h-8 text-primary animate-spin" style={{ animationDuration: "3s" }} />
          </div>
        </div>

        <div className="p-6 space-y-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {product.name}
            </h3>
            <div className="flex items-center gap-1 shrink-0">
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span className="text-sm font-medium text-foreground">{product.rating}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="px-2 py-1 bg-secondary/20 rounded">{product.capacity}</span>
            <span className="px-2 py-1 bg-secondary/20 rounded">{product.power}</span>
            <span className="px-2 py-1 bg-secondary/20 rounded">{product.noise}</span>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{product.description}</p>

          <div className="flex items-center justify-between pt-2">
            
            <Button
              size="sm"
              variant="outline"
              className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary bg-transparent"
            >
              View Details
            </Button>
          </div>
        </div>
      </Link>
    </Card>
  )
}
