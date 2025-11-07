import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-display font-bold text-foreground mb-6">
              Terms of <span className="text-primary">Service</span>
            </h1>
            <div className="w-24 h-1 bg-primary mb-8" />
            <p className="text-muted-foreground mb-8">Last Updated: January 2025</p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section className="bg-card border border-border p-6 rounded-lg">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-foreground/80 leading-relaxed">
                  By accessing and using Pure-Hiker.com, you accept and agree to be bound by the terms and provision of
                  this agreement. If you do not agree to these terms, please do not use our service.
                </p>
              </section>

              <section className="bg-card border border-border p-6 rounded-lg">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">2. Use License</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the materials (information or software) on
                  Pure-Hiker's website for personal, non-commercial transitory viewing only.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-foreground/80 leading-relaxed mt-2 space-y-1">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>Attempt to decompile or reverse engineer any software</li>
                  <li>Remove any copyright or other proprietary notations</li>
                </ul>
              </section>

              <section className="bg-card border border-border p-6 rounded-lg">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">3. Affiliate Disclosure</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Pure-Hiker.com is a participant in the Amazon Services LLC Associates Program, an affiliate
                  advertising program designed to provide a means for sites to earn advertising fees by advertising and
                  linking to Amazon.com. As an Amazon Associate, we earn from qualifying purchases.
                </p>
              </section>

              <section className="bg-card border border-border p-6 rounded-lg">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">4. Product Information</h2>
                <p className="text-foreground/80 leading-relaxed">
                  While we strive to provide accurate product information and specifications, we do not warrant that
                  product descriptions, pricing, or other content is accurate, complete, reliable, current, or
                  error-free. Always verify specifications with the manufacturer before purchase.
                </p>
              </section>

              <section className="bg-card border border-border p-6 rounded-lg">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">5. Disclaimer</h2>
                <p className="text-foreground/80 leading-relaxed">
                  The materials on Pure-Hiker's website are provided on an 'as is' basis. Pure-Hiker makes no
                  warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
                  without limitation, implied warranties or conditions of merchantability, fitness for a particular
                  purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section className="bg-card border border-border p-6 rounded-lg">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">6. Limitations</h2>
                <p className="text-foreground/80 leading-relaxed">
                  In no event shall Pure-Hiker or its suppliers be liable for any damages (including, without
                  limitation, damages for loss of data or profit, or due to business interruption) arising out of the
                  use or inability to use the materials on Pure-Hiker's website.
                </p>
              </section>

              <section className="bg-card border border-border p-6 rounded-lg">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">7. Revisions</h2>
                <p className="text-foreground/80 leading-relaxed">
                  The materials appearing on Pure-Hiker's website may include technical, typographical, or photographic
                  errors. Pure-Hiker does not warrant that any of the materials on its website are accurate, complete,
                  or current. Pure-Hiker may make changes to the materials contained on its website at any time without
                  notice.
                </p>
              </section>

              <section className="bg-card border border-border p-6 rounded-lg">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">8. Contact Information</h2>
                <p className="text-foreground/80 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at support@pure-hiker.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
