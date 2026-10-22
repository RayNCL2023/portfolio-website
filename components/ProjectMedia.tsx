"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import type { Project } from "@/data/site.config";
import Brackets from "./Brackets";

/**
 * Framed capture of a project. Several frames crossfade on a loop;
 * one frame is a still. Projects without captures get a quiet
 * placeholder so the frame never collapses as the reader scrolls.
 */
export default function ProjectMedia({
  project,
  animate = true,
  className = "",
}: {
  project: Project;
  /** False shows the first frame only (used for the card thumbnails). */
  animate?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const media = project.media;
  const frames = media ? (animate ? media.frames : media.frames.slice(0, 1)) : [];
  const looping = frames.length > 1 && !reduce;
  const [frame, setFrame] = useState(0);

  // The rail remounts this per project (keyed), so the loop always starts at frame 0.
  useEffect(() => {
    if (!looping) return;
    const id = setInterval(
      () => setFrame((f) => (f + 1) % frames.length),
      media?.interval ?? 1000,
    );
    return () => clearInterval(id);
  }, [looping, frames.length, media?.interval]);

  return (
    <figure
      className={`relative ${className}`}
      style={{ animation: "pop-in 400ms var(--ease) both" }}
    >
      <Brackets size={8} inset={-6} />

      <div className="relative aspect-[16/10] overflow-hidden border border-rule bg-paper-sunk">
        {frames.map((src, i) => (
          // Pre-sized WebP from public/, so next/image adds nothing here.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt={i === 0 ? media?.alt : ""}
            aria-hidden={i !== 0}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-300"
            style={{ opacity: i === frame ? 1 : 0 }}
          />
        ))}

        {!media && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
            <span className="label-sm text-ink-faint">NO CAPTURE</span>
            <span className="label-sm text-ink-muted">Source on GitHub</span>
          </div>
        )}
      </div>

      <figcaption className="mt-3 flex items-center justify-between gap-4 label-sm text-ink-faint">
        <span>{media ? (looping ? "CAPTURE · LOOP" : "CAPTURE · STILL") : "—"}</span>
        {looping && (
          <span>
            {String(frame + 1).padStart(2, "0")}/{String(frames.length).padStart(2, "0")}
          </span>
        )}
      </figcaption>
    </figure>
  );
}
