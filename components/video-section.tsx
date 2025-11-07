import Image from "next/image"

export function VideoSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card relative overflow-hidden">
      <div className="absolute inset-0 metal-texture opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
            See the Process in <span className="text-primary">Motion</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Watch freeze-drying technology in action. From fresh ingredients to perfectly preserved results.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-card border-2 border-border rounded-lg overflow-hidden shadow-2xl">
            <div className="absolute inset-0">
              <Image
                src="/freeze-dryer-process-demonstration.jpg"
                alt="Freeze-drying process demonstration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </div>

          {/* Video features */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="bg-card border border-border p-4 rounded-lg text-center">
              <p className="font-display font-semibold text-foreground mb-1">Complete Cycle</p>
              <p className="text-xs text-muted-foreground">24-36 hours time-lapse</p>
            </div>
            <div className="bg-card border border-border p-4 rounded-lg text-center">
              <p className="font-display font-semibold text-foreground mb-1">Real Results</p>
              <p className="text-xs text-muted-foreground">Actual equipment performance</p>
            </div>
            <div className="bg-card border border-border p-4 rounded-lg text-center">
              <p className="font-display font-semibold text-foreground mb-1">Expert Tips</p>
              <p className="text-xs text-muted-foreground">Best practices included</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
