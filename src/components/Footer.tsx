import Link from "next/link"

const categories = [
  { href: "/fitness", label: "Fitness" },
  { href: "/pets", label: "Pets" },
  { href: "/women", label: "Women" },
  { href: "/about", label: "About Rocko" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-heading font-extrabold text-xl mb-3">
              <span className="text-2xl">🐾</span>
              <span>
                Rocko&apos;s{" "}
                <span className="text-primary">Choice</span>
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Curated product picks by a very good boy. Rocko only recommends
              what he&apos;d fetch himself.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-3 text-white/80">
              Categories
            </h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.href}>
                  <Link
                    href={cat.href}
                    className="text-sm text-white/60 hover:text-primary transition-colors"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-3 text-white/80">
              Follow Rocko
            </h3>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors text-sm"
              >
                IG
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors text-sm"
              >
                TT
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-xs text-white/40 leading-relaxed">
            <strong className="text-white/60">Affiliate Disclosure:</strong>{" "}
            Rocko&apos;s Choice participates in affiliate programs including Amazon
            Associates, Temu, and AliExpress. We may earn a small commission when
            you purchase through our links — at no extra cost to you. This helps
            keep Rocko in treats. 🦴
          </p>
          <div className="flex items-center justify-between mt-2">
            <p className="text-xs text-white/30">
              © {new Date().getFullYear()} torodevelopment. All rights reserved.
            </p>
            <p className="text-xs text-white/30">
              Built with precision. Deployed with care.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
