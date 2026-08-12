/**
 * Numbered section marker — "01 — ABOUT". Sits in the mono label layer
 * and stays faded, so it reads as a coordinate on the page rather than
 * as a heading competing with the display layer.
 */
export default function SectionMarker({
  num,
  label,
  className = "",
}: {
  num: string;
  label: string;
  className?: string;
}) {
  return (
    <p className={`label text-ink opacity-40 ${className}`}>
      {num}
      <span className="mx-2.5">—</span>
      {label}
    </p>
  );
}
