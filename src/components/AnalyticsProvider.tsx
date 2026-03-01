"use client";

import { useState, useEffect } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

const GA_ID = "G-9PRFLD7EHF";
const STORAGE_KEY = "cookie-consent";

export default function AnalyticsProvider() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    const check = () => {
      setConsented(localStorage.getItem(STORAGE_KEY) === "accepted");
    };

    check();
    window.addEventListener("cookie-consent-change", check);
    return () => window.removeEventListener("cookie-consent-change", check);
  }, []);

  if (!consented) return null;

  return <GoogleAnalytics gaId={GA_ID} />;
}
