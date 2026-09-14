"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Mail } from "lucide-react";
import { Container } from "./ui/Backdrop";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";
import { profile, type Dictionary } from "@/content";

export function Hero({ t, portrait }: { t: Dictionary; portrait: string | null }) {
  const reduced = useReducedMotion();

  // One orchestrated entrance rather than several independent ones.
  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } };
  const item = {
    hidden: reduced ? {} : { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
  };

  const socials = [
    { href: profile.github, label: "GitHub", Icon: GithubIcon },
    { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  ];

  return (
    <section id="home" className="relative pt-28 pb-20 sm:pt-36 sm:pb-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col">
            <motion.p variants={item} className="text-sm text-muted">
              {t.hero.greeting}
            </motion.p>

            <motion.p variants={item} className="mt-2 text-xl font-medium tracking-tight text-fg sm:text-2xl">
              {profile.name}
            </motion.p>

            <motion.h1 variants={item} className="text-display mt-3 text-accent">
              {t.hero.roleShort}
            </motion.h1>

            <motion.p variants={item} className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {t.hero.statement}
            </motion.p>

            <motion.ul variants={item} className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
              {t.hero.specialisms.map((specialism, index) => (
                <li key={specialism} className="flex items-center gap-2.5 font-mono text-[0.68rem] text-faint">
                  {index > 0 ? (
                    <span aria-hidden className="h-0.5 w-0.5 rounded-full bg-faint" />
                  ) : null}
                  {specialism}
                </li>
              ))}
            </motion.ul>

            <motion.ul variants={item} className="mt-8 flex items-center gap-2.5">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors duration-300 hover:border-accent hover:text-accent"
                  >
                    <Icon size={15} />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  aria-label={t.contact.emailLabel}
                  className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  <Mail size={15} />
                </a>
              </li>
            </motion.ul>

            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-accent-hi"
              >
                {t.hero.ctaProjects}
                <ArrowDownRight size={16} />
              </a>
              <a
                href={profile.cv.en}
                download
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm font-medium text-fg transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                {t.ui.downloadCv}
              </a>
            </motion.div>

          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {portrait ? <Portrait src={portrait} name={profile.name} /> : null}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function Portrait({ src, name }: { src: string; name: string }) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[42rem]">
      {/* Halo behind the subject, so the cutout has something to sit on. */}
      <div
        aria-hidden
        className="absolute inset-[4%] rounded-full"
        style={{ background: "radial-gradient(circle at 50% 45%, var(--accent-wash), transparent 68%)" }}
      />
      <div aria-hidden className="absolute inset-[4%] rounded-full border border-line" />

      {/* Inset inside the ring, not the outer box: a tall cutout scaled to the
          full square would overflow the circle at head and feet. */}
      <div className="absolute inset-[4%]">
        <Image
          src={src}
          alt={name}
          fill
          priority
          sizes="(min-width: 1024px) 42rem, 90vw"
          className="object-contain object-center"
        />
      </div>
    </div>
  );
}
