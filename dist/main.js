import { join } from 'node:path';
// import { cp, writeFile } from 'node:fs';
// import vscode from 'vscode';
import './color/nocturnal-clr-scheme.json' assert { type: 'json' };
// console.log(nocturnal.CLR_GROUP_ALPHA);
const EXTENSION_PATH = process.cwd();
const THEME_DIR = 'themes';
const THEME_ID = 'generated-vscode-theme';
const THEME_PATH = join(EXTENSION_PATH, THEME_DIR, THEME_ID + '.json');
console.log('theme path: ' + THEME_PATH);
//# sourceMappingURL=main.js.map
