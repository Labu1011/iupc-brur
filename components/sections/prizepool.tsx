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
import { Label } from "../ui/label"
import clsx from "clsx"

const prizecards = [
  {
    img: "/gold.png",
    title: "Champion",
    bdt: "20,000",
  },
  {
    img: "/silver.png",
    title: "1st Runners up",
    bdt: "14,000",
  },
  {
    img: "/bronze.png",
    title: "2nd Runners up",
    bdt: "8,000",
  },
  {
    img: "/iron.png",
    title: "4th place",
    bdt: "5,000",
  },
  {
    img: "/iron.png",
    title: "5th place",
    bdt: "3,000",
  },
]

const PrizePool = () => {
  return (
    <div
      id="services"
      className={cn(
        fregeist.className,
        "relative container space-y-3 w-full text-black"
      )}
    >
      <div className="w-full h-44"></div>
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
            Get up for the RDCPC challenge 2024.
            <br /> Exciting prizes awaits
          </>
        }
      />
      <div className="w-full h-10"></div>
      <div>
        <div className="w-full mx-auto space-y-4">
          {/* Hidden on small devices */}
          <div className="hidden lg:flex justify-center gap-32">
            <div
              className={cn(
                geist.className,
                "mt-24 relative flex flex-col items-center"
              )}
            >
              <Image
                src="/silver.png"
                alt="Silver medal"
                height={0}
                width={150}
              />
              <div className="flex flex-col items-center -translate-y-5">
                <Label className="font-bold text-2xl text-zinc-200">
                  <p
                    className={clsx(
                      geist.className,
                      "relative bg-gradient-to-br from-gray-100 to-gray-600 bg-clip-text text-transparent"
                    )}
                  >
                    1st Runners up
                  </p>
                </Label>
                <Label className="text-white text-lg text-center font-semibold">
                  <p
                    className={clsx(
                      geist.className,
                      "relative bg-gradient-to-br from-gray-100 to-gray-600 bg-clip-text text-transparent"
                    )}
                  >
                    BDT 14,000
                  </p>
                </Label>
              </div>
            </div>
            <div
              className={cn(
                inter.className,
                "relative flex flex-col items-center"
              )}
            >
              <Image src="/gold.png" alt="Gold medal" height={0} width={150} />
              <div className="flex flex-col items-center -translate-y-5">
                <Label className="font-bold text-2xl text-zinc-200">
                  <p
                    className={clsx(
                      geist.className,
                      "relative bg-gradient-to-br from-gray-100 to-gray-600 bg-clip-text text-transparent"
                    )}
                  >
                    Champion
                  </p>
                </Label>
                <Label className="text-white text-lg text-center font-semibold">
                  <p
                    className={clsx(
                      geist.className,
                      "relative bg-gradient-to-br from-gray-100 to-gray-600 bg-clip-text text-transparent"
                    )}
                  >
                    BDT 20,000
                  </p>
                </Label>
              </div>
            </div>
            <div
              className={cn(
                inter.className,
                "mt-24 relative flex flex-col items-center"
              )}
            >
              <Image
                src="/bronze.png"
                alt="Bronze medal"
                height={0}
                width={150}
              />
              <div className="flex flex-col items-center -translate-y-5">
                <Label className="font-bold text-2xl text-zinc-200">
                  <p
                    className={clsx(
                      geist.className,
                      "relative bg-gradient-to-br from-gray-100 to-gray-600 bg-clip-text text-transparent"
                    )}
                  >
                    2nd Runners up
                  </p>
                </Label>
                <Label className="text-white text-lg text-center font-semibold">
                  <p
                    className={clsx(
                      geist.className,
                      "relative bg-gradient-to-br from-gray-100 to-gray-600 bg-clip-text text-transparent"
                    )}
                  >
                    BDT 8000
                  </p>
                </Label>
              </div>
            </div>
          </div>

          {/* ------- */}

          <div className="lg:hidden flex flex-col w-full gap-4">
            {prizecards.map(({ img, title, bdt }, idx) =>
              PrizeCard(img, title, bdt, idx)
            )}
          </div>

          <div className="hidden lg:flex items-center  justify-center w-full max-w-lg mx-auto gap-4 md:gap-10 lg:gap-16">
            <div className="flex bg-zinc-900/90 w-full rounded-2xl py-4 px-5 md:py-6 md:px-8 items-center gap-x-4 md:gap-x-5">
              <Image
                src="/iron.png"
                alt="Iron medal"
                height={0}
                width={50}
                className="translate-y-2"
              />
              <div className="flex flex-col">
                <p className="text-white/70">4th place</p>
                <p className="text-white text-center font-semibold">
                  5,000 BDT
                </p>
              </div>
            </div>
            <div className="flex bg-zinc-900/90 w-full rounded-2xl py-4 px-5 md:py-6 md:px-8 items-center gap-x-0 md:gap-x-5">
              <Image
                src="/iron.png"
                alt="Iron medal"
                height={0}
                width={50}
                className="translate-y-2"
              />
              <div className="flex flex-col">
                <p className="text-white/70">5th place</p>
                <p className="text-white text-center font-semibold">
                  3,000 BDT
                </p>
              </div>
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

function PrizeCard(img: string, title: string, bdt: string, idx: number) {
  return (
    <div
      className={cn(
        inter.className,
        "relative flex items-center pl-14 gap-9 bg-zinc-900/90 w-full max-w-lg mx-auto rounded-xl"
      )}
    >
      <p className="absolute text-3xl font-bold text-zinc-700 top-1/2 -translate-y-1/2 left-6">
        {idx + 1}
      </p>
      <Image
        src={img}
        alt="Gold medal"
        height={0}
        width={90}
        className="w-16 translate-y-3"
      />
      <div className="flex flex-col gap-y-0.5 items-start">
        <Label className="font-bold text-xl lg:text-2xl text-zinc-200">
          <p
            className={clsx(
              geist.className,
              "relative bg-gradient-to-br from-gray-100 to-gray-600 bg-clip-text text-transparent"
            )}
          >
            {title}
          </p>
        </Label>
        <Label className="text-white text-lg text-center font-semibold">
          <p
            className={clsx(
              geist.className,
              "relative bg-gradient-to-br from-gray-100 to-gray-600 bg-clip-text text-transparent"
            )}
          >
            BDT {bdt}
          </p>
        </Label>
      </div>
    </div>
  )
}
