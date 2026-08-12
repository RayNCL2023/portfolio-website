"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

/**
 * Counts from 0 to `value` once, when scrolled into view.
 *
 * `pad` zero-fills to a fixed width so the readout never reflows as the
 * digits change — the tabular-nums in the `metric` utility handles the
 * rest. Reduced motion lands straight on the final value.
 */
export default function CountUp({
  value,
  pad = 2,
  duration = 1.1,
  className = "",
}: {
  value: number;
  pad?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  const reduce = useReducedMotion();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView || reduce) return;

    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setCurrent(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, duration, reduce]);

  // Reduced motion skips the animation entirely rather than fast-forwarding
  // it, so the final value is derived instead of stored.
  const shown = reduce ? value : current;

  return (
    <span ref={ref} className={className}>
      {String(shown).padStart(pad, "0")}
    </span>
  );
}
