import {defineConfig} from 'vite';
import {resolve} from 'node:path';
import {readFileSync} from 'node:fs';
const lessons=[{week:'01'},{week:'02'},...JSON.parse(readFileSync(resolve('src/generated-catalog.json'),'utf8'))];
const input={home:resolve('index.html'),labs:resolve('2027/labs/index.html')};
for(const {week} of lessons){
 input[`week${week}`]=resolve(`2027/week-${week}/index.html`);
 input[`reading${week}`]=resolve(`2027/week-${week}/reading.html`);
 input[`lab${week}`]=resolve(`2027/week-${week}/lab/index.html`);
}
export default defineConfig({base:'./',build:{rollupOptions:{input}}});
