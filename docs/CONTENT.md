# Publishing articles and projects

The site uses Astro content collections for long-form writing. Every Markdown file contains its listing metadata in frontmatter, so there is no separate index to maintain.

## Add an article

Create `src/content/articles/my-new-article.md`:

```markdown
---
title: My new article
summary: A one- or two-sentence description shown on the homepage.
date: 2026-07-03
tags:
  - Research
  - Mobility
---

## Introduction

Write the article here.
```

Astro will add it to the **Writing** section and generate:

```text
/articles/my-new-article/
```

## Add a project

Create `src/content/projects/project-name.md`:

```markdown
---
title: Project name
summary: What the project does and why it matters.
date: 2026-07-03
tags:
  - Python
  - Data
links:
  - label: Source code
    url: https://github.com/example/project
  - label: Live demo
    url: https://example.com
---

## Overview

Describe the problem, approach, outcomes, and lessons learned.
```

Astro will add it to **Projects** and generate:

```text
/projects/project-name/
```

## Frontmatter reference

| Field | Required | Description |
| --- | --- | --- |
| `title` | Yes | Page heading and browser title |
| `summary` | Yes | Homepage card and search/social description |
| `date` | Yes | Publication date in `YYYY-MM-DD` format |
| `updated` | No | Most recent update date |
| `tags` | No | Short list of topics; defaults to an empty list |
| `draft` | No | Set to `true` to exclude the entry from builds |
| `links` | Projects only | External links with `label` and valid `url` fields |

The schemas in `src/content.config.ts` validate these fields during development and production builds.

## Markdown support

Astro supports standard Markdown features, including:

- headings and paragraphs;
- bold and italic text;
- ordered and unordered lists;
- links and images;
- blockquotes and horizontal rules;
- fenced code blocks with syntax highlighting; and
- tables and raw HTML.

## Images and downloads

Put files that should be copied unchanged into `public/`, for example:

```text
public/images/articles/route-map.webp
public/downloads/report.pdf
```

Reference them with root-relative URLs:

```markdown
![Map of the evaluated routes](/images/articles/route-map.webp)

[Download the report](/downloads/report.pdf)
```

Always include descriptive alternative text and compress large images before committing them.

## Content conventions

- Use a unique, lowercase, hyphen-separated filename; it becomes the URL slug.
- Keep summaries concise enough for a homepage card.
- Prefer two to four focused tags.
- Keep dates in ISO format so sorting remains predictable.
- Use `draft: true` for work that should not be published yet.
- Avoid renaming a file after sharing its URL unless a redirect is added.

## Preview and validate

Start the development server:

```bash
npm run dev
```

Before publishing, run the same validation and build used in deployment:

```bash
npm run build
```

The build fails if frontmatter does not match the collection schema or an Astro/TypeScript error is detected.
