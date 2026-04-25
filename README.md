# Rocko's Choice

A modern affiliate marketing website built with Next.js 16, featuring Rocko the Jack Russell terrier as the mascot. The site curates and recommends products across pets, fitness, and lifestyle categories, driving revenue through affiliate links.

---

## Overview

Rocko's Choice is a product recommendation platform where every pick is "Rocko-approved." Visitors can browse curated products by category, read blog posts, and click through to purchase via affiliate links (Amazon and others). The site is designed to feel personal and trustworthy — like getting a recommendation from a friend (or their dog).

### Categories

- **Fitness** — workout gear, equipment, and accessories
- **Pets** — toys, food, accessories, and everything pet-related
- **Women** — style, beauty, and everyday lifestyle finds

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui, Radix UI |
| State Management | Zustand |
| Data Fetching | TanStack Query v5 |
| Forms | React Hook Form + Zod |
| Auth | NextAuth v5 |
| Database ORM | Prisma v7 (PostgreSQL) |
| Package Manager | pnpm |
| Deployment | Vercel |

---

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── (auth)/           # Login / registration routes
│   ├── (dashboard)/      # Admin dashboard
│   ├── about/            # About page
│   ├── blog/             # Blog listing and posts
│   ├── fitness/          # Fitness category page
│   ├── pets/             # Pets category page
│   ├── products/         # All products page
│   ├── women/            # Women category page
│   └── api/              # API routes
├── components/           # Shared UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── ProductCard.tsx
│   ├── ProductGrid.tsx
│   ├── ProductBuyBox.tsx
│   ├── FeaturedProduct.tsx
│   ├── CategoryBanner.tsx
│   ├── ScrollToTop.tsx
│   ├── shared/
│   └── ui/
├── data/                 # Static data (products, categories, posts)
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and configs
├── store/                # Zustand stores
├── types/                # TypeScript type definitions
└── validators/           # Zod schemas
prisma/
└── schema.prisma         # Database schema
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm
- A PostgreSQL database

### Installation

```bash
# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
# Fill in your DATABASE_URL and other secrets in .env

# Run database migrations
pnpm prisma migrate dev

# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

The project is deployed on Vercel. Push to the `master` branch to trigger a production deployment.

```bash
# Deploy manually via Vercel CLI
vercel --prod
```
