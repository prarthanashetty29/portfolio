import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Experience, education, and background in data engineering, analytics, and BI.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
