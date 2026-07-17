import { readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const outputPath = path.join(root, 'dist', 'index.html');
const serverEntry = path.join(root, '.ssr', 'entry-server.js');
const marker = '<div id="root"></div>';

const { render } = await import(pathToFileURL(serverEntry).href);
const template = await readFile(outputPath, 'utf8');

if (!template.includes(marker)) {
  throw new Error('Prerender marker was not found in dist/index.html');
}

const rendered = template.replace(marker, `<div id="root">${render()}</div>`);
await writeFile(outputPath, rendered, 'utf8');
await rm(path.join(root, '.ssr'), { recursive: true, force: true });

console.log('Prerendered the complete portfolio into dist/index.html.');
