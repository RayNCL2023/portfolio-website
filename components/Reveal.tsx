"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

/* One easing curve, matched to --ease in globals.css. */
const EASE = [0.16, 1, 0.3, 1] as const;
const DISTANCE = 26;

const item: Variants = {
  hidden: { opacity: 0, y: DISTANCE },
  shown: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

const group: Variants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const viewport = { once: true, margin: "0px 0px -12% 0px" } as const;

/**
 * Scroll-triggered reveal: fade + translate up. Framer Motion's
 * whileInView is Intersection Observer under the hood — no scroll math.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  /** Milliseconds, to match the call sites this replaces. */
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="shown"
      viewport={viewport}
      variants={{
        hidden: item.hidden,
        shown: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.75, ease: EASE, delay: delay / 1000 },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Reveals its RevealItem descendants in sequence, 70ms apart.
 * Use for card grids and lists rather than hand-tuning delays.
 */
export function RevealGroup({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="shown"
      viewport={viewport}
      variants={group}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
