import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: {
    default: "Rocko's Choice — Curated Picks by a Very Good Boy",
    template: "%s | Rocko's Choice",
  },
  description:
    "Rocko the Jack Russell hand-picks the best fitness gear, pet products, and women's finds from Amazon, Temu, and AliExpress.",
  keywords: ["affiliate", "product recommendations", "fitness", "pets", "dog", "Jack Russell"],
  openGraph: {
    title: "Rocko's Choice",
    description: "Curated product picks by a very good boy.",
    siteName: "Rocko's Choice",
    type: "website",
  },
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}
    </html>
  )
}
