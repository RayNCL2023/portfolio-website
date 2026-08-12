"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { projects, type Project, type ProjectStatus } from "@/data/site.config";
import GridLines from "./GridLines";
import Brackets from "./Brackets";
import SectionMarker from "./SectionMarker";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

const statusConfig: Record<ProjectStatus, { label: string; live: boolean }> = {
  shipped: { label: "shipped", live: false },
  building: { label: "building", live: true },
  planned: { label: "planned", live: false },
};

const pad = (n: number) => String(n).padStart(2, "0");

export default function Projects() {
  // Which card is currently in the reading band. Drives the pinned
  // readout on the left — the "visual updates as text scrolls past".
  const [activeIndex, setActiveIndex] = useState(0);
  const total = projects.length;

  return (
    <section
      id="projects"
      className="relative border-t border-rule py-[var(--section-y)]"
    >
      <GridLines />

      <div className="shell relative grid grid-cols-1 gap-x-16 gap-y-14 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)]">
        {/* ── Pinned rail ──────────────────────────────────────── */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <SectionMarker num="02" label="PROJECTS" />
            <h2 className="mt-7 display-2 text-ink">
              Things I&rsquo;ve built
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-14 border-t border-rule pt-6">
              <p className="label-sm text-ink-faint">INDEX</p>

              {/* The one number worth remembering in this section —
                  and the only accent on the rail. */}
              <p className="mt-4 flex items-baseline gap-2">
                <span
                  key={activeIndex}
                  className="metric text-6xl leading-none text-accent"
                  style={{ animation: "pop-in 400ms var(--ease) both" }}
                >
                  {pad(activeIndex + 1)}
                </span>
                <span className="metric text-xl leading-none text-ink-faint">
                  / <CountUp value={total} />
                </span>
              </p>

              <p className="mt-6 label-sm text-ink-faint">
                {statusConfig[projects[activeIndex]?.status ?? "planned"].label.toUpperCase()}
              </p>
            </div>
          </Reveal>
        </div>

        {/* ── Cards scrolling past ─────────────────────────────── */}
        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              total={total}
              isActive={activeIndex === i}
              onEnter={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  total,
  isActive,
  onEnter,
}: {
  project: Project;
  index: number;
  total: number;
  isActive: boolean;
  onEnter: () => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const status = statusConfig[project.status];

  // A narrow band across the middle of the viewport decides which card
  // is "current", so the readout changes at a predictable point.
  const inBand = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (inBand) onEnter();
    // onEnter is recreated each render; the band boolean is the real trigger.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inBand]);

  return (
    <Reveal delay={index * 70}>
      <article
        ref={ref}
        className={`group relative bg-paper-raised p-8 transition-[transform,border-color,box-shadow] duration-500 ease-[var(--ease)] hover:-translate-y-1.5 sm:p-10 ${
          isActive ? "border border-rule-strong" : "border border-rule"
        }`}
        style={{
          boxShadow: isActive
            ? "0 1px 0 0 var(--rule)"
            : undefined,
        }}
      >
        <Brackets size={10} inset={8} />

        {/* ── Card metadata strip ── */}
        <div className="flex items-center justify-between gap-4">
          <span className="label-sm text-ink-faint">
            PRJ {pad(index + 1)}/{pad(total)}
          </span>

          <span className="flex items-center gap-2 label-sm text-ink-muted">
            {status.live ? (
              <span
                className="h-[6px] w-[6px] rounded-full bg-accent"
                style={{ animation: "signal-pulse 2.4s var(--ease) infinite" }}
              />
            ) : (
              <span
                className={`h-[6px] w-[6px] rounded-full ${
                  project.status === "shipped"
                    ? "bg-ink"
                    : "border border-ink-faint"
                }`}
              />
            )}
            {status.label}
          </span>
        </div>

        <h3 className="mt-8 display-3 text-ink">{project.title}</h3>

        <p className="mt-4 max-w-md body-base text-ink-muted">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-rule-soft pt-6">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {project.tags.map((tag) => (
              <span key={tag} className="label-sm text-ink-faint">
                {tag}
              </span>
            ))}
          </div>

          {(project.github || project.demo) && (
            <div className="flex items-center gap-6">
              {project.github && (
                <CardLink href={project.github}>Code ↗</CardLink>
              )}
              {project.demo && <CardLink href={project.demo}>Live ↗</CardLink>}
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}

function CardLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group/link relative label-sm text-ink-soft transition-colors duration-200 hover:text-ink"
    >
      {children}
      <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-[var(--ease)] group-hover/link:scale-x-100" />
    </a>
  );
}
