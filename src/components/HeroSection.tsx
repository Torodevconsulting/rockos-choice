import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-primary/10 blur-3xl pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold text-sm px-4 py-1.5 rounded-full mb-6">
              <span>🐾</span> Trusted by a Very Good Boy
            </div>
            <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mb-4">
              The Best Picks,{" "}
              <span className="text-primary">Rocko-Approved</span> 🐶
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
              Rocko sniffs out the best deals on fitness gear, pet essentials,
              and women&apos;s must-haves — from Amazon, Temu, and AliExpress.
              Only the good stuff makes the cut.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link
                href="#picks"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-base px-8 py-3.5 rounded-full hover:bg-primary/90 transition-colors shadow-md"
              >
                See Rocko&apos;s Picks 🦴
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-white text-foreground font-semibold text-base px-8 py-3.5 rounded-full hover:bg-white/80 transition-colors border border-border"
              >
                Meet Rocko
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-6 mt-10 justify-center md:justify-start">
              {[
                { value: "3", label: "Categories" },
                { value: "12+", label: "Products" },
                { value: "100%", label: "Good Boy Approved" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading font-black text-2xl text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rocko placeholder image */}
          <div className="flex-shrink-0 relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-primary/20">
              <Image
                src="https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=600&q=80"
                alt="Rocko the Jack Russell — placeholder"
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-2 flex items-center gap-2 border border-border">
              <span className="text-2xl">⭐</span>
              <div>
                <div className="font-heading font-black text-xs text-foreground">
                  Choice of the Week
                </div>
                <div className="text-xs text-muted-foreground">Updated weekly</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
