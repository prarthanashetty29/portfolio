"use client";

import { useThemeMode } from "@/lib/ThemeModeContext";
import {
  FloatingBubbleButton,
  FloatingBubbleWrap,
} from "@/components/FloatingThemeBubble.styles";

export function FloatingThemeBubble() {
  const { mode, toggle } = useThemeMode();

  return (
    <FloatingBubbleWrap>
      <FloatingBubbleButton
        type="button"
        onClick={toggle}
        aria-label={
          mode === "light" ? "Switch to dark mode" : "Switch to light mode"
        }
        title={mode === "light" ? "Dark mode" : "Light mode"}
      >
        <span aria-hidden>{mode === "light" ? "🌙" : "☀️"}</span>
      </FloatingBubbleButton>
    </FloatingBubbleWrap>
  );
}
