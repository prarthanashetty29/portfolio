"use client";

import styled from "styled-components";

export const ToggleButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  color: var(--text-primary);
  background: var(--fill);
  transition:
    background 0.2s ease,
    transform 0.15s ease;

  &:hover {
    background: var(--fill-secondary);
  }

  &:active {
    transform: scale(0.96);
  }

  &:focus-visible {
    outline: 2px solid var(--text-primary);
    outline-offset: 2px;
  }

  svg {
    width: 18px;
    height: 18px;
  }

  svg[data-icon="sun"] {
    stroke: currentColor;
    fill: none;
    stroke-width: 1.75;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  svg[data-icon="moon"] {
    fill: currentColor;
    stroke: none;
  }
`;
