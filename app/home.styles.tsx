"use client";

import styled from "styled-components";

export const PageWrap = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 3.5rem 1.375rem 4.5rem;
`;

export const HeroGrid = styled.div`
  display: grid;
  gap: 3rem;
  align-items: start;

  @media (min-width: 900px) {
    grid-template-columns: 1.2fr 1fr;
    align-items: center;
  }
`;

export const Eyebrow = styled.p`
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: -0.01em;
  color: var(--text-secondary);
`;

export const Title = styled.h1`
  margin: 0 0 1rem;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 600;
  letter-spacing: -0.028em;
  line-height: 1.05;
  color: var(--text-primary);
`;

export const Subtitle = styled.p`
  margin: 0 0 1.75rem;
  font-size: 1.1875rem;
  font-weight: 400;
  line-height: 1.4211;
  letter-spacing: 0.011em;
  color: var(--text-secondary);
  max-width: 32rem;
`;

export const CtaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const PrimaryCta = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 1.375rem;
  border-radius: 980px;
  font-weight: 400;
  font-size: 1.0625rem;
  letter-spacing: -0.022em;
  color: var(--control-text);
  background: var(--control-bg);
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.88;
  }

  &:active {
    opacity: 0.75;
  }
`;

export const SecondaryCta = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 1.375rem;
  border-radius: 980px;
  font-weight: 400;
  font-size: 1.0625rem;
  letter-spacing: -0.022em;
  color: var(--control-secondary-text);
  border: 1px solid var(--control-secondary-border);
  text-decoration: none;
  background: var(--control-secondary-bg);
  transition:
    background 0.2s ease,
    opacity 0.2s ease;

  &:hover {
    background: var(--fill);
  }
`;

export const StatCard = styled.div`
  border-radius: 18px;
  padding: 2.25rem 1.75rem;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--bg-elevated);
  border: 1px solid var(--separator);
  box-shadow: var(--shadow-card);
`;

export const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.75rem 1.25rem;
  align-content: center;
`;

export const StatValue = styled.div`
  font-variant-numeric: tabular-nums;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.022em;
  line-height: 1.2;
  color: var(--text-primary);
`;

export const StatLabel = styled.div`
  margin-top: 0.25rem;
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 1.3;
  color: var(--text-secondary);
`;

export const SectionTitle = styled.h2`
  margin: 4rem 0 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.022em;
  line-height: 1.1667;
  color: var(--text-primary);
`;

export const SkillList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.75rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SkillItem = styled.li`
  padding: 1rem 1.125rem;
  border-radius: 12px;
  background: var(--bg-elevated);
  border: 1px solid var(--separator);
  color: var(--text-secondary);
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: -0.01em;
  box-shadow: var(--shadow-sm);

  strong {
    color: var(--text-primary);
    display: block;
    margin-bottom: 0.25rem;
    font-size: 1.0625rem;
    font-weight: 600;
    letter-spacing: -0.022em;
  }
`;
