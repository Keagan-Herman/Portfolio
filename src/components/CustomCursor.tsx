"use client";
import { motion } from "framer-motion";
import { useCursor } from "@/hooks/useCursor";

import { AnimatePresence } from "framer-motion";

export const CustomCursor = () => {
  const { dotX, dotY, ringX, ringY, isHovered, isVisible, cursorLabel, blendMode } = useCursor();

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
          scale: isHovered ? 1.5 : 1,
          width: cursorLabel ? 80 : 32,
          height: cursorLabel ? 80 : 32,
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <AnimatePresence>
          {cursorLabel && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="mono-label text-[10px] text-terracotta font-bold"
            >
              {cursorLabel}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};
