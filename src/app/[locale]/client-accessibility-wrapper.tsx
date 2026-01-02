"use client";

import AccessibilityToolbar from "@/components/accessibility/accessibility-toolbar";
import SkipNavigation from "@/components/accessibility/skip-navigation";
import { AccessibilityProvider } from "@/contexts/accessibility-context";

interface ClientAccessibilityWrapperProps {
  children: React.ReactNode;
}

export default function ClientAccessibilityWrapper({
  children
}: ClientAccessibilityWrapperProps) {
  return (
    <AccessibilityProvider>
      <SkipNavigation />
      {children}
      <AccessibilityToolbar />
    </AccessibilityProvider>
  );
}
