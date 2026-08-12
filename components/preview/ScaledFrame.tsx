"use client";

import { useEffect, useRef, useState } from "react";

const DESIGN_WIDTH = 1440;
const DESIGN_HEIGHT = 900;

/**
 * Renders a route in an iframe at desktop width, then scales it down to
 * fit its column. The iframe keeps a real 1440px viewport, so clamp()
 * type sizes and lg: breakpoints resolve exactly as they would on a
 * desktop — which is the whole point of comparing here.
 */
export default function ScaledFrame({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const observer = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / DESIGN_WIDTH);
    });
    observer.observe(host);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={hostRef}
      className="relative w-full overflow-hidden border border-rule bg-paper"
      style={{ height: scale ? DESIGN_HEIGHT * scale : undefined }}
    >
      <iframe
        src={src}
        title={title}
        loading="lazy"
        tabIndex={-1}
        className="origin-top-left border-0"
        style={{
          width: DESIGN_WIDTH,
          height: DESIGN_HEIGHT,
          transform: `scale(${scale})`,
          // Hide until measured so there's no first-frame jump.
          visibility: scale ? "visible" : "hidden",
        }}
      />
    </div>
  );
}
