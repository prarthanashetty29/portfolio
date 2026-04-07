"use client";

import { usePathname } from "next/navigation";
import {
  Brand,
  FooterBar,
  HeaderBar,
  HeaderEnd,
  HeaderInner,
  Main,
  Nav,
  NavLink,
  Shell,
} from "@/components/layout.styles";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About me" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <Shell>
      <HeaderBar>
        <HeaderInner>
          <Brand href="/">
            Prarthana Shetty<span> — data portfolio</span>
          </Brand>
          <HeaderEnd>
            <Nav>
              {links.map(({ href, label }) => (
                <NavLink
                  key={href}
                  href={href}
                  $active={pathname === href}
                  prefetch
                >
                  {label}
                </NavLink>
              ))}
            </Nav>
            <ThemeToggle />
          </HeaderEnd>
        </HeaderInner>
      </HeaderBar>
      <Main>{children}</Main>
      <FooterBar>
        Built with ♥︎ by Prarthana Shetty
      </FooterBar>
    </Shell>
  );
}
