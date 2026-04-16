import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "About Rocko",
  description:
    "Meet Rocko — the Jack Russell behind all the picks. Learn the story of how a very good boy became the internet's most trusted product curator.",
}

const traits = [
  { emoji: "🔍", label: "Expert Sniffer", desc: "Can detect a bad deal from miles away." },
  { emoji: "🦴", label: "Treat Connoisseur", desc: "Only recommends things worth fetching." },
  { emoji: "💤", label: "Quality Tester", desc: "Personally naps on every reviewed product." },
  { emoji: "🐾", label: "Brand Ambassador", desc: "Officially the goodest boy in affiliate marketing." },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-secondary border-b border-border">
          <div
            aria-hidden
            className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-primary/15 blur-3xl pointer-events-none"
          />
          <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Photo */}
              <div className="flex-shrink-0">
                <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-primary/20">
                  <Image
                    src="https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=600&q=80"
                    alt="Rocko the Jack Russell — placeholder"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                  />
                </div>
              </div>
              {/* Text */}
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold text-sm px-4 py-1.5 rounded-full mb-4">
                  🐾 The Dog Behind the Picks
                </div>
                <h1 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-4 leading-tight">
                  Meet Rocko 🐶
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                  A Jack Russell with impeccable taste, a nose for deals, and an
                  unwavering commitment to only recommending products he&apos;d
                  use himself (which is most of them, honestly).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="max-w-3xl mx-auto px-4 py-16">
          <h2 className="font-heading font-black text-3xl text-foreground mb-6">
            The Story 🦴
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
            <p>
              Rocko started life as any other Jack Russell — full of energy,
              boundless curiosity, and a slightly obsessive relationship with
              squeaky toys. But somewhere between his third zoomies session of
              the day and his twelfth nap, he discovered something remarkable:
              a talent for finding amazing products online.
            </p>
            <p>
              It started with a chew toy from AliExpress. Then a harness from
              Amazon. Then a resistance band set that his human used every
              morning while Rocko supervised from the yoga mat. One thing led
              to another, and before long, Rocko had opinions — strong ones —
              about everything from skincare to gym bags.
            </p>
            <p>
              <strong className="text-foreground">Rocko&apos;s Choice</strong>{" "}
              was born out of a simple idea: great products shouldn&apos;t be hard
              to find. Every pick on this site has been Rocko-reviewed, Rocko-sniffed,
              and ultimately Rocko-approved. He takes this job very seriously
              (when he&apos;s not napping).
            </p>
          </div>
        </section>

        {/* Traits */}
        <section className="bg-secondary border-y border-border py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-black text-3xl text-foreground mb-8 text-center">
              Why Trust Rocko?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {traits.map((t) => (
                <div
                  key={t.label}
                  className="flex items-start gap-4 bg-white rounded-2xl border border-border p-5 shadow-sm"
                >
                  <span className="text-3xl flex-shrink-0">{t.emoji}</span>
                  <div>
                    <div className="font-heading font-bold text-foreground mb-1">
                      {t.label}
                    </div>
                    <div className="text-sm text-muted-foreground">{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div className="text-4xl mb-4">🎾</div>
          <h2 className="font-heading font-black text-3xl text-foreground mb-3">
            Ready to see Rocko&apos;s Picks?
          </h2>
          <p className="text-muted-foreground mb-6">
            Browse curated products across fitness, pets, and women&apos;s
            categories — all Rocko-approved.
          </p>
          <Link
            href="/#picks"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-3.5 rounded-full hover:bg-primary/90 transition-colors shadow-md"
          >
            See All Picks 🐾
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
