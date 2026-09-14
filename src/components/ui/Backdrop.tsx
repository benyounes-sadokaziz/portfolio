/**
 * Three fixed layers of depth behind everything: a technical grid that fades
 * before it competes with content, one soft light source, and film grain to
 * keep the large flat areas from banding.
 */
export function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-x-0 top-0 h-[60vh] bg-glow" />
      <div className="absolute inset-0 bg-noise" />
    </div>
  );
}

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[74rem] px-6 sm:px-8 ${className}`}>{children}</div>;
}

export function SectionHeading({
  label,
  title,
  lead,
  id,
}: {
  label: string;
  title: string;
  lead?: string;
  id?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow flex items-center gap-3">
        <span className="h-px w-6 bg-line-strong" />
        {label}
      </p>
      <h2 id={id} className="text-h2 mt-5 text-fg">
        {title}
      </h2>
      {lead ? <p className="mt-4 text-base leading-relaxed text-muted">{lead}</p> : null}
    </div>
  );
}
