import type {Metadata} from "next"
import "./globals.css"
import {geist} from "./lib/font"
import {AppWrapper} from "@/context"
import {Toaster} from "@/components/ui/toaster"

// const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
	title: "BRUR CSE FEST 2024",
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
			<Toaster/>
		</AppWrapper>
		</html>
	)
}
