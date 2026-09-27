import {readFile} from 'node:fs/promises';
export const visuals=JSON.parse(await readFile(new URL('../src/visuals.json',import.meta.url),'utf8'));
const escape=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
export function applyVisuals(slides){return slides.map(s=>{
 const v=visuals.find(v=>v.id===s.id);if(!v||s.body.includes('class="visual-layout'))return s;
 const content=v.points?`<ul>${v.points.map(p=>`<li>${escape(p)}</li>`).join('')}</ul><p class="prompt"><span>Think it through</span>${escape(v.prompt)}</p>`:s.body;
 const figures=v.images.map(i=>`<figure><a class="image-enlarge" href="../../images/lectures/${i.file}" target="_blank" rel="noopener" aria-label="Open image: ${escape(i.title)} (new tab)"><img src="../../images/lectures/${i.file}" alt="${escape(i.alt)}" decoding="async"></a><figcaption class="image-credit"><a href="${escape(i.source)}" title="${escape(i.title)}">${escape(i.author)}</a> · <a href="${escape(i.licenseUrl)}">${escape(i.license)}</a><br>${i.changes.startsWith('Resized')?'Resized / WebP.':'Unmodified.'} <a href="../../images/lectures/credits.html#${i.file}">Full credit</a></figcaption></figure>`).join('');
 const source=v.extraSource?(s.source?s.source+' · ':'')+`<a href="${v.extraSource[1]}">${escape(v.extraSource[0])}</a>`:s.source;
 return {...s,kind:[s.kind,'has-visual'].filter(Boolean).join(' '),body:`<div class="visual-layout"><div class="visual-copy">${content}</div><div class="visual-evidence"><div class="visual-gallery ${v.images.length>1?'image-pair':''}">${figures}</div><p class="image-caption">${escape(v.caption)}</p></div></div>`,source};
});}
