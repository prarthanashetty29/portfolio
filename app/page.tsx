"use client";
import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import {
  CtaRow,
  Eyebrow,
  HeroGrid,
  PageWrap,
  PrimaryCta,
  SecondaryCta,
  SectionTitle,
  SkillItem,
  SkillList,
  StatCard,
  StatGrid,
  StatLabel,
  StatValue,
  Subtitle,
  Title,
} from "@/app/home.styles";
import { SkillTagPillRow } from "@/components/SkillTagPills";
import type { TagKey } from "@/components/skillTagDefinitions";

const HOME_SKILL_TAGS = [
  "SQL"
  "Microsoft Excel"
  "Power BI",
  "Tableau",
  "Snowflake",
  "Salesforce",
  "MuleSoft",
  "Python",
  "Microsoft Fabric",
  "Alteryx",
  "Talend",
  "AWS"
] as const satisfies readonly TagKey[];

const skills = [
  {
    title: "ETL & Pipeline Engineering",
    text: "MuleSoft, Talend, Alteryx, Airflow : End-to-end pipeline design with schema mapping, batched ingestion, and validation built in from day one.",
  },
  {
    title: "Data Warehousing & Modeling",
    text: "Snowflake, Microsoft Fabric, SQL Server : Medallion architecture, star schema dimensional modeling, and migration frameworks designed for scale.",
  },
  {
    title: "Analytics & Reporting",
    text: "Power BI, Tableau, and Advanced Excel : Translating business requirements into dimensional models, DAX measures, Power Pivot, VBA-enabled reports, and executive dashboards that drive decisions.",
  },
  {
    title: "Data Quality & Automation",
    text: "SQL and Python for validation pipelines, deduplication, schema conformance, and automated workflows so issues surface before stakeholders do.",
  },
];

export default function HomePage() {
  return (
    <SiteLayout>
      <PageWrap>
        <HeroGrid>
          <div>
            <Eyebrow>Data Engineer · Data Analyst · Analytics Engineer</Eyebrow>
            <Title>Pipelines that hold. Dashboards teams trust.</Title>
            <Subtitle>
              4 years building reporting solutions, data pipelines, warehouses, and reporting
              solutions across insurance, finance, operations and enterprise.
              <br />
              From raw data ingestion to the executive dashboard.
            </Subtitle>
            <CtaRow>
              <PrimaryCta as={Link} href="/projects">
                View projects
              </PrimaryCta>
              <SecondaryCta as={Link} href="/about">
                About me
              </SecondaryCta>
            </CtaRow>
            <SkillTagPillRow tags={HOME_SKILL_TAGS} />
          </div>
          <StatCard>
          <StatGrid>
          <div>
            <StatValue>4</StatValue>
            <StatLabel>years in data engineering & analytics</StatLabel>
          </div>
          <div>
            <StatValue>1M+</StatValue>
            <StatLabel>records migrated & validated</StatLabel>
          </div>
          <div>
            <StatValue>65%</StatValue>
            <StatLabel>reduction in manual reporting</StatLabel>
          </div>
          <div>
            <StatValue>2</StatValue>
            <StatLabel>cloud certifications</StatLabel>
          </div>
        </StatGrid>
          </StatCard>
        </HeroGrid>

        <SectionTitle>How I help teams</SectionTitle>
        <SkillList>
          {skills.map((s) => (
            <SkillItem key={s.title}>
              <strong>{s.title}</strong>
              {s.text}
            </SkillItem>
          ))}
        </SkillList>
      </PageWrap>
    </SiteLayout>
  );
}
