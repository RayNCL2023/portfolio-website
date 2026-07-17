"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/data/site.config";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

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
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="font-mono text-sm text-accent">~/contact</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Let&rsquo;s talk
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal delay={80}>
            <p className="max-w-sm text-ink-muted leading-relaxed">
              Open to internship and graduate opportunities in AI/ML, and
              happy to hear from anyone who wants to compare notes on a
              project.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-block font-mono text-sm text-ink hover:text-accent transition-colors"
            >
              {profile.email}
            </a>
          </Reveal>

          <Reveal delay={160}>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="font-mono text-xs uppercase tracking-wider text-ink-muted"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-2 w-full rounded-lg border border-border bg-bg-elevated px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="font-mono text-xs uppercase tracking-wider text-ink-muted"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-lg border border-border bg-bg-elevated px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="font-mono text-xs uppercase tracking-wider text-ink-muted"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full resize-none rounded-lg border border-border bg-bg-elevated px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent"
                />
              </div>

              {/* honeypot field to deter spam bots */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="rounded-full bg-accent px-6 py-3 font-mono text-sm font-medium text-accent-ink transition-transform hover:scale-[1.03] active:scale-[0.98] disabled:opacity-60 disabled:hover:scale-100"
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                </button>

                {status === "sent" && (
                  <p className="font-mono text-sm text-accent">
                    Message sent — thanks, I&rsquo;ll reply soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="font-mono text-sm text-red-400">
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
