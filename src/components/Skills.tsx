"use client";

import { useState } from "react";
import { skillGroups, type Dictionary } from "@/content";
import { Container, SectionHeading } from "./ui/Backdrop";
import { Reveal } from "./ui/Reveal";

export function Skills({ t }: { t: Dictionary }) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="skills" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading label={t.skills.label} title={t.skills.title} lead={t.skills.lead} />
        </Reveal>

        <div className="mt-14 flex flex-col" onMouseLeave={() => setHovered(null)}>
          {skillGroups.map((group, index) => {
            const copy = t.skills.groups[group.id];
            const dimmed = hovered !== null && hovered !== group.id;

            return (
              <Reveal key={group.id} delay={index * 0.05}>
                <div
                  onMouseEnter={() => setHovered(group.id)}
                  className={`grid gap-5 border-t border-line py-7 transition-opacity duration-300 last:border-b md:grid-cols-[15rem_1fr] md:gap-10 ${
                    dimmed ? "opacity-40" : "opacity-100"
                  }`}
                >
                  <div>
                    <h3 className="text-sm font-medium text-fg">{copy.name}</h3>
                    <p className="mt-1.5 text-[0.8rem] leading-relaxed text-muted">{copy.note}</p>
                  </div>

                  <ul className="flex flex-wrap content-start gap-1.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="cursor-default rounded-md border border-line px-2.5 py-1.5 font-mono text-[0.72rem] text-muted transition-colors duration-200 hover:border-accent hover:text-fg"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
