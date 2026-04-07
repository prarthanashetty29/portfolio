"use client";

import styled from "styled-components";

export const TagPillSurface = styled.span<{ $bg: string; $fg: string }>`
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  padding: 3px 10px;
  border-radius: 999px;
  background: ${({ $bg }) => $bg};
  color: ${({ $fg }) => $fg};
  white-space: nowrap;
  display: inline-block;
`;

export const SkillTagRow = styled.div<{
  $variant: "hero" | "timeline" | "card";
}>`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ $variant }) =>
    $variant === "timeline" || $variant === "card" ? "6px" : "0.5rem"};
  margin: ${({ $variant }) =>
    $variant === "timeline"
      ? "8px 0 6px"
      : $variant === "card"
        ? "0"
        : "1.75rem 0 0"};
`;

/** Same footprint as TagPillSurface; uses theme tokens for unknown labels. */
export const NeutralTagPill = styled.span`
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  padding: 3px 10px;
  border-radius: 999px;
  background: var(--fill);
  color: var(--text-secondary);
  white-space: nowrap;
  display: inline-block;
`;
