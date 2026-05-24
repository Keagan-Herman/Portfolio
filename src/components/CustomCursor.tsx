"use client";

import { motion } from "framer-motion";
import { useCursor } from "@/hooks/useCursor";

export const CustomCursor = () => {
  const { x, y, isHovered } = useCursor();

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50 mix-blend-difference bg-white"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        scale: isHovered ? 2.5 : 1,
        backgroundColor: isHovered ? "var(--accent)" : "#ffffff",
      }}
    />
  );
};
