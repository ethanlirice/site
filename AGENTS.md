## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## This project

- **Content lives in markdown, not in pages.** `src/content/projects/` and
  `src/content/research/` are glob-loaded collections; schemas are in
  `src/content.config.ts`. Adding an entry means adding a file — never edit a
  page to list new content.
- **The résumé has one source of truth**, `src/data/resume.ts`. The home page's
  NOW section derives from it. Don't hardcode résumé facts into a page.
- **Import `z` from `astro/zod`**, not from `astro:content` — the latter is
  deprecated in Astro 7 and removed in 8. Prefer `z.url()` over the deprecated
  `z.string().url()`.
- **Design tokens only.** Colors and type sizes come from the `@theme` block in
  `src/styles/global.css` (`text-micro`, `text-muted`, `border-rule`, …). Don't
  introduce raw hex values or arbitrary font sizes in components.
- `--color-rule` is a decorative hairline at ~1.2:1 contrast. Never use it for
  text or for anything a reader needs to perceive.
