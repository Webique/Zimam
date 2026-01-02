"use client";

import { Award, CheckCircle, Shield, Users } from "lucide-react";
import * as m from "motion/react-m";
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
      title: "الوقاية القانونية",
      description: "نركز على الحلول الاستباقية لحماية مصالحك"
    },
    {
      icon: Award,
      title: "خبرة متميزة",
      description: "فريق من المحامين المتخصصين ذوي الخبرة العالية"
    },
    {
      icon: Users,
      title: "فهم عميق للسوق",
      description: "معرفة شاملة بالقوانين المحلية والممارسات التجارية"
    },
    {
      icon: CheckCircle,
      title: "حلول عملية",
      description: "نقدم استشارات قانونية فعالة وقابلة للتطبيق"
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
            <section aria-labelledby="why-choose-heading">
              <h3
                id="why-choose-heading"
                className="text-law-primary mb-4 text-xl font-bold sm:mb-6 sm:text-2xl md:text-3xl"
              >
                {t("whyChooseUs")}
              </h3>
              <p className="text-law-text-light text-base leading-relaxed sm:text-lg">
                {t("whyChooseUsText")}
              </p>
            </section>
          </m.div>

          {/* Right Column - Highlights Grid */}
          <m.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-4 sm:grid-cols-2 sm:gap-6"
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
                >
                  <Card className="focus-within:ring-law-primary group h-full border-0 bg-white shadow-md transition-all duration-300 focus-within:ring-2 focus-within:ring-offset-2 hover:-translate-y-1 hover:shadow-lg">
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
                    <CardContent className="pt-0">
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
                فلسفتنا في العمل القانوني
              </h3>
              <p className="text-law-text-light mb-6 text-sm leading-relaxed sm:mb-8 sm:text-base md:text-lg">
                نؤمن بأن القانون ليس مجرد نصوص وقواعد، بل أداة لحماية الحقوق
                وتحقيق العدالة. نسعى لبناء علاقات طويلة الأمد مع عملائنا قائمة
                على الثقة والشفافية والنتائج المحققة.
              </p>
              <div
                className="grid gap-6 sm:gap-8 md:grid-cols-3"
                role="list"
                aria-label="Company statistics"
              >
                <div className="text-center" role="listitem">
                  <div className="text-law-primary mb-1 text-2xl font-bold sm:mb-2 sm:text-3xl">
                    15+
                  </div>
                  <p className="text-law-text-light text-xs sm:text-sm">
                    سنوات من الخبرة
                  </p>
                </div>
                <div className="text-center" role="listitem">
                  <div className="text-law-primary mb-1 text-2xl font-bold sm:mb-2 sm:text-3xl">
                    500+
                  </div>
                  <p className="text-law-text-light text-xs sm:text-sm">
                    عميل راضٍ
                  </p>
                </div>
                <div className="text-center" role="listitem">
                  <div className="text-law-primary mb-1 text-2xl font-bold sm:mb-2 sm:text-3xl">
                    95%
                  </div>
                  <p className="text-law-text-light text-xs sm:text-sm">
                    معدل نجاح القضايا
                  </p>
                </div>
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
