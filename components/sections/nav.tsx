"use client"

import { cn } from "@/app/lib/cn"
import { geist } from "@/app/lib/font"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Button } from "../ui/button"
import { useAppContext } from "@/context"
import Menu from "./menu"

const Nav = () => {
  const handleContactClick = () => {
    window.location.href =
      "mailto:example@email.com?subject=Contact%20Us&body=Hello!"
  }
  return (
    <div className="container py-7 relative z-[1000] flex items-center justify-between w-full">
      <Image src="/mongram.png" width={100} height={0} alt="" />
      <div
        className={cn(
          geist.className,
          "absolute hidden left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer lg:flex text-center text-white bg-light rounded-full font-regular space-x-10"
        )}
      >
        <Link href="/">Home</Link>
        <Link href="#showcases">Event Schedule</Link>
        <Link href="#services">Prizes & Perks</Link>
        <Link href="/registeredTeam">Registered Teams</Link>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Button
          className="flex group gap-x-2 text-md"
          onClick={handleContactClick}
        >
          Contact Us
        </Button>
      </div>
    </div>
  )
}

export default Nav
