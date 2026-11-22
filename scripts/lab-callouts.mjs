// Shared capture-callout presentation for every released lab and Canvas export.
export const captureStyle='margin:18px 0;padding:16px 18px;background:#FFF1F2;color:#8F1824;border:3px solid #C6283D;border-radius:12px;';
export function styleCaptureCallouts(html){
 return html.replace(/<(p|li)([^>]*)>(\s*)<strong\b[^>]*>(เก็บภาพที่\s+\d+\s*:)<\/strong>/gu,(_,tag,attrs,space,label)=>{
  const classes=(attrs.match(/class="([^"]*)"/)?.[1]||'').split(/\s+/).filter(Boolean);
  if(!classes.includes('lab-capture'))classes.push('lab-capture');
  const rest=attrs.replace(/\s*(?:style|class)="[^"]*"/g,'');
  return `<${tag}${rest} class="${classes.join(' ')}" style="${captureStyle}">${space}<strong style="color:#A51C30;font-size:1.12em;font-weight:800;">${label}</strong>`;
 });
}
