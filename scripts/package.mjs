import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { zipSync, strToU8 } from 'fflate';
async function collect(root,dir=root){const result={};for(const entry of await readdir(dir,{withFileTypes:true})){const p=join(dir,entry.name);if(entry.isDirectory())Object.assign(result,await collect(root,p));else if(!p.endsWith('week-01-offline.zip'))result[relative(root,p).replaceAll('\\','/')]=new Uint8Array(await readFile(p));}return result;}
await mkdir('dist/downloads',{recursive:true});
await writeFile('dist/THIRD-PARTY-LICENSES.txt','Reveal.js (MIT)\n\n'+await readFile('node_modules/reveal.js/LICENSE','utf8'));
await writeFile('dist/downloads/week-01-practice.zip',zipSync(await collect('public/downloads/practice')));
const offline=await collect('dist');
offline['START-HERE.txt']=strToU8('CS 311 Week 01 offline lesson\n\nExtract this entire folder. Double-click 2027/week-01/reading.html for the core reading view without a server. JavaScript module restrictions may disable interactive controls when opened as a file.\n\nFor interactive slides, serve this extracted folder locally, for example with Python: python3 -m http.server 8000 (Mac), or py -m http.server 8000 (Windows), then visit http://localhost:8000/2027/week-01/. No internet is needed once the package is extracted and the server is running.\n\nAll code, styles, and core explanations are included. External references require internet. The offline ZIP download link itself applies to the online site. Practice source is in downloads/week-01-practice.zip.\n');
await writeFile('dist/downloads/week-01-offline.zip',zipSync(offline));
console.log('Packaged offline lesson and practice project.');
