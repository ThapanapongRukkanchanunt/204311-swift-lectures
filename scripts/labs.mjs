import {mkdir,readFile,writeFile} from 'node:fs/promises';
const labs=[['01','สร้างแอปแรกด้วย SwiftUI'],['02','ให้แอปตอบสนองด้วย State']];
const shell=(title,body,back)=>`<!doctype html><html lang="th"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} · CS 311</title><link rel="stylesheet" href="/src/labs.css"></head><body><a class="skip" href="#lab-main">ข้ามไปเนื้อหา</a><header><a href="${back}">204311 / SWIFT</a><span>ใบงานปฏิบัติการ</span></header><main id="lab-main">${body}</main><footer>CS 311 · Campus Life, But Smarter</footer></body></html>`;
await mkdir('2027/labs',{recursive:true});
await mkdir('public/downloads/labs',{recursive:true});
for(const [week,title] of labs){
 const fragment=await readFile(`content/labs/week-${week}.html`,'utf8');
 if(/<!--|<script|<style|<html|<head|<body/i.test(fragment))throw Error('Lab must be a student-facing HTML fragment');
 await mkdir(`2027/week-${week}/lab`,{recursive:true});
 await writeFile(`2027/week-${week}/lab/index.html`,shell(`W${week}-Lab: ${title}`,`<nav aria-label="นำทางใบงาน"><a href="../../labs/">ใบงานทั้งหมด</a> · <a href="../">สไลด์ Week ${week}</a> · <a href="../../../downloads/labs/week-${week}-canvas.html" download>ดาวน์โหลด HTML สำหรับ Canvas</a></nav><p class="draft">ฉบับรอตรวจทาน · ภาพและลิงก์วิดีโอจะเพิ่มภายหลัง</p>${fragment}`,'../../../'));
 await writeFile(`public/downloads/labs/week-${week}-canvas.html`,fragment);
}
await writeFile('2027/labs/index.html',shell('ใบงานปฏิบัติการ',`<h1>ใบงานปฏิบัติการ SwiftUI</h1><p>คำแนะนำภาษาไทยสำหรับ Xcode บน Mac และ Swift Playgrounds บน iPad</p><p class="draft">ใบงานที่จัดทำแล้ว: Week 01 และ Week 02 · รอผู้สอนตรวจทาน</p><ul>${labs.map(([w,t])=>`<li><a href="../week-${w}/lab/">Week ${w} — ${t}</a></li>`).join('')}</ul><p>ทำตามขั้นตอนและส่ง PDF ใน Canvas Assignment ของสัปดาห์นั้น</p>`,'../../'));
console.log('Generated two Thai lab pages, lab index and Canvas fragment downloads.');
