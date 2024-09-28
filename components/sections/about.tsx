import { cn } from "@/app/lib/cn";
import { fregeist, geist, inter, syne } from "@/app/lib/font";
import React from "react";
import Image from "next/image";
import { aboutus } from "@/app/lib/data";
import SectionHeader from "./header";

const About = () => {
  return (
    <div
      id="aboutus"
      className={cn(syne.className, "container space-y-3 w-full text-black")}
    >
      <div className="w-full h-44"></div>
      <div className="w-full h-12"></div>
      <SectionHeader
        title="About Us"
        subtitle={
          <>
            We design with purpose, <br /> and develop with precision
          </>
        }
      />
      <div className="h-10"></div>
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <div className="hidden xl:inline whitespace-wrap bg-gradient-to-br from-gray-300 to-gray-800 bg-clip-text text-transparent text-3xl p-10">
          <span className="text-white">We blend</span> creativity with clear
          goals, crafting solutions that resonate and deliver real impact
        </div>
        <div className="grid ml-auto grid-cols-1 md:grid-cols-2 items-center justify-center grid-rows-2 gap-5">
          {aboutus.map((item) => (
            <div
              key={item.num}
              className={cn(
                fregeist.className,
                "relative w-80 flex flex-col justify-center text-white p-10 flex-shrink-0 border rounded-3xl border-gray-400/20 h-48",
              )}
            >
              <Image
                src={item.img}
                className="absolute z-0 right-0 bottom-0"
                width={100}
                height={100}
                alt=""
              />

              <div
                className={cn(
                  fregeist.className,
                  "relative text-3xl font-medium text-white",
                )}
              >
                227
              </div>
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-800 bg-clip-text text-transparent text-[16px]">
                We have successfully completed a total of 300+ projects
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
