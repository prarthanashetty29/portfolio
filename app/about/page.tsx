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
    role: "Sr. Product Data Analyst",
    meta: "Mar 2026 – Present · OnPoint Insights (Contract) · Boston, MA, USA",
    tagKeys: ["Microsoft Fabric", "Power BI", "Power Query", "DAX", "Medallion Architecture", "Dashboard Reporting"],
    bullets: [
      <>
        Built reporting models and <strong>Microsoft Fabric</strong> pipelines across
        billing, payment, correction, and cancellation workflows, standardizing data
        from <strong>9 insurance carrier vendors</strong> and reducing reporting
        turnaround from <strong>128 stakeholder-hours/week to under 8</strong>.

      </>,
      <>
        Transformed static reporting into parameterized <strong>Power BI</strong>
        dashboards using <strong>DAX</strong>, enabling self-service analysis across
        billing, payments, balances, and period comparisons and supporting retirement
        of <strong>12+ legacy reports</strong>.
      </>,
      <>
        Built customer segmentation analyses across B2B and B2C survey populations
        using <strong>Alteryx</strong>, identifying demographic and behavioral patterns
        and surfacing an estimated <strong>$550K+ revenue opportunity</strong>.
      </>,
    ],
  },
  {
    role: (
      <>
        MS Computer Science{" "}
        <em>(Big Data Engineering &amp; Business Analysis)</em>
      </>
    ),
    meta: "Sep 2023 - Dec 2025 · Northeastern University · Boston, MA, USA · GPA: 3.84",
    tagKeys: ["SQL", "Power BI", "Tableau", "Alteryx", "Talend","Snowflake","Gen AI"],
    text: "Graduate coursework and projects focused on data engineering, business analytics, database design, cloud data platforms, ETL, business intelligence, and applied AI."  },
  {
    role: "Product/Experimentation Data Analyst",
    meta: "Jan 2025 - Aug 2025 · Combined Jewish Philanthropies · Boston, MA, USA",
    tagKeys: ["SQL","Snowflake","CRM", "ETL", "MuleSoft", "Salesforce", "Power BI", "DAX", "Power Query",  "Python", "Dashboard Reporting"],
    bullets: [
      <>
        Defined a <strong>North Star KPI framework</strong> with 30+ supporting
        engagement, conversion, and ROI metrics, creating consistent measurement
        standards across stakeholder teams.
      </>,
      <>
        Ran <strong>15+ A/B experiments</strong> across messaging, audience, and
        campaign segments using significance testing, contributing to a
        <strong>12% improvement in engagement</strong> within 90 days.
      </>,
      <>
        Migrated <strong>1M+ CRM records</strong> from Blackbaud to Salesforce through
        MuleSoft and Snowflake workflows, with schema mapping, transformation, and
        reconciliation controls.
      </>,
      <>
        Automated SQL validation across <strong>1M+ records</strong> for duplicates,
        nulls, and schema errors while building metadata-driven processes for
        migration monitoring and investigation.
      </>,
    ],
  },
  {
    role: "Business Operations Analyst",
    meta: "Nov 2023 - Dec 2024 · Northeastern University · Boston, MA, USA",
    tagKeys: ["Excel", "VBA", "Compliance","Pivot Tables","Power Pivot"],
    bullets: [
      <>
        Analyzed course approval, registration, scheduling, and capacity-planning data
        using <strong>Excel, VBA, PivotTables, and Power Pivot</strong>, improving
        reporting visibility for 20+ stakeholders.
      </>,
      <>
        Automated shared trackers and recurring reporting workflows, reducing status
        consolidation from roughly <strong>2 hours to under 30 minutes</strong>.
      </>,
    ],
  },
  {
    role: "Product Data Engineering Analyst",
    meta: "Jun 2021 - Jul 2023 · Accenture · Client: State Farm Insurance",
    tagKeys: ["SQL", "Splunk", "Root Cause Analysis", "Agile","Stakeholder Management","ServiceNow"],
    bullets: [
      <>
        Analyzed P&C insurance claims, policy, and financial data using
        <strong> SQL and AWS Redshift</strong>, leading root-cause investigations
        while maintaining a <strong>95% issue-resolution rate</strong>.

      </>,
      <>
        Hot-patched erroneous <strong>production data</strong> with real-time <strong>SQL</strong>, correcting 
        live data without a full deployment cycle.
      </>,
      <>
        Standardized SLA, incident, and resolution KPIs through automated reporting,
        giving <strong>4 global analyst teams</strong> consistent visibility into
        operational and product performance.
      </>,
      <>
        Analyzed <strong>Splunk</strong> logs and recurring production failure
        patterns, improving early issue detection and helping business and technical
        teams prioritize data corrections and enhancements.
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
        segments, validating functionality, documenting defects, and ensuring 
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
           Data and product analytics professional with 4+ years of experience turning
           business questions and complex data into reliable reporting, product insights,
           data models, and scalable analytics solutions.
           <br />
           My work spans product analytics, experimentation, insurance operations,
           CRM migrations, data engineering, and business intelligence.
           <br />
           Currently open to Data/Product Analyst, Product Manager, Business Analyst, and  
           Data Engineer roles.
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
            I learn best by doing, so I keep taking hands-on workshops, including Microsoft 
            Fabric Analyst sessions, to stay current in the data space. At OnPoint Insights, 
            a Microsoft Partner, I now host Microsoft Dashboard in a Day (DIAD) workshops for
            fellow analysts and professionals, turning technical concepts into practical Power BI 
            sessions they can use. Conferences and certifications are part of that habit too; 
            I also earned the Salesforce Platform Data Architect certification along with an 
            AWS Cloud Practitioner Certificate.
          </Body>
          <Body>
            When I step away from the screen, I'm usually trying a new restaurant or testing a recipe at home! ^_^
          </Body>
        </Block>
      </PageWrap>
    </SiteLayout>
  );
}
