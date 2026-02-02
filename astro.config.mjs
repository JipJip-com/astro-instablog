
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import minify from 'astro-minify-html-swc';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@components': 'src/components',
        '@layouts': 'src/layouts',
        '@assets': 'src/assets',
        '@styles': 'src/styles',
        '@scripts': 'src/scripts',
        '@config': 'src/config',
        '@lib': 'src/lib',
      },
    },
  },
  build: {
    inlineStylesheets: 'always'
  },
  site: 'https://www.yoururlhere.com',
  integrations: [mdx(),sitemap(),minify()],
});