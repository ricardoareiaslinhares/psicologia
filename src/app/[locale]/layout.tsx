import type { Metadata } from "next";
import { Inter } from "next/font/google";
import FullNavbar from "@/components/navbar/FullNavbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import FooterCredits from "@/components/footer/FooterCredits";
import { Separator } from "@/components/ui/separator";
import { GoogleAnalytics } from "@next/third-parties/google";
import { MessageContextProvider } from "@/context/message";
import { Locale, locales } from "@/i18n/config";
import text from "@/data/text.json";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = text[locale as Locale] || text.pt;

  const isEn = locale === "en";

  return {
    title: isEn
      ? "Ricardo Linhares Psychology Practice Barcelos"
      : "Ricardo Linhares Consultas de Psicologia Barcelos",
    robots: { index: true, follow: true },
    keywords: isEn
      ? [
          "Psychology",
          "Psychology Barcelos",
          "Psychotherapy Barcelos",
          "Clinical Psychology",
          "Anxiety treatment",
          "Depression treatment",
        ]
      : [
          "Psicologia",
          "Psicologia Barcelos",
          "Psicoterapia Barcelos",
          "Psicologia Clínica",
          "Tratamento ansiedade",
          "Tratamento depressão",
        ],
    description: isEn
      ? "Clinical Psychology / Psychotherapy in Barcelos. You don't have to suffer with depression, anxiety, panic or other problems. There are ways to deal with them — use psychology to live with more vitality."
      : "Psicologia Clínica / Psicoterapia em Barcelos. Não precisa de sofrer com depressão, ansiedade, pânico ou outros problemas. Há formas de lidar com eles, utilize a psicologia para viver com mais vitalidade.",
    alternates: {
      languages: {
        pt: "https://ricardolinharespsicologo.pt",
        en: "https://ricardolinharespsicologo.pt/en",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const validLocale = (locales.includes(locale as Locale) ? locale : "pt") as Locale;
  const t = text[validLocale];

  return (
    <html lang={validLocale}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <MessageContextProvider>
            <div className="w-full bg-destructive text-destructive-foreground text-center py-2 px-4 text-sm font-semibold">
              {t.banner}
            </div>
            <FullNavbar locale={validLocale} />
            <div className="flex items-center justify-center flex-col">
              {children}
              <Separator className="bg-foreground/10" />
              <div className="w-full bg-muted flex items-center justify-center">
                <div className="max-w-screen-2xl flex items-center justify-center">
                  <FooterCredits />
                </div>
              </div>
            </div>
            <div id="overlays"></div>
          </MessageContextProvider>
        </ThemeProvider>
        <GoogleAnalytics gaId="G-9PRFLD7EHF" />
      </body>
    </html>
  );
}
