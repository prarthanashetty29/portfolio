"use client";

import Link from "next/link";
import styled from "styled-components";

export const Shell = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--bg-page);
  color: var(--text-primary);
`;

export const HeaderBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid var(--chrome-border);
  background: var(--chrome-bg);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
`;

export const HeaderInner = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 0.75rem 1.375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.625rem;
    padding: 0.625rem max(1rem, env(safe-area-inset-left))
      0.5rem max(1rem, env(safe-area-inset-right));
  }
`;

export const HeaderEnd = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    width: 100%;
    min-width: 0;
  }
`;

export const Brand = styled(Link)`
  font-weight: 600;
  font-size: 1.0625rem;
  letter-spacing: -0.022em;
  color: var(--text-primary);
  text-decoration: none;
  min-width: 0;

  span {
    font-weight: 400;
    color: var(--text-secondary);
  }

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.25;

    span {
      display: none;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.125rem;

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    gap: 0.25rem;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior-x: contain;
    padding-bottom: 4px;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const NavLink = styled(Link)<{ $active?: boolean }>`
  padding: 0.4375rem 0.75rem;
  border-radius: 980px;
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.01em;
  color: ${({ $active }) =>
    $active ? "var(--text-primary)" : "var(--text-secondary)"};
  background: ${({ $active }) => ($active ? "var(--fill)" : "transparent")};
  text-decoration: none;
  transition:
    color 0.2s ease,
    background 0.2s ease;

  &:hover {
    color: var(--text-primary);
    background: var(--fill);
  }

  @media (max-width: 768px) {
    flex: 0 0 auto;
    padding: 0.4rem 0.65rem;
    font-size: 0.75rem;
    touch-action: manipulation;
  }
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
`;

export const FooterBar = styled.footer`
  border-top: 1px solid var(--separator);
  padding: 1.25rem 1.375rem;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: -0.01em;
  color: var(--text-tertiary);
`;
