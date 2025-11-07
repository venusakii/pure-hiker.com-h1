"use client"

import { CheckCircle2, Zap, ShieldCheck, Gauge } from "lucide-react"

const advantages = [
  {
    icon: CheckCircle2,
    title: "Industrial-Grade Design",
    description:
      "Built with the same precision and materials used in professional laboratories and research facilities.",
  },
  {
    icon: Zap,
    title: "Compact for Home Use",
    description:
      "Sophisticated technology in a space-efficient package that fits seamlessly into your kitchen or workshop.",
  },
  {
    icon: Gauge,
    title: "Energy-Efficient Engineering",
    description: "Advanced power management systems reduce energy consumption without compromising performance.",
  },
  {
    icon: ShieldCheck,
    title: "Proven Reliability",
    description: "Tested in extreme conditions by professionals and enthusiasts worldwide with outstanding results.",
  },
]

export function AdvantagesSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Steel mesh background effect */}
      <div className="absolute inset-0 metal-texture opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
            Why <span className="text-primary">Pure-Hiker</span> Machines
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon
            return (
              <div
                key={index}
                className="group bg-card border border-border p-6 rounded-lg hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
              >
                <div className="mb-4 w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{advantage.description}</p>
              </div>
            )
          })}
        </div>

        {/* Additional feature highlights */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-card/50 backdrop-blur-sm border border-border p-6 rounded-lg">
              <div className="text-3xl font-display font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Moisture Removal</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border p-6 rounded-lg">
              <div className="text-3xl font-display font-bold text-primary mb-2">25+ Years</div>
              <div className="text-sm text-muted-foreground">Food Preservation</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border p-6 rounded-lg">
              <div className="text-3xl font-display font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Nutrient Retention</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
