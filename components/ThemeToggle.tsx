"use client";

import { SunIcon, MoonIcon } from "@/components/ThemeIcons";
import { useThemeMode } from "@/lib/ThemeModeContext";
import {
  DesktopThemeToggleWrap,
  ToggleButton,
} from "@/components/ThemeToggle.styles";

export function ThemeToggle() {
  const { mode, toggle } = useThemeMode();

  return (
    <DesktopThemeToggleWrap>
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
    </DesktopThemeToggleWrap>
  );
}
