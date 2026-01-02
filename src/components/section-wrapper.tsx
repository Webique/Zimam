"use client";

import * as m from "motion/react-m";
import { useRef } from "react";

import { useAccessibility } from "@/contexts/accessibility-context";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export default function SectionWrapper({
  children,
  className = "",
  id,
  delay = 0
}: SectionWrapperProps) {
  const ref = useRef(null);
  const { prefersReducedMotion } = useAccessibility();

  return (
    <m.section
      ref={ref}
      id={id}
      className={className}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: prefersReducedMotion ? 0.1 : 0.8,
        delay: prefersReducedMotion ? 0 : delay,
        ease: "easeOut"
      }}
    >
      {children}
    </m.section>
  );
}
