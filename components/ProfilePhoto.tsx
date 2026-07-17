"use client";

import { useState } from "react";

export default function ProfilePhoto() {
  const [errored, setErrored] = useState(false);

  return (
    <div className="relative w-full max-w-sm mx-auto lg:mx-0">
      <div className="absolute -inset-3 border border-accent/40 rounded-2xl pointer-events-none hidden sm:block" />
      <div className="relative aspect-[6/7] rounded-2xl overflow-hidden border border-border bg-bg-elevated">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={errored ? "/profile-placeholder.svg" : "/profile.jpg"}
          onError={() => setErrored(true)}
          alt="Portrait photo"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
