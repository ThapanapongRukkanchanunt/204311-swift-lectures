import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { slides } from '../src/week01.mjs';
import { slides as week02 } from '../src/week02.mjs';
import {lessons} from './lessons.mjs';
import {isReleased} from './availability.mjs';
import {visuals} from './visuals.mjs';
import {illustrations} from './illustrations.mjs';
import {createHash} from 'node:crypto';
assert.equal(visuals.length,14);
assert.equal(new Set(visuals.map(v=>v.id)).size,14);
const credits=await readFile('dist/images/lectures/credits.html','utf8');
for(const v of visuals){
 assert.ok(lessons.find(l=>l.week===v.week).slides.some(s=>s.id===v.id));
 assert.ok(v.caption);
 assert.ok(!v.en&&!v.th,'Private teaching cues must not enter the image manifest');
 for(const i of v.images){
  for(const field of ['title','author','source','license','licenseUrl','alt','changes','retrieved'])assert.ok(i[field],`${i.file}: ${field}`);
  assert.equal(createHash('sha256').update(await readFile(`dist/images/lectures/${i.file}`)).digest('hex'),i.sha256);
  assert.ok(credits.includes(`id="${i.file}"`));
 }
}
console.log('PASS: image provenance, attribution, alt text, asset hashes and private-cue boundary.');
const artwork=JSON.parse(await readFile('dist/images/openmoji/manifest.json','utf8'));
assert.equal(illustrations.length,64);
assert.equal(new Set(illustrations.map(v=>v.id)).size,illustrations.length);
for(const a of artwork.assets){
 assert.ok(a.author&&a.source&&a.title);
 assert.equal(createHash('sha256').update(await readFile(`dist/images/openmoji/${a.file}`)).digest('hex'),a.sha256);
}
for(const v of illustrations){
 const s=lessons.find(l=>l.week===v.week).slides.find(s=>s.id===v.id);
 assert.ok(s.body.includes('illustration-layout'));
 assert.ok(!v.en&&!v.th,'Private illustration cues must stay outside the public manifest');
 if(s.body.includes('<pre>'))assert.ok(s.kind.includes('illustrated-code'),'Code examples use a dedicated layout');
 for(const n of v.nodes)assert.ok(n.label&&n.detail&&artwork.assets.some(a=>a.file===n.file));
 assert.ok(s.body.includes('CC BY-SA 4.0'));
}
await access('dist/images/openmoji/LICENSE.txt');
console.log('PASS: 64 manifest illustrations, original artwork hashes, source/artist/license metadata and dedicated code layouts.');
assert.equal(lessons.length,15);
for(const lesson of lessons){
 assert.equal(lesson.slides.reduce((n,s)=>n+s.time,0),120,lesson.week);
 assert.equal(new Set(lesson.slides.map(s=>s.id)).size,lesson.slides.length);
 for(const s of lesson.slides)assert.ok(!('thai' in s || 'explanation' in s),'Private authoring fields');
 for(const suffix of ['index.html','reading.html','lab/index.html']){
  const file=`dist/2027/week-${lesson.week}/${suffix}`;
  const html=await readFile(file,'utf8');
  if(!isReleased(lesson.week)){
   assert.ok(html.includes('data-release-locked="true"'));
   assert.ok(!html.includes('class="slides"'));
  }
  for(const [,url] of html.matchAll(/(?:href|src)="([^"]+)"/g)){
   if(/^(?:https?:|#|mailto:)/.test(url))continue;
   assert.ok(!url.startsWith('/'),url);
   await access(resolve(dirname(file),url.split('#')[0]));
  }
  assert.ok(!/instructor-notes|course-decisions|Suggested answer:/.test(html));
 }
 for(const type of ['practice','offline','starter']){
  const path=`dist/downloads/week-${lesson.week}-${type}.zip`;
  if(!isReleased(lesson.week))await assert.rejects(access(path));
  else if(type!=='starter')await access(path);
 }
 if(!isReleased(lesson.week)){
  await assert.rejects(access(`dist/downloads/week-${lesson.week}-practice`));
  await assert.rejects(access(`dist/downloads/week-${lesson.week}-starter`));
  await assert.rejects(access(`dist/downloads/labs/week-${lesson.week}-canvas.html`));
 }
}
console.log('PASS: all 15 weeks, 120 minutes each, unique IDs, local links and downloads, public/private boundary.');
assert.equal(slides.length,36);assert.equal(slides.reduce((n,s)=>n+s.time,0),120);
assert.equal(new Set(slides.map(s=>s.id)).size,36);
assert.equal(week02.length,29);assert.equal(week02.reduce((n,s)=>n+s.time,0),120);
assert.equal(new Set(week02.map(s=>s.id)).size,29);
for(const l of lessons)assert.ok(!l.slides.some(s=>s.id==='break'||s.id.endsWith('-break')),'No dedicated break slides');
for(const file of ['dist/index.html','dist/2027/week-01/index.html','dist/2027/week-01/reading.html','dist/2027/week-02/index.html','dist/2027/week-02/reading.html','dist/2027/labs/index.html','dist/2027/week-01/lab/index.html','dist/2027/week-02/lab/index.html']){
 const html=await readFile(file,'utf8');
 for(const [,url] of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  if(/^(?:https?:|#|mailto:)/.test(url))continue;
  assert.ok(!url.startsWith('/'),`Absolute path breaks project Pages: ${url}`);
  await access(resolve(dirname(file),url.split('#')[0]));
 }
 assert.ok(!/https?:[^" ]+\.(?:js|css)/.test(html),'Core assets must be local');
 assert.ok(!/Talk track|Expected placement|instructor-notes|course-decisions/.test(html),'Private notes must not be published');
}
console.log('PASS: Weeks 01/02 have 36/29 slides, 120 minutes each, no break slides, unique section links, portable assets/downloads, no private guide in published HTML.');

if(isReleased('03')){
 const week03=lessons.find(l=>l.week==='03');
 assert.equal(week03.slides.length,26);
 const lab=await readFile('dist/2027/week-03/lab/index.html','utf8');
 assert.equal((lab.match(/id="w03-lab-section-/g)||[]).length,6);
 assert.equal((lab.match(/เก็บภาพที่ \d+:/g)||[]).length,5);
 assert.ok(lab.includes('Pick-a-Pal')&&!lab.includes('data-release-locked'));
 for(const sub of ['', 'lab/']){
  const manifest=JSON.parse(await readFile(`dist/images/week-03-apple/${sub}manifest.json`,'utf8'));
  for(const im of manifest){
   assert.ok(im.source&&im.alt&&im.rights);
   assert.equal(createHash('sha256').update(await readFile(`dist/images/week-03-apple/${sub}${im.file}`)).digest('hex'),im.sha256);
  }
 }
 await access('dist/images/week-03-course/campushelp-main.png');
 console.log('PASS: Week 03 released: 26 slides, 6 lab sections, 5 screenshot checkpoints, attributed tutorial assets.');
}
