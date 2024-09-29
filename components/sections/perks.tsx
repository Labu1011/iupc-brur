import { cn } from "@/app/lib/cn"
import { fregeist, geist, inter, syne } from "@/app/lib/font"
import Image from "next/image"
import { Fragment } from "react"
import SectionHeader from "./header"

const Perks = () => {
  return (
    <Fragment>
      <div
        id="showcases"
        className={cn(geist.className, "container space-y-3 w-full text-black")}
      >
        <div className="w-full h-44"></div>
        <SectionHeader
          title="Participants' perks"
          subtitle={
            <>
              As a token of appreciation for being part of the IUPC, <br />{" "}
              every participant will enjoy a range of exclusive perks.
            </>
          }
        />
      </div>
      <div className="h-24"></div>

      <div className="w-full flex justify-center">
        <div className="flex flex-col lg:flex-row items-center gap-x-10 gap-y-6 rounded-2xl w-fit">
          <div className="flex border border-zinc-600/30 rounded-2xl px-10 py-8 items-center gap-4">
            <Image src={"/shirt.png"} height={0} width={110} alt="T-Shirt" />
            <p className="text-zinc-300 text-center text-md lg:text-xl">
              Official IUPC T-Shirt
            </p>
          </div>
          <div className="flex border border-zinc-600/30 rounded-2xl px-10 py-8 items-center gap-4">
            <Image
              src={"/school_satchel.png"}
              height={0}
              width={110}
              alt="Bagpack"
            />
            <p className="text-zinc-300 text-center text-md lg:text-xl">
              Branded Backpack
            </p>
          </div>
          <div className="flex border border-zinc-600/30 rounded-2xl px-10 py-8 items-center gap-4">
            <Image src={"/ledger.png"} height={0} width={110} alt="Notebook" />
            <p className=" text-zinc-300 text-center text-md lg:text-xl">
              Pen and Notebook
            </p>
          </div>
        </div>
      </div>
      <div className="h-16"></div>
      <p className="relative px-4 text-zinc-400 text-base lg:text-lg font-normal text-center">
        <span
          className={cn(
            "text-[120px] lg:text-[200px] absolute inline-block translate-y-2 lg:translate-y-8 -translate-x-6 lg:-translate-x-7 text-amber-300/15"
          )}
        >
          *
        </span>
        And enjoy complimentary snacks during the IUPC event to keep you{" "}
        <br></br>
        energized and focused throughout the competition!
      </p>
    </Fragment>
  )
}

export default Perks
