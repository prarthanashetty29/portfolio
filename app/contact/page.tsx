"use client";

import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import {
  BadgeRow,
  ConnectCard,
  ConnectCardTop,
  ConnectExternalMark,
  ConnectGrid,
  ConnectIconWell,
  ConnectMetaLabel,
  ConnectMetaValue,
  CopyButton,
  EmailBlock,
  EmailCard,
  EmailFieldLabel,
  EmailFieldValue,
  EmailIconWell,
  Lead,
  PageTitle,
  PageWrap,
  QuickFact,
  QuickFactLabel,
  QuickFactsGrid,
  QuickFactValue,
  SectionLabelText,
  StatusBadge,
  StatusDot,
} from "@/app/contact/contact.styles";

const links = [
  {
    label: "LinkedIn",
    value: "prarthanaganeshshetty",
    href: "https://www.linkedin.com/in/prarthanaganeshshetty",
    variant: "linkedin" as const,
    icon: (
      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "prarthanashetty29",
    href: "https://github.com/prarthanashetty29",
    variant: "github" as const,
    icon: (
      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
];

const quickFacts = [
  { label: "Location", value: "Boston, MA" },
  { label: "Experience", value: "3+ years" },
  { label: "Availability", value: "Immediate" },
];

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText("shetty.prar@northeastern.edu").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <SiteLayout>
      <PageWrap>
        <PageTitle>Contact</PageTitle>

        <BadgeRow>
          <StatusBadge $variant="green">
            <StatusDot $variant="green" />
            Open to work
          </StatusBadge>
          <StatusBadge $variant="blue">
            <StatusDot $variant="blue" />
            Open to relocation
          </StatusBadge>
        </BadgeRow>

        <Lead>
          Targeting Data Engineer, Data Analyst, and Analytics Engineer roles.
          Email and LinkedIn are the best ways to reach me.
        </Lead>

        <SectionLabelText>Email</SectionLabelText>
        <EmailCard>
          <EmailIconWell>
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m2 7 10 7 10-7" />
            </svg>
          </EmailIconWell>
          <EmailBlock>
            <EmailFieldLabel>Email</EmailFieldLabel>
            <EmailFieldValue>shetty.prar@northeastern.edu</EmailFieldValue>
          </EmailBlock>
          <CopyButton type="button" onClick={handleCopy}>
            {copied ? "Copied" : "Copy"}
          </CopyButton>
        </EmailCard>

        <SectionLabelText>Connect</SectionLabelText>
        <ConnectGrid>
          {links.map(({ label, value, href, variant, icon }) => (
            <ConnectCard
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ConnectCardTop>
                <ConnectIconWell $variant={variant}>{icon}</ConnectIconWell>
                <ConnectExternalMark aria-hidden>↗</ConnectExternalMark>
              </ConnectCardTop>
              <div>
                <ConnectMetaLabel>{label}</ConnectMetaLabel>
                <ConnectMetaValue>{value}</ConnectMetaValue>
              </div>
            </ConnectCard>
          ))}
        </ConnectGrid>

        <SectionLabelText>Quick facts</SectionLabelText>
        <QuickFactsGrid>
          {quickFacts.map(({ label, value }) => (
            <QuickFact key={label}>
              <QuickFactLabel>{label}</QuickFactLabel>
              <QuickFactValue>{value}</QuickFactValue>
            </QuickFact>
          ))}
        </QuickFactsGrid>
      </PageWrap>
    </SiteLayout>
  );
}
