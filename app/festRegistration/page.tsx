import SectionHeader from "@/components/sections/header"
import Link from "next/link"
import React from "react"
import FestRegisterForm from "@/components/sections/festRegisterForm";

async function FestRegistrationPage() {
	
	return (
		<div
			className="relative w-full py-24 overflow-hidden min-h-screen bg-black text-white items-center justify-between">
			<Link
				href="/"
				className="absolute text-zinc-500 hover:text-zinc-400 transition-all duration-200 -translate-y-12 translate-x-12"
			>
				&larr; Go Back
			</Link>
			<div className="mt-12"/>
			<SectionHeader title="BRUR CSE FEST 2024 Registration" subtitle={<></>}/>
			<p className="text-lg md:text-2xl text-center text-gray-400 font-regular">
				Only for Department of CSE, Begum Rokeya University, Rangpur
			</p>
			<FestRegisterForm/>
		</div>
	)
}

export default FestRegistrationPage
