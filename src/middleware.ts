import { NextRequest, NextResponse } from "next/server";
import { getInternalPath } from "@/i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files, api, Next.js internals, and special files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") || // static files (images, css, js, etc.)
    pathname === "/sitemap.xml" ||
    pathname === "/robots.txt"
  ) {
    return NextResponse.next();
  }

  const { locale, internalPath } = getInternalPath(pathname);

  // Build the rewritten URL: /[locale]/internalPath
  const newPath = internalPath === "/"
    ? `/${locale}`
    : `/${locale}${internalPath}`;

  // Only rewrite if the path actually changed
  if (pathname !== newPath) {
    const url = request.nextUrl.clone();
    url.pathname = newPath;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt
     * - opengraph-image files
     */
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|opengraph-image).*)",
  ],
};
