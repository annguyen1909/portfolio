"use client";

import { useMotionValue, useReducedMotion, useSpring, motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

const MotionLink = motion.create(Link);

export default function ProjectMedia({ href, className, children }: { href: string; className: string; children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 180, damping: 24 });
  const springY = useSpring(rotateY, { stiffness: 180, damping: 24 });

  return (
    <MotionLink
      href={href}
      className={className}
      style={reduceMotion ? undefined : { rotateX: springX, rotateY: springY, transformPerspective: 1200 }}
      onPointerMove={event => {
        if (reduceMotion || event.pointerType !== "mouse" || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - bounds.left;
        const y = event.clientY - bounds.top;
        event.currentTarget.style.setProperty("--pointer-x", `${x}px`);
        event.currentTarget.style.setProperty("--pointer-y", `${y}px`);
        rotateX.set((.5 - y / bounds.height) * 3);
        rotateY.set((x / bounds.width - .5) * 3);
      }}
      onPointerLeave={() => { rotateX.set(0); rotateY.set(0); }}
      onBlur={() => { rotateX.set(0); rotateY.set(0); }}
    >
      {children}
      <span className="work-media-frame" aria-hidden="true" />
    </MotionLink>
  );
}
