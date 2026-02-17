"use client";

import { MapPin, MessageCircle, Phone } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import InstagramIcon from "@/assets/icons/instagram.svg";
import SnapchatIcon from "@/assets/icons/snapchat.svg";
import TikTokIcon from "@/assets/icons/tiktok.svg";
import WhatsAppIcon from "@/assets/icons/whatsapp.svg";
import TwitterIcon from "@/assets/icons/x.svg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { siteConfig } from "@/config/site";

const contactMethods = [
  {
    key: "whatsapp" as const,
    icon: WhatsAppIcon,
    href: siteConfig.links.whatsapp,
    displayValue: siteConfig.support.phone,
    iconComponent: Phone
  },
  {
    key: "instagram" as const,
    icon: InstagramIcon,
    href: siteConfig.links.instagram,
    displayValue: "@zimam_legal",
    iconComponent: MessageCircle
  },
  {
    key: "snapchat" as const,
    icon: SnapchatIcon,
    href: siteConfig.links.snapchat,
    displayValue: "zimam_905",
    iconComponent: MessageCircle
  },
  {
    key: "twitter" as const,
    icon: TwitterIcon,
    href: siteConfig.links.twitter,
    displayValue: "@zimam_legal",
    iconComponent: MessageCircle
  },
  {
    key: "tiktok" as const,
    icon: TikTokIcon,
    href: siteConfig.links.tiktok,
    displayValue: "@zimam_legal",
    iconComponent: MessageCircle
  }
];

export default function Contact() {
  const t = useTranslations("IndexPage.contact");

  return (
    <section
      id="contact"
      className="bg-law-background-alt py-16 sm:py-20 lg:py-32"
      aria-labelledby="contact-heading"
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
            id="contact-heading"
            className="text-law-text mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl"
          >
            {t("title")}
          </h2>
          {t("subtitle") && (
            <p className="text-law-text-light mx-auto max-w-2xl text-base sm:text-lg md:text-xl">
              {t("subtitle")}
            </p>
          )}
        </m.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Contact Methods */}
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-law-text mb-6 text-xl font-bold sm:mb-8 sm:text-2xl">
              {t("contactMethods")}
            </h3>

            <div
              className="space-y-4 sm:space-y-6"
              role="list"
              aria-label={t("contactMethods")}
            >
              {/* Contact Methods */}
              {contactMethods.map((method, index) => {
                const SocialIcon = method.icon;

                return (
                  <m.div
                    key={method.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    role="listitem"
                  >
                    <a
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                      aria-label={`${t("getInTouch")} ${t(method.key)}`}
                    >
                      <Card className="focus-within:ring-law-primary group cursor-pointer border-0 bg-white shadow-md transition-all duration-300 focus-within:ring-2 focus-within:ring-offset-2 hover:-translate-y-1 hover:shadow-lg">
                        <CardHeader className="pb-3 sm:pb-4">
                          <div className="flex items-center gap-3 sm:gap-4">
                            <div
                              className="bg-law-primary/10 group-hover:bg-law-primary flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 sm:h-14 sm:w-14"
                              aria-hidden="true"
                            >
                              <SocialIcon className="text-law-primary h-6 w-6 transition-colors duration-300 group-hover:text-white sm:h-7 sm:w-7" />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-law-text text-lg font-bold sm:text-xl">
                                {t(method.key)}
                              </CardTitle>
                              <CardDescription className="text-law-text-light text-sm sm:text-base">
                                {method.displayValue}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    </a>
                  </m.div>
                );
              })}
            </div>
          </m.div>

          {/* Location Information */}
          <m.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-law-text mb-6 text-xl font-bold sm:mb-8 sm:text-2xl">
              {t("location")}
            </h3>

            <Card className="border-0 bg-white shadow-md">
              <CardHeader className="pb-4 sm:pb-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div
                    className="bg-law-primary/10 flex h-12 w-12 items-center justify-center rounded-xl sm:h-14 sm:w-14"
                    aria-hidden="true"
                  >
                    <MapPin className="text-law-primary h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-law-text text-lg font-bold sm:text-xl">
                      {t("location")}
                    </CardTitle>
                    <CardDescription className="text-law-text-light text-sm sm:text-base">
                      {t("locationText")}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="bg-law-primary/5 rounded-lg p-4 sm:p-6">
                  <div className="text-center">
                    <h4 className="text-law-text mb-2 text-base font-semibold sm:text-lg">
                      {t("firmName")}
                    </h4>
                    <p className="text-law-text-light mb-3 text-sm sm:mb-4 sm:text-base">
                      {t("locationText")}
                    </p>
                    <div className="text-law-primary text-xs font-medium sm:text-sm">
                      {t("country")}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 sm:mt-8"
            >
              <div className="bg-law-primary/10 rounded-2xl p-6 text-center sm:p-8">
                {t("readyToServe.title") && (
                  <h4 className="text-law-text mb-3 text-lg font-bold sm:mb-4 sm:text-xl">
                    {t("readyToServe.title")}
                  </h4>
                )}
                {t("readyToServe.description") && (
                  <p className="text-law-text-light mb-4 text-sm sm:mb-6 sm:text-base">
                    {t("readyToServe.description")}
                  </p>
                )}
                <a
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-law-primary hover:bg-law-primary-dark focus:ring-law-primary inline-flex h-12 w-full items-center justify-center gap-3 rounded-xl px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 sm:h-auto sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
                  aria-label={t("readyToServe.ariaLabel")}
                >
                  <WhatsAppIcon
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    aria-hidden="true"
                  />
                  {t("readyToServe.button")}
                </a>
              </div>
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
