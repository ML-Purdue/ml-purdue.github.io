# Editing projects

Every project is one markdown file in this folder. The filename becomes the URL:
`deepquery.md` → `/projects/deepquery`. The frontmatter is validated on build —
a typo fails `npm run build` rather than shipping broken.

## Archiving a project

Change two lines:

```yaml
status: archived # was: active
endTerm: 2026-spring # the last term it ran
```

Then delete the `intake:` line — it only applies to active projects.

The project disappears from `/projects`, appears on `/projects/archive` under
the year it ended, and its detail page keeps working at the same URL. Nothing is
deleted. To bring it back, reverse the change.

## Field reference

| Field             | Required    | Notes                                           |
| :---------------- | :---------- | :---------------------------------------------- |
| `name`            | yes         | Display name                                    |
| `desc`            | yes         | One-line TL;DR shown on cards                   |
| `status`          | yes         | `active` or `archived`                          |
| `intake`          | active only | `open`, `full`, or `tbd`                        |
| `startTerm`       | yes         | `2025-fall` — `spring`, `summer`, or `fall`     |
| `endTerm`         | past only   | Omit while a project is still running           |
| `dateApproximate` | no          | `true` renders "circa Fall 2023"                |
| `pm`              | no          | Project Manager, shown prominently              |
| `advisor`         | no          | Faculty or industry advisor, shown as secondary |
| `domain`          | no          | Tags — these become the filter chips            |
| `hoursPerWeek`    | no          | Free text, e.g. `"4-6"`                         |
| `openings`        | no          | Free text, e.g. `"2-3"`                         |
| `skills`          | no          | What a member needs coming in                   |
| `github`          | no          | Full URL                                        |
| `links`           | no          | `- { label: Demo, url: https://… }`             |
| `results`         | no          | Awards, patents, papers, usage numbers          |
| `recurring`       | no          | See below                                       |
| `editions`        | no          | See below                                       |
| `draft`           | no          | `true` hides the project entirely               |

Everything below the frontmatter is the full write-up, in plain markdown.

## Annual programs

For a competition the club re-enters every year with a new team (TE AI Cup),
don't create one file per year. Set `recurring: true` and list the cycles:

```yaml
recurring: true
editions:
  - { years: "2026", result: "Result pending" }
  - { years: "2025", result: "2nd National / 3rd Global" }
```

The card then reads "3 editions since Fall 2023" instead of a single date range,
and the detail page renders the year-by-year table.

## The staleness warning

If a project is still `status: active` but its `endTerm` has already passed,
`npm run build` prints a warning naming the project. It doesn't change anything
— archiving is always a deliberate edit — but it stops the projects page from
quietly advertising finished projects as current.

## Adding a term season

Only `spring`, `summer`, and `fall` are valid. If the club ever needs another,
add it to `SEASON_ORDER` in `src/lib/projects.ts` and the regex in
`src/content/config.ts`.
