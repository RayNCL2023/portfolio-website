import { projects, type ProjectStatus } from "@/data/site.config";
import Reveal from "./Reveal";

const statusConfig: Record<ProjectStatus, { label: string; dot: string }> = {
  shipped: { label: "shipped", dot: "bg-accent" },
  building: { label: "building", dot: "bg-sky-400" },
  planned: { label: "planned", dot: "bg-ink-muted" },
};

export default function Projects() {
  return (
    <section id="projects" className="border-b border-border-soft px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="font-mono text-sm text-accent">~/projects</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Things I&rsquo;ve built
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, i) => {
            const status = statusConfig[project.status];
            return (
              <Reveal delay={i * 90} key={project.title}>
                <article className="group h-full rounded-2xl border border-border bg-bg-elevated p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-xl font-medium text-ink">
                      {project.title}
                    </h3>
                    <span className="flex items-center gap-1.5 font-mono text-xs text-ink-muted">
                      <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
                      {status.label}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border-soft bg-bg-elevated-2 px-2.5 py-1 font-mono text-xs text-ink-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {(project.github || project.demo) && (
                    <div className="mt-6 flex items-center gap-5 font-mono text-sm">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-ink-muted transition-colors hover:text-accent"
                        >
                          Code &rarr;
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="text-ink-muted transition-colors hover:text-accent"
                        >
                          Live &rarr;
                        </a>
                      )}
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
