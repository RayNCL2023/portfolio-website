import { profile, skills } from "@/data/site.config";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="border-b border-border-soft px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="font-mono text-sm text-accent">~/about</p>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_1fr]">
          <Reveal delay={80}>
            <p className="whitespace-pre-line text-lg leading-relaxed text-ink-muted">
              {profile.bio}
            </p>
            <p className="mt-6 font-mono text-sm text-ink-muted">
              {profile.location}
            </p>
          </Reveal>

          <Reveal delay={160}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {skills.map((group) => (
                <div key={group.category}>
                  <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                    {group.category}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm text-ink">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
