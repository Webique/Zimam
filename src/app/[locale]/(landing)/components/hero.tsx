"use client";

import { MapPin } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

import WhatsAppIcon from "@/assets/icons/whatsapp.svg";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { useAccessibility } from "@/contexts/accessibility-context";

export default function Hero() {
  const t = useTranslations("IndexPage.hero");
  const { prefersReducedMotion } = useAccessibility();

  // Animation variants that respect reduced motion
  const fadeInVariant = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    animate: { opacity: 1, y: 0 }
  };

  const floatingVariant = {
    animate: prefersReducedMotion
      ? {}
      : {
          y: [-10, 10, -10]
        }
  };

  return (
    <section
      className="from-law-background via-law-background to-law-accent bg-linear-to-br relative flex min-h-[700px] items-center justify-center overflow-hidden sm:min-h-[600px] lg:min-h-screen"
      aria-label={t("title")}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 107, 53, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(255, 184, 0, 0.1) 0%, transparent 50%)`
        }}
        aria-hidden="true"
      />

      {/* Hero Background Logo */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10">
        <ExportedImage
          src="/images/logo.png"
          alt="Zimam Al-Rai Logo"
          width={745}
          height={504}
          className="h-auto w-full max-w-xl sm:max-w-2xl object-contain"
          priority
          placeholder="empty"
        />
      </div>

      {/* Floating Background Elements */}
      <m.div
        animate={floatingVariant.animate}
        transition={{
          duration: prefersReducedMotion ? 0 : 6,
          repeat: prefersReducedMotion ? 0 : Infinity
        }}
        className="bg-primary/20 absolute left-10 top-20 z-10 h-32 w-32 rounded-full blur-2xl"
        aria-hidden="true"
      />
      <m.div
        animate={floatingVariant.animate}
        transition={{
          duration: prefersReducedMotion ? 0 : 6,
          repeat: prefersReducedMotion ? 0 : Infinity,
          delay: prefersReducedMotion ? 0 : 2
        }}
        className="bg-primary/10 absolute bottom-20 right-10 z-10 h-48 w-48 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <m.div
        animate={floatingVariant.animate}
        transition={{
          duration: prefersReducedMotion ? 0 : 6,
          repeat: prefersReducedMotion ? 0 : Infinity,
          delay: prefersReducedMotion ? 0 : 4
        }}
        className="bg-primary/15 absolute left-1/4 top-1/2 z-10 h-24 w-24 rounded-full blur-2xl"
        aria-hidden="true"
      />

      {/* Main Content */}
      <div className="container relative z-20 mx-auto mt-10 px-4 text-center sm:mt-20 sm:px-6">
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: prefersReducedMotion ? 0.1 : 0.6,
            staggerChildren: prefersReducedMotion ? 0 : 0.2
          }}
          className="mx-auto max-w-4xl"
        >
          {/* Firm Name */}
          <m.h1
            initial={fadeInVariant.initial}
            animate={fadeInVariant.animate}
            transition={{
              duration: prefersReducedMotion ? 0.1 : 0.6,
              delay: prefersReducedMotion ? 0 : 0.2
            }}
            className="text-law-text mb-4 text-3xl font-bold sm:mb-6 sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl"
          >
            <span className="from-law-primary via-law-primary-light to-law-primary bg-linear-to-r bg-clip-text text-transparent">
              {t("title")}
            </span>
          </m.h1>
          {/* Subtitle */}
          <m.p
            initial={fadeInVariant.initial}
            animate={fadeInVariant.animate}
            transition={{
              duration: prefersReducedMotion ? 0.1 : 0.6,
              delay: prefersReducedMotion ? 0 : 0.4
            }}
            className="text-law-text-light mb-3 text-lg font-medium sm:mb-4 sm:text-xl md:text-2xl lg:text-3xl"
          >
            {t("subtitle")}
          </m.p>
          {/* Tagline */}
          {t("tagline") && (
            <m.p
              initial={fadeInVariant.initial}
              animate={fadeInVariant.animate}
              transition={{
                duration: prefersReducedMotion ? 0.1 : 0.6,
                delay: prefersReducedMotion ? 0 : 0.6
              }}
              className="text-law-primary mb-6 text-base font-semibold sm:mb-8 sm:text-lg md:text-xl"
            >
              {t("tagline")}
            </m.p>
          )}
          {/* Description */}
          <m.p
            initial={fadeInVariant.initial}
            animate={fadeInVariant.animate}
            transition={{
              duration: prefersReducedMotion ? 0.1 : 0.6,
              delay: prefersReducedMotion ? 0 : 0.8
            }}
            className="text-law-text-light mx-auto mb-8 max-w-2xl text-sm leading-relaxed sm:mb-12 sm:text-base md:text-lg"
          >
            {t("description")}
          </m.p>
          {/* Call to Action Buttons */}
          <m.div
            initial={fadeInVariant.initial}
            animate={fadeInVariant.animate}
            transition={{
              duration: prefersReducedMotion ? 0.1 : 0.6,
              delay: prefersReducedMotion ? 0 : 1.0
            }}
            className="mb-8 flex flex-col items-center justify-center gap-3 sm:mb-12 sm:flex-row sm:gap-4"
            role="group"
            aria-label="Contact actions"
          >
            <Button
              size="lg"
              className="shadow-elegant bg-law-primary hover:bg-law-primary-dark h-12 w-full rounded-xl px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg sm:h-auto sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
              asChild
            >
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
                aria-label="Contact us via WhatsApp"
              >
                <WhatsAppIcon className="h-5 w-5" aria-hidden="true" />
                {t("cta")}
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-law-primary text-law-primary hover:bg-law-primary h-12 w-full rounded-xl px-6 py-3 text-base font-semibold transition-all duration-300 hover:scale-105 hover:text-white sm:h-auto sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
              asChild
            >
              <a
                href="#contact"
                className="flex items-center justify-center gap-3"
                aria-label="View location"
              >
                <MapPin className="h-5 w-5" aria-hidden="true" />
                {t("locationText")}
              </a>
            </Button>
          </m.div>
        </m.div>
      </div>

      {/* Gradient Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: `linear-gradient(to top, rgba(248, 250, 252, 0.2) 0%, transparent 50%, transparent 100%)`
        }}
        aria-hidden="true"
      />
    </section>
  );
}
