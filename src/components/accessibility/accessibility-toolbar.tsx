"use client";

import { Minus, Plus, Settings } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { useAccessibility } from "@/contexts/accessibility-context";

export default function AccessibilityToolbar() {
  const t = useTranslations("Accessibility");
  const [isOpen, setIsOpen] = useState(false);
  const { fontSize, highContrast, setFontSize, setHighContrast } =
    useAccessibility();

  const increaseFontSize = () => {
    if (fontSize === "normal") setFontSize("large");
    else if (fontSize === "large") setFontSize("extra-large");
  };

  const decreaseFontSize = () => {
    if (fontSize === "extra-large") setFontSize("large");
    else if (fontSize === "large") setFontSize("normal");
  };

  return (
    <div className="fixed left-4 top-1/2 z-50 -translate-y-1/2">
      {/* Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-law-primary hover:bg-law-primary-dark mb-2 h-12 w-12 rounded-full p-0 text-white shadow-lg"
        aria-label={t("toggleAccessibilityMenu")}
        aria-expanded={isOpen}
      >
        <Settings className="h-5 w-5" />
      </Button>

      {/* Accessibility Panel */}
      {isOpen && (
        <Card className="w-64 shadow-xl">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">
              {t("accessibilityOptions")}
            </CardTitle>
            <CardDescription className="text-sm">
              {t("accessibilityDescription")}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Font Size Controls */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                {t("fontSize")}
              </label>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={decreaseFontSize}
                  disabled={fontSize === "normal"}
                  aria-label={t("decreaseFontSize")}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="flex-1 text-center text-sm">
                  {t(`fontSizes.${fontSize}`)}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={increaseFontSize}
                  disabled={fontSize === "extra-large"}
                  aria-label={t("increaseFontSize")}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* High Contrast Toggle */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                {t("highContrast")}
              </label>
              <Button
                variant={highContrast ? "default" : "outline"}
                size="sm"
                onClick={() => setHighContrast(!highContrast)}
                className="w-full"
                aria-pressed={highContrast}
              >
                {highContrast ? t("disable") : t("enable")}
              </Button>
            </div>

            {/* Motion Preference Info */}
            <div>
              <p className="text-muted-foreground text-xs">
                {t("motionPreferenceInfo")}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
