// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/vite';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  site: 'https://hexdev.blog/',
  integrations: [mdx(), sitemap(), alpinejs()],

  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),

  vite: {
    plugins: [tailwindcss()],
  },
});