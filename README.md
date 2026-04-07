# Portfolio — Data engineering & analytics

Personal portfolio site built with **Next.js 14** (App Router), **TypeScript**, and **styled-components**. It highlights experience, projects, and contact information with a neutral, Apple-inspired layout and **light / dark mode**.

## Tech stack

- [Next.js](https://nextjs.org/) 14 · React 18
- TypeScript
- [styled-components](https://styled-components.com/) v6 (with SSR registry)
- System fonts and CSS variables for theming (`app/globals.css`)

## Pages

| Route        | Purpose                                      |
| ------------ | -------------------------------------------- |
| `/`          | Home — hero, skill tags, stat card, CTAs   |
| `/about`     | Bio, timeline (experience & education)       |
| `/projects`  | Project cards with links and stack tags      |
| `/contact`   | Email, social links, quick facts             |

## Scripts

```bash
npm install    # dependencies
npm run dev    # http://localhost:3000
npm run build  # production build
npm run start  # run production server
npm run lint   # ESLint (Next.js config)
```

## Project layout (high level)

- `app/` — routes, `layout.tsx`, `globals.css`, per-route `*.styles.tsx` where used
- `components/` — shared UI (`SiteLayout`, skill tag pills, `ProjectCard`, theme toggle, etc.)
- `lib/` — styled-components registry, theme init script / storage
- `public/images/` — static assets (e.g. `headshot.jpg` for the About page)
- `assets/` — optional source assets; public URLs use files under `public/`

## Customization

- **Theme**: Light/dark uses `data-theme` on `<html>` and `localStorage` key `portfolio-theme`; early script in `app/layout.tsx` reduces flash.
- **About headshot**: Served from **`/images/headshot.jpg`** (`public/images/headshot.jpg`).
- **Contact**: Update email, links, and quick facts in `app/contact/page.tsx`.
- **Skill / stack pill colors**: Central map in `components/skillTagDefinitions.ts`; use `SkillTagPill` / `ProjectSkillTag` / `SkillTagPillRow` on pages.
- **Metadata**: Root `app/layout.tsx` and route-level `layout.tsx` files (e.g. `app/contact/layout.tsx`).

## Requirements

- Node.js 18+ recommended (aligned with Next.js 14)

## License

See `LICENSE` in the repository root.
