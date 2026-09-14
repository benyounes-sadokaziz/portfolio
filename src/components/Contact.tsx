import { Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";
import { education, profile, spokenLanguages, type Dictionary, type Locale } from "@/content";
import { Container, SectionHeading } from "./ui/Backdrop";
import { MagneticLink } from "./ui/MagneticLink";
import { Reveal } from "./ui/Reveal";

export function Contact({ t, locale }: { t: Dictionary; locale: Locale }) {
  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <Reveal>
              <SectionHeading label={t.contact.label} title={t.contact.title} lead={t.contact.lead} />
            </Reveal>

            <Reveal delay={0.08}>
              <a
                href={`mailto:${profile.email}`}
                className="mt-9 inline-block break-all text-lg text-fg underline decoration-line-strong decoration-1 underline-offset-[6px] transition-colors hover:text-accent hover:decoration-accent sm:text-2xl"
              >
                {profile.email}
              </a>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <MagneticLink href={`mailto:${profile.email}`} variant="solid">
                  <Mail size={15} />
                  {t.contact.emailLabel}
                </MagneticLink>
                <MagneticLink href={profile.cv[locale]}>
                  <Download size={15} />
                  {t.ui.downloadCv}
                </MagneticLink>
                <MagneticLink href={profile.github} external>
                  <GithubIcon size={15} />
                  GitHub
                </MagneticLink>
                <MagneticLink href={profile.linkedin} external>
                  <LinkedinIcon size={15} />
                  LinkedIn
                </MagneticLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-xl border border-line bg-surface p-6 sm:p-7">
              <p className="eyebrow">{t.education.label}</p>

              <ul className="mt-5 flex flex-col gap-5">
                {education.map((item) => (
                  <li key={item.id}>
                    <p className="text-sm text-fg">{t.education.entries[item.id].degree}</p>
                    <p className="mt-1 font-mono text-[0.72rem] text-muted">{item.org}</p>
                    <p className="mt-0.5 font-mono text-[0.68rem] text-faint">{item.period}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-7 border-t border-line pt-6">
                <p className="eyebrow">{t.education.languagesLabel}</p>
                <ul className="mt-4 flex flex-col gap-2">
                  {spokenLanguages.map((language) => (
                    <li key={language.id} className="flex items-baseline justify-between gap-4">
                      <span className="text-sm text-fg">{t.education.languages[language.id]}</span>
                      <span className="font-mono text-[0.68rem] text-faint">
                        {t.education.languages[language.level]}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
