import { readdir, readFile, writeFile, mkdir, rm, copyFile } from 'node:fs/promises';
import { join, relative, resolve, sep } from 'node:path';
import { zipSync, strToU8 } from 'fflate';
import {lessons} from './lessons.mjs';
import {isReleased} from './availability.mjs';
const output=process.argv.includes('--local-preview')?'.review-dist':'dist';
// Vite copies public assets first. Strip unreleased downloads from dist only;
// retain authoring sources for a later instructor-approved release.
const downloadRoot=resolve(`${output}/downloads`);
for(const dir of [downloadRoot,join(downloadRoot,'labs')]){
 for(const entry of await readdir(dir,{withFileTypes:true})){
  const match=entry.name.match(/^week-(\d{2})(?:-|\.)/);
  if(match&&!isReleased(match[1])){
   const target=resolve(dir,entry.name);
   if(!target.startsWith(downloadRoot+sep))throw Error('Unsafe download cleanup path');
   await rm(target,{recursive:entry.isDirectory(),force:true});
  }
 }
}
// Retain attributed Week 03 tutorial illustrations for the instructor-approved release.
if(!isReleased('03')){
 const imageRoot=resolve(output,'images');
 const reviewImages=resolve(imageRoot,'week-03-apple');
 if(!reviewImages.startsWith(imageRoot+sep))throw Error('Unsafe image cleanup path');
 await rm(reviewImages,{recursive:true,force:true});
}
async function collect(root,dir=root){const result={};for(const entry of await readdir(dir,{withFileTypes:true})){const p=join(dir,entry.name);if(entry.isDirectory())Object.assign(result,await collect(root,p));else if(!p.endsWith('-offline.zip'))result[relative(root,p).replaceAll('\\','/')]=new Uint8Array(await readFile(p));}return result;}
await mkdir(`${output}/downloads`,{recursive:true});
await writeFile(`${output}/THIRD-PARTY-LICENSES.txt`,'Reveal.js (MIT)\n\n'+await readFile('node_modules/reveal.js/LICENSE','utf8'));
for(const {week} of lessons){
 if(!isReleased(week))continue;
 const practice=week==='01'?'practice':`week-${week}-practice`;
 await writeFile(`${output}/downloads/week-${week}-practice.zip`,zipSync(await collect('public/downloads/'+practice)));
 try { const starter=await collect(`public/downloads/week-${week}-starter`); await writeFile(`${output}/downloads/week-${week}-starter.zip`,zipSync(starter)); } catch(e) { if(e.code!=='ENOENT')throw e; }
}
for(const {week} of lessons){
 if(!isReleased(week))continue;
 const offline=await collect(output);
 offline['START-HERE.txt']=strToU8(`CS 311 Week ${week} offline lesson\n\nExtract this entire folder. Open 2027/week-${week}/reading.html for core reading without a server. For interactive slides, serve this extracted folder locally: python3 -m http.server 8000 (Mac), or py -m http.server 8000 (Windows). Visit http://localhost:8000/2027/week-${week}/.\n\nCore assets are local. External references need internet. Offline ZIP links apply to the online site. Practice source is in downloads/week-${week}-practice.zip. The shared package includes all available weeks.\n`);
 await writeFile(`${output}/downloads/week-${week}-offline.zip`,zipSync(offline));
}
if(process.argv.includes('--local-preview')){
 for(const type of ['practice','offline'])await copyFile(`${output}/downloads/week-03-${type}.zip`,`public/downloads/week-03-${type}.zip`);
}
console.log(`Packaged ${lessons.filter(l=>isReleased(l.week)).length} available practice and offline lessons in ${output}.`);
