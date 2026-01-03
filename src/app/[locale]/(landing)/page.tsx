import type { PageProps } from "@/types";
import type { Locale } from "next-intl";

import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import About from "./components/about";
import Contact from "./components/contact";
import FAQ from "./components/faq";
import Hero from "./components/hero";
import Services from "./components/services";

export default function IndexPage({ params }: PageProps) {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);

  return (
    <main id="main-content" role="main">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <div className="relative">
        <div className="bg-linear-to-r via-law-primary/20 absolute inset-x-0 top-0 h-px from-transparent to-transparent" />
        <About />
      </div>

      {/* Services Section */}
      <div className="relative">
        <div className="bg-linear-to-r via-law-primary/20 absolute inset-x-0 top-0 h-px from-transparent to-transparent" />
        <Services />
      </div>

      {/* FAQ Section */}
      <div className="relative">
        <div className="bg-linear-to-r via-law-primary/20 absolute inset-x-0 top-0 h-px from-transparent to-transparent" />
        <FAQ />
      </div>

      {/* Contact Section */}
      <div className="relative">
        <div className="bg-linear-to-r via-law-primary/20 absolute inset-x-0 top-0 h-px from-transparent to-transparent" />
        <Contact />
      </div>
    </main>
  );
}
