import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { fregeist, geist } from "./lib/font"
import CustomCursor from "@/components/ui/customCursor"
import { AppWrapper } from "@/context"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BRUR CSE Fest RDCPC 2024",
  description:
    "Join us for the BRUR CSE Fest RDCPC 2024, a thrilling competitive programming contest bringing together talented coders to compete, collaborate, and showcase their problem-solving skills. Final registration and payment details available now.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <AppWrapper>
        <body className={geist.className}>{children}</body>
        <Toaster />
      </AppWrapper>
    </html>
  )
}
