import Footer from "@/components/sections/footer"
import FestHero from "@/components/sections/festHero";
import FestNav from "@/components/sections/festNav";
import React from "react";

export default function Home() {
	return (
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
				<div className="mt-auto w-full h-44 bg-gradient-to-t from-black via-transparent to-transparent"></div>
			</div>
			<FestNav/>
			<FestHero/>
			<Footer/>
		</main>
	)
}
