"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Counts up to a value when it scrolls into view. Values that are not plain
 * numbers ("4-bit", "WS") are rendered as-is rather than faked into a count.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduced = useReducedMotion();
  const numeric = /^\d+$/.test(value) ? Number(value) : null;
  const [display, setDisplay] = useState(numeric === null || reduced ? value : "0");

  useEffect(() => {
    if (numeric === null || reduced || !inView) return;

    const controls = animate(0, numeric, {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(String(Math.round(latest))),
    });

    return () => controls.stop();
  }, [inView, numeric, reduced]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
