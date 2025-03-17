import * as path from 'node:path';
import { defineConfig } from 'rspress/config';
import mermaid from 'rspress-plugin-mermaid';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  base: "/blog",
  title: 'blog',
  themeConfig: {
    hideNavbar: 'always',
    outlineTitle: 'TOC',
  },
  plugins: [mermaid()],
  globalStyles: path.join(__dirname, 'docs/index.css'),
});
