import type { CollectionEntry } from "astro:content";

export type Project = CollectionEntry<"projects">;

/**
 * Card labels for the intake indicator. Kept in one place so the wording can be
 * changed without touching any page markup.
 */
export const INTAKE_LABELS = {
  open: "Applications Open",
  full: "Team Full",
  tbd: "Applications not yet open",
} as const;

export type Intake = keyof typeof INTAKE_LABELS;

/** PM application form, linked wherever a project's PM slot is vacant. */
export const PM_APPLICATION_URL = "https://forms.gle/wmLvLUsKhG379uEH7";

const SEASON_ORDER = { spring: 0, summer: 1, fall: 2 } as const;
type Season = keyof typeof SEASON_ORDER;

function parseTerm(term: string): { year: number; season: Season } {
  const [year, season] = term.split("-");
  return { year: Number(year), season: season as Season };
}

/** Monotonic index so terms sort chronologically. */
export function termOrder(term: string): number {
  const { year, season } = parseTerm(term);
  return year * 3 + SEASON_ORDER[season];
}

/** "2025-fall" -> "Fall 2025" */
export function formatTerm(term: string): string {
  const { year, season } = parseTerm(term);
  return `${season[0].toUpperCase()}${season.slice(1)} ${year}`;
}

/**
 * Human-readable run length. A single-term project renders as just that term;
 * approximate dates are hedged rather than stated as fact.
 */
export function formatTermRange(project: Project["data"]): string {
  const { startTerm, endTerm, dateApproximate } = project;
  const start = formatTerm(startTerm);
  const range =
    !endTerm || endTerm === startTerm
      ? start
      : `${start} – ${formatTerm(endTerm)}`;
  return dateApproximate ? `circa ${range}` : range;
}

/** Date line for a card, phrased for the project's bucket. */
export function formatRunLine(project: Project["data"]): string {
  // An annual program is better described by how many times we've entered it
  // than by a single continuous date range.
  if (project.recurring && project.editions.length > 0) {
    const count = project.editions.length;
    const noun = count === 1 ? "edition" : "editions";
    return `${count} ${noun} since ${formatTerm(project.startTerm)}`;
  }
  if (project.status === "active" && !project.endTerm) {
    return `Running since ${formatTerm(project.startTerm)}`;
  }
  return formatTermRange(project);
}

/** The term a project is anchored to for sorting. */
function anchorTerm(project: Project["data"]): string {
  return project.endTerm ?? project.startTerm;
}

/**
 * The calendar year a project wrapped up in. Grouping the archive by this
 * rather than by academic year keeps projects with odd term spans (a lone
 * spring, or three semesters straight) in one obvious place.
 */
export function endYear(term: string): string {
  return String(parseTerm(term).year);
}

/** Newest first. */
export function sortByRecency(projects: Project[]): Project[] {
  return [...projects].sort(
    (a, b) => termOrder(anchorTerm(b.data)) - termOrder(anchorTerm(a.data))
  );
}

/**
 * Group past projects by the year they ended, newest first.
 */
export function groupByEndYear(
  projects: Project[]
): Array<{ year: string; projects: Project[] }> {
  const groups = new Map<string, Project[]>();
  for (const project of sortByRecency(projects)) {
    const year = endYear(anchorTerm(project.data));
    (groups.get(year) ?? groups.set(year, []).get(year)!).push(project);
  }
  return Array.from(groups, ([year, projects]) => ({ year, projects }));
}

/**
 * Terms that have finished as of `now`. Fall ends in December, spring in May,
 * summer in August — approximated by the month each term wraps up.
 */
function termHasEnded(term: string, now: Date): boolean {
  const { year, season } = parseTerm(term);
  const endMonth = { spring: 4, summer: 7, fall: 11 }[season]; // 0-indexed
  return now > new Date(year, endMonth + 1, 1);
}

/**
 * Projects still flagged `active` whose `endTerm` has already passed. Surfaced
 * as a build warning so the projects page can't silently go stale.
 */
export function findStaleProjects(
  projects: Project[],
  now = new Date()
): Project[] {
  return projects.filter(
    (p) =>
      p.data.status === "active" &&
      p.data.endTerm !== undefined &&
      termHasEnded(p.data.endTerm, now)
  );
}
