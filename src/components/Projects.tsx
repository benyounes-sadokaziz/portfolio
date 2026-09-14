import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, type Dictionary, type Locale, type ProjectCopy, type ProjectMeta } from "@/content";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { Container, SectionHeading } from "./ui/Backdrop";
import { CountUp } from "./ui/CountUp";
import { Reveal } from "./ui/Reveal";

export function Projects({ t, locale }: { t: Dictionary; locale: Locale }) {
  const features = projects.filter((project) => project.layout === "feature");
  const halves = projects.filter((project) => project.layout === "half");
  const wide = projects.filter((project) => project.layout === "wide");

  return (
    <section id="projects" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading label={t.projects.label} title={t.projects.title} lead={t.projects.lead} />
        </Reveal>

        <div className="mt-14 flex flex-col gap-6">
          {features.map((project, index) => (
            <Reveal key={project.id}>
              {/* Alternate which side the diagram sits on so equal cards keep a rhythm. */}
              <FeatureCard project={project} t={t} locale={locale} reversed={index % 2 === 1} />
            </Reveal>
          ))}

          <div className="grid gap-6 md:grid-cols-2">
            {halves.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.08}>
                <HalfCard project={project} t={t} locale={locale} />
              </Reveal>
            ))}
          </div>

          {wide.map((project) => (
            <Reveal key={project.id}>
              <WideCard project={project} t={t} locale={locale} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* --- shared pieces ---------------------------------------------------- */

function CardShell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-500 hover:border-line-strong ${className}`}
    >
      {/* One light source that follows the card, not the cursor: restrained. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-24 h-48 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{ background: "radial-gradient(ellipse 50% 100% at 50% 100%, var(--accent-wash), transparent 70%)" }}
      />
      <div className="relative">{children}</div>
    </article>
  );
}

function CardHead({ project, copy }: { project: ProjectMeta; copy: ProjectCopy }) {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-accent">{copy.category}</p>
        <p className="font-mono text-[0.68rem] text-faint">{project.period}</p>
      </div>
      <h3 className="text-h3 mt-4 text-fg">{copy.title}</h3>
      <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted">{copy.tagline}</p>
    </>
  );
}

function Glance({ project, t }: { project: ProjectMeta; t: Dictionary }) {
  return (
    <dl className="flex flex-wrap gap-x-8 gap-y-4">
      {project.glance.map((fact) => (
        <div key={fact.key}>
          <dt className="sr-only">{t.projects.glanceKeys[fact.key]}</dt>
          <dd>
            <CountUp value={fact.value} className="block text-2xl font-medium tracking-tight text-fg" />
            <span className="mt-1 block font-mono text-[0.65rem] uppercase tracking-[0.12em] text-faint">
              {t.projects.glanceKeys[fact.key]}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li key={item} className="rounded border border-line px-2 py-1 font-mono text-[0.68rem] text-muted">
          {item}
        </li>
      ))}
    </ul>
  );
}

function CaseLink({ project, t, locale }: { project: ProjectMeta; t: Dictionary; locale: Locale }) {
  return (
    <Link
      href={`/${locale}/work/${project.slug}`}
      className="inline-flex items-center gap-1.5 text-sm text-fg transition-colors hover:text-accent"
    >
      {t.projects.viewCase}
      <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow">{label}</p>
      <p className="mt-2 text-[0.88rem] leading-relaxed text-fg/85">{children}</p>
    </div>
  );
}

/* --- layouts ----------------------------------------------------------- */

function FeatureCard({
  project,
  t,
  locale,
  reversed = false,
}: {
  project: ProjectMeta;
  t: Dictionary;
  locale: Locale;
  reversed?: boolean;
}) {
  const copy = t.projects.entries[project.id];

  return (
    <CardShell>
      <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className={`flex flex-col ${reversed ? "lg:order-2" : ""}`}>
          <CardHead project={project} copy={copy} />

          <div className="mt-8 flex flex-col gap-6">
            <Field label={t.projects.problemLabel}>{copy.problem}</Field>
            <Field label={t.projects.contributionLabel}>{copy.contribution}</Field>
          </div>

          <div className="mt-8">
            <Glance project={project} t={t} />
          </div>

          <div className="mt-auto pt-8">
            <Stack items={project.stack} />
            <div className="mt-6">
              <CaseLink project={project} t={t} locale={locale} />
            </div>
          </div>
        </div>

        <div className={`flex flex-col justify-center rounded-xl border border-line bg-bg/40 p-5 ${reversed ? "lg:order-1" : ""}`}>
          <p className="eyebrow mb-4">{t.caseStudy.sections.architecture}</p>
          <ArchitectureDiagram layers={project.architecture} labels={t.projects.archKeys} compact />
        </div>
      </div>
    </CardShell>
  );
}

function HalfCard({ project, t, locale }: { project: ProjectMeta; t: Dictionary; locale: Locale }) {
  const copy = t.projects.entries[project.id];

  return (
    <CardShell className="h-full">
      <div className="flex h-full flex-col p-7 sm:p-8">
        <CardHead project={project} copy={copy} />

        <div className="mt-7">
          <Field label={t.projects.problemLabel}>{copy.problem}</Field>
        </div>

        <div className="mt-7">
          <Glance project={project} t={t} />
        </div>

        <div className="mt-auto pt-8">
          <Stack items={project.stack.slice(0, 6)} />
          <div className="mt-6">
            <CaseLink project={project} t={t} locale={locale} />
          </div>
        </div>
      </div>
    </CardShell>
  );
}

function WideCard({ project, t, locale }: { project: ProjectMeta; t: Dictionary; locale: Locale }) {
  const copy = t.projects.entries[project.id];

  return (
    <CardShell>
      <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <CardHead project={project} copy={copy} />
          <div className="mt-7">
            <Glance project={project} t={t} />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <Field label={t.projects.contributionLabel}>{copy.contribution}</Field>
          <Stack items={project.stack} />
          <CaseLink project={project} t={t} locale={locale} />
        </div>
      </div>
    </CardShell>
  );
}
