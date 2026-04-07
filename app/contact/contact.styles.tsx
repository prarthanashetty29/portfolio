"use client";

import styled from "styled-components";

export const PageWrap = styled.div`
  max-width: 640px;
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
  margin: 0 0 2.25rem;
  font-size: 1.1875rem;
  font-weight: 400;
  line-height: 1.4211;
  letter-spacing: 0.011em;
  color: var(--text-secondary);
  text-wrap: pretty;
`;

export const LinkStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ContactRow = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.125rem;
  border-radius: 14px;
  background: var(--bg-elevated);
  border: 1px solid var(--separator);
  box-shadow: var(--shadow-sm);
  text-decoration: none;
  color: var(--text-primary);
  transition:
    box-shadow 0.2s ease,
    transform 0.15s ease,
    border-color 0.2s ease;

  &:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-1px);
    border-color: var(--separator-opaque);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid var(--text-primary);
    outline-offset: 3px;
  }
`;

export const RowMain = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
  min-width: 0;
`;

export const RowLabel = styled.span`
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--text-tertiary);
`;

export const RowValue = styled.span`
  font-size: 1.0625rem;
  font-weight: 500;
  letter-spacing: -0.022em;
  color: var(--text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`;

export const RowChevron = styled.span`
  flex-shrink: 0;
  font-size: 1.125rem;
  font-weight: 300;
  color: var(--text-tertiary);
  line-height: 1;
`;

/* —— Contact page (theme-aware) —— */

export const BadgeRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
`;

export const StatusBadge = styled.div<{ $variant: "green" | "blue" }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 999px;
  padding: 4px 12px;
  color: ${({ $variant }) =>
    $variant === "green"
      ? "var(--contact-badge-green-fg)"
      : "var(--contact-badge-blue-fg)"};
  background: ${({ $variant }) =>
    $variant === "green"
      ? "var(--contact-badge-green-bg)"
      : "var(--contact-badge-blue-bg)"};
`;

export const StatusDot = styled.span<{ $variant: "green" | "blue" }>`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${({ $variant }) =>
    $variant === "green"
      ? "var(--contact-badge-green-dot)"
      : "var(--contact-badge-blue-dot)"};
`;

export const SectionLabelText = styled.p`
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-tertiary);
  margin: 0 0 10px;
`;

export const EmailCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: var(--bg-elevated);
  border: 1px solid var(--separator);
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: var(--shadow-sm);
`;

export const EmailIconWell = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: var(--contact-well-email-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--contact-well-email-icon);
`;

export const EmailBlock = styled.div`
  flex: 1;
  min-width: 0;
`;

export const EmailFieldLabel = styled.div`
  font-size: 11px;
  color: var(--text-tertiary);
  margin-bottom: 2px;
`;

export const EmailFieldValue = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
  word-break: break-all;
`;

export const CopyButton = styled.button`
  font-size: 12px;
  font-weight: 500;
  color: var(--contact-accent-btn-fg);
  background: var(--contact-accent-btn-bg);
  border: none;
  border-radius: 6px;
  padding: 5px 10px;
  cursor: pointer;
  flex-shrink: 0;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.88;
  }

  &:focus-visible {
    outline: 2px solid var(--text-primary);
    outline-offset: 2px;
  }
`;

export const ConnectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin-bottom: 2rem;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const ConnectCard = styled.a`
  background: var(--bg-elevated);
  border: 1px solid var(--separator);
  border-radius: 12px;
  padding: 14px 16px;
  text-decoration: none;
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: var(--shadow-sm);
  transition:
    box-shadow 0.2s ease,
    transform 0.15s ease,
    border-color 0.2s ease;

  &:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-1px);
    border-color: var(--separator-opaque);
  }

  &:focus-visible {
    outline: 2px solid var(--text-primary);
    outline-offset: 2px;
  }
`;

export const ConnectCardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ConnectIconWell = styled.div<{ $variant: "linkedin" | "github" }>`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: ${({ $variant }) =>
    $variant === "linkedin"
      ? "var(--contact-well-linkedin-bg)"
      : "var(--contact-well-github-bg)"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $variant }) =>
    $variant === "linkedin"
      ? "var(--contact-icon-linkedin)"
      : "var(--contact-icon-github)"};
`;

export const ConnectExternalMark = styled.span`
  font-size: 13px;
  color: var(--text-tertiary);
`;

export const ConnectMetaLabel = styled.div`
  font-size: 11px;
  color: var(--text-tertiary);
  margin-bottom: 2px;
`;

export const ConnectMetaValue = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-primary);
`;

export const QuickFactsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const QuickFact = styled.div`
  background: var(--fill);
  border: 1px solid var(--separator);
  border-radius: 8px;
  padding: 14px 16px;
`;

export const QuickFactLabel = styled.div`
  font-size: 11px;
  color: var(--text-tertiary);
  margin-bottom: 4px;
`;

export const QuickFactValue = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
`;
