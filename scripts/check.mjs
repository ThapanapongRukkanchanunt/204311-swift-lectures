import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { slides } from '../src/week01.mjs';
import { slides as week02 } from '../src/week02.mjs';
import {lessons} from './lessons.mjs';
assert.equal(lessons.length,15);
for(const lesson of lessons){
 assert.equal(lesson.slides.reduce((n,s)=>n+s.time,0),120,lesson.week);
 assert.equal(new Set(lesson.slides.map(s=>s.id)).size,lesson.slides.length);
 for(const s of lesson.slides)assert.ok(!('thai' in s || 'explanation' in s),'Private authoring fields');
 for(const suffix of ['index.html','reading.html','lab/index.html']){
  const file=`dist/2027/week-${lesson.week}/${suffix}`;
  const html=await readFile(file,'utf8');
  for(const [,url] of html.matchAll(/(?:href|src)="([^"]+)"/g)){
   if(/^(?:https?:|#|mailto:)/.test(url))continue;
   assert.ok(!url.startsWith('/'),url);
   await access(resolve(dirname(file),url.split('#')[0]));
  }
  assert.ok(!/instructor-notes|course-decisions|Suggested answer:/.test(html));
 }
 for(const type of ['practice','offline'])await access(`dist/downloads/week-${lesson.week}-${type}.zip`);
}
console.log('PASS: all 15 weeks, 120 minutes each, unique IDs, local links and downloads, public/private boundary.');
assert.equal(slides.length,26);assert.equal(slides.reduce((n,s)=>n+s.time,0),120);
assert.equal(new Set(slides.map(s=>s.id)).size,26);
assert.equal(week02.length,24);assert.equal(week02.reduce((n,s)=>n+s.time,0),120);
assert.equal(new Set(week02.map(s=>s.id)).size,24);
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
console.log('PASS: Weeks 01/02 have 26/24 slides, 120 minutes each, unique section links, portable assets/downloads, no private guide in published HTML.');
