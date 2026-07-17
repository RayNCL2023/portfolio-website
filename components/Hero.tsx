import { profile } from "@/data/site.config";
import ProfilePhoto from "./ProfilePhoto";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center border-b border-border-soft px-6 pt-28 pb-16"
    >
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p
            className="opacity-0 [animation:var(--animate-fade-up)] font-mono text-sm text-accent"
            style={{ animationDelay: "80ms" }}
          >
            {profile.status}
            <span className="ml-0.5 inline-block [animation:var(--animate-blink)]">
              _
            </span>
          </p>

          <h1
            className="opacity-0 [animation:var(--animate-fade-up)] mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl"
            style={{ animationDelay: "180ms" }}
          >
            {profile.name}
          </h1>

          <p
            className="opacity-0 [animation:var(--animate-fade-up)] mt-4 font-mono text-sm text-ink-muted sm:text-base"
            style={{ animationDelay: "280ms" }}
          >
            {profile.role}
          </p>

          <p
            className="opacity-0 [animation:var(--animate-fade-up)] mt-6 max-w-xl text-lg leading-relaxed text-ink-muted"
            style={{ animationDelay: "380ms" }}
          >
            {profile.tagline}
          </p>

          <div
            className="opacity-0 [animation:var(--animate-fade-up)] mt-9 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "480ms" }}
          >
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 font-mono text-sm font-medium text-accent-ink transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 font-mono text-sm text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </div>

          <div
            className="opacity-0 [animation:var(--animate-fade-up)] mt-10 flex items-center gap-5 text-ink-muted"
            style={{ animationDelay: "560ms" }}
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <span className="text-border">/</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <span className="text-border">/</span>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-accent transition-colors"
              aria-label="Email"
            >
              Email
            </a>
          </div>
        </div>

        <div
          className="opacity-0 [animation:var(--animate-fade-up)]"
          style={{ animationDelay: "260ms" }}
        >
          <ProfilePhoto />
        </div>
      </div>
    </section>
  );
}
