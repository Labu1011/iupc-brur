import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { fregeist, geist } from "./lib/font"
import CustomCursor from "@/components/ui/customCursor"
import { AppWrapper } from "@/context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BRUR CSE Fest IUPC",
  description: "",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <AppWrapper>
        <body className={geist.className}>{children}</body>
      </AppWrapper>
    </html>
  )
}
