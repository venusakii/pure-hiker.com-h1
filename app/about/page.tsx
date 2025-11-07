import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Cog, Target, Users, Award } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-b from-background via-card to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
                About <span className="text-primary">Pure-Hiker</span>
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-8" />
              <p className="text-xl text-muted-foreground leading-relaxed">
                Born from expedition labs, designed for endurance. We bring professional-grade freeze-drying technology
                to explorers, researchers, and preservation enthusiasts worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="bg-card border border-border p-8 rounded-lg">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver professional-grade freeze-drying technology to homes and field operations worldwide. We
                  believe preservation should be precise, efficient, and accessible to everyone who values quality and
                  reliability.
                </p>
              </div>

              <div className="bg-card border border-border p-8 rounded-lg">
                <Cog className="w-12 h-12 text-primary mb-4" />
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A future where food preservation meets laboratory precision, where explorers and families alike can
                  trust their equipment to perform flawlessly in any environment, from home kitchens to remote field
                  stations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold text-foreground mb-6">
                Our Core <span className="text-primary">Values</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-foreground">Quality First</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We never compromise on build quality, materials, or performance. Every product meets rigorous
                  standards before reaching our customers.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <Cog className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-foreground">Innovation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Continuous improvement drives us. We integrate the latest technologies and engineering advances into
                  practical, reliable solutions.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-foreground">Customer Success</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your success is our success. We provide comprehensive support, resources, and expertise to ensure
                  optimal results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold text-foreground mb-6">
                Meet the <span className="text-primary">Team</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A diverse group of engineers, scientists, and outdoor enthusiasts united by a passion for preservation
                technology.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { name: "Dr. Emily Chen", role: "Chief Engineer", image: "/professional-engineer-woman.jpg" },
                { name: "Alex Torres", role: "Product Director", image: "/professional-product-manager.png" },
                { name: "Maya Patel", role: "Field Operations", image: "/professional-woman-outdoor-specialist.jpg" },
                {
                  name: "Marcus Thompson",
                  role: "Customer Success",
                  image: "/professional-man-support-specialist.jpg",
                },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden bg-card border border-border">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-lg">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-display font-bold text-foreground mb-6">
                  Our <span className="text-primary">Story</span>
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto" />
              </div>

              <div className="space-y-6 text-foreground/90 leading-relaxed">
                <p>
                  Pure-Hiker began in 2018 when a team of expedition scientists faced a critical challenge: preserving
                  research samples and food supplies in remote field conditions. Existing solutions were either too
                  bulky, unreliable, or prohibitively expensive.
                </p>
                <p>
                  Frustrated by the limitations, we set out to design freeze-drying equipment that could withstand harsh
                  environments while maintaining laboratory precision. What started as a field research necessity
                  evolved into a mission to make professional preservation technology accessible to everyone.
                </p>
                <p>
                  Today, Pure-Hiker equipment is trusted by researchers on six continents, homesteaders building food
                  security, and adventurers exploring the world's most challenging environments. Every product reflects
                  our commitment to engineering excellence, reliability, and practical innovation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
