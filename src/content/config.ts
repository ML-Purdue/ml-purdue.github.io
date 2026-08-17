import { defineCollection, z } from "astro:content";

// Academic terms are stored machine-readable ("2025-fall") so they sort and
// group correctly. Rendering lives in ~/lib/projects.ts.
const term = z
  .string()
  .regex(
    /^\d{4}-(spring|summer|fall)$/,
    "term must look like 2025-fall (spring | summer | fall)"
  );

const projects = defineCollection({
  schema: z
    .object({
      name: z.string(),
      /** TL;DR shown on cards and in search results. */
      desc: z.string(),

      // Primary bucket. Drives which page a project appears on.
      status: z.enum(["active", "archived"]),
      // Secondary indicator, only meaningful while a project is active.
      intake: z.enum(["open", "full", "tbd"]).optional(),

      startTerm: term,
      /** Omitted while the project is still running. */
      endTerm: term.optional(),
      /** Dates inferred rather than recorded — renders as "circa Fall 2023". */
      dateApproximate: z.boolean().default(false),

      pm: z.string().optional(),
      advisor: z.string().optional(),
      domain: z.array(z.string()).default([]),

      hoursPerWeek: z.string().optional(),
      /** Free text, e.g. "4-6" or "0-1". */
      openings: z.string().optional(),
      /** What a member needs coming in. */
      skills: z.string().optional(),

      github: z.string().url().optional(),
      links: z
        .array(z.object({ label: z.string(), url: z.string().url() }))
        .default([]),
      /** Shipped outcomes: awards, patents, papers, usage numbers. */
      results: z.array(z.string()).default([]),

      /**
       * An annual program the club re-enters with a new team each cycle (e.g.
       * TE AI Cup), rather than one continuous project. List each cycle in
       * `editions`; `startTerm` is the first one.
       */
      recurring: z.boolean().default(false),
      editions: z
        .array(z.object({ years: z.string(), result: z.string().optional() }))
        .default([]),

      /** Hides a project from the site without deleting the file. */
      draft: z.boolean().default(false),
    })
    .refine((p) => p.status !== "active" || p.intake !== undefined, {
      message: "active projects must declare an intake (open | full | tbd)",
      path: ["intake"],
    })
    .refine((p) => p.status !== "archived" || p.endTerm !== undefined, {
      message: "archived projects must declare an endTerm",
      path: ["endTerm"],
    }),
});

export const collections = { projects };
