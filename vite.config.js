import { defineConfig } from 'vite';
import purgecssModule from '@fullhuman/postcss-purgecss';

const purgecss = purgecssModule.default || purgecssModule;

export default defineConfig({
  base: './',
  css: {
    postcss: {
      plugins: [
        purgecss({
          content: [
            './index.html',
            './src/**/*.js',
            './src/**/*.html'
          ],
          safelist: [
            'error',
            'success',
            'active',
            'show',
            'hidden'
          ]
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