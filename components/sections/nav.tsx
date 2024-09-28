import { cn } from "@/app/lib/cn";
import { geist } from "@/app/lib/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { useAppContext } from "@/context";
import Menu from "./menu";

const Nav = () => {
  const { setIsOpen } = useAppContext();
  return (
    <div className="container py-7 relative z-[1000] flex items-center justify-between w-full">
      <Image src="/logo.svg" width={30} height={0} alt="" />
      <div
        className={cn(
          geist.className,
          "absolute hidden lg:block left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer flex text-center text-white bg-light rounded-full font-regular space-x-10",
        )}
      >
        <Link href="/">Home</Link>
        <Link href="#services">Services</Link>
        <Link href="#showcases">Showcase</Link>
        <Link href="#aboutus">About us</Link>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Button
          size={"lg"}
          onClick={() => setIsOpen(true)}
          className="flex group gap-x-2"
        >
          <span className="group-hover:rotate-180 duration-300 text-gray-500">
            +
          </span>
          Become a client
        </Button>
        <Menu />
      </div>
    </div>
  );
};

export default Nav;
