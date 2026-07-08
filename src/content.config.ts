// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectSchema = z.object({
  title: z.string(),
description: z.string().optional(), // ajoute ce champ
});

const conception = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/conception' }),
  schema: projectSchema,
});

const graphisme = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/graphisme' }),
  schema: projectSchema,
});

export const collections = {
  conception,
  graphisme,
};