// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://davzzzd.netlify.app/",
  integrations: [preact(), icon()],
});