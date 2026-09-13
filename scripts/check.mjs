import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { slides } from '../src/week01.mjs';
assert.equal(slides.length,26);assert.equal(slides.reduce((n,s)=>n+s.time,0),120);
assert.equal(new Set(slides.map(s=>s.id)).size,26);
for(const file of ['dist/index.html','dist/2027/week-01/index.html','dist/2027/week-01/reading.html']){
 const html=await readFile(file,'utf8');
 for(const [,url] of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  if(/^(?:https?:|#|mailto:)/.test(url))continue;
  assert.ok(!url.startsWith('/'),`Absolute path breaks project Pages: ${url}`);
  await access(resolve(dirname(file),url.split('#')[0]));
 }
 assert.ok(!/https?:[^" ]+\.(?:js|css)/.test(html),'Core assets must be local');
 assert.ok(!/Talk track|Expected placement|instructor-notes|course-decisions/.test(html),'Private notes must not be published');
}
console.log('PASS: 26 slides, 120 minutes, unique section links, portable assets and downloads, no private guide in published HTML.');
