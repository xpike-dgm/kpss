const fs = require('fs');
const crypto = require('crypto');
const cp = require('child_process');
const path = require('path');
const root = path.resolve(__dirname, '../../../..');
const names = ['PRODUCT_PLAN.md', ...['ASSET_PROMPT_PACK','ASSET_CHECKLIST','FIGMA_STRUCTURE','AI_BATCH_PLAN'].map(n=>`docs/design/KAVRIVA_KPSS_${n}.md`)];
const sources = names.map(name=>({name, content:fs.readFileSync(path.join(root,name),'utf8')}));
const [product,pack,check,figma,batch] = sources.map(s=>s.content);
const ids = (text,re)=>[...text.matchAll(re)].map(m=>m[1]);
const p=ids(pack,/^##\s+[\d.]+\s+Asset ID:\s+([A-Z]+-\d{2})/gm);
const c=ids(check,/^\|\s+([A-Z]+-\d{2})\s+\|/gm);
const b=ids(batch,/^# BATCH (\d{2})/gm);
const a=ids(batch.split('# BATCH 21')[0],/^- ([A-Z]+-\d{2})/gm);
const duplicates = arr=>[...new Set(arr.filter((x,i)=>arr.indexOf(x)!==i))];
const diff=(x,y)=>x.filter(id=>!y.includes(id));
const block = (id)=>pack.split(new RegExp(`^## .+Asset ID: ${id}[^\\n]*\\n`,'m'))[1].split(/^## /m)[0];
const result={
  promptCount:p.length, checklistCount:c.length,
  duplicates:{prompt:duplicates(p),checklist:duplicates(c),assignments:duplicates(a)},
  differences:{promptChecklist:diff(p,c),checklistPrompt:diff(c,p),promptAssignments:diff(p,a),assignmentsPrompt:diff(a,p)},
  batchCount:b.length, batchSequence:b, assignmentCount:a.length,
  checks:{
    educationSciencesExcluded: block('CAT-07').includes('Do not introduce Education Sciences') && block('ICON-02').includes('Do not include Education Sciences') && !/Education Sciences|Eğitim Bilimleri/.test(figma+batch+check),
    brand06MasterOnly:block('BRAND-06').includes('existing approved Kavriva logo only') && block('BRAND-06').includes('Do not create or show a Kavriva KPSS product lockup'),
    app03GeometryImmutable:block('APP-03').includes('Do not simplify, redraw, reinterpret, or alter the K geometry'),
    sequenceAuthority:pack.includes('TEK OTORİTE: AI BATCH PLAN') && !pack.includes('ÜRETİM SIRASI ÖNERİSİ')
  },
  sourceHashes:Object.fromEntries(sources.map(s=>[s.name,crypto.createHash('sha256').update(s.content).digest('hex')])),
  reviewedCommit:cp.execFileSync('git',['rev-parse','HEAD'],{cwd:root,encoding:'utf8'}).trim(),
  figmaWrite:'Pending', vectorSource:'source asset needed'
};
result.pass=p.length===87 && c.length===87 && a.length===87 && b.length===22 && b.every((x,i)=>x===String(i+1).padStart(2,'0')) && Object.values(result.duplicates).every(x=>!x.length) && Object.values(result.differences).every(x=>!x.length) && Object.values(result.checks).every(Boolean);
fs.writeFileSync(path.join(__dirname,'preflight-evidence.json'),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result,null,2));
if(!result.pass) process.exit(1);
