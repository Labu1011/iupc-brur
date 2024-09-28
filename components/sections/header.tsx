import { fregeist, geist } from "@/app/lib/font";
import clsx from "clsx";
import React from "react";

const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: JSX.Element;
}) => {
  return (
    <div className="space-y-5">
      <p
        className={clsx(
          geist.className,
          "text-[1.2rem] font-normal text-white text-xl",
        )}
      >
        {title}
      </p>
      <p
        className={clsx(
          fregeist.className,
          "text-white text-[1.5rem] md:text-[2.5rem] lg:text-[2.8rem] leading-[100%] font-normal",
        )}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;
