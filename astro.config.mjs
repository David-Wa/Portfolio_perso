// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import react from "@astrojs/react";

export default defineConfig({
  site: "https://portfolio-perso-eta.vercel.app/",
  /*base: '/Portfolio_perso', // uniquement si le repo n'est PAS TON-PSEUDO.github.io*/
  integrations: [ icon(), react()],
});