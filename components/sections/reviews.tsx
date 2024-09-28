import { cn } from "@/app/lib/cn";
import { fregeist, geist, inter, syne } from "@/app/lib/font";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useAppContext } from "@/context";
import SectionHeader from "./header";

const Reviews = () => {
  const { setIsOpen } = useAppContext();
  return (
    <div
      id="reviews"
      className={cn(
        fregeist.className,
        "container space-y-3 w-full text-black",
      )}
    >
      <div className="w-full h-44"></div>
      <SectionHeader
        title="Testimonials"
        subtitle={
          <>
            Our clients trust us, <br /> and their words tell the story
          </>
        }
      />
      <div className="h-10"></div>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-3/5 rounded-3xl overflow-hidden h-96 border border-gray-400/20">
          <Carousel
            opts={{ loop: true }}
            // plugins={[
            //   Autoplay({
            //     delay: 2000,
            //   }),
            // ]}
            className="relative flex text-white items-center justify-center h-full"
          >
            <Image
              className="absolute opacity-20"
              width={1600}
              height={0}
              src="/halfton-banner.jpg"
              alt=""
            />
            <CarouselContent className="mx-auto relative w-full h-full">
              {[1, 2, 3, 4].map((item) => (
                <CarouselItem
                  className="flex items-center justify-center w-full px-10 lg:px-16"
                  key={item}
                >
                  <div className="flex flex-col items-center justify-center w-full space-y-3">
                    <p className="text-xl text-center">
                      In the name of Allah the most merciful the most kind
                      master of the day of judgement we alone worship and we
                      alone ask for help. {item}
                    </p>
                    <div className="flex items-center gap-x-4">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <p className="capitalize">ryan</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute text-black translate-x-14" />
            <CarouselNext className="absolute text-black -translate-x-14" />
          </Carousel>
        </div>
        <div
          onClick={() => setIsOpen(true)}
          className="relative cursor-pointer overflow-clip flex items-center justify-center w-full lg:w-2/5 rounded-3xl border border-gray-400/20"
        >
          <p className="bg-gradient-to-br px-3 from-gray-100 to-gray-600 bg-clip-text text-transparent  py-5 lg:leading-[5rem] text-center font-bold text-5xl lg:text-7xl">
            Talk <br className="hidden" />
            with <br className="hidden" />
            us
          </p>
          <div className="absolute bg-gradient-to-br from-gray-100 to-gray-600 -top-10 -right-16 md:-right-10 h-24 w-24 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
