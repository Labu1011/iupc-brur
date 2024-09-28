import React from "react";
import React_marquee from "react-fast-marquee";

const Marquee = () => {
  return (
    <React_marquee className="mt-56" speed={200}>
      <p className="bg-dark bg-gradient-to-b from-white via-white to-black bg-clip-text text-transparent text-[270px] font-bold px-10">
        Inspired by your needs driven by results{" "}
      </p>
    </React_marquee>
  );
};

export default Marquee;
