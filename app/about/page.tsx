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
    role: "Senior Data Analyst",
    meta: "Mar 2026 – Present · OnPoint Insights (Contract) · Boston, MA, USA",
    tagKeys: ["Microsoft Fabric", "Power BI", "Power Query", "DAX", "Medallion Architecture", "Dashboard Reporting"],
    bullets: [
      <>
        Supported a <strong>medallion architecture</strong> (Bronze, Silver, Gold) 
        in <strong>Microsoft Fabric</strong> for standardizing insurance & financial datasets for 5+ clients, 
        including financial and insurance claims datasets. Developed Silver & Gold layer mappings, 
        <strong>SQL</strong> validation scripts & <strong>Power BI semantic models</strong> supporting resource planning, financial 
        reporting accuracy, & data quality
      </>,
      <>
        Designed executive <strong>Power BI dashboards</strong> & structured reports by translating stakeholder 
        requirements into clear insights, usability improvements, & recommendations for cross-functional 
        stakeholders across Billing Transactions, Premium Billing, & Correction Audit reports
      </>,
    ],
  },
  {
    role: (
      <>
        MS Computer Science{" "}
        <em>(Big Data Engineering &amp; Business Analysisg)</em>
      </>
    ),
    meta: "Sep 2023 - Dec 2025 · Northeastern University · Boston, MA, USA · GPA: 3.84",
    tagKeys: ["SQL", "Power BI", "Tableau", "Alteryx", "Talend","Snowflake","Gen AI"],
    text: "Graduate coursework concentrated on distributed data systems, warehouse design, and large-scale ETL : including hands-on projects in SQL Server, Talend, and cloud-native pipelines.",
  },
  {
    role: "Data Analyst",
    meta: "Jan 2025 - Aug 2025 · Combined Jewish Philanthropies · Boston, MA, USA",
    tagKeys: ["SQL","Snowflake","CRM", "ETL", "MuleSoft", "Salesforce", "Power BI", "DAX", "Power Query",  "Python", "Dashboard Reporting"],
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
        Automated migration validation with deduplication checks, schema 
        conformance, and null checks across <strong>100,000+</strong> records;
        post-migration data quality issues down <strong>~35%</strong>.
      </>,
      <>
        Tuned high-volume Snowflake SQL and data models leveraging AI tools
        to cut average dashboard refresh time.
      </>,
    ],
  },
  {
    role: "Office Operations Analyst & Representative",
    meta: "Nov 2023 - Dec 2024 · Northeastern University · Boston, MA, USA",
    tagKeys: ["Excel", "VBA", "Compliance","Pivot Tables","Power Pivot"],
    bullets: [
      <>
        Analyzed course approval, registration, scheduling, and compliance data 
        using <strong>Advanced Excel, VBA, PivotTables, Power Pivot</strong>, and MS Access to improve 
        administrative reporting accuracy for 20+ users
      </>,
      <>
        Created shared trackers and Power Point summaries for structured reporting 
        templates across cross-functional academic and administrative teams.
      </>,
    ],
  },
  {
    role: "Custom Data Engineering Analyst",
    meta: "Jun 2021 - Jul 2023 · Accenture · Client: State Farm Insurance",
    tagKeys: ["SQL", "Splunk", "Root Cause Analysis", "Agile","Stakeholder Management","ServiceNow"],
    bullets: [
      <>
        Led cross-functional <strong>root cause identification</strong> and operational analysis of 
        production data discrepancies for claims, policy, & financial transaction data 
        using <strong>SQL</strong>, reducing incident resolution time by 15% & improving reliability 
        for business users
      </>,
      <>
        Hot-patched erroneous <strong>production data</strong> with real-time <strong>SQL</strong>, correcting 
        live data without a full deployment cycle.
      </>,
      <>
        Used Splunk logs and <strong>root cause analysis</strong>; improved error detection rate <strong>~20%</strong>.
      </>,
      <>
        Drove stakeholder alignment through <strong>agile</strong> ceremonies (daily standups,
        sprint reviews); maintained <strong>~95%</strong> resolution rate on
        production data incidents.
      </>,
      <>
        Conducted incident <strong>pattern analysis</strong> & RCA to identify repeat failure modes in
        claims workflows and improved resource allocation.
      </>,
    ],
  },
  {
    role: (
      <>
        Quality Assurance Intern <em>(SDLC Compliance)</em>
      </>
    ),
    meta: "Dec 2020 - Jun 2021 · CeX Webuy Entertainment",
    tagKeys: ["QMetry", "Quality", "Testing", "UAT"],
    bullets: [
      <>
        Executed UAT website testing for software releases across regional website 
        segments, validating functionality,documenting defects, and ensuring 
        alignment with SDLC release requirements
      </>,
      <>
        Developed <strong>30+</strong> QMetry test cases supporting test
        automation; reduced manual testing effort <strong>~25%</strong>{" "}
        and documented bugs to improve release quality.
      </>,
    ],
  },
  {
    role: "Bachelor of Engineering (BE), Computer Science",
    meta: "2017 - 2021 · Fr. Conceicao Rodrigues College of Engineering",
    text: "Activities: CRCE Formula Racing (marketing & web), Entrepreneurship Cell (tech head), drama club, Rotary Club.",
  },
];

export default function AboutPage() {
  return (
    <SiteLayout>
      <PageWrap>
        <HeadshotWrap>
          <Image
            src={HEADSHOT_SRC}
            alt="Anna Shetty"
            width={192}
            height={192}
            sizes="192px"
            priority
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </HeadshotWrap>
        <PageTitle>About Me</PageTitle>
        <Lead>
          4 years of experience turning raw data into reliable pipelines,
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
            Outside of work I stay close to what I care about: community and learning. 
            I volunteer with Startup Boston and signed up to help when the World Cup comes 
            to the city. I have also supported nonprofit and community initiatives 
            focused on education access, including volunteering in understaffed government 
            schools and helping organize marathons and fundraising campaigns for students 
            from underserved communities.
          </Body>
          <Body>
            I learn best by doing, so I keep taking hands-on workshops, including Microsoft &
            Fabric Analyst sessions, to stay current in the data space. At OnPoint Insights, 
            a Microsoft Partner, I now host Microsoft Dashboard in a Day (DIAD) workshops for
            fellow analysts and professionals, turning technical concepts into practical Power BI 
            sessions they can use. Conferences and certifications are part of that habit too; 
            last year I earned the Salesforce Data Architect certification.
          </Body>
          <Body>
            When I step away from the screen, I'm usually trying a new restaurant or testing a recipe at home! ^_^
          </Body>
        </Block>
      </PageWrap>
    </SiteLayout>
  );
}
