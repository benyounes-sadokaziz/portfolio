import type { MetadataRoute } from "next";
import { LOCALES, projects } from "@/content";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const homes = LOCALES.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: locale === "en" ? 1 : 0.9,
  }));

  const caseStudies = LOCALES.flatMap((locale) =>
    projects.map((project) => ({
      url: `${siteUrl}/${locale}/work/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  );

  return [...homes, ...caseStudies];
}
