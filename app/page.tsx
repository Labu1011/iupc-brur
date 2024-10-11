import Footer from "@/components/sections/footer"
import FestHero from "@/components/sections/festHero";
import FestNav from "@/components/sections/festNav";
import React from "react";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				{/* Basic Meta Tags */}
				<title>BRUR CSE FEST 2024</title>
				<meta name="description"
					  content="A tech fest by the Dept. of Computer Science at Begum Rokeya University, connecting students with pros to showcase skills, foster innovation, and enhance CS knowledge."/>
				<meta name="author" content="BRUR CSE FEST 2024"/>
				<meta name="robots" content="index, follow"/>
				
				{/* Viewport Meta Tag for Mobile Responsiveness */}
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				
				{/* Open Graph Meta Tags for Social Media */}
				<meta property="og:title" content="BRUR CSE FEST 2024"/>
				<meta property="og:description"
					  content="A tech fest by the Dept. of Computer Science at Begum Rokeya University, connecting students with pros to showcase skills, foster innovation, and enhance CS knowledge."/>
				<meta property="og:image" content="https://fest.csebrur.com/_next/image?url=%2Fmongram.png&w=256&q=100"/>
				<meta property="og:url" content="https://fest.csebrur.com"/>
				<meta property="og:type" content="website"/>
				<meta property="og:locale" content="en_US"/>
				
				{/* Twitter Card Meta Tags */}
				<meta name="twitter:card" content="summary_large_image"/>
				<meta name="twitter:title" content="BRUR CSE FEST 2024"/>
				<meta name="twitter:description"
					  content="A tech fest by the Dept. of Computer Science at Begum Rokeya University, connecting students with pros to showcase skills, foster innovation, and enhance CS knowledge."/>
				<meta name="twitter:image" content="https://fest.csebrur.com/_next/image?url=%2Fmongram.png&w=256&q=100"/>
				<meta name="twitter:site" content="@your_twitter_handle"/>
				<meta name="twitter:creator" content="@creator_twitter_handle"/>
				
				{/* Canonical URL */}
				<link rel="canonical" href="https://fest.csebrur.com"/>
				
				{/* Favicon and Apple Touch Icon */}
				<link rel="icon" href="https://favicon.ico" type="image/x-icon"/>
				<link rel="apple-touch-icon" href="https://apple-touch-icon.png"/>
				
				{/* Schema.org Structured Data */}
				<script type="application/ld+json">
					{`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "BRUR CSE FEST 2024",
              "description": "
A tech fest by the Dept. of Computer Science at Begum Rokeya University, connecting students with pros to showcase skills, foster innovation, and enhance CS knowledge.",
              "url": "https://fest.csebrur.com",
              "image": "https://favicon.ico"
            }
          `}
				</script>
			</Head>
			<main
				className="relative flex w-full pb-12 overflow-hidden min-h-screen bg-black flex-col items-center justify-between">
				<div
					style={{
						backgroundPosition: "50% 0",
						backgroundSize: "auto",
						alignItems: "end",
					}}
					className="flex flex-col align-end bg-[url('/jigsaw.svg')] opacity-20 bg-repeat absolute w-[100vw] h-[100vh]"
				>
					<div
						className="mt-auto w-full h-44 bg-gradient-to-t from-black via-transparent to-transparent"></div>
				</div>
				<FestNav/>
				<FestHero/>
				<Footer/>
			</main>
		</>
	
	)
}
