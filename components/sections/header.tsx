import { fregeist, geist } from "@/app/lib/font"
import clsx from "clsx"
import React from "react"

const SectionHeader = ({
  title,
  subtitle,
}: {
  title: JSX.Element | string
  subtitle: JSX.Element
}) => {
  return (
    <div className="space-y-5 text-center">
      <p
        className={clsx(
          fregeist.className,
          "text-white text-[1.8rem] md:text-[2.5rem] lg:text-[2.8rem] leading-[100%] font-normal"
        )}
      >
        {title}
      </p>
      <p
        className={clsx(
          geist.className,
          "text-[1.2rem] relative bg-gradient-to-br from-gray-100 to-gray-600 bg-clip-text text-transparent"
        )}
      >
        {subtitle}
      </p>
    </div>
  )
}

export default SectionHeader
