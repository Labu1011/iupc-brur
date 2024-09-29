"use client"

import { cn } from "@/app/lib/cn"
import { fregeist, geist, inter, syne } from "@/app/lib/font"
import React from "react"
import Image from "next/image"
import Countdown from "react-countdown"
import { Card, CardHeader } from "../ui/card"
import { service_cards, ServiceCardProps } from "@/app/lib/data"
import SectionHeader from "./header"
import { Reveal } from "../ui/Anim"
import CountdownSection from "./countdown"

const PrizePool = () => {
  return (
    <div
      id="services"
      className={cn(
        fregeist.className,
        "relative container space-y-3 w-full text-black"
      )}
    >
      <CountdownSection />
      <div className="w-full h-80"></div>
      <SectionHeader
        title={
          <>
            <span className="text-white opacity-30">{"{"}</span>{" "}
            <span>Prizes</span>{" "}
            <span className="text-white opacity-30">{"}"}</span>
          </>
        }
        subtitle={
          <>
            Get up for the IUPC challenge 2024.
            <br /> Exciting prizes awaits
          </>
        }
      />
      <div className="w-full h-10"></div>
      <div>
        <div className="w-fit mx-auto space-y-16">
          <div className="flex flex-col lg:flex-row gap-32">
            <div className={cn(inter.className, "mt-24 relative")}>
              <div className="absolute left-1/2 -translate-x-1/2 top-16 text-3xl font-bold">
                2<sup>nd</sup>
              </div>
              <Image
                src="/silver.png"
                alt="Silver medal"
                height={0}
                width={150}
              />
              <p className=""></p>
              <p className="text-white text-center font-semibold">15,000 BDT</p>
            </div>
            <div className={cn(inter.className, "relative")}>
              <div className="absolute left-1/2 -translate-x-1/2 top-16 text-3xl font-bold">
                1<sup>st</sup>
              </div>
              <Image src="/gold.png" alt="Gold medal" height={0} width={150} />
              <p className=""></p>
              <p className="text-white text-center font-semibold">20,000 BDT</p>
            </div>
            <div className={cn(inter.className, "mt-24 relative")}>
              <div className="absolute left-1/2 -translate-x-1/2 top-16 text-3xl font-bold">
                3<sup>rd</sup>
              </div>
              <Image
                src="/bronze.png"
                alt="Bronze medal"
                height={0}
                width={150}
              />
              <p className=""></p>
              <p className="text-white text-center font-semibold">7,000 BDT</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-16">
            <div className="flex bg-zinc-900/90 rounded-2xl py-6 px-8 items-center gap-x-5">
              <div className="flex items-center justify-center h-[50px] w-[50px] rounded-full bg-white">
                <div className="text-lg font-bold">
                  4<sup>th</sup>
                </div>
              </div>
              <p className="text-white text-center font-semibold">4,000 BDT</p>
            </div>
            <div className="flex bg-zinc-900/90 rounded-2xl py-6 px-8 items-center gap-x-5">
              <div className="flex items-center justify-center h-[50px] w-[50px] rounded-full bg-white">
                <div className="text-lg font-bold">
                  5<sup>th</sup>
                </div>
              </div>
              <p className="text-white text-center font-semibold">2,000 BDT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrizePool

const Service_card = ({ title, desc, url }: ServiceCardProps) => {
  return (
    <Card className="relative group grid grid-cols-1 bg-transparent border-gray-400/20 borde-[#2B2B2B] hover:bg-black overflow-clip transition-all duration-300">
      <div
        className={cn(
          "bg-violet-30 firefox:opacity-40",
          "z-0 blur-[110px] absolute left-1/2 -translate-x-1/2 top-[40%] h-24 w-24"
        )}
      ></div>
      <div className="relative z-10 p-5 lg:p-10 space-y-4">
        <CardHeader
          className={cn(fregeist.className, "text-2xl font-medium text-white")}
        >
          {title}
        </CardHeader>
        <CardHeader className="bg-gradient-to-br from-gray-300 to-gray-600 bg-clip-text text-transparent text-[16px] md:text-2xl">
          {desc}
        </CardHeader>
      </div>
      <Reveal width={"100%"}>
        <div className="w-full h-full px-[3%] flex items-center justify-center relative col-span-4 transition-all duration-300">
          <Image
            className="w-full z-[100px] group-hover:flex"
            width={1200}
            height={0}
            src={url}
            alt=""
          />
        </div>
      </Reveal>
    </Card>
  )
}
