# Contributing

This is a small static Astro site. Keep changes focused, preserve the content
schemas, and run the production build before publishing.

## Code conventions

- Use `snake_case` for project-defined variables, function names, and function
  parameters.
- Use `PascalCase` for TypeScript types, interfaces, and Astro components.
- Keep names required by Astro or JavaScript unchanged. Examples include
  Astro's `getStaticPaths` route hook, imported third-party APIs such as
  `getCollection`, and platform-owned property names such as `timeZone`.
- Prefer descriptive names over abbreviations and plural names for arrays and
  collections.
- Use lowercase, hyphen-separated names for Markdown content files because the
  filename becomes the public URL slug.

The snake-case rule applies to identifiers owned by this project. Renaming
framework hooks or external APIs would either break integration or obscure the
API being used.

## Architecture

- `src/pages/` defines the homepage and generated article/project routes.
- `src/components/` contains reusable presentation components.
- `src/layouts/` contains the shared document shell and long-form content
  layout.
- `src/data/portfolio.ts` contains structured homepage data.
- `src/content/` contains Markdown articles and projects.
- `src/content.config.ts` validates Markdown frontmatter.
- `src/utils/` contains shared project functions.
- `src/styles/global.css` contains global and Markdown-specific styles.
- `public/` contains files copied unchanged into the production build.

See [`docs/CONTENT.md`](docs/CONTENT.md) for the content-authoring workflow and
frontmatter reference.

## Validate a change

Install dependencies and run the production checks:

```bash
npm install
npm run build
```

The build runs Astro's TypeScript/content checks before generating the static
site. Review build warnings as well as errors; an empty content collection is
valid but means that its homepage section and generated routes will be absent.

For visual changes, also run `npm run dev` and inspect the homepage, one article,
and one project at desktop and mobile widths when those content types exist.

## Before publishing

- Confirm new external links and contact details.
- Include descriptive alternative text for images.
- Keep secrets and unpublished personal data out of the repository.
- Update the relevant documentation when the content schema, scripts, project
  structure, or conventions change.
