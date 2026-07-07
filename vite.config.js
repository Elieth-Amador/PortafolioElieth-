import { defineConfig } from 'vite';
import purgecss from '@fullhuman/postcss-purgecss';

export default defineConfig({
  base: './',
  css: {
    postcss: {
      plugins: [
        purgecss({
          content: ['./index.html', './src/**/*.js'],
          safelist: ['error', 'success', 'active']
        })
      ]
    }
  },
  build: {
    minify: true,
    cssMinify: true,
    assetsDir: 'assets'
  }
});