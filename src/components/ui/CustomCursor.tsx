"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [hoverType, setHoverType] = useState<string | null>(null);
  const [magneticElement, setMagneticElement] = useState<HTMLElement | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring config for the lagging ring
  const ringConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const ringX = useSpring(mouseX, ringConfig);
  const ringY = useSpring(mouseY, ringConfig);

  // Faster spring for the dot
  const dotConfig = { damping: 20, stiffness: 400, mass: 0.1 };
  const dotX = useSpring(mouseX, dotConfig);
  const dotY = useSpring(mouseY, dotConfig);

  useEffect(() => {
    // Detect touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouch(isTouchDevice);
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (magneticElement) {
        const rect = magneticElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Pull towards center
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        mouseX.set(centerX + distanceX * 0.35);
        mouseY.set(centerY + distanceY * 0.35);
      } else {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }

      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [data-hover]');
      const magnetic = target.closest('[data-magnetic]');
      const marginalia = target.closest('.group\\/marginalia');

      setIsHovering(!!interactive || !!marginalia);
      setHoverType(marginalia ? 'info' : null);
      setMagneticElement(magnetic as HTMLElement);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeaveWindow = () => setIsVisible(false);
    const handleMouseEnterWindow = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
    };
  }, [mouseX, mouseY, isVisible, magneticElement]);

  if (isTouch) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999]">
      {/* Lagging Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? (hoverType === 'info' ? 60 : 80) : 32,
          height: isHovering ? (hoverType === 'info' ? 60 : 80) : 32,
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.85 : 1,
          borderWidth: isHovering ? "1px" : "1.5px",
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          opacity: { duration: 0.2 }
        }}
        className="rounded-full border border-terracotta/40 mix-blend-multiply flex items-center justify-center overflow-hidden"
      >
         <AnimatePresence>
            {isHovering && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="w-full h-full bg-terracotta/5 absolute inset-0"
              />
            )}
         </AnimatePresence>

         <motion.div
            animate={{
              scale: isHovering ? 1.2 : 1,
              rotate: isClicking ? 45 : 0
            }}
            className="w-full h-full rounded-full border border-terracotta/10"
         />
      </motion.div>

      {/* Solid Center Dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 0 : isClicking ? 0.6 : 1,
          backgroundColor: isClicking ? "var(--color-ink)" : "var(--color-terracotta)",
        }}
        className="w-1.5 h-1.5 rounded-full absolute top-0 left-0 shadow-[0_0_10px_rgba(200,56,26,0.2)]"
      />

      {/* Magnetic Label (Experimental) */}
      <AnimatePresence>
        {isHovering && (magneticElement || hoverType === 'info') && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            style={{
              x: ringX,
              y: ringY,
              translateX: "40px",
              translateY: "40px",
            }}
            className="absolute top-0 left-0 mono-label text-[8px] text-terracotta bg-paper/80 px-1 py-0.5"
          >
            {hoverType === 'info' ? 'INFO' : 'SELECT'}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
