// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectSchema = z.object({
  title: z.string(),
  titleEn: z.string().optional(),
  description: z.string().optional(),
  descriptionEn: z.string().optional(),
  content: z.string().optional(),
  contentEn: z.string().optional(),
  collab: z.string().optional().default('none'),
});

const prototypage = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/prototypage' }),
  schema: projectSchema,
});

const graphisme = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/graphisme' }),
  schema: projectSchema,
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content' }),
  schema: projectSchema,
});

export const collections = {
  prototypage,
  graphisme,
  projects,
};