import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  base: "/blog",
  themeConfig: {
    hideNavbar: 'always',
  },
});
