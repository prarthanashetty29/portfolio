"use client";
import { SiteLayout } from "@/components/SiteLayout";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/components/ProjectCard";
import {
  Lead,
  PageTitle,
  PageWrap,
  ProjectGrid,
} from "@/app/projects/projects.styles";

const projects: Project[] = [
  {
    title: "TravelGenie — AI Travel Recommendation System",
    description:
      "End-to-end Gen AI pipeline — Airflow, Snowflake, dbt, Neo4j knowledge graph, and Pinecone vector search — routing natural language queries through a LangGraph agentic workflow with entity extraction and human-in-the-loop correction. Benchmarked 4 LLMs (Phi-3, Gemma2, Llama3.2, Qwen2) before selecting Phi-3 for entity extraction accuracy and latency.",
    tags: ["Airflow", "Snowflake", "dbt", "Neo4j", "LangGraph", "OpenAI", "Python"],
    href: "https://github.com/prarthanashetty29/TravelRecommendationSystem",
    linkLabel: "View on GitHub",
  },
  {
    title: "Multi City Traffic Collision Analytics",
    description:
      "Multi-city (NYC, Chicago & Austin) BI pipeline integrating ~2.9M collision records via 17 Talend jobs per city, with a Type 2 SCD dimensional model and bridge tables for many-to-many relationships. Delivered 12 Power BI dashboards covering hotspot maps, temporal trends, and fatality breakdowns by road user type.",
    tags: ["Talend", "SQL Server", "Power BI", "Tableau", "SCD Type 2", "Star Schema"],
    href: "https://github.com/prarthanashetty29/metro-crash-bi",
    linkLabel: "View on GitHub",
  },
  {
    title: "Food Safety Compliance Analytics",
    description:
      "Unified 740K+ food inspection records from two structurally incompatible city datasets — Alteryx profiling, Talend ETL, and a Kimball star schema with two fact tables and six dimensions in SQL Server. Surfaces compliance KPIs by facility type, zip code, violation code, and inspection outcome.",
    tags: ["Talend", "Alteryx", "SQL Server", "Star Schema", "ER/Studio", "T-SQL"],
    href: "https://github.com/prarthanashetty29/food-establishment-inspection",
    linkLabel: "View on GitHub",
  },
  {
    title: "IMDB Movie Analytics BI",
    description:
      "Data warehouse across 38M+ rows from IMDb, MovieLens (25M ratings), and Box Office Mojo — 19 parallelized Talend jobs, 27 dimensions, and 16 fact tables. Power BI and Tableau dashboards surface title rankings, people explorer, genre ratings, and franchise box office trends.",
    tags: ["Talend", "SQL Server", "Power BI", "Tableau", "Star Schema", "ER/Studio"],
    href: "https://github.com/prarthanashetty29/imdb-movie-analytics-bi",
    linkLabel: "View on GitHub",
  },
];

export default function ProjectsPage() {
  return (
    <SiteLayout>
      <PageWrap>
        <PageTitle>Projects</PageTitle>
        <Lead>
          End-to-end data engineering and analytics work — pipelines, dimensional models, and dashboards built on real datasets.
        </Lead>
        <ProjectGrid>
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </ProjectGrid>
      </PageWrap>
    </SiteLayout>
  );
}