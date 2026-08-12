import Hero from "@/components/Hero";

/**
 * Bare hero, rendered inside an accent scope. Loaded in an iframe by
 * /preview so each candidate gets a real viewport of its own — scaling
 * a single page with CSS would misreport the fluid type sizes.
 */
export default async function PreviewFrame({
  searchParams,
}: {
  searchParams: Promise<{ accent?: string }>;
}) {
  const { accent = "signal" } = await searchParams;

  return (
    <div data-accent={accent} className="bg-paper">
      <Hero />
    </div>
  );
}
