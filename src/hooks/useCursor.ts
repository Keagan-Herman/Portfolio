"use client";
import { useEffect, useState, useRef } from "react";
import { useSpring, useMotionValue } from "framer-motion";

export const useCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);
  const [blendMode, setBlendMode] = useState<string>("multiply");
  const isVisibleRef = useRef(false);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Raw values for the ring to lag from
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Ring uses spring for the lag effect - adjusted for more "organic" lag
  const ringX = useSpring(rawX, { damping: 40, stiffness: 250, mass: 0.5 });
  const ringY = useSpring(rawY, { damping: 40, stiffness: 250, mass: 0.5 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (!isVisibleRef.current) {
        setIsVisible(true);
        isVisibleRef.current = true;
      }
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      rawX.set(e.clientX);
      rawY.set(e.clientY);

      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [data-hover], [data-cursor-label]");

      setIsHovered(!!interactive);

      if (interactive) {
        setCursorLabel(interactive.getAttribute("data-cursor-label"));
        setBlendMode(interactive.getAttribute("data-cursor-blend") || "multiply");
      } else {
        setCursorLabel(null);
        setBlendMode("multiply");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [dotX, dotY, rawX, rawY]);

  return { dotX, dotY, ringX, ringY, isHovered, isVisible, cursorLabel, blendMode };
};
