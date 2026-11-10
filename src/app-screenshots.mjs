import screenshots from './app-screenshots.json' with {type:'json'};
const esc=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
export function appScreenshot(key){
 const s=screenshots[key];
 return `<figure class="app-screenshot"><a class="source-image-link" href="${esc(s.source)}" target="_blank" rel="noopener" aria-label="Original screenshot: ${esc(s.app)} (new tab)"><img src="../../images/week01/${s.file}" alt="${esc(s.alt)}" decoding="async"></a><figcaption><a href="${esc(s.source)}" target="_blank" rel="noopener">${esc(s.caption)}</a></figcaption></figure>`;
}
