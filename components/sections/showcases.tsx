import { cn } from "@/app/lib/cn";
import { fregeist, geist, inter, syne } from "@/app/lib/font";
import React, { Fragment } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { showcase_items, showcase_items_row2 } from "@/app/lib/data";
import SectionHeader from "./header";
import { Reveal } from "../ui/Anim";

const Showcases = () => {
  return (
    <Fragment>
      <div
        id="showcases"
        className={cn(syne.className, "container space-y-3 w-full text-black")}
      >
        <div className="w-full h-44"></div>
        <SectionHeader
          title="Showcases"
          subtitle={
            <>
              Take a look at the amaizing <br /> works we&apos;ve carefully
              built together
            </>
          }
        />
      </div>
      <div className="h-16"></div>
      <div className="relative w-full flex overflow-hidden flex-col -space-y-1">
        <Reveal side="right" width={"100%"}>
          <div className="w-full flex gap-x-6">
            {showcase_items?.map((item) => (
              <div
                className="w-[421px] h-[284px] flex-shrink-0 border-[#2B2B2B] rounded-lg overflow-clip"
                key={"s" + item}
              >
                <Image
                  className="rounded-lg"
                  width={421}
                  height={284}
                  src={item.image}
                  alt=""
                />
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal side="left" width={"100%"}>
          <div className="flex gap-x-6">
            {showcase_items_row2.map((item) => (
              <div
                className="w-[421px] h-[284px] flex-shrink-0 border-[#2B2B2B] rounded-lg"
                key={"s" + item}
              >
                <Image
                  className="rounded-lg"
                  width={493}
                  height={311}
                  src={item.image}
                  alt=""
                />
              </div>
            ))}
          </div>
        </Reveal>
        <div className="absolute w-full inset-0 bg-gradient-to-b from-transparent to-black translate-y-[40%] bottom-0">
          <div className="absolute w-full bg-gradient-to-b from-transparent to-black h-44 top-1/2 -translate-y-1/2 left-0 right-0"></div>
          <img
            className="scale-125  blur-[30px] w-full"
            src="/bottom.svg"
            alt=""
          />
        </div>
      </div>
      <div className="w-full lg:w-[80%] flex -translate-y-5 items-center justify-between container">
        <div className="flex items-center gap-x-3">
          <Image width={174} height={36} src="/award.svg" alt="" />
          <p className="hidden md:block bg-gradient-to-r from-gray-300 to-gray-600 bg-clip-text text-transparent text-sm">
            Browse Our Creations <br /> Let’s Bring Your Ideas to Life
          </p>
        </div>
        <Button>Browse projects</Button>
      </div>
    </Fragment>
  );
};

export default Showcases;
