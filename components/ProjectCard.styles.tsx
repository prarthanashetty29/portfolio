"use client";

import styled from "styled-components";

export const Card = styled.article`
  border-radius: 18px;
  padding: 1.375rem 1.25rem 1.25rem;
  background: var(--bg-elevated);
  border: 1px solid var(--separator);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  box-shadow: var(--shadow-sm);
  transition:
    box-shadow 0.25s ease,
    transform 0.25s ease;

  &:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-1px);
  }
`;

export const CardTitle = styled.h2`
  margin: 0;
  font-size: 1.1875rem;
  font-weight: 600;
  letter-spacing: -0.022em;
  line-height: 1.21053;
  color: var(--text-primary);
`;

export const CardDesc = styled.p`
  margin: 0;
  flex: 1;
  font-size: 1.0625rem;
  font-weight: 400;
  line-height: 1.4211;
  letter-spacing: -0.022em;
  color: var(--text-secondary);
`;

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
`;

export const CardLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  align-self: flex-start;
  margin-top: 0.375rem;
  padding: 0.5rem 1rem 0.5rem 0.875rem;
  min-height: 40px;
  border-radius: 980px;
  font-size: 0.9375rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1;
  color: var(--control-text);
  background: var(--control-bg);
  text-decoration: none;
  border: 1px solid transparent;
  box-shadow: var(--shadow-sm);
  transition:
    opacity 0.2s ease,
    transform 0.15s ease,
    box-shadow 0.2s ease;

  svg {
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    opacity: 0.92;
  }

  &:hover {
    opacity: 0.92;
    box-shadow: var(--shadow-md);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    opacity: 1;
  }

  &:focus-visible {
    outline: 2px solid var(--text-primary);
    outline-offset: 3px;
  }
`;
