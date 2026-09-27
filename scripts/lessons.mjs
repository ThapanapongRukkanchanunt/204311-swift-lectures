import {readFile} from 'node:fs/promises';
import {slides as week01} from '../src/week01.mjs';
import {slides as week02} from '../src/week02.mjs';
import {applyVisuals} from './visuals.mjs';
const catalog=JSON.parse((await readFile(new URL('../src/generated-catalog.json',import.meta.url),'utf8')).replace(/^\uFEFF/,''));
export const lessons=[
 {week:'01',slides:week01,title:'Mobile Applications and the Development Landscape',label:'MOBILE APPLICATIONS',labTitle:'สร้างแอปแรกด้วย SwiftUI'},
 {week:'02',slides:week02,title:'Framework Control Flow and Declarative UI',label:'FRAMEWORK CONTROL FLOW',labTitle:'ให้แอปตอบสนองด้วย State'},
 ...await Promise.all(catalog.map(async m=>({...m,slides:(await import(`../src/week${m.week}.mjs`)).slides})))
].map(lesson=>({...lesson,slides:applyVisuals(lesson.slides)}));
