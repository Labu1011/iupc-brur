import { cn } from "@/app/lib/cn";
import { fregeist, geist, inter, syne } from "@/app/lib/font";
import React from "react";
import Image from "next/image";
import { Card, CardHeader } from "../ui/card";
import { service_cards, ServiceCardProps } from "@/app/lib/data";
import SectionHeader from "./header";
import { Reveal } from "../ui/Anim";

const Services = () => {
  return (
    <div
      id="services"
      className={cn(syne.className, "container space-y-3 w-full text-black")}
    >
      <div className="w-full h-44"></div>
      <SectionHeader
        title="Services"
        subtitle={
          <>
            We&apos;ll create <span className="font-bold">stunning</span>{" "}
            websites, <br />
            designs and apps tailored just for you
          </>
        }
      />
      <div className="w-full h-10"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {service_cards?.map((item) => (
          <Service_card key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Services;

const Service_card = ({ title, desc, url }: ServiceCardProps) => {
  return (
    <Card className="relative group grid grid-cols-1 bg-transparent border-gray-400/20 borde-[#2B2B2B] hover:bg-black overflow-clip transition-all duration-300">
      <div
        className={cn(
          "bg-violet-30 firefox:opacity-40",
          "z-0 blur-[110px] absolute left-1/2 -translate-x-1/2 top-[40%] h-24 w-24",
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
  );
};
