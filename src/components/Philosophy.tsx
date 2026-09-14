import { Activity, GitBranch, Layers, ShieldCheck, Workflow } from "lucide-react";
import { philosophyPillars, type PhilosophyPillar, type Dictionary } from "@/content";
import { Container, SectionHeading } from "./ui/Backdrop";
import { Reveal } from "./ui/Reveal";

const icons: Record<PhilosophyPillar, typeof Layers> = {
  architecture: Layers,
  aiEngineering: Workflow,
  performance: Activity,
  mlops: GitBranch,
  security: ShieldCheck,
};

export function Philosophy({ t }: { t: Dictionary }) {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading label={t.philosophy.label} title={t.philosophy.title} lead={t.philosophy.lead} />
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {philosophyPillars.map((pillar, index) => {
            const copy = t.philosophy.pillars[pillar];
            const Icon = icons[pillar];

            return (
              <Reveal key={pillar} delay={index * 0.05} className="h-full">
                <div className="group h-full bg-bg p-7 transition-colors duration-500 hover:bg-surface-hover">
                  <Icon size={17} className="text-faint transition-colors duration-300 group-hover:text-accent" strokeWidth={1.5} />
                  <h3 className="mt-5 text-sm font-medium text-fg">{copy.title}</h3>
                  <p className="mt-2.5 text-[0.85rem] leading-relaxed text-muted">{copy.body}</p>
                </div>
              </Reveal>
            );
          })}

          {/* Keeps the final grid row visually complete without inventing a sixth principle. */}
          <div aria-hidden className="hidden bg-bg lg:block" />
        </div>
      </Container>
    </section>
  );
}
