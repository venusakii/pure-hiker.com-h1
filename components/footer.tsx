import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-6">
          <div className="text-3xl font-display font-bold text-primary">PURE-HIKER</div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/reviews" className="text-muted-foreground hover:text-primary transition-colors">
              Reviews
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </Link>
          </div>

          <div className="text-center text-sm text-muted-foreground max-w-2xl">
            <p className="mb-2">© 2025 Pure-Hiker.com — All Rights Reserved.</p>
            <p className="text-xs">
              Amazon Affiliate Partner — As an Amazon Associate, we earn from qualifying purchases.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
