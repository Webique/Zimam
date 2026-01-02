"use client";

import { useEffect, useState } from "react";

/**
 * Hook to detect if user is navigating with keyboard
 * Returns true when keyboard navigation is detected
 */
export function useKeyboardNavigation(): boolean {
  const [isKeyboardUser, setIsKeyboardUser] = useState(false);

  useEffect(() => {
    // Track keyboard usage
    const handleKeyDown = (event: KeyboardEvent) => {
      // Tab key indicates keyboard navigation
      if (event.key === "Tab") {
        setIsKeyboardUser(true);
      }
    };

    // Track mouse usage
    const handleMouseDown = () => {
      setIsKeyboardUser(false);
    };

    // Add event listeners
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleMouseDown);

    // Cleanup
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return isKeyboardUser;
}

/**
 * Hook for managing focus trap within a container
 * Useful for modals, dropdowns, and mobile menus
 */
export function useFocusTrap(isActive: boolean) {
  useEffect(() => {
    if (!isActive) return;

    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;

      if (event.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleTabKey);

    // Focus first element when trap becomes active
    firstElement?.focus();

    return () => {
      document.removeEventListener("keydown", handleTabKey);
    };
  }, [isActive]);
}
