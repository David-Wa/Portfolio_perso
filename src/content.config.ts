import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const bricolage = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/bricolage' }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  bricolage,
};