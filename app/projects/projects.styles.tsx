"use client";

import styled from "styled-components";

export const PageWrap = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 3.5rem 1.375rem 4.5rem;
`;

export const PageTitle = styled.h1`
  margin: 0 0 0.5rem;
  font-size: clamp(2.25rem, 4vw, 2.75rem);
  font-weight: 600;
  letter-spacing: -0.028em;
  line-height: 1.07;
  color: var(--text-primary);
`;

export const Lead = styled.p`
  margin: 0 0 2.5rem;
  font-size: 1.1875rem;
  font-weight: 400;
  line-height: 1.4211;
  letter-spacing: 0.011em;
  color: var(--text-secondary);
  max-width: 40rem;
`;

export const ProjectGrid = styled.div`
  display: grid;
  gap: 1.25rem;

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
