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
  "SQL",
  "Power BI",
  "Microsoft Excel",
  "Microsoft Fabric",
  "Snowflake",
  "Python",
  "Alteryx",
  "Salesforce",
  "Microsoft Dynamics 365",
  "Tableau",
  "Power Query",
  "MuleSoft",
  "AWS"
] as const satisfies readonly TagKey[];

const skills = [
  {
    title: "Product & Business Analytics",
    text: "Turning business questions into KPIs, segmentation, experiment analysis, performance metrics, and recommendations that stakeholders can act on.",
  },
  {
    title: "BI & Reporting",
    text: "Power BI, Tableau, and Advanced Excel : Building dashboards, DAX measures, reporting models, and executive-ready views that make performance easier to understand.",
  },
  {
    title: "Data Engineering & Modeling",
    text: "Microsoft Fabric, Snowflake, SQL, MuleSoft, Alteryx, and Talend : Building reporting-ready datasets, scalable ETL pipelines, dimensional models, and CRM migration workflows.",
  },
  {
    title: "Data Quality & Automation",
    text: "SQL, Python, and validation frameworks for reconciliation, schema checks, deduplication, process automation, and reliable downstream reporting.",
  },
];

export default function HomePage() {
  return (
    <SiteLayout>
      <PageWrap>
        <HeroGrid>
          <div>
            <Eyebrow>Data & Product Analyst · Product Manager · Business Analyst · Data Engineer</Eyebrow>
            <Title>Pipelines that hold. Dashboards teams trust.</Title>
            <Subtitle>
              4+ years across product analytics, business intelligence, data engineering,
              experimentation, and reporting across insurance, nonprofit, and operational teams.
              <br />
              I turn complex data into clear metrics, reliable reporting, and actionable insights.
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
            <StatLabel>years across data & product analytics</StatLabel>
          </div>
          <div>
            <StatValue>1M+</StatValue>
            <StatLabel>CRM records migrated & validated</StatLabel>
          </div>
          <div>
            <StatValue>128→8</StatValue>
            <StatLabel>weekly reporting hours reduced</StatLabel>
          </div>
          <div>
            <StatValue>95%</StatValue>
            <StatLabel>production issue resolution rate</StatLabel>
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
