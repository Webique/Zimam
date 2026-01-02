"use client";

import { useTranslations } from "next-intl";

export default function SkipNavigation() {
  const t = useTranslations("Accessibility");

  return (
    <>
      <a href="#main-content" className="skip-link">
        {t("skipToMain")}
      </a>
      <a href="#navigation" className="skip-link">
        {t("skipToNavigation")}
      </a>
      <a href="#contact" className="skip-link">
        {t("skipToContact")}
      </a>
    </>
  );
}
