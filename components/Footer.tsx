import { profile } from "@/data/site.config";

export default function Footer() {
  return (
    <footer className="border-t border-border-soft px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 font-mono text-xs text-ink-muted sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-accent transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
