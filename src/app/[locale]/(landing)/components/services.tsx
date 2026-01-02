"use client";

import { FileText, Handshake, MessageSquare, Scale } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

const serviceIcons = {
  documentation: FileText,
  contracts: Handshake,
  representation: Scale,
  consultation: MessageSquare
};

export default function Services() {
  const t = useTranslations("IndexPage.services");

  const services = [
    {
      key: "documentation",
      icon: serviceIcons.documentation,
      title: t("documentation.title"),
      description: t("documentation.description"),
      features: [
        t("documentation.features.0"),
        t("documentation.features.1"),
        t("documentation.features.2"),
        t("documentation.features.3")
      ]
    },
    {
      key: "contracts",
      icon: serviceIcons.contracts,
      title: t("contracts.title"),
      description: t("contracts.description"),
      features: [
        t("contracts.features.0"),
        t("contracts.features.1"),
        t("contracts.features.2"),
        t("contracts.features.3")
      ]
    },
    {
      key: "representation",
      icon: serviceIcons.representation,
      title: t("representation.title"),
      description: t("representation.description"),
      features: [
        t("representation.features.0"),
        t("representation.features.1"),
        t("representation.features.2"),
        t("representation.features.3")
      ]
    },
    {
      key: "consultation",
      icon: serviceIcons.consultation,
      title: t("consultation.title"),
      description: t("consultation.description"),
      features: [
        t("consultation.features.0"),
        t("consultation.features.1"),
        t("consultation.features.2"),
        t("consultation.features.3")
      ]
    }
  ];

  return (
    <section
      id="services"
      className="bg-law-background py-16 sm:py-20 lg:py-32"
      aria-labelledby="services-heading"
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
            id="services-heading"
            className="text-law-text mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl"
          >
            {t("title")}
          </h2>
          <p className="text-law-text-light mx-auto max-w-2xl text-base sm:text-lg md:text-xl">
            {t("subtitle")}
          </p>
        </m.div>

        {/* Services Grid */}
        <div
          className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-2 xl:gap-12"
          role="list"
          aria-label={t("title")}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <m.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                role="listitem"
              >
                <Card className="focus-within:ring-law-primary group h-full cursor-pointer border-0 bg-white shadow-lg transition-all duration-300 focus-within:ring-2 focus-within:ring-offset-2 hover:-translate-y-2 hover:shadow-xl">
                  <CardHeader className="pb-3 sm:pb-4">
                    <div className="mb-3 flex items-center gap-3 sm:mb-4 sm:gap-4">
                      <div
                        className="bg-law-primary/10 group-hover:bg-law-primary flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 sm:h-16 sm:w-16"
                        aria-hidden="true"
                      >
                        <IconComponent className="text-law-primary h-6 w-6 transition-colors duration-300 group-hover:text-white sm:h-8 sm:w-8" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-law-text text-lg font-bold sm:text-xl md:text-2xl">
                          {service.title}
                        </CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-law-text-light text-sm leading-relaxed sm:text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul
                      className="space-y-2 sm:space-y-3"
                      aria-label={`${service.title} features`}
                    >
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="text-law-text-light flex items-start gap-2 text-xs sm:gap-3 sm:text-sm"
                        >
                          <div
                            className="bg-law-primary/20 mt-1 h-1.5 w-1.5 shrink-0 rounded-full sm:mt-1 sm:h-2 sm:w-2"
                            aria-hidden="true"
                          />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
