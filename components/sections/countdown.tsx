"use client"

import { geist } from "@/app/lib/font"
import clsx from "clsx"
import React, { Fragment } from "react"
import Countdown from "react-countdown"

const CountdownSection = () => {
  return (
    <div className="absolute bg-zinc-900 w-96 px-8 py-6 rounded-3xl left-1/2 -translate-x-1/2 translate-y-32">
      <p className="text-xl text-zinc-400 text-center">Onsite starts in: </p>
      <div className={clsx(geist.className, "text-3xl text-white text-center")}>
        <Countdown date={Date.now() + 1000 * 60 * 60 * 24} autoStart />
      </div>
      <div
        className={clsx(
          geist.className,
          "flex gap-4 justify-center items-center mx-auto w-44"
        )}
      >
        <p className="text-zinc-500 text-base">Day</p>
        <p className="text-zinc-500 text-base">Hrs</p>
        <p className="text-zinc-500 text-base">Min</p>
        <p className="text-zinc-500 text-base">Sec</p>
      </div>
    </div>
  )
}

export default CountdownSection
