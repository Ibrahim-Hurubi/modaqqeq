import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/components/language-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const cairo = Cairo({
  subsets: ["latin", "arabic"],
  variable: "--font-cairo",
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
})

export const metadata: Metadata = {
  title: "مدقق | Modaqqeq - منصة الذكاء الاصطناعي لكشف الاحتيال المالي",
  description:
    "منصة ذكاء اصطناعي لرصد الاحتيال المالي وتعزيز النزاهة في خدمات وزارة الموارد البشرية والتنمية الاجتماعية",
    
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body>
<div className='bg-yellow-200 text-yellow-800 text-center p-2 text-sm'>هذا المشروع هو مشاركة في هاكاثون الابتكار وليس منصة حكومية رسمية.</div>
 className="font-sans antialiased min-h-screen flex flex-col">
        <LanguageProvider>
          <div className="flex-1 flex flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
