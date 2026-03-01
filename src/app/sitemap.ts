import { clientAllLocales } from "@/lib/contentful";
import { MetadataRoute } from "next";

const getPostSlugs = async () => {
  const res = await clientAllLocales.getEntries({
    content_type: "blogPost",
    select: ["fields.slug"],
  });
  return res.items.map((item: any) => {
    const slugField = item.fields.slug;
    // slugField is { "en-US": "...", "pt-PT": "..." } or just { "en-US": "..." }
    const enSlug = slugField["en-US"];
    const ptSlug = slugField["pt-PT"] || enSlug; // fallback to en-US for untranslated
    return { enSlug, ptSlug };
  });
};

//@ts-ignore
export default async function sitemap(): MetadataRoute.Sitemap {
  const postSlugs = await getPostSlugs();

  const baseURL = "https://ricardolinharespsicologo.pt";

  const ptPages = [
    { path: "", priority: 1 },
    { path: "/sobre/psicologo", priority: 0.8 },
    { path: "/sobre/psicologia", priority: 0.9 },
    { path: "/servicos/consultas", priority: 0.5 },
    { path: "/servicos/preparacao", priority: 0.5 },
    { path: "/blog", priority: 0.5 },
    { path: "/referencias", priority: 0.2 },
  ];

  const enSlugs: Record<string, string> = {
    "": "",
    "/sobre/psicologo": "/en/about/psychologist",
    "/sobre/psicologia": "/en/about/psychology",
    "/servicos/consultas": "/en/services/consultations",
    "/servicos/preparacao": "/en/services/preparation",
    "/blog": "/en/blog",
    "/referencias": "/en/references",
  };

  const staticEntries = ptPages.map((page) => ({
    url: `${baseURL}${page.path || "/"}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: page.priority,
    alternates: {
      languages: {
        pt: `${baseURL}${page.path || "/"}`,
        en: `${baseURL}${enSlugs[page.path] || "/en"}`,
      },
    },
  }));

  const postsURL = postSlugs.flatMap(({ enSlug, ptSlug }: { enSlug: string; ptSlug: string }) => {
    const entries = [
      {
        url: `${baseURL}/blog/${ptSlug}`,
        lastModified: new Date(),
        changeFrequency: "yearly" as const,
        priority: 1,
        alternates: {
          languages: {
            pt: `${baseURL}/blog/${ptSlug}`,
            en: `${baseURL}/en/blog/${enSlug}`,
          },
        },
      },
    ];

    // Add separate EN entry only if slug differs
    if (enSlug !== ptSlug) {
      entries.push({
        url: `${baseURL}/en/blog/${enSlug}`,
        lastModified: new Date(),
        changeFrequency: "yearly" as const,
        priority: 1,
        alternates: {
          languages: {
            pt: `${baseURL}/blog/${ptSlug}`,
            en: `${baseURL}/en/blog/${enSlug}`,
          },
        },
      });
    }

    return entries;
  });

  return [...staticEntries, ...postsURL];
}
