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

  const scrollIndicatorVariant = {
    animate: prefersReducedMotion
      ? {}
      : {
          y: [0, 10, 0]
        }
  };

  return (
    <section
      className="from-law-background via-law-background to-law-accent bg-linear-to-br relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label={t("title")}
    >
      {/* Background Pattern */}
      <div
        className="pattern-dots absolute inset-0 z-0 opacity-30"
        aria-hidden="true"
      />

      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <ExportedImage
          src="/images/hero.jpeg"
          alt="Professional law office environment"
          fill
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>

      {/* Floating Background Elements */}
      <m.div
        animate={floatingVariant.animate}
        transition={{
          duration: prefersReducedMotion ? 0 : 6,
          repeat: prefersReducedMotion ? 0 : Infinity
        }}
        className="bg-law-primary/10 absolute left-10 top-20 z-10 h-32 w-32 rounded-full blur-xl"
        aria-hidden="true"
      />
      <m.div
        animate={floatingVariant.animate}
        transition={{
          duration: prefersReducedMotion ? 0 : 6,
          repeat: prefersReducedMotion ? 0 : Infinity,
          delay: prefersReducedMotion ? 0 : 2
        }}
        className="bg-law-primary/5 absolute bottom-20 right-10 z-10 h-48 w-48 rounded-full blur-2xl"
        aria-hidden="true"
      />
      <m.div
        animate={floatingVariant.animate}
        transition={{
          duration: prefersReducedMotion ? 0 : 6,
          repeat: prefersReducedMotion ? 0 : Infinity,
          delay: prefersReducedMotion ? 0 : 4
        }}
        className="bg-law-secondary/5 absolute left-1/4 top-1/2 z-10 h-24 w-24 rounded-full blur-xl"
        aria-hidden="true"
      />

      {/* Main Content */}
      <div className="container relative z-20 mx-auto px-4 text-center sm:px-6">
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

          {/* Scroll Indicator */}
          <m.div
            initial={fadeInVariant.initial}
            animate={fadeInVariant.animate}
            transition={{
              duration: prefersReducedMotion ? 0.1 : 0.6,
              delay: prefersReducedMotion ? 0 : 1.2
            }}
            className="flex flex-col items-center"
            role="region"
            aria-label="Scroll indicator"
          >
            <p className="text-law-text-light mb-4 text-sm">
              {t("discoverServices")}
            </p>
            <m.div
              animate={scrollIndicatorVariant.animate}
              transition={{
                duration: prefersReducedMotion ? 0 : 2,
                repeat: prefersReducedMotion ? 0 : Infinity
              }}
              className="border-law-primary flex h-10 w-6 justify-center rounded-full border-2"
              aria-hidden="true"
            >
              <m.div
                animate={scrollIndicatorVariant.animate}
                transition={{
                  duration: prefersReducedMotion ? 0 : 2,
                  repeat: prefersReducedMotion ? 0 : Infinity
                }}
                className="bg-law-primary mt-2 h-3 w-1 rounded-full"
              />
            </m.div>
          </m.div>
        </m.div>
      </div>

      {/* Gradient Overlay */}
      <div
        className="bg-linear-to-t from-law-background/20 pointer-events-none absolute inset-0 z-10 via-transparent to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
