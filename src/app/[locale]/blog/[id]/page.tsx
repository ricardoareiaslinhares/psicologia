import RichText from "@/components/richText/RichText";
import { client, clientAllLocales } from "@/lib/contentful";
import { BlogPost } from "@/types";
import React from "react";
import { Locale } from "@/i18n/config";
import text from "@/data/text.json";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 3600,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

// Contentful locale codes
const cfLocaleMap: Record<string, string> = { pt: "pt-PT", en: "en-US" };
const CF_DEFAULT = "en-US";

function pick(field: any, locale: string) {
  if (field == null) return undefined;
  if (
    typeof field === "object" &&
    !Array.isArray(field) &&
    (CF_DEFAULT in field || cfLocaleMap[locale] in field)
  ) {
    return field[cfLocaleMap[locale]] ?? field[CF_DEFAULT];
  }
  return field;
}

/**
 * Fetch a post by slug. The slug field filter in Contentful only matches
 * against the queried locale, so we try the app locale first, then the
 * default locale as fallback. Returns the raw item (fields are locale=* keyed).
 */
const getPost = async (slug: string, locale: string) => {
  const cfLoc = cfLocaleMap[locale] || CF_DEFAULT;

  // Try querying with the app's Contentful locale
  let res = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": slug,
    locale: cfLoc,
    limit: 1,
  });

  if (res.items.length > 0) {
    // Re-fetch the same entry with all locales so we can pick fields
    const id = res.items[0].sys.id;
    const full = await clientAllLocales.getEntries({
      content_type: "blogPost",
      "sys.id": id,
      limit: 1,
    });
    return full.items[0] || null;
  }

  // Fallback: try the other locale (e.g. slug only exists in en-US default)
  if (cfLoc !== CF_DEFAULT) {
    res = await client.getEntries({
      content_type: "blogPost",
      "fields.slug": slug,
      locale: CF_DEFAULT,
      limit: 1,
    });
    if (res.items.length > 0) {
      const id = res.items[0].sys.id;
      const full = await clientAllLocales.getEntries({
        content_type: "blogPost",
        "sys.id": id,
        limit: 1,
      });
      return full.items[0] || null;
    }
  }

  return null;
};

type Props = {
  params: Promise<{ locale: string; id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale, id } = await params;

  try {
    const raw = await getPost(id, locale);
    if (!raw) {
      return {
        title: "Not found",
        description: "Not found",
        alternates: { canonical: `/blog/${id}` },
      };
    }
    const f = raw.fields as any;
    const titulo = pick(f.titulo, locale);
    const shortDesc = pick(f.shortDesc, locale);
    const media = pick(f.media, locale);
    const fileUrl = media?.fields?.file?.[CF_DEFAULT]?.url ?? "";
    const modifiedI = fileUrl.startsWith("//") ? "https:" + fileUrl : fileUrl;

    return {
      title: titulo,
      description: shortDesc,
      alternates: {
        canonical: `/blog/${id}`,
        languages: {
          pt: `https://ricardolinharespsicologo.pt/blog/${id}`,
          en: `https://ricardolinharespsicologo.pt/en/blog/${id}`,
        },
      },
      twitter: {
        card: "summary_large_image",
        title: titulo,
        description: shortDesc,
        images: modifiedI
          ? [
              {
                url: modifiedI,
                type: "image/jpg",
                width: 1200,
                height: 630,
                alt: titulo,
              },
            ]
          : [],
      },
    };
  } catch (error) {
    return {
      title: "Not found",
      description: "Not found",
    };
  }
}

export default async function Blog({ params }: Props) {
  const { locale, id } = await params;
  const lang = locale as Locale;
  const t = text[lang] || text.pt;
  const raw = await getPost(id, lang);

  if (!raw) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center w-full z-0 overflow-hidden bg-muted py-12">
        <p className="text-lg">Not found</p>
      </main>
    );
  }

  const f = raw.fields as any;
  const titulo = pick(f.titulo, lang);
  const intro = pick(f.intro, lang);
  const desc = pick(f.desc, lang);

  return (
    <main
      key={id}
      className="flex min-h-screen flex-col items-center justify-center w-full z-0 overflow-hidden bg-muted py-12"
    >
      <section className="flex w-full max-w-screen-xl px-8 md:px-24 flex-wrap flex-1 gap-6 justify-center items-start">
        <div>
          <h1 className="text-xl font-bold mb-4">{titulo}</h1>
          <p>{intro}</p>
          <div className="flex text-left flex-1 flex-col">
            <RichText content={desc} />
          </div>
        </div>
        <div className="flex self-start items-start flex-1 gap-x-2 flex-col">
          <p>{t.blog.signoff1}</p>
          <p>{t.blog.signoff2}</p>
        </div>
      </section>
    </main>
  );
}
