"use client";

import { fregeist, geist } from "@/app/lib/font";
import clsx from "clsx";
import React, { Fragment } from "react";
import Countdown from "react-countdown";
import { Label } from "../ui/label";

const CountdownSection = () => {
  return (
    <div
      className={clsx(
        fregeist.className,
        " bg-zinc-900 w-96 space-y-0 px-8 py-6 rounded-3xl mt-44",
      )}
    >
      <p className="text-2xl py-2 text-zinc-500 text-center">
        Onsite starts in:{" "}
      </p>
      <div
        className={clsx(
          fregeist.className,
          "text-5xl font-semibold text-white text-center",
        )}
      >
        <Countdown date={Date.now() + 1000 * 60 * 60 * 24} autoStart />
      </div>
      <div
        className={clsx(
          fregeist.className,
          "flex gap-10 justify-center items-center mx-auto w-44",
        )}
      >
        <Label className="text-zinc-400 text-base font-medium">Day</Label>
        <Label className="text-zinc-400 text-base font-medium">Hrs</Label>
        <Label className="text-zinc-400 text-base font-medium">Min</Label>
        <Label className="text-zinc-400 text-base font-medium">Sec</Label>
      </div>
    </div>
  );
};

export default CountdownSection;
