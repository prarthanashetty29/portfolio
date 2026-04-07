import type { Metadata } from "next";
import Script from "next/script";
import { StyledComponentsRegistry } from "@/lib/registry";
import { THEME_INIT_SCRIPT } from "@/lib/theme-init-script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Data Engineer & Analyst | Portfolio",
  description:
    "Portfolio showcasing data pipelines, analytics, and engineering work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
        />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
