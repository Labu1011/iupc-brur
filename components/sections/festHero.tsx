import React from "react"
import {cn} from "@/app/lib/cn"
import {geist} from "@/app/lib/font"
import {Button} from "@/components/ui/button"
import FestCountdownSection from "@/components/sections/festCountdown";

const FestHero = () => {
	return (
		<div id="/" className="relative bg-[rgba(18, 20, 21, 0)] container w-full">
			<div className="flex flex-col justfy-center space-y-3 lg:space-y-6 relative z-[1000]">
				<div className="h-10 lg:h-16"></div>
				{/*<div className="flex text-center gap-x-2 text-gray-400 items-center mx-auto w-fit bg-light bg-gray-400/10 px-6 py-2 rounded-full border-gray-700">*/}
				{/*	Compete <DotIcon /> Code <DotIcon /> Conquer*/}
				{/*</div>*/}
				<h1
					className={cn(
						geist.className,
						"text-center leading-[100%] bg-gradient-to-br from-gray-50 to-gray-400 bg-clip-text text-transparent  text-[39px] md:text-[60px] lg:text-[70px]  font-bold"
					)}
				>
					BRUR CSE FEST 2024
				</h1>
				<p className="text-lg md:text-2xl text-center text-gray-400 font-regular">
					Organized by Department of CSE, BRUR and CSE CLUB
				</p>
				<div className="mx-auto flex justify-center">
					<FestCountdownSection/>
				</div>
				<div className="h-0"></div>
				
				<a href="/rdcpc" className="w-72 mx-auto">
					<Button
						size={"lg"}
						className="mx-auto w-full bg-blue-500 text-gray-50 hover:text-black text-md h-12 px-12 flex group gap-x-2"
					>
						Explore RDCPC
					</Button>
				</a>
				
				{/*<a href="/festRegistration" className="w-72 mx-auto">*/}
				{/*	<Button*/}
				{/*		size={"lg"}*/}
				{/*		className="mx-auto w-full text-md h-12 px-12 flex group gap-x-2"*/}
				{/*	>*/}
				{/*		Register for BRUR CSE FEST 2024*/}
				{/*	</Button>*/}
				{/*</a>*/}
			</div>
			{/* <Link */}
			{/*   href="#services" */}
			{/*   className="z-10 left-[4%] bottom-[10%] absolute flex items-center justify-center border-white bg-transparent border-4 p-4 shadow-xl rounded-full h-16 w-16" */}
			{/* > */}
			{/*   <div className="relative bg-white rounded-full p-2"> */}
			{/*     <ArrowDownIcon className="h-8 w-8" /> */}
			{/*     <span className="animate-ping absolute inset-0 inline-flex h-full w-full rounded-full bg-white opacity-75"></span> */}
			{/*   </div> */}
			{/* </Link> */}
			{/* <Image
        className="absolute left-1/2 -translate-x-1/2"
        src="/hero.png"
        width={600}
        height={0}
        alt=""
      /> */}
		</div>
	)
}

export default FestHero
