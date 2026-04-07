"use client";

import styled from "styled-components";

/** Mobile-only FAB-style theme control (emoji). Hidden at `md` and up. */
export const FloatingBubbleWrap = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    z-index: 60;
    right: max(1rem, env(safe-area-inset-right));
    bottom: max(1.25rem, env(safe-area-inset-bottom));
  }
`;

export const FloatingBubbleButton = styled.button`
  width: 52px;
  height: 52px;
  padding: 0;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--bg-elevated);
  color: var(--text-primary);
  border: 1px solid var(--separator);
  box-shadow:
    0 4px 14px rgba(0, 0, 0, 0.12),
    0 2px 6px rgba(0, 0, 0, 0.08);

  transition:
    transform 0.15s ease,
    box-shadow 0.2s ease;

  &:hover {
    box-shadow:
      0 6px 20px rgba(0, 0, 0, 0.14),
      0 3px 8px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(0.94);
  }

  &:focus-visible {
    outline: 2px solid var(--text-primary);
    outline-offset: 3px;
  }
`;
