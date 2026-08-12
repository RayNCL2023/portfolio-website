import ScaledFrame from "@/components/preview/ScaledFrame";
import GridLines from "@/components/GridLines";
import Brackets from "@/components/Brackets";

export const metadata = {
  title: "Accent comparison — design preview",
  robots: { index: false, follow: false },
};

const candidates = [
  {
    id: "signal",
    name: "Signal red",
    hex: "#FF3B30",
    note: "Closest to the Nothing reference. Reads sharp and technical; the live dot genuinely alarms the eye, which is what makes restraint matter.",
  },
  {
    id: "cobalt",
    name: "Deep cobalt",
    hex: "#1E3A8A",
    note: "As specified in the brief. Distances from both references, but at this darkness it sits close to the ink and reads institutional rather than live.",
  },
  {
    id: "electric",
    name: "Electric blue",
    hex: "#2563EB",
    note: "The brighter reading of the brief's second option. Keeps the systems-engineering register while retaining enough separation from the ink to signal.",
  },
];

/* Design preview route. Not linked from the site and marked noindex —
   it exists so the accent decision can be made against the real hero
   rather than against swatches. */
export default function PreviewPage() {
  return (
    <main className="min-h-svh pb-40">
      {/* ── Masthead ─────────────────────────────────────────── */}
      <header className="relative border-b border-rule pt-28 pb-14">
        <GridLines />
        <div className="shell relative">
          <p className="label text-ink-faint">
            DESIGN PREVIEW <span className="mx-2 opacity-40">—</span> 01 / TYPE
            &amp; COLOR
          </p>
          <h1 className="mt-6 display-2 text-ink">Accent candidates</h1>
          <p className="mt-6 max-w-xl body-lg text-ink-muted">
            Three readings of the brief&rsquo;s accent options, each rendered
            against the real hero at 1440px. Everything else on this page is
            identical between them.
          </p>
        </div>
      </header>

      {/* ── Full hero, side by side ──────────────────────────── */}
      <section className="shell pt-20">
        <div className="flex items-baseline gap-4 border-b border-rule pb-4">
          <span className="label text-accent">01</span>
          <span className="label text-ink-faint">HERO — SIDE BY SIDE</span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {candidates.map((c) => (
            <figure key={c.id} data-accent={c.id}>
              <figcaption className="mb-4 flex items-center justify-between">
                <span className="flex items-center gap-2.5 label text-ink">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: c.hex }}
                  />
                  {c.name}
                </span>
                <span className="label-sm text-ink-faint">{c.hex}</span>
              </figcaption>

              <ScaledFrame
                src={`/preview/frame?accent=${c.id}`}
                title={`Hero in ${c.name}`}
              />

              <a
                href={`/preview/frame?accent=${c.id}`}
                target="_blank"
                rel="noreferrer"
                className="group relative mt-4 inline-block label-sm text-ink-muted transition-colors hover:text-ink"
              >
                OPEN FULL SIZE ↗
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-[var(--ease)] group-hover:scale-x-100" />
              </a>

              <p className="mt-5 body-base text-ink-muted">{c.note}</p>
            </figure>
          ))}
        </div>
      </section>

      {/* ── Where the accent is allowed to appear ────────────── */}
      <section className="shell pt-32">
        <div className="flex items-baseline gap-4 border-b border-rule pb-4">
          <span className="label text-accent">02</span>
          <span className="label text-ink-faint">
            ACCENT IN CONTEXT — EVERY PERMITTED USE
          </span>
        </div>

        <p className="mt-8 max-w-xl body-base text-ink-muted">
          The accent is limited to four roles: the primary CTA, a live or active
          state, the one number per section worth remembering, and hover
          underlines. Nothing below is decorative.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {candidates.map((c) => (
            <div
              key={c.id}
              data-accent={c.id}
              className="relative border border-rule bg-paper-raised p-8"
            >
              <Brackets size={9} inset={7} />

              <p className="label text-ink-faint">{c.name}</p>

              <div className="mt-8 space-y-8">
                {/* Primary CTA */}
                <div>
                  <p className="label-sm text-ink-faint">PRIMARY CTA</p>
                  <a
                    href="#"
                    className="mt-3 inline-flex items-center gap-3 bg-accent px-6 py-3 label text-accent-ink transition-transform duration-200 ease-[var(--ease)] hover:scale-[1.02]"
                  >
                    View projects <span>→</span>
                  </a>
                </div>

                {/* Live state */}
                <div>
                  <p className="label-sm text-ink-faint">LIVE STATE</p>
                  <p className="mt-3 flex items-center gap-2.5 label text-ink-soft">
                    <span
                      className="h-[6px] w-[6px] rounded-full bg-accent"
                      style={{
                        animation: "signal-pulse 2.4s var(--ease) infinite",
                      }}
                    />
                    STATUS: BUILDING
                  </p>
                </div>

                {/* The one number */}
                <div>
                  <p className="label-sm text-ink-faint">
                    THE ONE NUMBER PER SECTION
                  </p>
                  <p className="mt-2 metric text-5xl text-accent">01</p>
                </div>

                {/* Hover underline */}
                <div>
                  <p className="label-sm text-ink-faint">HOVER UNDERLINE</p>
                  <a
                    href="#"
                    className="group relative mt-3 inline-block label text-ink-soft"
                  >
                    Get in touch
                    <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-[var(--ease)] group-hover:scale-x-100" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Type specimen ────────────────────────────────────── */}
      <section className="shell pt-32">
        <div className="flex items-baseline gap-4 border-b border-rule pb-4">
          <span className="label text-accent">03</span>
          <span className="label text-ink-faint">
            TYPE SYSTEM — THREE LAYERS, ONE JOB EACH
          </span>
        </div>

        <div className="mt-14 space-y-16">
          <SpecimenRow
            layer="LABEL LAYER"
            family="IBM Plex Mono — 400 / 500"
            job="Eyebrow labels, section numbers, metadata, metrics, CTAs. Never body copy."
          >
            <p className="label text-ink">PROJECT — 01/04</p>
            <p className="mt-3 label text-ink">STATUS: LIVE</p>
            <p className="mt-3 label-sm text-ink-faint">FIG.01 — PORTRAIT</p>
          </SpecimenRow>

          <SpecimenRow
            layer="DISPLAY LAYER"
            family="Switzer — 700 / 800 / 900"
            job="Headlines only. 140px at desktop, tracking −0.05em to −0.03em."
          >
            <p className="display-1 text-ink">Debanjan</p>
            <p className="mt-6 display-2 text-ink">Things I&rsquo;ve built</p>
            <p className="mt-5 display-3 text-ink">Let&rsquo;s talk</p>
          </SpecimenRow>

          <SpecimenRow
            layer="BODY LAYER"
            family="General Sans — 400 / 500 / 600"
            job="Paragraphs and descriptions. Deliberately quiet — it should disappear."
          >
            <p className="max-w-xl body-lg text-ink-muted">
              Building AI projects, running experiments, and figuring out what
              actually works.
            </p>
            <p className="mt-5 max-w-xl body-base text-ink-muted">
              I&rsquo;m a recent First-Class Computer Science graduate from
              Newcastle University, starting an MSc in Advanced Computer Science
              at the University of Manchester.
            </p>
          </SpecimenRow>
        </div>
      </section>
    </main>
  );
}

function SpecimenRow({
  layer,
  family,
  job,
  children,
}: {
  layer: string;
  family: string;
  job: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-8 border-t border-rule-soft pt-10 lg:grid-cols-[minmax(0,0.28fr)_minmax(0,1fr)]">
      <div>
        <p className="label text-ink">{layer}</p>
        <p className="mt-3 label-sm text-ink-faint">{family}</p>
        <p className="mt-5 max-w-xs body-base text-ink-muted">{job}</p>
      </div>
      <div className="min-w-0">{children}</div>
    </div>
  );
}
