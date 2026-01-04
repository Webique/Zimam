"use client";

import { Award, CheckCircle, Shield, Users } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

export default function About() {
  const t = useTranslations("IndexPage.about");

  const highlights = [
    {
      icon: Shield,
      title: t("highlights.legalPrevention.title"),
      description: t("highlights.legalPrevention.description")
    },
    {
      icon: Award,
      title: t("highlights.distinguishedExperience.title"),
      description: t("highlights.distinguishedExperience.description")
    },
    {
      icon: Users,
      title: t("highlights.deepMarketUnderstanding.title"),
      description: t("highlights.deepMarketUnderstanding.description")
    },
    {
      icon: CheckCircle,
      title: t("highlights.practicalSolutions.title"),
      description: t("highlights.practicalSolutions.description")
    }
  ];

  return (
    <section
      id="about"
      className="bg-law-accent py-16 sm:py-20 lg:py-32"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2
            id="about-heading"
            className="text-law-text mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl"
          >
            {t("title")}
          </h2>
        </m.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Left Column - Mission and Approach */}
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Professional Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <ExportedImage
                src="/images/about.jpeg"
                alt="Professional law office environment"
                width={1074}
                height={320}
                className="h-64 w-full object-cover sm:h-80"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
              <div className="bg-law-primary/90 absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="mb-2 text-xl font-bold sm:text-2xl">
                    {t("firmName")}
                  </h3>
                  {t("firmTagline") && (
                    <p className="text-sm opacity-90 sm:text-base">
                      {t("firmTagline")}
                    </p>
                  )}
                </div>
              </div>
            </div>
            {/* Mission */}
            <section aria-labelledby="mission-heading">
              <h3
                id="mission-heading"
                className="text-law-primary mb-4 text-xl font-bold sm:mb-6 sm:text-2xl md:text-3xl"
              >
                {t("mission")}
              </h3>
              <p className="text-law-text-light text-base leading-relaxed sm:text-lg">
                {t("missionText")}
              </p>
            </section>

            {/* Approach */}
            <section aria-labelledby="approach-heading">
              <h3
                id="approach-heading"
                className="text-law-primary mb-4 text-xl font-bold sm:mb-6 sm:text-2xl md:text-3xl"
              >
                {t("approach")}
              </h3>
              <p className="text-law-text-light text-base leading-relaxed sm:text-lg">
                {t("approachText")}
              </p>
            </section>

            {/* Why Choose Us */}
            {t("whyChooseUs") && (
              <section aria-labelledby="why-choose-heading">
                <h3
                  id="why-choose-heading"
                  className="text-law-primary mb-4 text-xl font-bold sm:mb-6 sm:text-2xl md:text-3xl"
                >
                  {t("whyChooseUs")}
                </h3>
                {t("whyChooseUsText") && (
                  <p className="text-law-text-light text-base leading-relaxed sm:text-lg">
                    {t("whyChooseUsText")}
                  </p>
                )}
              </section>
            )}
          </m.div>

          {/* Right Column - Highlights Grid */}
          <m.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-4 sm:grid-cols-2 sm:grid-rows-2 sm:gap-6"
            role="list"
            aria-label="Our key strengths"
          >
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;

              return (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  role="listitem"
                  className="h-48 sm:h-52"
                >
                  <Card className="focus-within:ring-law-primary group flex h-full flex-col gap-0 border-0 bg-white shadow-md transition-all duration-300 focus-within:ring-2 focus-within:ring-offset-2 hover:-translate-y-1 hover:shadow-lg">
                    <CardHeader className="pb-3 sm:pb-4">
                      <div
                        className="bg-law-primary/10 group-hover:bg-law-primary mb-3 flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300 sm:mb-4 sm:h-12 sm:w-12"
                        aria-hidden="true"
                      >
                        <IconComponent className="text-law-primary h-5 w-5 transition-colors duration-300 group-hover:text-white sm:h-6 sm:w-6" />
                      </div>
                      <CardTitle className="text-law-text text-base font-bold sm:text-lg">
                        {highlight.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 pb-4 pt-0">
                      <CardDescription className="text-law-text-light text-xs leading-relaxed sm:text-sm">
                        {highlight.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </m.div>
              );
            })}
          </m.div>
        </div>

        {/* Professional Values Section */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 sm:mt-20"
        >
          <div className="bg-law-primary/5 rounded-2xl p-6 sm:p-8 md:p-12">
            <div className="mx-auto max-w-4xl text-center">
              <h3 className="text-law-text mb-4 text-xl font-bold sm:mb-6 sm:text-2xl md:text-3xl">
                {t("philosophy.title")}
              </h3>
              {t("philosophy.description") && (
                <p className="text-law-text-light mb-6 text-sm leading-relaxed sm:mb-8 sm:text-base md:text-lg">
                  {t("philosophy.description")}
                </p>
              )}
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
