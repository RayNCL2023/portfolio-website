"use client";

import { useState } from "react";
import Brackets from "./Brackets";

export default function ProfilePhoto() {
  const [errored, setErrored] = useState(false);

  return (
    <figure className="relative w-full max-w-[22rem] mx-auto lg:mx-0 lg:ml-auto">
      <div className="relative aspect-[5/6] border border-rule bg-paper-sunk">
        {/* Registration marks sit just outside the image frame, like crop
            marks on a print proof — they bracket the image alone, not the
            caption, so overflow stays visible here. */}
        <Brackets size={11} inset={-9} />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={errored ? "/profile-placeholder.svg" : "/profile.jpg"}
          onError={() => setErrored(true)}
          alt="Portrait photo"
          className="h-full w-full object-cover"
        />
      </div>

      <figcaption className="mt-3 flex items-center justify-between label-sm text-ink-faint">
        <span>FIG.01</span>
        <span>PORTRAIT</span>
      </figcaption>
    </figure>
  );
}
