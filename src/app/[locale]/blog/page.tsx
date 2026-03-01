import React from "react";
import { clientAllLocales } from "@/lib/contentful";
import { BlogPost } from "@/types";
import CardMain from "@/components/cards/CardMain";
import { Metadata } from "next";
import { Locale } from "@/i18n/config";
import text from "@/data/text.json";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return {
    title: isEn
      ? "Psychology Blog - Ricardo Linhares"
      : "Blog de Psicologia - Ricardo Linhares",
    description: isEn
      ? "Articles on psychology, psychotherapy and mental health. Open Book of Psychology by Ricardo Linhares."
      : "Artigos sobre psicologia, psicoterapia e saúde mental. Livro Aberto de Psicologia por Ricardo Linhares.",
    alternates: {
      languages: {
        pt: "https://ricardolinharespsicologo.pt/blog",
        en: "https://ricardolinharespsicologo.pt/en/blog",
      },
    },
  };
}

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 3600,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

const cfLocaleMap: Record<string, string> = { pt: "pt-PT", en: "en-US" };
const CF_DEFAULT = "en-US";

/** Pick the best value for a locale=* field */
function pick(field: any, locale: string) {
  if (field == null) return undefined;
  if (typeof field === "object" && !Array.isArray(field) && (CF_DEFAULT in field || cfLocaleMap[locale] in field)) {
    return field[cfLocaleMap[locale]] ?? field[CF_DEFAULT];
  }
  return field;
}

const get = async () => {
  const res = await clientAllLocales.getEntries({
    content_type: "blogPost",
    order: ["-sys.createdAt"],
  });
  return res.items;
};

export default async function Blogs({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale as Locale;
  const t = text[lang] || text.pt;
  const blogPosts: any = await get();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-full z-0 overflow-hidden py-12 bg-muted">
      <div className="flex flex-col gap-y-4 items-center justify-center mb-12">
        <h1 className="text-2xl font-bold text-foreground">
          {t.blog.heading}
        </h1>
        <h3 className="text-lg font-bold text-primary px-6 text-center">
          {t.blog.subheading}
        </h3>
      </div>

      {lang === "en" && blogPosts.length === 0 ? (
        <section className="flex flex-1 w-full max-w-screen-2xl px-8 md:px-24 justify-center items-center">
          <p className="text-lg text-center text-secondary">
            {t.blog.comingSoon}
          </p>
        </section>
      ) : lang === "en" ? (
        <section className="flex flex-col w-full max-w-screen-2xl px-8 md:px-24 gap-6 items-center">
          <p className="text-base text-center text-secondary mb-4">
            {t.blog.comingSoon}
          </p>
          <div className="flex flex-1 w-full flex-wrap gap-6 justify-center items-center">
            {blogPosts.map((post: any, index: number) => {
              const f = post.fields;
              const titulo = pick(f.titulo, lang);
              const shortDesc = pick(f.shortDesc, lang);
              const slug = pick(f.slug, lang);
              const media = pick(f.media, lang);
              const fileUrl = media?.fields?.file?.[CF_DEFAULT]?.url ?? "";
              const modifiedI = fileUrl.startsWith("//") ? "https:" + fileUrl : fileUrl;
              const imageName = media?.fields?.title?.[CF_DEFAULT] ?? "";
              return (
                <CardMain
                  key={`${post.sys.id}-${index}`}
                  title={titulo}
                  desc={shortDesc}
                  link={`/en/blog/${slug}`}
                  imageUrl={modifiedI}
                  imageName={imageName}
                  isVerticalOnly={true}
                />
              );
            })}
          </div>
        </section>
      ) : (
        <section className="flex flex-1 w-full max-w-screen-2xl px-8 md:px-24 flex-wrap gap-6 justify-center items-center">
          {blogPosts.map((post: any, index: number) => {
            const f = post.fields;
            const titulo = pick(f.titulo, lang);
            const shortDesc = pick(f.shortDesc, lang);
            const slug = pick(f.slug, lang);
            const media = pick(f.media, lang);
            const fileUrl = media?.fields?.file?.[CF_DEFAULT]?.url ?? "";
            const modifiedI = fileUrl.startsWith("//") ? "https:" + fileUrl : fileUrl;
            const imageName = media?.fields?.title?.[CF_DEFAULT] ?? "";
            return (
              <CardMain
                key={`${post.sys.id}-${index}`}
                title={titulo}
                desc={shortDesc}
                link={`/blog/${slug}`}
                imageUrl={modifiedI}
                imageName={imageName}
                isVerticalOnly={true}
              />
            );
          })}
        </section>
      )}
    </main>
  );
}
