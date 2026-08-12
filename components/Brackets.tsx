/**
 * Corner crop marks — camera-style registration brackets on cards and
 * images. Four L-shapes, one per corner, drawn with borders so they
 * stay crisp at 1px on any display.
 *
 * `inset` pushes the marks outside the parent box (negative value) for
 * framing an image, or inside (positive) for framing a card.
 */
export default function Brackets({
  size = 9,
  inset = 0,
  className = "",
}: {
  size?: number;
  inset?: number;
  className?: string;
}) {
  const corners = [
    { key: "tl", style: { top: inset, left: inset, borderTopWidth: 1, borderLeftWidth: 1 } },
    { key: "tr", style: { top: inset, right: inset, borderTopWidth: 1, borderRightWidth: 1 } },
    { key: "bl", style: { bottom: inset, left: inset, borderBottomWidth: 1, borderLeftWidth: 1 } },
    { key: "br", style: { bottom: inset, right: inset, borderBottomWidth: 1, borderRightWidth: 1 } },
  ];

  return (
    <span aria-hidden className={`pointer-events-none absolute inset-0 ${className}`}>
      {corners.map((c) => (
        <span
          key={c.key}
          className="absolute border-rule-strong"
          style={{ width: size, height: size, ...c.style }}
        />
      ))}
    </span>
  );
}
