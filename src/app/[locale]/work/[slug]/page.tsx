import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Container } from "@/components/ui/Backdrop";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { getDemo } from "@/lib/media";
import { LOCALES, getDictionary, projectBySlug, projects, type Locale } from "@/content";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => projects.map((project) => ({ locale, slug: project.slug })));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = projectBySlug(slug);
  if (!project) return {};

  const t = getDictionary(locale);
  const copy = t.projects.entries[project.id];

  return {
    title: copy.title,
    description: copy.tagline,
    alternates: {
      canonical: `/${locale}/work/${slug}`,
      languages: { en: `/en/work/${slug}`, fr: `/fr/work/${slug}` },
    },
    openGraph: { title: copy.title, description: copy.tagline, type: "article" },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { locale, slug } = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();

  const t = getDictionary(locale);
  const typed = locale as Locale;
  const copy = t.projects.entries[project.id];
  const study = t.caseStudy.entries[project.id];
  const s = t.caseStudy.sections;
  const demo = getDemo(project.slug) ?? project.demo ?? null;

  return (
    <>
      <Nav locale={typed} t={t} caseStudy />

      <main className="pt-32 pb-24 sm:pt-40">
        <Container>
          <Link
            href={`/${typed}#projects`}
            className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-faint transition-colors hover:text-fg"
          >
            <ArrowLeft size={13} />
            {t.caseStudy.backLabel}
          </Link>

          <header className="mt-10 max-w-3xl">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-accent">{copy.category}</p>
            <h1 className="text-h2 mt-5 text-fg">{copy.title}</h1>
            <p className="mt-5 text-lg leading-snug text-fg/90">{copy.tagline}</p>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-muted">{study.summary}</p>
          </header>

          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5 border-y border-line py-7">
            {project.glance.map((fact) => (
              <div key={fact.key}>
                <CountUp value={fact.value} className="block text-2xl font-medium tracking-tight text-fg" />
                <span className="mt-1 block font-mono text-[0.65rem] uppercase tracking-[0.12em] text-faint">
                  {t.projects.glanceKeys[fact.key]}
                </span>
              </div>
            ))}

            <div className="ml-auto flex items-end gap-5">
              {(project.repos ?? []).map((repo) => (
                <a
                  key={repo.url}
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-fg transition-colors hover:text-accent"
                >
                  {repo.label}
                  <ArrowUpRight size={14} />
                </a>
              ))}
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-fg transition-colors hover:text-accent"
                >
                  {t.ui.viewLive}
                  <ArrowUpRight size={14} />
                </a>
              ) : null}
            </div>
          </div>

          <div className="mt-16 grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div className="flex flex-col gap-14">
              <Block label={s.problem}>
                <p className="text-[0.92rem] leading-relaxed text-fg/85">{copy.problem}</p>
              </Block>

              <Block label={s.objectives}>
                <Bullets items={study.objectives} />
              </Block>

              <Block label={s.implementation}>
                <Bullets items={study.implementation} />
              </Block>
            </div>

            <div className="flex flex-col gap-14">
              <Block label={s.architecture}>
                <ArchitectureDiagram layers={project.architecture} labels={t.projects.archKeys} />
              </Block>

              <Block label={s.technologies}>
                <ul className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <li key={tech} className="rounded border border-line px-2.5 py-1.5 font-mono text-[0.72rem] text-muted">
                      {tech}
                    </li>
                  ))}
                </ul>
              </Block>

              <DemoBlock src={demo?.src} poster={demo?.poster} pending={t.ui.demoPending} title={copy.title} />
            </div>
          </div>

          <div className="mt-20">
            <Block label={s.challenges}>
              <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
                {study.challenges.map((entry) => (
                  <div key={entry.challenge} className="flex flex-col gap-4 bg-bg p-6">
                    <div>
                      <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-faint">
                        {t.caseStudy.challengeLabel}
                      </p>
                      <p className="mt-2 text-[0.86rem] leading-relaxed text-fg/85">{entry.challenge}</p>
                    </div>
                    <div className="border-t border-line pt-4">
                      <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-accent">
                        {t.caseStudy.solutionLabel}
                      </p>
                      <p className="mt-2 text-[0.86rem] leading-relaxed text-muted">{entry.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Block>
          </div>

          <div className="mt-20 grid gap-14 lg:grid-cols-2 lg:gap-16">
            <Block label={s.results}>
              <Bullets items={copy.results} accent />
            </Block>

            <Block label={s.lessons}>
              <Bullets items={study.lessons} />
            </Block>
          </div>

          <nav className="mt-24 border-t border-line pt-8">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {projects
                .filter((other) => other.id !== project.id)
                .map((other) => (
                  <li key={other.id}>
                    <Link
                      href={`/${typed}/work/${other.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
                    >
                      {t.projects.entries[other.id].title}
                      <ArrowUpRight size={13} />
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </Container>
      </main>

      <Footer t={t} />
    </>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <section>
        <h2 className="eyebrow flex items-center gap-3">
          <span className="h-px w-5 bg-line-strong" />
          {label}
        </h2>
        <div className="mt-5">{children}</div>
      </section>
    </Reveal>
  );
}

function Bullets({ items, accent = false }: { items: string[]; accent?: boolean }) {
  return (
    <ul className="flex flex-col gap-3.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[0.9rem] leading-relaxed text-fg/85">
          <span aria-hidden className={`mt-[0.62rem] h-px w-3.5 shrink-0 ${accent ? "bg-accent" : "bg-line-strong"}`} />
          {item}
        </li>
      ))}
    </ul>
  );
}

function DemoBlock({
  src,
  poster,
  pending,
  title,
}: {
  src?: string;
  poster?: string;
  pending: string;
  title: string;
}) {
  if (!src) {
    return (
      <div className="flex aspect-video items-center justify-center rounded-xl border border-dashed border-line bg-surface">
        <span className="eyebrow">{pending}</span>
      </div>
    );
  }

  return (
    <video controls preload="metadata" poster={poster} aria-label={title} className="aspect-video w-full rounded-xl border border-line bg-black">
      <source src={src} type="video/mp4" />
    </video>
  );
}
