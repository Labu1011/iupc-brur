"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Props {
  key?: string;
  className?: string;
  children: JSX.Element | JSX.Element[];
  width?: "fit-content" | "100%" | number;
  side?: "left" | "right" | "top";
  speed?: number; // Add speed as a prop
}

export const Reveal = ({
  children,
  className,
  key,
  width = "fit-content",
  side = "top",
  speed = 1, // Default speed is 1
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Modify the transform values based on the speed
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    side === "top" ? [200 * speed, -200] : [200, -200 * speed],
  );
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    side === "left"
      ? [75 * speed, 0]
      : side === "right"
        ? [-75 * speed, 0]
        : [0, 0],
  );

  const variants = { y, x };

  return (
    <div
      key={key}
      style={{ position: "relative", width }}
      className={cn(className)}
    >
      <motion.div
        ref={ref}
        style={side === "top" ? { y: variants.y } : { x: variants.x }}
        transition={{ duration: 0.5, delay: 0.25, delayChildren: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
