"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface AccessibilityContextType {
  prefersReducedMotion: boolean;
  isKeyboardUser: boolean;
  highContrast: boolean;
  fontSize: "normal" | "large" | "extra-large";
  setHighContrast: (enabled: boolean) => void;
  setFontSize: (size: "normal" | "large" | "extra-large") => void;
}

const AccessibilityContext = createContext<
  AccessibilityContextType | undefined
>(undefined);

export function AccessibilityProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  const [isKeyboardUser, setIsKeyboardUser] = useState(false);

  const [highContrast, setHighContrast] = useState(() => {
    if (typeof window !== "undefined") {
      const savedHighContrast =
        localStorage.getItem("accessibility-high-contrast") === "true";
      const systemHighContrast = window.matchMedia(
        "(prefers-contrast: high)"
      ).matches;
      return savedHighContrast || systemHighContrast;
    }
    return false;
  });

  const [fontSize, setFontSize] = useState<"normal" | "large" | "extra-large">(
    () => {
      if (typeof window !== "undefined") {
        const savedFontSize = localStorage.getItem(
          "accessibility-font-size"
        ) as "normal" | "large" | "extra-large";
        return savedFontSize || "normal";
      }
      return "normal";
    }
  );

  useEffect(() => {
    // Check for reduced motion preference changes
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleMotionChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleMotionChange);

    // Check for high contrast preference changes
    const contrastQuery = window.matchMedia("(prefers-contrast: high)");

    const handleContrastChange = (event: MediaQueryListEvent) => {
      setHighContrast(() => {
        const savedHighContrast =
          localStorage.getItem("accessibility-high-contrast") === "true";
        return savedHighContrast || event.matches;
      });
    };

    contrastQuery.addEventListener("change", handleContrastChange);

    // Keyboard navigation detection
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        setIsKeyboardUser(true);
      }
    };

    const handleMouseDown = () => {
      setIsKeyboardUser(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      mediaQuery.removeEventListener("change", handleMotionChange);
      contrastQuery.removeEventListener("change", handleContrastChange);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  // Apply accessibility classes to document
  useEffect(() => {
    const root = document.documentElement;

    // Apply reduced motion
    if (prefersReducedMotion) {
      root.classList.add("reduce-motion");
    } else {
      root.classList.remove("reduce-motion");
    }

    // Apply keyboard user class
    if (isKeyboardUser) {
      root.classList.add("keyboard-user");
    } else {
      root.classList.remove("keyboard-user");
    }

    // Apply high contrast
    if (highContrast) {
      root.classList.add("high-contrast");
    } else {
      root.classList.remove("high-contrast");
    }

    // Apply font size
    root.classList.remove("font-large", "font-extra-large");
    if (fontSize === "large") {
      root.classList.add("font-large");
    } else if (fontSize === "extra-large") {
      root.classList.add("font-extra-large");
    }
  }, [prefersReducedMotion, isKeyboardUser, highContrast, fontSize]);

  // Save preferences to localStorage
  useEffect(() => {
    localStorage.setItem("accessibility-font-size", fontSize);
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem(
      "accessibility-high-contrast",
      highContrast.toString()
    );
  }, [highContrast]);

  const value: AccessibilityContextType = {
    prefersReducedMotion,
    isKeyboardUser,
    highContrast,
    fontSize,
    setHighContrast,
    setFontSize
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error(
      "useAccessibility must be used within an AccessibilityProvider"
    );
  }
  return context;
}
