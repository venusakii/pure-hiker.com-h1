import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Star, CheckCircle2, ArrowLeft, ExternalLink } from "lucide-react"
import { products } from "@/lib/products-data"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        {/* Back button */}
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>

        {/* Product header */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Image gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square bg-card border-2 border-border rounded-lg overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="relative aspect-square bg-card border border-border rounded-lg overflow-hidden cursor-pointer hover:border-primary transition-colors"
                  >
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={`${product.name} view ${i}`}
                      fill
                      className="object-cover opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-primary px-3 py-1 bg-primary/10 rounded-full">
                    {product.category.toUpperCase()}
                  </span>
                  <span className="text-sm text-muted-foreground">{product.brand}</span>
                </div>
                <h1 className="text-4xl font-display font-bold text-foreground mb-4">{product.name}</h1>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-foreground font-medium">{product.rating} / 5.0</span>
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed">{product.description}</p>
              </div>

              <Button
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6"
                asChild
              >
                <a href={product.amazonLink} target="_blank" rel="noopener noreferrer">
                  <span className="flex items-center gap-2">
                    Buy on Amazon
                    <ExternalLink className="w-5 h-5" />
                  </span>
                </a>
              </Button>

              {/* Quick specs */}
              <Card className="bg-card border-border p-6">
                <h3 className="font-display font-semibold text-foreground mb-4">Quick Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Capacity</p>
                    <p className="font-medium text-foreground">{product.capacity}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Power</p>
                    <p className="font-medium text-foreground">{product.power}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Noise Level</p>
                    <p className="font-medium text-foreground">{product.noise}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Rating</p>
                    <p className="font-medium text-foreground">{product.rating} / 5.0</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-foreground mb-8">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 bg-card border border-border p-4 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="container mx-auto px-4 py-12 bg-card/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-foreground mb-8">Technical Specifications</h2>
            <div className="bg-background border border-border rounded-lg overflow-hidden">
              {Object.entries(product.specs).map(([key, value], index) => (
                <div
                  key={key}
                  className={`grid grid-cols-2 p-4 ${
                    index % 2 === 0 ? "bg-card/30" : ""
                  } hover:bg-primary/5 transition-colors`}
                >
                  <div className="font-medium text-foreground">{key}</div>
                  <div className="text-muted-foreground">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related products */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-foreground mb-8">Similar Products</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {products
                .filter((p) => p.id !== product.id && p.category === product.category)
                .slice(0, 3)
                .map((relatedProduct) => (
                  <Link key={relatedProduct.id} href={`/product/${relatedProduct.slug}`} className="group">
                    <Card className="overflow-hidden border-border hover:border-primary transition-all">
                      <div className="relative h-48 bg-muted">
                        <Image
                          src={relatedProduct.image || "/placeholder.svg"}
                          alt={relatedProduct.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                          {relatedProduct.name}
                        </h3>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-primary text-primary" />
                            <span className="text-sm text-foreground">{relatedProduct.rating}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
