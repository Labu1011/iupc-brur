import { cn } from "@/app/lib/cn"
import { fregeist, geist, syne } from "@/app/lib/font"
import {
  ArrowRightIcon,
  ArrowUpIcon,
  ChevronUpIcon,
  DotIcon,
  ExternalLinkIcon,
} from "@radix-ui/react-icons"
import Image from "next/image"
import React from "react"
import { Button } from "../ui/button"
import Link from "next/link"
import { useAppContext } from "@/context"

const Footer = () => {
  return (
    <div className="pt-12 pb-4 w-full">
      <p className="text-gray-400 text-center">
        © BRUR CSE Fest 2024. All rights reserved
      </p>
    </div>
  )
}

export default Footer
