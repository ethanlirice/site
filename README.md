# ethanli.vercel.app

Personal site — Astro 7, Tailwind 4, static output, deployed on Vercel.

```bash
npm run dev      # dev server at localhost:4321
npm run build    # static build to dist/
npm run preview  # serve the built output
npx astro check  # typecheck .astro + .ts
```

## Adding a project

Drop a markdown file into `src/content/projects/`. The filename becomes the URL
slug. Three fields are required; everything else has a default.

```markdown
---
title: Thing I Built
blurb: One line, shown in the list and on the home page
year: '2026'
---

Body copy in markdown.
```

It appears at `/projects` and `/projects/thing-i-built` with no other edit.

Optional frontmatter:

| field      | default | effect                                        |
| ---------- | ------- | --------------------------------------------- |
| `featured` | `false` | surfaces it in "selected work" on the home page |
| `order`    | `0`     | higher sorts first; ties break on `year`      |
| `stack`    | `[]`    | rendered as `Python · PyTorch` on the detail page |
| `links`    | `[]`    | `[{ label: 'repo', href: 'https://…' }]`      |
| `draft`    | `false` | visible in `dev`, excluded from the build     |

Research entries work the same way in `src/content/research/`, and additionally
require `org`, `role`, and `dates`. Schemas for both live in
`src/content.config.ts` — a missing or misspelled field fails the build with the
offending file and field named, rather than rendering a broken page.

## Editing the résumé

`src/data/resume.ts` is the single source of truth. `/resume` renders all of it,
and the home page's NOW section is derived from `work`/`clubs` entries marked
`current: true` — so the two can't drift apart.

The PDF download link on `/resume` only renders if `public/resume.pdf` exists,
so the site never ships a dead link. Drop the file in and it appears.

## Design

Mono-technical: JetBrains Mono throughout, single 42rem column, hairline rules,
uppercase letterspaced section labels. Tokens are defined once in
`src/styles/global.css` under `@theme`; dark mode follows
`prefers-color-scheme` with no toggle. All text passes WCAG AA in both themes.

## Deploying

Pushing to `main` triggers a production deploy; any other branch or PR gets its
own preview URL. Vercel auto-detects Astro and serves `dist/` — no adapter and
no `vercel.json` needed, since `output` is `static`.

`site` in `astro.config.mjs` must match the domain actually being served; it
feeds canonical URLs, OG tags, and the sitemap. If the site later moves to a
custom domain, update it there in the same change as the DNS cutover.
