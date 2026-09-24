import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createServer} from 'vite';
import react from '@vitejs/plugin-react';

// 建置後把 React 渲染結果寫進 dist/index.html 的 #root，讓搜尋引擎不執行 JS 也能讀到內容
const root = fileURLToPath(new URL('..', import.meta.url));
const distIndex = path.join(root, 'dist', 'index.html');
if (!fs.existsSync(distIndex)) {
  throw new Error('prerender: 找不到 dist/index.html，請先執行 vite build');
}

const vite = await createServer({
  root,
  configFile: false,
  logLevel: 'error',
  appType: 'custom',
  server: {middlewareMode: true, hmr: false, watch: null},
  plugins: [react()],
});

let appHtml;
try {
  const {render} = await vite.ssrLoadModule('/src/entry-server.tsx');
  appHtml = render();
} finally {
  await vite.close();
}

const template = fs.readFileSync(distIndex, 'utf8');
const marker = '<div id="root"></div>';
if (!template.includes(marker)) {
  throw new Error(`prerender: dist/index.html 中找不到 ${marker}`);
}
fs.writeFileSync(distIndex, template.replace(marker, () => `<div id="root">${appHtml}</div>`));
console.log(`prerender: 已注入 ${(appHtml.length / 1024).toFixed(1)} KB HTML 到 dist/index.html`);
