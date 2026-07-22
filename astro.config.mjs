// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://xopherr.github.io',
  base: '/photoorganizer-website',
  vite: {
    plugins: [tailwindcss()]
  }
});