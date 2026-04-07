import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Data engineering and analytics projects — pipelines, dimensional models, and dashboards.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
