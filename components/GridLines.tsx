/**
 * Exposed column grid — thin hairlines marking column boundaries.
 * Purely structural: sits behind content, never interactive.
 * The trailing line closes the last column so the grid reads as
 * measured rather than fading out at the right edge.
 */
export default function GridLines({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="shell h-full">
        <div className="grid-lines relative h-full">
          <span className="absolute inset-y-0 right-0 w-px bg-rule-soft" />
        </div>
      </div>
    </div>
  );
}
