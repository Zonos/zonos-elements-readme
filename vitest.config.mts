import path from 'path';
import { defaultExclude, defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths'

process.env.TZ = 'America/Denver';

export default defineConfig({
  plugins: [
    // This plugin allows you to use tsconfig paths in your tests, allow hot module replacement work on watch mode
    tsconfigPaths()
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
  test: {
    exclude: [...defaultExclude],
    globals: true,
    snapshotFormat: {
      escapeString: false,
    },
  },
});
