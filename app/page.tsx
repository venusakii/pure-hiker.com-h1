import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { AdvantagesSection } from "@/components/advantages-section"
import { ProductGallerySection } from "@/components/product-gallery-section"
import { ComparisonSection } from "@/components/comparison-section"
import { ReviewsSection } from "@/components/reviews-section"
import { VideoSection } from "@/components/video-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <AdvantagesSection />
      <ProductGallerySection />
      <ComparisonSection />
      <ReviewsSection />
      <VideoSection />
      <CTASection />
      <Footer />
      <CookieBanner />
    </main>
  )
}
