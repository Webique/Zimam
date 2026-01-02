"use client";

import { Quote, Star } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader
} from "@/components/ui/card";

export default function Testimonials() {
  const t = useTranslations("IndexPage.testimonials");

  const testimonials = [
    {
      name: t("testimonial1.name"),
      role: t("testimonial1.role"),
      rating: 5,
      text: t("testimonial1.text")
    },
    {
      name: t("testimonial2.name"),
      role: t("testimonial2.role"),
      rating: 5,
      text: t("testimonial2.text")
    },
    {
      name: t("testimonial3.name"),
      role: t("testimonial3.role"),
      rating: 5,
      text: t("testimonial3.text")
    }
  ];

  return (
    <section
      id="testimonials"
      className="bg-law-accent py-16 sm:py-20 lg:py-32"
      aria-labelledby="testimonials-heading"
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
            id="testimonials-heading"
            className="text-law-text mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl"
          >
            {t("title")}
          </h2>
          <p className="text-law-text-light mx-auto max-w-2xl text-base sm:text-lg md:text-xl">
            {t("subtitle")}
          </p>
        </m.div>

        {/* Testimonials Grid */}
        <div
          className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-12"
          role="list"
          aria-label={t("title")}
        >
          {testimonials.map((testimonial, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              role="listitem"
            >
              <Card className="focus-within:ring-law-primary group h-full border-0 bg-white shadow-lg transition-all duration-300 focus-within:ring-2 focus-within:ring-offset-2 hover:-translate-y-2 hover:shadow-xl">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="mb-4 flex items-center justify-between">
                    <Quote className="text-law-primary h-8 w-8 opacity-50" />
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="text-law-primary h-4 w-4 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-law-text-light text-sm leading-relaxed sm:text-base">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="border-law-primary/20 border-t pt-4">
                    <h4 className="text-law-text text-sm font-semibold sm:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-law-text-light text-xs sm:text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </m.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 sm:mt-20"
        >
          <div className="bg-law-primary/5 rounded-2xl p-6 sm:p-8 md:p-12">
            <div className="mx-auto max-w-4xl text-center">
              <h3 className="text-law-text mb-6 text-xl font-bold sm:mb-8 sm:text-2xl md:text-3xl">
                {t("trustSection.title")}
              </h3>
              <div
                className="grid gap-6 sm:gap-8 md:grid-cols-3"
                role="list"
                aria-label="Trust indicators"
              >
                <div className="text-center" role="listitem">
                  <div className="text-law-primary mb-2 text-3xl font-bold sm:mb-3 sm:text-4xl">
                    98%
                  </div>
                  <p className="text-law-text-light text-sm sm:text-base">
                    {t("trustSection.clientSatisfaction")}
                  </p>
                </div>
                <div className="text-center" role="listitem">
                  <div className="text-law-primary mb-2 text-3xl font-bold sm:mb-3 sm:text-4xl">
                    24/7
                  </div>
                  <p className="text-law-text-light text-sm sm:text-base">
                    {t("trustSection.continuousSupport")}
                  </p>
                </div>
                <div className="text-center" role="listitem">
                  <div className="text-law-primary mb-2 text-3xl font-bold sm:mb-3 sm:text-4xl">
                    100+
                  </div>
                  <p className="text-law-text-light text-sm sm:text-base">
                    {t("trustSection.successfulCases")}
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
