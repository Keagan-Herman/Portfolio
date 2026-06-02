"use client";
import { useEffect, useState, useRef } from "react";
import { useSpring, useMotionValue } from "framer-motion";

export const useCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [blendMode, setBlendMode] = useState<string>("multiply");
  const isVisibleRef = useRef(false);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Raw values for the ring to lag from
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Ring uses spring for the lag effect - adjusted for high-end feel
  const ringX = useSpring(rawX, { damping: 35, stiffness: 180, mass: 0.5 });
  const ringY = useSpring(rawY, { damping: 35, stiffness: 180, mass: 0.5 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (!isVisibleRef.current) {
        setIsVisible(true);
        isVisibleRef.current = true;
      }

      let x = e.clientX;
      let y = e.clientY;

      const target = e.target as HTMLElement;
      const hoverElement = target.closest('a, button, [data-hover]') as HTMLElement;

      // Magnetic Pull Logic
      if (hoverElement) {
        const rect = hoverElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Pull towards center by 15%
        x += (centerX - x) * 0.15;
        y += (centerY - y) * 0.15;
      }

      dotX.set(x);
      dotY.set(y);
      rawX.set(x);
      rawY.set(y);

      setIsHovered(!!hoverElement);
      setCursorLabel(hoverElement?.getAttribute("data-cursor-label") || null);

      // Dynamic Blend Mode based on section theme
      const section = target.closest('section, header') as HTMLElement;
      if (section) {
        const isDark = section.classList.contains('bg-ink') ||
                       window.getComputedStyle(section).backgroundColor === 'rgb(17, 16, 9)';
        setBlendMode(isDark ? "difference" : "multiply");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [dotX, dotY, rawX, rawY]);

  return { dotX, dotY, ringX, ringY, isHovered, cursorLabel, isVisible, blendMode };
};
