"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navSections, type Dictionary, type Locale } from "@/content";

export function Nav({ locale, t, caseStudy }: { locale: Locale; t: Dictionary; caseStudy?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy. Only meaningful on the home page, where the sections exist.
  useEffect(() => {
    if (caseStudy) return;

    const targets = navSections
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5] },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [caseStudy]);

  const home = `/${locale}`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled ? "glass border-b border-line" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-[74rem] items-center justify-between gap-6 px-6 sm:px-8">
        <Link href={home} className="group flex items-center gap-2.5 text-sm font-medium tracking-tight">
          <span className="grid h-6 w-6 place-items-center rounded-[5px] border border-line-strong font-mono text-[0.6rem] text-fg transition-colors group-hover:border-accent group-hover:text-accent">
            S
          </span>
          <span className="hidden text-fg sm:inline">Sadok Aziz</span>
        </Link>

        {!caseStudy ? (
          <nav className="hidden items-center gap-1 lg:flex">
            {navSections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={`rounded-full px-3 py-1.5 text-[0.8rem] transition-colors duration-200 ${
                  active === id ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {t.nav[id]}
              </a>
            ))}
          </nav>
        ) : (
          <Link href={`${home}#projects`} className="text-[0.8rem] text-muted transition-colors hover:text-fg">
            {t.caseStudy.backLabel}
          </Link>
        )}

        <div className="flex items-center gap-2">
          <span className="hidden items-center gap-2 rounded-full border border-line px-3 py-1.5 md:inline-flex">
            <span className="relative grid h-1.5 w-1.5 place-items-center">
              <span className="pulse-dot absolute h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[0.65rem] tracking-wide text-muted">{t.nav.availability}</span>
          </span>

          <LocaleSwitch locale={locale} label={t.ui.switchLanguage} />
          <ThemeSwitch label={t.ui.toggleTheme} />

          {!caseStudy ? (
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={t.nav.menu}
              aria-expanded={open}
              className="grid h-8 w-8 place-items-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-fg lg:hidden"
            >
              {open ? <X size={15} /> : <Menu size={15} />}
            </button>
          ) : null}
        </div>
      </div>

      <AnimatePresence>
        {open && !caseStudy ? (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="glass overflow-hidden border-b border-line lg:hidden"
          >
            <div className="flex flex-col px-6 pb-4 sm:px-8">
              {navSections.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-3 text-sm text-muted transition-colors last:border-0 hover:text-fg"
                >
                  {t.nav[id]}
                </a>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function LocaleSwitch({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();
  const next: Locale = locale === "en" ? "fr" : "en";
  const href = pathname.replace(/^\/(en|fr)/, `/${next}`) || `/${next}`;

  return (
    <Link
      href={href}
      aria-label={label}
      title={label}
      className="grid h-8 w-8 place-items-center rounded-full border border-line font-mono text-[0.65rem] uppercase text-muted transition-colors hover:border-line-strong hover:text-fg"
    >
      {next}
    </Link>
  );
}

function ThemeSwitch({ label }: { label: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  // Both icons render and CSS picks one from the class on <html>, so the button
  // is never briefly wrong during hydration.
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="grid h-8 w-8 place-items-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-fg"
    >
      <Sun size={14} className="dark:hidden" />
      <Moon size={14} className="hidden dark:block" />
    </button>
  );
}
