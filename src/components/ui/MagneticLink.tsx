"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { ReactNode } from "react";
import type { MouseEvent } from "react";

type Variant = "solid" | "outline";

/**
 * A link that leans very slightly toward the cursor. The displacement is capped
 * at a few pixels: enough to feel responsive, not enough to notice as an effect.
 */
export function MagneticLink({
  href,
  children,
  variant = "outline",
  className = "",
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 });

  function handleMove(event: MouseEvent<HTMLAnchorElement>) {
    if (reduced) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const strength = 6;
    x.set(((event.clientX - rect.left) / rect.width - 0.5) * strength * 2);
    y.set(((event.clientY - rect.top) / rect.height - 0.5) * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300";

  const styles =
    variant === "solid"
      ? "bg-fg text-bg hover:bg-accent hover:text-white"
      : "border border-line-strong text-fg hover:border-accent hover:text-accent";

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </motion.a>
  );
}
