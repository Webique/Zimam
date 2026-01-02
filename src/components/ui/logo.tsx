"use client";

import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

import { Link as I18nLink } from "@/i18n/navigation.public";
import { cn } from "@/lib/utils";

type LogoProps = {
  src?: string;
  width?: number;
  height?: number;
  href?: string;
  className?: string;
  imgClassName?: string;
  textClassName?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
};

export default function Logo({
  src = "/images/logo.png",
  width = 745,
  height = 504,
  className,
  imgClassName,
  textClassName,
  href = "/",
  showText = true,
  size = "md"
}: LogoProps) {
  const t = useTranslations("Header");

  // Size configurations for responsive design
  const sizeConfig = {
    sm: {
      image: "h-auto w-6 sm:w-7",
      text: "text-sm sm:text-base font-semibold",
      gap: "gap-1.5 sm:gap-2"
    },
    md: {
      image: "h-auto w-8 sm:w-10",
      text: "text-base sm:text-lg font-semibold",
      gap: "gap-2 sm:gap-2.5"
    },
    lg: {
      image: "h-auto w-10 sm:w-12",
      text: "text-lg sm:text-xl font-bold",
      gap: "gap-2.5 sm:gap-3"
    },
    xl: {
      image: "h-auto w-12 sm:w-16",
      text: "text-xl sm:text-2xl font-bold",
      gap: "gap-3 sm:gap-4"
    }
  };

  const config = sizeConfig[size];

  return (
    <I18nLink
      href={href}
      aria-label={t("siteName")}
      className={cn(
        "inline-flex items-center transition-all duration-300 hover:opacity-80",
        config.gap,
        className
      )}
    >
      <ExportedImage
        className={cn(
          "max-w-full overflow-hidden transition-transform duration-300 hover:scale-105",
          config.image,
          imgClassName
        )}
        src={src}
        width={width}
        height={height}
        placeholder="empty"
        priority
        alt={t("siteName")}
      />

      {showText && (
        <div className="flex flex-col text-start leading-tight">
          <span
            className={cn(
              "text-law-primary transition-colors duration-300",
              config.text,
              textClassName
            )}
          >
            {t("siteName")}
          </span>
          <span className="text-law-text-light text-start text-xs font-medium sm:text-sm">
            {t("siteDescription")}
          </span>
        </div>
      )}
    </I18nLink>
  );
}
