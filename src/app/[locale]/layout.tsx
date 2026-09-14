import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { notFound } from "next/navigation";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Backdrop } from "@/components/ui/Backdrop";
import { siteUrl } from "@/lib/site";
import { LOCALES, getDictionary, isLocale, profile } from "@/content";
import "../globals.css";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const dynamicParams = false;

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Omit<Props, "children">): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: { default: t.meta.title, template: `%s — ${profile.name}` },
    description: t.meta.description,
    keywords: t.meta.keywords,
    authors: [{ name: profile.name }],
    creator: profile.name,
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", fr: "/fr" },
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: "profile",
      siteName: profile.name,
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
    },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale} suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <ThemeProvider>
          <Backdrop />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
