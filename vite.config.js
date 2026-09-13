import { defineConfig } from 'vite';
import { resolve } from 'node:path';
export default defineConfig({
  base: './',
  build: { rollupOptions: { input: {
    home: resolve('index.html'),
    week01: resolve('2027/week-01/index.html'),
    reading: resolve('2027/week-01/reading.html')
  } } }
});
