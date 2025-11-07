import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-display font-bold text-foreground mb-6">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <div className="w-24 h-1 bg-primary mb-8" />
            <p className="text-muted-foreground mb-8">Last Updated: January 2025</p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section className="bg-card border border-border p-6 rounded-lg">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">1. Information We Collect</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-foreground/80 leading-relaxed space-y-1">
                  <li>Name and contact information when you fill out forms</li>
                  <li>Email address when you subscribe to our newsletter</li>
                  <li>Usage data and analytics through cookies</li>
                  <li>Device and browser information</li>
                </ul>
              </section>

              <section className="bg-card border border-border p-6 rounded-lg">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside text-foreground/80 leading-relaxed space-y-1">
                  <li>Provide and improve our services</li>
                  <li>Respond to your inquiries and support requests</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Analyze usage patterns and optimize user experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="bg-card border border-border p-6 rounded-lg">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">3. Cookies and Tracking</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and hold certain
                  information. Cookies are files with small amounts of data which may include an anonymous unique
                  identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                  sent.
                </p>
              </section>

              <section className="bg-card border border-border p-6 rounded-lg">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">4. Third-Party Services</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We use Amazon Associates and other third-party services that may collect, monitor, and analyze data.
                  These third parties have their own privacy policies addressing how they use such information. We
                  encourage you to review their privacy policies.
                </p>
              </section>

              <section className="bg-card border border-border p-6 rounded-lg">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">5. Data Security</h2>
                <p className="text-foreground/80 leading-relaxed">
                  The security of your personal information is important to us. We implement reasonable security
                  measures to protect against unauthorized access, alteration, disclosure, or destruction of your
                  personal information. However, no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section className="bg-card border border-border p-6 rounded-lg">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">6. Your Rights</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">You have the right to:</p>
                <ul className="list-disc list-inside text-foreground/80 leading-relaxed space-y-1">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Object to processing of your data</li>
                </ul>
              </section>

              <section className="bg-card border border-border p-6 rounded-lg">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">7. Children's Privacy</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Our website is not intended for children under 13 years of age. We do not knowingly collect personal
                  information from children under 13. If you are a parent or guardian and believe your child has
                  provided us with personal information, please contact us.
                </p>
              </section>

              <section className="bg-card border border-border p-6 rounded-lg">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">8. Changes to This Policy</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
              </section>

              <section className="bg-card border border-border p-6 rounded-lg">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">9. Contact Us</h2>
                <p className="text-foreground/80 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at privacy@pure-hiker.com
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
