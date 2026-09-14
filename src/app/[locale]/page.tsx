import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Philosophy } from "@/components/Philosophy";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { getPortrait } from "@/lib/media";
import { getDictionary, profile, type Locale } from "@/content";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getDictionary(locale);
  const typed = locale as Locale;
  const portrait = getPortrait();

  // Structured data helps a recruiter's search land on the right person.
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    email: profile.email,
    jobTitle: t.hero.role,
    description: t.meta.description,
    sameAs: [profile.github, profile.linkedin],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      <Nav locale={typed} t={t} />

      <main>
        <Hero t={t} portrait={portrait} />
        <div className="rule mx-auto max-w-[74rem]" />
        <About t={t} />
        <Experience t={t} />
        <Projects t={t} locale={typed} />
        <Philosophy t={t} />
        <Skills t={t} />
        <Contact t={t} locale={typed} />
      </main>

      <Footer t={t} />
    </>
  );
}
