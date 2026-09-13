import Reveal from 'reveal.js';
import './style.css';
import './week02.css';

const reading = document.body.classList.contains('reading');
const all = [...document.querySelectorAll('.slides > section')];
const dialog = document.querySelector('#contents');
let deck;
const editable = el => el.closest('input,select,textarea,button,summary,a,[contenteditable]');
if (!reading) {
  // Add fragments only in presentation mode: reading/no-JS content stays complete.
  for (const slide of all) {
    slide.querySelectorAll('li, .cards > .card, .criteria > div, tbody > tr').forEach(item => {
      item.classList.add('fragment', 'fade-up');
    });
  }
  document.body.classList.add('enhanced');
  deck = new Reveal(document.querySelector('.reveal'), {
    embedded:true, width:1280, height:800, margin:0.03, minScale:0.1, maxScale:2,
    center:false, controls:false, progress:false,
    history:true, hash:true, hashOneBasedIndex:false, navigationMode:'linear',
    transition:'none', backgroundTransition:'none',
    autoSlide:0, touch:true, keyboardCondition:event => !dialog.open && !editable(event.target),
    keyboard:{37:()=>deck.prev(),39:()=>deck.next()},
    help:false, view:'slide', scrollActivationWidth:null
  });
  await deck.initialize();
  const syncScale=()=>document.querySelector('.slides').style.setProperty('--slide-scale',deck.getScale());
  deck.on('resize',syncScale);
  syncScale();
  document.body.classList.add('enhanced');
  const update = () => {
    const s=deck.getCurrentSlide(); const index=all.indexOf(s);
    const fragments = [...s.querySelectorAll('.fragment')];
    const revealed = fragments.filter(f=>f.classList.contains('visible')).length;
    document.querySelector('#position').textContent=`${index+1} / ${all.length}${fragments.length ? ` · ${revealed}/${fragments.length} points` : ''}`;
    document.querySelector('#chapter-label').textContent=s.querySelector('.eyebrow').childNodes[0].textContent;
    document.querySelector('.course-progress i').style.width=`${(index+1)/all.length*100}%`;
    const routes=deck.availableFragments();
    document.querySelector('#previous').disabled=index===0 && !routes.prev;
    document.querySelector('#next').disabled=index===all.length-1 && !routes.next;
    document.querySelector('#mode-link').href=`reading.html#${s.id}`;
    s.scrollTop=0;
  };
  deck.on('slidechanged',()=>{update();deck.getCurrentSlide().querySelector('h2').focus({preventScroll:true});});
  deck.on('fragmentshown',update);
  deck.on('fragmenthidden',update);
  update();
  document.querySelector('#previous').onclick=()=>deck.prev();
  document.querySelector('#next').onclick=()=>deck.next();
} else {
  document.body.classList.add('enhanced');
  document.querySelector('.navigation').hidden=true;
  for(const a of dialog.querySelectorAll('a'))a.href=a.getAttribute('href').replace('#/','#');
  document.querySelector('#mode-link').href=`index.html#/${location.hash.slice(1)||all[0].id}`;
}
document.querySelector('#overview').onclick=()=>dialog.showModal();
document.querySelector('#close-overview').onclick=()=>dialog.close();
dialog.addEventListener('click',e=>{
  const a=e.target.closest('a');
  if(a){dialog.close(); if(!reading){e.preventDefault(); const i=all.findIndex(s=>s.id===a.hash.slice(2));deck.slide(i);} }
});
const arrival = {
  Loading:['Checking arrivals…','Route information stays visible while we wait.'],
  Current:['4 minutes away','Updated just now. An estimate, not a guarantee.'],
  Stale:['Last estimate: 4 minutes','Updated 2 minutes ago. Live updates are delayed.'],
  Unavailable:['Live arrivals unavailable','You can still browse saved route and stop information.'],
  Retrying:['Trying again…','Keep the last useful information visible while reconnecting.']
};
function renderArrival(){const [title,message]=arrival[document.querySelector('#arrival-state').value]; document.querySelector('#arrival-title').textContent=title;document.querySelector('#arrival-message').textContent=message;}
function renderTrace(){const n=document.querySelector('#minutes').value; document.querySelector('#minutes-value').textContent=n;document.querySelector('#trace-output').textContent=`North Gate: ${n} min`;document.querySelector('#swift-trace pre code').textContent=`let stop = "North Gate"\nlet minutes = ${n}\nprint("\\(stop): \\(minutes) min")`;}
document.querySelector('#arrival-state')?.addEventListener('change',renderArrival);
document.querySelector('#minutes')?.addEventListener('input',renderTrace);
document.querySelectorAll('[data-reset]').forEach(button=>button.addEventListener('click',()=>{
  const section=button.closest('section');
  section.querySelectorAll('input').forEach(el=>{if(el.type==='checkbox')el.checked=false;else el.value=el.defaultValue;});
  section.querySelectorAll('select').forEach(el=>el.selectedIndex=0);
  section.querySelectorAll('details').forEach(el=>el.open=false);
  if(document.querySelector('#arrival-state'))renderArrival();
  if(document.querySelector('#minutes'))renderTrace();
}));
// Disclosure content is always present in the static HTML and usable without JS.
// Keep arrow keys inside range/select controls; Reveal only owns slide navigation.
for(const simulation of document.querySelectorAll('.queue-sim')) {
  let waiting=Number(simulation.dataset.start);
  simulation.addEventListener('click',event=>{
    const action=event.target.closest('[data-queue]')?.dataset.queue;
    if(!action)return;
    if(action==='join')waiting+=1;
    if(action==='leave')waiting=Math.max(0,waiting-1);
    if(action==='reset')waiting=Number(simulation.dataset.start);
    simulation.querySelector('.queue-output').textContent=`Waiting: ${waiting} · ${waiting>=5?'Queue forming':'Seats available'}`;
  });
}
