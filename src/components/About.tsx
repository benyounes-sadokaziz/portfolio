import { disciplineFlow, type Dictionary } from "@/content";
import { Container, SectionHeading } from "./ui/Backdrop";
import { Reveal } from "./ui/Reveal";

export function About({ t }: { t: Dictionary }) {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <div>
            <Reveal>
              <SectionHeading label={t.about.label} title={t.about.title} />
            </Reveal>

            <div className="mt-8 flex flex-col gap-5">
              {t.about.body.map((paragraph, index) => (
                <Reveal key={paragraph.slice(0, 24)} delay={0.06 * (index + 1)}>
                  <p className="max-w-xl text-[0.95rem] leading-relaxed text-muted">{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-xl border border-line bg-surface p-6 sm:p-7">
              <p className="eyebrow">{t.about.flowLabel}</p>

              <ol className="relative mt-6 flex flex-col gap-6">
                {/* The spine: one continuous line behind the markers. */}
                <span aria-hidden className="absolute left-[3px] top-2 bottom-2 w-px bg-line" />

                {disciplineFlow.map((key, index) => {
                  const entry = t.about.flow[key];
                  const isLast = index === disciplineFlow.length - 1;

                  return (
                    <li key={key} className="relative pl-7">
                      <span
                        aria-hidden
                        className={`absolute left-0 top-1.5 h-[7px] w-[7px] rounded-full ${
                          isLast ? "bg-accent" : "bg-line-strong"
                        }`}
                      />
                      <p className={`text-sm font-medium ${isLast ? "text-accent" : "text-fg"}`}>{entry.title}</p>
                      <p className="mt-1 text-[0.82rem] leading-relaxed text-muted">{entry.note}</p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
