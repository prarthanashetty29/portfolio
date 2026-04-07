"use client";

import { useCallback, useLayoutEffect, useState } from "react";
import {
  applyTheme,
  getStoredTheme,
  type ThemeMode,
  resolveInitialTheme,
} from "@/lib/theme-storage";
import { ToggleButton } from "@/components/ThemeToggle.styles";

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden data-icon="sun">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden data-icon="moon">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>("light");

  useLayoutEffect(() => {
    const initial = resolveInitialTheme();
    applyTheme(initial);
    setMode(initial);

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (getStoredTheme() != null) return;
      const next = mq.matches ? "dark" : "light";
      applyTheme(next);
      setMode(next);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = useCallback(() => {
    const next: ThemeMode = mode === "light" ? "dark" : "light";
    applyTheme(next);
    setMode(next);
  }, [mode]);

  return (
    <ToggleButton
      type="button"
      onClick={toggle}
      aria-label={
        mode === "light" ? "Switch to dark mode" : "Switch to light mode"
      }
      title={mode === "light" ? "Dark mode" : "Light mode"}
    >
      {mode === "dark" ? <SunIcon /> : <MoonIcon />}
    </ToggleButton>
  );
}
