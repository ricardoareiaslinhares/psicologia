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
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 z-50 sm:max-w-xs">
      <div className="rounded-xl border border-foreground/10 bg-background/95 backdrop-blur-sm shadow-lg p-4 flex flex-col gap-3">
        <p className="text-xs text-secondary leading-relaxed">{t.message}</p>
        <div className="flex gap-2">
          <button
            onClick={() => handleChoice("declined")}
            className="flex-1 rounded-full px-3 py-1.5 text-xs font-medium border border-foreground/15 text-foreground/70 hover:bg-muted transition-colors"
          >
            {t.decline}
          </button>
          <button
            onClick={() => handleChoice("accepted")}
            className="flex-1 rounded-full px-3 py-1.5 text-xs font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
