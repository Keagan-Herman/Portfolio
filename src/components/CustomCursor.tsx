"use client";
import { motion } from "framer-motion";
import { useCursor } from "@/hooks/useCursor";

export const CustomCursor = () => {
  const { dotX, dotY, ringX, ringY, isHovered, isVisible } = useCursor();

  if (!isVisible) return null;

  return (
    <>
      {/* Dot — snaps immediately */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: 8,
          height: 8,
          backgroundColor: "var(--color-ink)",
          mixBlendMode: "multiply",
        }}
        animate={{ scale: isHovered ? 1.8 : 1 }}
        transition={{ duration: 0.15 }}
      />
      {/* Ring — lags behind via spring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: 32,
          height: 32,
          border: `1px solid var(--color-ink)`,
          opacity: 0.4,
        }}
        animate={{
          borderColor: isHovered ? "var(--color-terracotta)" : "var(--color-ink)",
          opacity: isHovered ? 0.7 : 0.4,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
};
