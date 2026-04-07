"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import type { TagKey } from "@/components/skillTagDefinitions";
import { SkillTagPillRow } from "@/components/SkillTagPills";
import { SiteLayout } from "@/components/SiteLayout";
import {
  Block,
  BlockTitle,
  Body,
  BulletItem,
  BulletList,
  HeadshotWrap,
  ItemBody,
  Lead,
  Meta,
  PageTitle,
  PageWrap,
  Role,
  Timeline,
  TimelineItem,
} from "@/app/about/about.styles";

const HEADSHOT_SRC = "/images/headshot.jpg";

type TimelineEntry = {
  role: ReactNode;
  meta: string;
  text?: ReactNode;
  bullets?: ReactNode[];
  tagKeys?: TagKey[];
};

/** Reverse chronological: newest → oldest (top to bottom). */
const timeline: TimelineEntry[] = [
  {
    role: "Data Analytics Engineer Intern",
    meta: "Mar 2026 – Present · OnPoint Insights (Contract) · Boston, MA, USA",
    tagKeys: ["Microsoft Fabric", "Power BI", "Medallion Architecture", "ETL"],
    bullets: [
      <>
        Designing a Medallion architecture (
        <strong>Bronze → Silver → Gold</strong>) in Microsoft Fabric to unify
        multi-client insurance datasets across ingestion, transformation, and
        analytics layers.
      </>,
      <>
        Authoring <strong>Silver</strong> and <strong>Gold</strong>-layer
        transforms: deduplication, schema standardization, and business-rule
        enforcement to produce analytics-ready tables.
      </>,
      <>
        Building dimensional Power BI data models and client-facing dashboards
        translated directly from stakeholder requirements.
      </>,
    ],
  },
  {
    role: (
      <>
        MS Information Systems{" "}
        <em>(Big Data &amp; Data Engineering)</em>
      </>
    ),
    meta: "Sep 2023 – Dec 2025 · Northeastern University · Boston, MA, USA · GPA: 3.84",
    tagKeys: ["SQL Server", "Talend"],
    text: "Graduate coursework concentrated on distributed data systems, warehouse design, and large-scale ETL — including hands-on projects in SQL Server, Talend, and cloud-native pipelines.",
  },
  {
    role: "Data Analyst Co-Op",
    meta: "Jan 2025 – Aug 2025 · Combined Jewish Philanthropies · Boston, MA, USA",
    tagKeys: ["Snowflake", "Power BI", "MuleSoft", "Alteryx", "Python"],
    bullets: [
      <>
        Built executive Power BI dashboards tracking{" "}
        <strong>30+</strong> campaign and donor-engagement KPIs; reduced manual
        reporting effort <strong>~65%</strong> and accelerated stakeholder
        access to live metrics.
      </>,
      <>
        Designed and executed a MuleSoft ETL pipeline migrating{" "}
        <strong>100,000+</strong> CRM records from Blackbaud to Salesforce with
        full schema mapping and field standardization; cut manual reconciliation{" "}
        <strong>~40%</strong>.
      </>,
      <>
        Architected a metadata-driven Snowflake migration framework using schema
        discovery and dynamic SQL with batched <strong>~50k-record</strong> runs;
        reduced new-dataset onboarding time <strong>~25%</strong>.
      </>,
      <>
        Automated post-migration validation — deduplication, schema conformance,
        and null checks — across <strong>100,000+</strong> records;
        post-migration data quality issues down <strong>~35%</strong>.
      </>,
      <>
        Tuned high-volume Snowflake SQL and data models to cut average dashboard
        refresh time <strong>~25%</strong>.
      </>,
    ],
  },
  {
    role: "Office Operations Analyst & Representative",
    meta: "Nov 2023 – Dec 2024 · Northeastern University · Boston, MA, USA",
    tagKeys: ["Excel", "VBA"],
    bullets: [
      <>
        Built Excel analytical models (PivotTables, VLOOKUP, VBA macros) for
        course registration data used in compliance reporting; supported{" "}
        <strong>20+</strong> internal users.
      </>,
      <>
        Maintained shared trackers and structured reporting templates for
        cross-functional academic and administrative teams.
      </>,
    ],
  },
  {
    role: "Custom Data Engineering Analyst",
    meta: "Jun 2021 – Jul 2023 · Accenture Solutions Pvt. Ltd. · Client: State Farm Insurance",
    tagKeys: ["SQL", "Splunk", "XML", "Agile"],
    bullets: [
      <>
        Diagnosed and resolved production data defects in claims and policy
        systems using SQL; cut incident resolution time <strong>~15%</strong> in
        a high-visibility, customer-facing context.
      </>,
      <>
        Hot-patched erroneous XML payloads in production with real-time SQL —
        correcting live data without a full deployment cycle.
      </>,
      <>
        Used Splunk for log analysis and root-cause investigation; improved error
        detection rate <strong>~20%</strong>.
      </>,
      <>
        Drove stakeholder alignment through agile ceremonies (daily standups,
        sprint reviews); maintained <strong>~95%</strong> resolution rate on
        production data incidents.
      </>,
      <>
        Conducted incident pattern analysis to identify repeat failure modes in
        claims workflows and inform resource allocation.
      </>,
    ],
  },
  {
    role: (
      <>
        Quality Assurance Intern <em>(SDLC Compliance)</em>
      </>
    ),
    meta: "Dec 2020 – Jun 2021 · CeX Webuy Entertainment Pvt. Ltd.",
    tagKeys: ["QMetry", "UAT"],
    bullets: [
      <>
        Executed UAT across regional e-commerce sites for new feature releases,
        validating against SDLC acceptance criteria.
      </>,
      <>
        Authored <strong>30+</strong> QMetry test cases supporting test
        automation coverage; reduced manual testing effort <strong>~25%</strong>{" "}
        and documented defects to improve release quality.
      </>,
    ],
  },
  {
    role: "Bachelor of Engineering (BE), Information Technology",
    meta: "2017 – 2021 · Fr. Conceicao Rodrigues College of Engineering",
    text: "Activities: CRCE Formula Racing (marketing & web), Entrepreneurship Cell (tech head), drama club, Rotaract Club.",
  },
];

