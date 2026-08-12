"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/site.config";

/* Section ids are unchanged — routing and anchors stay exactly as they
   were. Only the numbering in front of them is new. */
const links = [
  { id: "about", num: "01", label: "About" },
  { id: "projects", num: "02", label: "Projects" },
  { id: "contact", num: "03", label: "Contact" },
];

export default function Nav() {
  const firstName = profile.name.split(" ")[0].toLowerCase();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  // Hairline + blur appear only once the page has moved, so the hero
  // reads as full-bleed on first paint.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy. The band sits just under the nav so a section becomes
  // active as its top clears the bar, not when it merely appears.
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        setActive(visible.length > 0 ? visible[0].target.id : null);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500 ease-[var(--ease)] ${
        scrolled
          ? "border-b border-rule bg-paper/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="shell flex items-center justify-between py-5">
        {/* Wordmark stays mono — it is a label, not a headline. No accent
            here: the hero already spends its two. */}
        <a
          href="#top"
          className="label text-ink transition-opacity duration-200 hover:opacity-60"
        >
          {firstName}.dev()
        </a>

        <ul className="hidden items-center gap-9 sm:flex">
          {links.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className="group relative flex items-baseline gap-2 label"
                >
                  {/* The section number is the active-state carrier —
                      accent here means "you are here", nothing else. */}
                  <span
                    className={`transition-colors duration-300 ease-[var(--ease)] ${
                      isActive ? "text-accent" : "text-ink-faint"
                    }`}
                  >
                    {link.num}
                  </span>
                  <span
                    className={`transition-colors duration-300 ease-[var(--ease)] ${
                      isActive ? "text-ink" : "text-ink-muted group-hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </span>
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px w-full origin-left bg-accent transition-transform duration-300 ease-[var(--ease)] ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-6">
          <a
            href={profile.cvUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative label text-ink-muted transition-colors duration-200 hover:text-ink"
          >
            CV
            <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-[var(--ease)] group-hover:scale-x-100" />
          </a>
          <a
            href="#contact"
            className="label text-ink-muted transition-colors duration-200 hover:text-ink sm:hidden"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
