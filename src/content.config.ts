import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const link = z.object({
  label: z.string(),
  href: z.url(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    blurb: z.string(),
    year: z.string(),
    stack: z.array(z.string()).default([]),
    links: z.array(link).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    blurb: z.string(),
    org: z.string(),
    role: z.string(),
    dates: z.string(),
    year: z.string(),
    status: z.enum(['ongoing', 'published', 'submitted', 'complete']).default('complete'),
    stack: z.array(z.string()).default([]),
    links: z.array(link).default([]),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, research };
