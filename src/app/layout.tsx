import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Providers } from "./providers"
import Header from "../widgets/header"
import Footer from "../widgets/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Real Estate Marketplace",
  description: "Find your dream property",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="container mx-auto px-4 py-8">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

