"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { BenchmarkTable } from "./BenchmarkTable";
import { experience, type Dictionary } from "@/content";
import { Container, SectionHeading } from "./ui/Backdrop";
import { Reveal } from "./ui/Reveal";

export function Experience({ t }: { t: Dictionary }) {
  // The most recent role is open by default: it is the one that matters most.
  const [openId, setOpenId] = useState<string | null>(experience[0]?.id ?? null);

  return (
    <section id="experience" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading label={t.experience.label} title={t.experience.title} lead={t.experience.lead} />
        </Reveal>

        <ol className="relative mt-14 flex flex-col">
          <span aria-hidden className="absolute left-[5px] top-3 bottom-3 w-px bg-line sm:left-[5px]" />

          {experience.map((role, index) => {
            const copy = t.experience.entries[role.id];
            const open = openId === role.id;

            return (
              <Reveal key={role.id} delay={index * 0.06}>
                <li className="relative pb-10 pl-8 last:pb-0">
                  <span
                    aria-hidden
                    className={`absolute left-0 top-2 h-[11px] w-[11px] rounded-full border-2 transition-colors duration-300 ${
                      open ? "border-accent bg-accent" : "border-line-strong bg-bg"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() => setOpenId(open ? null : role.id)}
                    aria-expanded={open}
                    className="group w-full text-left"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <h3 className="text-h3 text-fg transition-colors group-hover:text-accent">{copy.role}</h3>
                      <span className="font-mono text-[0.7rem] text-faint">{role.period}</span>
                    </div>

                    <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="text-sm text-accent">{role.org}</span>
                      {role.location ? (
                        <>
                          <span aria-hidden className="text-faint">
                            ·
                          </span>
                          <span className="text-sm text-muted">{role.location}</span>
                        </>
                      ) : null}
                    </div>

                    <p className="mt-3 max-w-2xl text-[0.9rem] leading-relaxed text-muted">{copy.summary}</p>

                    <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-faint transition-colors group-hover:text-fg">
                      <Plus
                        size={12}
                        className={`transition-transform duration-300 ${open ? "rotate-45" : "rotate-0"}`}
                      />
                      {open ? t.experience.collapse : t.experience.expand}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6">
                          <p className="eyebrow">{t.experience.achievementsLabel}</p>

                          <ul className="mt-4 flex max-w-2xl flex-col gap-3">
                            {copy.achievements.map((achievement) => (
                              <li key={achievement} className="flex gap-3 text-[0.88rem] leading-relaxed text-fg/85">
                                <span aria-hidden className="mt-[0.6rem] h-px w-3.5 shrink-0 bg-accent" />
                                {achievement}
                              </li>
                            ))}
                          </ul>

                          {role.benchmark ? (
                            <div className="mt-7 max-w-2xl">
                              <p className="eyebrow mb-4">{t.experience.benchmark.label}</p>
                              <BenchmarkTable rows={role.benchmark} t={t} />
                            </div>
                          ) : null}

                          <ul className="mt-5 flex flex-wrap gap-1.5">
                            {role.stack.map((tech) => (
                              <li
                                key={tech}
                                className="rounded border border-line px-2 py-1 font-mono text-[0.68rem] text-muted"
                              >
                                {tech}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
