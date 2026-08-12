"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/data/site.config";
import GridLines from "./GridLines";
import SectionMarker from "./SectionMarker";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  // ── Web3Forms flow — unchanged. Same endpoint, same field names,
  //    same access key, same honeypot. Visual pass only. ──
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", profile.web3formsAccessKey);
    formData.append("subject", `Portfolio contact from ${formData.get("name")}`);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await res.json();

      if (result.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative border-t border-rule py-[var(--section-y)]"
    >
      <GridLines />

      <div className="shell relative">
        <Reveal>
          <SectionMarker num="03" label="CONTACT" />
          <h2 className="mt-7 display-2 text-ink">Let&rsquo;s talk</h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <Reveal delay={100}>
            <p className="max-w-sm body-lg text-ink-muted">
              Open to internship and graduate opportunities in AI/ML, and happy
              to hear from anyone who wants to compare notes on a project.
            </p>

            <div className="mt-12 border-t border-rule pt-6">
              <p className="label-sm text-ink-faint">DIRECT</p>
              <a
                href={`mailto:${profile.email}`}
                className="group relative mt-3 inline-block font-mono text-sm tracking-[0.01em] text-ink transition-opacity duration-200 hover:opacity-70"
              >
                {profile.email}
                <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-[var(--ease)] group-hover:scale-x-100" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-9">
              <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
                <Field id="name" label="Name" />
                <Field id="email" label="Email" type="email" />
              </div>

              <Field id="message" label="Message" multiline />

              {/* honeypot field to deter spam bots */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-3 bg-accent px-7 py-3.5 label text-accent-ink transition-transform duration-200 ease-[var(--ease)] hover:scale-[1.02] active:scale-[0.99] disabled:opacity-55 disabled:hover:scale-100"
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                  {status !== "sending" && <span>→</span>}
                </button>

                {status === "sent" && (
                  <p className="flex items-center gap-2.5 label-sm text-ink-soft">
                    <span className="h-[6px] w-[6px] rounded-full bg-accent" />
                    Message sent — thanks, I&rsquo;ll reply soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="flex items-center gap-2.5 label-sm text-ink-soft">
                    <span className="h-[6px] w-[6px] rounded-full border border-ink" />
                    Something went wrong — email me directly instead.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/**
 * Hairline-underline field. No boxes: on a light instrument panel a
 * single rule reads more precise than an outlined input, and the accent
 * underline on focus is a genuine active state.
 */
function Field({
  id,
  label,
  type = "text",
  multiline = false,
}: {
  id: string;
  label: string;
  type?: string;
  multiline?: boolean;
}) {
  const shared =
    "peer mt-3 w-full resize-none border-0 border-b border-rule-strong bg-transparent px-0 py-3 font-sans text-[0.9375rem] text-ink outline-none transition-colors duration-200 placeholder:text-ink-faint focus:border-transparent";

  return (
    <div className="relative">
      <label htmlFor={id} className="label-sm text-ink-faint">
        {label}
      </label>

      {multiline ? (
        <textarea id={id} name={id} required rows={4} className={shared} />
      ) : (
        <input id={id} name={id} type={type} required className={shared} />
      )}

      {/* Accent rule draws in from the left on focus. */}
      <span className="pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-[var(--ease)] peer-focus:scale-x-100" />
    </div>
  );
}
