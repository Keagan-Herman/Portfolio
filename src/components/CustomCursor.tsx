"use client";
import { motion } from "framer-motion";
import { useCursor } from "@/hooks/useCursor";

import { AnimatePresence } from "framer-motion";

export const CustomCursor = () => {
  const { dotX, dotY, ringX, ringY, isHovered, cursorLabel, isVisible } = useCursor();

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
          mixBlendMode: blendMode as React.CSSProperties["mixBlendMode"],
        }}
        animate={{ scale: isHovered ? 1.8 : 1 }}
        transition={{ duration: 0.15 }}
      />
      {/* Ring — lags behind via spring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full flex items-center justify-center"
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
          scale: isHovered ? 2.5 : 1,
          borderWidth: isHovered ? 1 : 1,
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: isHovered && cursorLabel ? 1 : 0,
            scale: isHovered && cursorLabel ? 1 : 0.5,
          }}
          className="mono-label text-terracotta"
          style={{ fontSize: '10px', letterSpacing: '0.1em' }}
        >
          {cursorLabel || "VIEW"}
        </motion.span>
      </motion.div>
    </>
  );
};
