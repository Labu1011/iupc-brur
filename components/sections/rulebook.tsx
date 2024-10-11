import { geist } from "@/app/lib/font"
import { cn } from "@/lib/utils"
import React, { Fragment } from "react"
import Image from "next/image"
import { DownloadIcon } from "@radix-ui/react-icons"
import SectionHeader from "./header"
import { Button } from "../ui/button"

const Rulebook = () => {
  // Google Drive direct download link (replace with your actual file ID)
  const rulebookPDFUrl =
    "https://drive.google.com/file/d/1CRxLIr-PRDOBkhLBMDzthAJSnyCRDy20/view?usp=sharing"

  return (
    <Fragment>
      <div
        id="rulebook"
        className={cn(geist.className, "container space-y-3 w-full text-black")}
      >
        <div className="w-full h-44"></div>
        <SectionHeader
          title="The Rulebook"
          subtitle={
            <>
              Welcome to the official rulebook of RDCPC 2024.
              <br className="hidden lg:block" /> Please carefully review the
              rules, terms, and conditions to ensure smooth participation.
            </>
          }
        />
      </div>

      <div>
        <Image
          src="/book.png"
          alt="Rulebook"
          height={0}
          width={100}
          className="mx-auto"
        />
        {/* Download Button */}
        <a href={rulebookPDFUrl} download>
          <Button
            variant="default"
            size="lg"
            className="flex items-center gap-2 mt-4"
          >
            <DownloadIcon /> Download the Rulebook
          </Button>
        </a>
      </div>
    </Fragment>
  )
}

export default Rulebook
