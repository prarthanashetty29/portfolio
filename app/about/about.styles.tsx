"use client";

import styled from "styled-components";

export const PageWrap = styled.div`
  max-width: 692px;
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

/** Circular headshot above the page title. */
export const HeadshotWrap = styled.div`
  width: 192px;
  height: 192px;
  margin: 0 auto 1.75rem;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid var(--separator);
  box-shadow: var(--shadow-sm);
  background: var(--fill);
  flex-shrink: 0;

  img {
    object-fit: cover;
  }
`;

export const Lead = styled.p`
  margin: 0 0 2rem;
  font-size: 1.1875rem;
  font-weight: 400;
  line-height: 1.4211;
  letter-spacing: 0.011em;
  color: var(--text-secondary);
`;

export const Block = styled.section`
  margin-bottom: 2.5rem;
`;

export const BlockTitle = styled.h2`
  margin: 0 0 0.75rem;
  font-size: 1.0625rem;
  font-weight: 600;
  letter-spacing: -0.022em;
  color: var(--text-primary);
`;

export const Body = styled.p`
  margin: 0 0 1rem;
  font-size: 1.0625rem;
  font-weight: 400;
  line-height: 1.47059;
  letter-spacing: -0.022em;
  color: var(--text-secondary);

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Timeline = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const TimelineItem = styled.li`
  padding-left: 1.125rem;
  border-left: 1px solid var(--separator);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: -4px;
    top: 0.4rem;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--text-tertiary);
    box-shadow: 0 0 0 3px var(--bg-page);
  }
`;

export const Role = styled.div`
  font-weight: 600;
  letter-spacing: -0.022em;
  color: var(--text-primary);
  font-size: 1.0625rem;

  em {
    font-style: italic;
    font-weight: 500;
    color: var(--text-secondary);
  }
`;

export const Meta = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: -0.01em;
  color: var(--text-tertiary);
  margin-top: 0.2rem;
`;

export const ItemBody = styled.p`
  margin: 0.5rem 0 0;
  font-size: 1.0625rem;
  font-weight: 400;
  line-height: 1.4211;
  letter-spacing: -0.022em;
  color: var(--text-secondary);

  strong {
    font-weight: 600;
    color: var(--text-primary);
    letter-spacing: -0.022em;
  }
`;

export const BulletList = styled.ul`
  margin: 0.5rem 0 0;
  padding: 0 0 0 1.125rem;
  list-style: disc;
  list-style-position: outside;
  font-size: 1.0625rem;
  font-weight: 400;
  line-height: 1.4211;
  letter-spacing: -0.022em;
  color: var(--text-secondary);
`;

export const BulletItem = styled.li`
  margin-top: 0.4rem;

  &:first-child {
    margin-top: 0.25rem;
  }

  strong {
    font-weight: 600;
    color: var(--text-primary);
    letter-spacing: -0.022em;
  }
`;
