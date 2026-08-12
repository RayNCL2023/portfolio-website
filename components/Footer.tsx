import { profile } from "@/data/site.config";

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="shell flex flex-col items-start justify-between gap-4 py-8 label-sm text-ink-faint sm:flex-row sm:items-center">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>

        <div className="flex items-center gap-7">
          {[
            { label: "GitHub", href: profile.github, external: true },
            { label: "LinkedIn", href: profile.linkedin, external: true },
            { label: "Email", href: `mailto:${profile.email}`, external: false },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="group relative text-ink-muted transition-colors duration-200 hover:text-ink"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-[var(--ease)] group-hover:scale-x-100" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
