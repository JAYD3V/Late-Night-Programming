import { join } from 'node:path';
// import { cp, writeFile } from 'node:fs';
// import vscode from 'vscode';

// import nocturnal from '' assert { type: 'json' };



import.meta.url;

/**********************************
   type ColorPalette = {
      primary:   string;
      secondary: string;
      accent:    string;
      neutral?: {
         light?: string | null,
         dark?:  string | null
      };
   }
**********************************/
type ColorPalette = {
   primary: '',
   secondary: '',
};

// application/json
// ——
// ——
type ThemeMeta = {
   id: string;
   label: string;
   outDir: string;
};

// console.log(nocturnal.CLR_GROUP_ALPHA);

const EXTENSION_PATH = process.cwd();
const THEME_DIR = 'themes';
const THEME_ID = 'generated-vscode-theme';
const THEME_PATH = join(EXTENSION_PATH, THEME_DIR, THEME_ID + '.json');

console.log('Theme-path: ' + THEME_PATH);

class VSCodeThemeBuilder {
   #meta: ThemeMeta;
   #palette: ColorPalette;

   constructor(opts: { meta: ThemeMeta; }){
      this.#meta = opts.meta;
      this.#palette = { primary: '', secondary: '' };
   }
}
