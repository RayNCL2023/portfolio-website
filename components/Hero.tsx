import { profile } from "@/data/site.config";
import ProfilePhoto from "./ProfilePhoto";
import GridLines from "./GridLines";

/**
 * First-paint sequence. Deliberately CSS keyframes rather than Framer
 * Motion: this runs once at paint, before hydration, so the headline
 * never waits on JS. Framer Motion is reserved for scroll-driven work.
 *
 * `both` fill mode holds the from-state before the delay elapses, so
 * nothing flashes in un-animated.
 */
const enter = (name: string, delay: number, duration = 700) => ({
  animation: `${name} ${duration}ms var(--ease) ${delay}ms both`,
});

export default function Hero() {
  // Each word of the name gets its own masked line.
  const nameLines = profile.name.split(" ");

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden pt-32 pb-0"
    >
      <GridLines />

      {/* Dot matrix bleeds in from the right, behind the portrait only —
          never behind text. */}
      <div
        aria-hidden
        className="dot-matrix pointer-events-none absolute -right-24 top-1/4 hidden h-[26rem] w-[26rem] opacity-60 lg:block"
        style={{
          maskImage:
            "radial-gradient(circle at 60% 40%, black, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at 60% 40%, black, transparent 70%)",
        }}
      />

      <div className="shell relative flex-1 flex flex-col justify-center py-12">
        <div className="grid grid-cols-1 items-center gap-x-12 gap-y-16 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)]">
          <div>
            {/* ── Live status. Accent use 1 of 2 on this screen. ── */}
            <p
              style={enter("rise", 80, 600)}
              className="flex items-center gap-2.5 font-mono text-[0.6875rem] font-medium tracking-[0.06em] text-ink-muted"
            >
              <span
                className="inline-block h-[6px] w-[6px] rounded-full bg-accent"
                style={{ animation: "signal-pulse 2.4s var(--ease) infinite" }}
              />
              {profile.status}
            </p>

            {/* ── Display layer. The dominant visual element. ── */}
            <h1 className="mt-7 display-1 text-ink">
              {nameLines.map((line, i) => (
                <span
                  key={line}
                  className="block will-change-[clip-path,transform]"
                  style={enter("mask-up", 200 + i * 110, 900)}
                >
                  {line}
                </span>
              ))}
            </h1>

            {/* Hairline draws itself out from the left, tying the
                headline to the grid. */}
            <span
              aria-hidden
              className="mt-8 block h-px origin-left bg-rule-strong"
              style={enter("rule-draw", 500, 800)}
            />

            {/* ── Label layer. Role is metadata, so it stays mono —
                   but untracked, because it's a full sentence. ── */}
            <p
              style={enter("rise", 560, 650)}
              className="mt-5 font-mono text-[0.8125rem] leading-relaxed tracking-[0.01em] text-ink-soft sm:text-sm"
            >
              {profile.role}
            </p>

            {/* ── Body layer. Quiet, does not compete. ── */}
            <p
              style={enter("rise", 660, 650)}
              className="mt-7 max-w-lg body-lg text-ink-muted"
            >
              {profile.tagline}
            </p>

            <div
              style={enter("pop-in", 820, 550)}
              className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              {/* ── Primary CTA. Accent use 2 of 2. ── */}
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 bg-accent px-7 py-3.5 label text-accent-ink transition-transform duration-200 ease-[var(--ease)] hover:scale-[1.02] active:scale-[0.99]"
              >
                View projects
                <span className="transition-transform duration-300 ease-[var(--ease)] group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#contact"
                className="group relative label text-ink-soft transition-colors duration-200 hover:text-ink"
              >
                Get in touch
                <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-[var(--ease)] group-hover:scale-x-100" />
              </a>
            </div>
          </div>

          <div style={enter("rise", 380, 800)} className="lg:pl-6">
            <ProfilePhoto />
          </div>
        </div>
      </div>

      {/* ── Instrument readout strip. Metadata only, no accent. ── */}
      <div
        style={enter("rise", 940, 700)}
        className="relative border-t border-rule"
      >
        <div className="shell flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-5 label-sm text-ink-faint">
          <span>
            LOC <span className="mx-2 text-rule-strong">/</span>
            <span className="text-ink-muted">{profile.location}</span>
          </span>

          <div className="flex items-center gap-x-7">
            {[
              { label: "GitHub", href: profile.github, external: true },
              { label: "LinkedIn", href: profile.linkedin, external: true },
              { label: "Email", href: `mailto:${profile.email}`, external: false },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
                className="group relative text-ink-muted transition-colors duration-200 hover:text-ink"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-[var(--ease)] group-hover:scale-x-100" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
