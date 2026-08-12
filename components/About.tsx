import { profile, skills } from "@/data/site.config";
import GridLines from "./GridLines";
import SectionMarker from "./SectionMarker";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

const pad = (n: number) => String(n).padStart(2, "0");

export default function About() {
  return (
    <section
      id="about"
      className="relative border-t border-rule py-[var(--section-y)]"
    >
      <GridLines />

      <div className="shell relative">
        <Reveal>
          <SectionMarker num="01" label="ABOUT" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div>
            <Reveal delay={80}>
              {/* Body layer only — the bio is the one place on the page
                  that should read as prose, not as a readout. */}
              <p className="max-w-xl whitespace-pre-line body-lg text-ink-soft">
                {profile.bio}
              </p>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-12 flex items-center gap-3 label-sm text-ink-faint">
                LOC
                <span className="h-px w-8 bg-rule-strong" />
                <span className="text-ink-muted">{profile.location}</span>
              </p>
            </Reveal>
          </div>

          {/* ── Skills as an instrument panel: hairline cells, mono
                 headers, quiet body text inside. ── */}
          <RevealGroup className="grid grid-cols-1 border-t border-rule sm:grid-cols-2">
            {skills.map((group, i) => (
              <RevealItem
                key={group.category}
                className={`border-b border-rule px-0 py-7 sm:px-7 ${
                  i % 2 === 0 ? "sm:border-r sm:pl-0" : ""
                }`}
              >
                <div className="flex items-baseline gap-3">
                  <span className="label-sm text-ink-faint">{pad(i + 1)}</span>
                  <span className="label text-ink">{group.category}</span>
                </div>

                <ul className="mt-5 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="body-base text-ink-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
