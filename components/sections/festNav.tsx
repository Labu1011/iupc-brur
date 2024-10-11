"use client"

import {cn} from "@/app/lib/cn"
import {geist} from "@/app/lib/font"
import Image from "next/image"
import React from "react"

const FestNav = () => {
	const handleContactClick = () => {
		window.location.href =
			"mailto:rdcpcofficial@gmail.com?subject=Your subject%20Us&body=Hello!"
	}
	return (
		<div className="container py-7 relative z-[1000] flex items-center justify-between max-w-5xl">
			<Image
				src="/mongram.png"
				width={100}
				height={0}
				alt="BRUR CSE FEST Logo"
			/>
			<div
				className={cn(
					geist.className,
					"absolute hidden left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer lg:flex text-center text-white bg-light rounded-full font-regular space-x-10"
				)}
			>
				{/*<Link href="/">Home</Link>*/}
				{/*<Link href="#events">Event Schedule</Link>*/}
				{/*<Link href="#services">Prizes & Perks</Link>*/}
				{/*<Link href="/registeredTeam">Registered Teams</Link>*/}
			</div>
			<div className="flex flex-col gap-3">
				{/*<Button*/}
				{/*    className="flex group gap-x-2 text-md"*/}
				{/*    onClick={handleContactClick}*/}
				{/*>*/}
				{/*    Contact Us*/}
				{/*</Button>*/}
				
				<a href="https://www.facebook.com/profile.php?id=61566973042335" target="_blank"
				   className="w-fit mx-auto px-5 py-2 border rounded-lg border-blue-300 text-blue-300">Visit Our
					Facebook Page</a>
				{/*<Link*/}
				{/*  href="/registeredTeam"*/}
				{/*  className="lg:hidden px-4 py-2 rounded-2xl bg-zinc-500/50 text-white"*/}
				{/*>*/}
				{/*  Registered Teams*/}
				{/*</Link>*/}
			</div>
		</div>
	)
}

export default FestNav
