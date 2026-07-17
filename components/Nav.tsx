import { profile } from "@/data/site.config";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const firstName = profile.name.split(" ")[0].toLowerCase();

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border-soft/80 bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm text-ink hover:text-accent transition-colors"
        >
          {firstName}<span className="text-accent">.</span>dev()
        </a>
        <ul className="hidden sm:flex items-center gap-8 font-mono text-sm text-ink-muted">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-ink transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline font-mono text-sm text-ink-muted hover:text-ink transition-colors"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="sm:hidden font-mono text-sm text-accent hover:opacity-80 transition-opacity"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
