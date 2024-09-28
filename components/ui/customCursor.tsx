"use client";

import { cn } from "@/app/lib/cn";
import { syne } from "@/app/lib/font";
import { useAppContext } from "@/context";
import React, { useEffect, useState } from "react";

export enum cursorType {
  "cdefault" = "c-default",
  "chero" = "c-hero",
  "ctalk" = "c-talk",
}

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { cursor } = useAppContext();
  const updateCursor = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", updateCursor);
    return () => {
      document.removeEventListener("mousemove", updateCursor);
    };
  }, []);
  return (
    <div
      className={cn(cursor, syne.className)}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {cursor === cursorType.ctalk && (
        <p
          style={{
            color: "black", // Set the text color
            fontSize: "18px", // Adjust font size as needed
            textAlign: "center", // Center the text inside the div
            margin: 0, // Remove default margins
            lineHeight: 1.2, // Adjust line height to fit the text well
            pointerEvents: "none", // Prevent the text from interfering with clicks
          }}
        >
          Lets
          <br />
          talk
        </p>
      )}
    </div>
  );
};

export default CustomCursor;
