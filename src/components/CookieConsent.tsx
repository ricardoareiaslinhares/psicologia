"use client";

import { useState, useEffect } from "react";
import { Locale } from "@/i18n/config";
import text from "@/data/text.json";

type Props = {
  locale: Locale;
};

const STORAGE_KEY = "cookie-consent";

export default function CookieConsent({ locale }: Props) {
  const [visible, setVisible] = useState(false);
  const t = text[locale]?.cookies || text.pt.cookies;

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const handleChoice = (choice: "accepted" | "declined") => {
    localStorage.setItem(STORAGE_KEY, choice);
    window.dispatchEvent(new Event("cookie-consent-change"));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="mx-auto max-w-screen-md rounded-xl border border-foreground/10 bg-background/95 backdrop-blur-sm shadow-lg p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-secondary flex-1">{t.message}</p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={() => handleChoice("declined")}
            className="rounded-full px-4 py-2 text-sm font-medium border border-foreground/15 text-foreground/70 hover:bg-muted transition-colors"
          >
            {t.decline}
          </button>
          <button
            onClick={() => handleChoice("accepted")}
            className="rounded-full px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
