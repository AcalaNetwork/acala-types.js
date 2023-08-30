import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import path from 'path';

console.log('postbuild operations starting ...');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packageJsonPath = path.join(__dirname, '../package.json');
const readmePath = path.join(__dirname, '../README.md');
const distPath = path.join(__dirname, '../dist');

const pkg = JSON.parse(await fs.readFile(packageJsonPath, 'utf-8'));

delete pkg.type; // don't want it to force esm, which causes issue for other packages importing this pkg
pkg.files = ['*'];

await fs.writeFile(path.join(distPath, 'package.json'), JSON.stringify(pkg, null, 2));
await fs.copyFile(readmePath, path.join(distPath, 'README.md'));

console.log('postbuild operations finished!');
