import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { getTopProducts } from "@/data/products"

const providerLabel: Record<string, string> = {
  amazon: "Amazon",
  temu: "Temu",
  aliexpress: "AliExpress",
}

export function HeroSection() {
  const popularProducts = getTopProducts(3)

  return (
    <section className="bg-white overflow-hidden">

      {/* ── Editorial hero ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 pt-12 lg:pt-16 pb-12 lg:pb-20">

        {/* Headline + Rocko circle */}
        <div className="flex items-center justify-between gap-8">

          {/* Left: headline */}
          <h1 className="font-heading font-black leading-[0.9] tracking-tight select-none flex-1">

            {/* Row 1 */}
            <div className="flex items-baseline flex-wrap gap-x-6 lg:gap-x-10">
              <span className="text-6xl md:text-8xl lg:text-[9rem] text-foreground">
                Shop
              </span>
              <span className="text-6xl md:text-8xl lg:text-[9rem] text-primary leading-none">
                —
              </span>
              <span className="text-6xl md:text-8xl lg:text-[9rem] text-foreground">
                Smart
              </span>
            </div>

            {/* Row 2 */}
            <div className="flex items-end flex-wrap gap-x-6 lg:gap-x-10 mt-2 lg:mt-4">
              <span className="text-6xl md:text-8xl lg:text-[9rem] text-foreground">
                Live
              </span>

              <span className="text-6xl md:text-8xl lg:text-[9rem] text-foreground">
                Better<span className="text-primary">.</span>
              </span>
            </div>
          </h1>

          {/* Right: Rocko in orange circle */}
          <div className="hidden lg:flex shrink-0 items-center justify-center w-64 h-64 xl:w-80 xl:h-80 rounded-full border-[6px] border-primary overflow-hidden bg-white">
            <Image
              src="/rockoschoiuce.png"
              alt="Rocko"
              width={320}
              height={320}
              className="object-cover w-full h-full"
            />
          </div>

        </div>

        {/* Sub-row: tag + CTAs */}
        <div className="mt-10 lg:mt-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Rocko&apos;s Selections · Updated weekly
            </span>
          </div>

          <div className="flex items-center gap-5">
            <Link
              href="#picks"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-sm px-7 py-3.5 rounded-full hover:bg-primary/90 transition-colors shadow-md"
            >
              Shop Picks
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
            >
              Meet Rocko
            </Link>
          </div>
        </div>
      </div>

      {/* ── Popular picks strip ────────────────────────────────── */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-heading font-black text-base uppercase tracking-wider text-foreground">
              Popular Picks
            </h2>
            <Link
              href="/#picks"
              className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              See all <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {popularProducts.map((p) => (
              <a
                key={p.id}
                href={p.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-colors"
              >
                <div className="relative w-14 h-14 shrink-0 rounded-xl overflow-hidden bg-muted">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    unoptimized
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-xs text-foreground leading-tight line-clamp-1">
                    {p.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {providerLabel[p.provider]}
                  </p>
                  <p className="font-heading font-black text-sm text-primary mt-0.5">
                    {p.price}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}