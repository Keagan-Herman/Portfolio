"use client";
import { useEffect, useState, useRef } from "react";
import { useSpring, useMotionValue } from "framer-motion";

export const useCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isVisibleRef = useRef(false);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Raw values for the ring to lag from
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Ring uses spring for the lag effect
  const ringX = useSpring(rawX, { damping: 30, stiffness: 200 });
  const ringY = useSpring(rawY, { damping: 30, stiffness: 200 });

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
      setIsHovered(!!target.closest('a, button, [data-hover]'));
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [dotX, dotY, rawX, rawY]);

  return { dotX, dotY, ringX, ringY, isHovered, isVisible };
};
