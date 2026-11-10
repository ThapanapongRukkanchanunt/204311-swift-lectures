// Zero-based bullet associations. Unlisted equal-length sequences pair by order.
// Several parts of a diagram may explain the same bullet and reveal together.
export const imageSteps={
 inclusive:[0,0,0],permission:[1,1,2],
 'w02-inversion-of-control':[1,1,2],'w02-recompute-not-relaunch':[1,1,3],
 'w02-source-of-truth':[0,1,1],'w02-state-owner':[2,2,2],
 'w03-need':[1,2,3],'w03-pitch-1':[0,0,0],'w03-pitch-8':[0,0,0],
 'w04-tree':[0,1,1],'w04-type':[0,1,2],
 'w04-reading':[0,0,1],
 'w05-owner':[0,1],'w05-feedback':[2,0],'w05-cancel':[2,3],
 'w05-privacy':[0,1],
 'w06-add':[0,1,2],'w06-edit':[0,1,3],
 'w07-sheet':[1,2],'w07-map':[0,1,2],
 'w08-derived':[0,0,2],
 'w09-context':[0,1,3],'w09-fixtures':[0,1],'w09-relaunch':[1,2,3],
 'w10-resources':[0,0,1],
 'w11-representation':[2,1],
 'w12-cancel':[1,1,2],'w12-retry':[1,1,0],'w12-fixture':[0,1,2],
 'w13-identity':[0,1,2],'w13-configuration':[0,2],
 'w13-sync':[0,0,1],'w13-conflict':[0,0,1],
 'w14-isolation':[0,0],
 'w15-candidate':[0,1,3],'w15-configuration':[0,1],
 'w15-demo':[0,1,3]
};

export function prepareFragments(slide){
 // Supporting information joins the final logical reveal (not an extra click).
 // Keep nested bullets within a final box together to avoid hidden-parent steps.
 const finalBoxes=[...slide.querySelectorAll('.prompt, .takeaway, [data-reveal-last], .card.mint')]
  .filter(el=>!el.closest('.cards'))
  .filter((el,_,boxes)=>!boxes.some(parent=>parent!==el&&parent.contains(el)));
 const inFinalBox=el=>finalBoxes.some(box=>box.contains(el));
 const points=[...slide.querySelectorAll('li, .cards > .card, .criteria > div, tbody > tr')].filter(el=>!inFinalBox(el));
 const add=(item,index)=>{item.classList.add('fragment','fade-up');item.dataset.fragmentIndex=String(index);};
 points.forEach(add);
 // Draft-specific visuals follow the bullet they explain, without extra steps.
 if(slide.id==='ergonomics')slide.querySelectorAll('.people-pair svg').forEach((el,i)=>add(el,Math.min(i,points.length-1)));
 if(['primary-task','adaptation','comfortable-reach','purposeful-permission'].includes(slide.id))slide.querySelectorAll('.demo-phone').forEach(el=>add(el,0));
 const nodes=[...slide.querySelectorAll('.illustration-node')].filter(el=>!inFinalBox(el));
 const mapping=imageSteps[slide.id];
 nodes.forEach((node,i)=>add(node,points.length?Math.min(mapping?.[i]??i,points.length-1):i));
 // The caption summarizes the completed illustration; it is not another point.
 if(nodes.length){const caption=slide.querySelector('.teaching-illustration figcaption');if(caption)add(caption,Math.max(...nodes.map(n=>Number(n.dataset.fragmentIndex))));}
 // A single photograph/diagram supports the whole explanation, beginning at point 1.
 const evidence=slide.querySelector('.visual-evidence');if(evidence&&points.length)add(evidence,0);
 const last=Math.max(0,...[...slide.querySelectorAll('.fragment')].map(el=>Number(el.dataset.fragmentIndex)));
 finalBoxes.forEach(box=>add(box,last));
}

export function fragmentProgress(slide){
 const fragments=[...slide.querySelectorAll('.fragment')];
 const groups=new Set(fragments.map(f=>f.dataset.fragmentIndex));
 const visible=new Set(fragments.filter(f=>f.classList.contains('visible')).map(f=>f.dataset.fragmentIndex));
 return {total:groups.size,revealed:visible.size};
}
