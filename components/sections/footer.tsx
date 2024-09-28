import { cn } from "@/app/lib/cn";
import { fregeist, geist, syne } from "@/app/lib/font";
import {
  ArrowRightIcon,
  ArrowUpIcon,
  ChevronUpIcon,
  DotIcon,
  ExternalLinkIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useAppContext } from "@/context";

const Footer = () => {
  return (
    <div className="space-y-12 p-16 w-full">
      <div className="h-0.5 bg-gray-400/10"></div>
      <div className="h-10"></div>
      <div className="flex items-baseline justify-start gap-x-1">
        <Image src="/logo.svg" width={23} height={0} alt="" />
        <p
          className={cn(
            fregeist.className,
            "text-[29px] tracking-[1px] bg-gradient-to-r from-gray-50 to-gray-600 bg-clip-text text-transparent font-medium",
          )}
        >
          ulticone
        </p>
      </div>

      <div className="w-full flex lg:flex-row flex-col items-start justify-start">
        <Leftbar />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
          <Contacts />
          <Follow_us />
          <Services />
        </div>
      </div>
      <div className="w-full lg:flex items-center justify-between">
        <p className="text-gray-400 lg:flex items-center">
          © Multicone 2024. All rights reserved <DotIcon className="inline" />{" "}
          <a href="/" className="underline">
            Privacy Policy
          </a>{" "}
        </p>
        <Link
          href="/"
          className="text-white my-5 lg:my-0 flex hover:items-start duration-75 items-end gap-x-2"
        >
          Back to the top
          <ArrowUpIcon className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;

const Leftbar = () => {
  const { setIsOpen } = useAppContext();
  return (
    <div className="space-y-7 w-full">
      <p className="text-3xl md:text-6xl lg:text-7xl bg-gradient-to-r font-medium from-gray-50 to-gray-600 bg-clip-text text-transparent">
        We would love to
        <br /> hear from you.
      </p>
      <p className="text-gray-400 text-xl">
        Feel free to reach our if you want to collaborate with us,
        <br /> or simply have a chat
      </p>
      <Button onClick={() => setIsOpen(true)} size={"lg"} className="group">
        Become a client
        <ArrowRightIcon className="group-hover:translate-x-2 transition-transform duration-75 h-5 w-5" />
      </Button>
      <p className="text-xl text-gray-400">
        Don&apos;t like this form? Drop us a line via email
        <br />
        <b>info@multicone.com</b>
      </p>
      <div className="h-4"></div>
    </div>
  );
};

const Contacts = () => {
  return (
    <div className="text-gray-400 flex-shrink-0 space-y-3">
      <p className="text-white text-lg font-medium">Contact us</p>
      <div>
        <p>Our email</p>
        <b>info@multicone.com</b>
      </div>
      <div>
        <p>Our phone</p>
        <b>+8801738556332</b>
      </div>
    </div>
  );
};

const Follow_us = () => {
  return (
    <div className="text-gray-400 flex-shrink-0 space-y-3">
      <p className="text-white text-xl font-medium">Follow us</p>
      <Link href="/" className="flex items-center gap-x-3">
        Twitter <ExternalLinkIcon />
      </Link>
      <Link href="/" className="flex items-center gap-x-3">
        Envato <ExternalLinkIcon />
      </Link>
      <Link href="/" className="flex items-center gap-x-3">
        Codecanyon <ExternalLinkIcon />
      </Link>
      <Link href="/" className="flex items-center gap-x-3">
        Fiverr <ExternalLinkIcon />
      </Link>
    </div>
  );
};

const Services = () => {
  return (
    <div className="text-gray-400 flex-shrink-0 space-y-3">
      <p className="text-white text-xl font-medium">Services</p>
      <Link href="/" className="flex items-center gap-x-3">
        UI/UX Designs
      </Link>
      <Link href="/" className="flex items-center gap-x-3">
        branding
      </Link>
      <Link href="/" className="flex items-center gap-x-3">
        Web developement
      </Link>
      <Link href="/" className="flex items-center gap-x-3">
        App development
      </Link>
      <Link href="/" className="flex items-center gap-x-3">
        Showcases
      </Link>
      <Link href="/" className="flex items-center gap-x-3">
        About
      </Link>
      <Link href="/" className="flex items-center gap-x-3">
        Reviews
      </Link>
    </div>
  );
};
