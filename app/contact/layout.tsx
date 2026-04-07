import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Prarthana Shetty",
  description:
    "Get in touch for data engineering, analytics, and collaboration opportunities.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