export default function AboutPage() {
  return (
    <SiteLayout>
      <PageWrap>
        <HeadshotWrap>
          <Image
            src={HEADSHOT_SRC}
            alt="Prarthana Shetty"
            width={192}
            height={192}
            sizes="192px"
            priority
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </HeadshotWrap>
        <PageTitle>About Me</PageTitle>
        <Lead>
          3+ years of experience turning raw data into reliable pipelines,
          models, and dashboards across industries, team sizes, and tech stacks.
          <br />
          I care about what happens after launch: validation, documentation, and
          metrics that hold up over time.
          <br />
          Currently open to Data Engineer, Data Analyst, and Analytics Engineer
          roles.
        </Lead>

        <Block>
          <BlockTitle>Experience & education</BlockTitle>
          <Timeline>
            {timeline.map((item) => (
              <TimelineItem key={item.meta}>
                <Role>{item.role}</Role>
                <Meta>{item.meta}</Meta>
                {item.tagKeys?.length ? (
                  <SkillTagPillRow tags={item.tagKeys} variant="timeline" />
                ) : null}
                {item.text ? <ItemBody>{item.text}</ItemBody> : null}
                {item.bullets?.length ? (
                  <BulletList>
                    {item.bullets.map((line, i) => (
                      <BulletItem key={i}>{line}</BulletItem>
                    ))}
                  </BulletList>
                ) : null}
              </TimelineItem>
            ))}
          </Timeline>
        </Block>

        <Block>
          <BlockTitle>Outside of work</BlockTitle>
          <Body>
            Outside of work I stay close to what I care about: community and
            learning. I volunteer with Startup Boston and signed up to help when
            the World Cup comes to the city.
          </Body>
          <Body>
            I learn best by doing, so I keep taking hands-on workshops—recently
            Microsoft&apos;s Dashboard in a Day and a Fabric Analyst session—to
            stay current in the data space. Conferences and certifications are
            part of that habit too; last year I earned the Salesforce Data
            Architect certification.
          </Body>
          <Body>
            When I step away from the screen, I&apos;m usually trying a new
            restaurant or testing a recipe at home.
          </Body>
        </Block>
      </PageWrap>
    </SiteLayout>
  );
}