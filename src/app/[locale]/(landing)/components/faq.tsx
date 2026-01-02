"use client";

import { ChevronDown, HelpCircle } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";
import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export default function FAQ() {
  const t = useTranslations("IndexPage.faq");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: t("faq1.question"),
      answer: t("faq1.answer")
    },
    {
      question: t("faq2.question"),
      answer: t("faq2.answer")
    },
    {
      question: t("faq3.question"),
      answer: t("faq3.answer")
    },
    {
      question: t("faq4.question"),
      answer: t("faq4.answer")
    },
    {
      question: t("faq5.question"),
      answer: t("faq5.answer")
    },
    {
      question: t("faq6.question"),
      answer: t("faq6.answer")
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-law-background py-16 sm:py-20 lg:py-32"
      aria-labelledby="faq-heading"
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
          <div className="bg-law-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full sm:mb-6 sm:h-20 sm:w-20">
            <HelpCircle className="text-law-primary h-8 w-8 sm:h-10 sm:w-10" />
          </div>
          <h2
            id="faq-heading"
            className="text-law-text mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl"
          >
            {t("title")}
          </h2>
          <p className="text-law-text-light mx-auto max-w-2xl text-base sm:text-lg md:text-xl">
            {t("subtitle")}
          </p>
        </m.div>

        {/* FAQ Grid */}
        <div className="mx-auto max-w-4xl">
          <div
            className="space-y-4 sm:space-y-6"
            role="list"
            aria-label={t("title")}
          >
            {faqs.map((faq, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                role="listitem"
              >
                <Card className="focus-within:ring-law-primary border-0 bg-white shadow-md transition-all duration-300 focus-within:ring-2 focus-within:ring-offset-2 hover:shadow-lg">
                  <CardHeader
                    className="cursor-pointer pb-3 sm:pb-4"
                    onClick={() => toggleFAQ(index)}
                    role="button"
                    tabIndex={0}
                    aria-expanded={openIndex === index}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleFAQ(index);
                      }
                    }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <CardTitle className="text-law-text text-start text-base font-bold sm:text-lg">
                        {faq.question}
                      </CardTitle>
                      <m.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="shrink-0"
                      >
                        <ChevronDown className="text-law-primary h-5 w-5 sm:h-6 sm:w-6" />
                      </m.div>
                    </div>
                  </CardHeader>
                  <m.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? "auto" : 0,
                      opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <CardContent className="pt-0">
                      <CardDescription className="text-law-text-light text-start text-sm leading-relaxed sm:text-base">
                        {faq.answer}
                      </CardDescription>
                    </CardContent>
                  </m.div>
                </Card>
              </m.div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center sm:mt-20"
        >
          <div className="bg-law-primary/5 rounded-2xl p-6 sm:p-8 md:p-12">
            <h3 className="text-law-text mb-4 text-xl font-bold sm:mb-6 sm:text-2xl md:text-3xl">
              {t("contactCta.title")}
            </h3>
            <p className="text-law-text-light mb-6 text-sm sm:mb-8 sm:text-base md:text-lg">
              {t("contactCta.description")}
            </p>
            <a
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-law-primary hover:bg-law-primary-dark focus:ring-law-primary inline-flex h-12 items-center justify-center gap-3 rounded-xl px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 sm:h-auto sm:px-8 sm:py-4 sm:text-lg"
              aria-label={t("contactCta.ariaLabel")}
            >
              {t("contactCta.button")}
            </a>
          </div>
        </m.div>
      </div>
    </section>
  );
}
