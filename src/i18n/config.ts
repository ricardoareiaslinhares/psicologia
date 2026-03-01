export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt";

// Maps EN translated slugs to PT internal slugs
const enToPtSlugMap: Record<string, string> = {
  "about/psychologist": "sobre/psicologo",
  "about/psychology": "sobre/psicologia",
  "services/consultations": "servicos/consultas",
  "services/preparation": "servicos/preparacao",
  "references": "referencias",
  "blog": "blog",
};

// Reverse map: PT slugs to EN translated slugs
const ptToEnSlugMap: Record<string, string> = Object.fromEntries(
  Object.entries(enToPtSlugMap).map(([en, pt]) => [pt, en])
);

/**
 * Build a locale-aware path for links.
 * For PT (default): returns the PT path as-is (e.g. "/sobre/psicologo")
 * For EN: returns "/en/<translated-slug>" (e.g. "/en/about/psychologist")
 */
export function getLocalePath(locale: Locale, ptPath: string): string {
  // Normalize: remove leading/trailing slashes
  const clean = ptPath.replace(/^\/+|\/+$/g, "");

  if (locale === "pt") {
    return clean ? `/${clean}` : "/";
  }

  // For EN, translate known PT slugs to EN slugs
  if (!clean) return "/en";

  // Check if path starts with a known PT slug (handle blog/[slug] dynamically)
  const enSlug = ptToEnSlugMap[clean];
  if (enSlug) return `/en/${enSlug}`;

  // Handle dynamic routes like blog/some-slug
  const segments = clean.split("/");
  if (segments[0] === "blog") {
    return `/en/blog${segments.length > 1 ? "/" + segments.slice(1).join("/") : ""}`;
  }

  // Fallback: use the PT slug under /en/
  return `/en/${clean}`;
}

/**
 * Given a raw incoming pathname, determine the locale and internal PT path.
 * Used by middleware to rewrite URLs.
 */
export function getInternalPath(pathname: string): {
  locale: Locale;
  internalPath: string;
} {
  const clean = pathname.replace(/^\/+|\/+$/g, "");
  const segments = clean.split("/");

  if (segments[0] === "en") {
    // English path — translate slug back to PT
    const rest = segments.slice(1).join("/");

    if (!rest) {
      return { locale: "en", internalPath: "/" };
    }

    // Check full rest path against EN→PT map
    const ptSlug = enToPtSlugMap[rest];
    if (ptSlug) {
      return { locale: "en", internalPath: `/${ptSlug}` };
    }

    // Handle blog dynamic routes (blog/some-slug stays the same)
    if (segments[1] === "blog") {
      return { locale: "en", internalPath: `/${rest}` };
    }

    // Fallback: treat rest as internal path
    return { locale: "en", internalPath: `/${rest}` };
  }

  // Portuguese (default) — path stays as-is
  return { locale: "pt", internalPath: clean ? `/${clean}` : "/" };
}

/**
 * Given a pathname in one locale, get the equivalent path in the other locale.
 * Used by the language switcher.
 */
export function getAlternatePath(
  currentPathname: string,
  targetLocale: Locale
): string {
  const clean = currentPathname.replace(/^\/+|\/+$/g, "");
  const segments = clean.split("/");

  if (segments[0] === "en") {
    // Currently EN, switching to PT
    const rest = segments.slice(1).join("/");
    if (!rest) return "/";
    const ptSlug = enToPtSlugMap[rest];
    if (ptSlug) return `/${ptSlug}`;
    // blog routes stay the same
    return `/${rest}`;
  } else {
    // Currently PT, switching to EN
    const ptPath = clean;
    if (!ptPath) return "/en";
    const enSlug = ptToEnSlugMap[ptPath];
    if (enSlug) return `/en/${enSlug}`;
    // blog routes
    if (segments[0] === "blog") return `/en/${ptPath}`;
    return `/en/${ptPath}`;
  }
}
