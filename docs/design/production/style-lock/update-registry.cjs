const fs=require('fs'),path=require('path');const root=path.resolve(__dirname,'../../../..');
const cpath=path.join(root,'docs/design/KAVRIVA_KPSS_ASSET_CHECKLIST.md');let content=fs.readFileSync(cpath,'utf8');
const ids=['APP-01','APP-02','APP-03','APP-04','ICON-01','ICON-02','ICON-03'];
for(const id of ids){content=content.replace(new RegExp(`^\\| ${id} \\|[^\\r\\n]+`,'m'),line=>{const c=line.split('|');c[4]=' 🟦 Review ';c[7]=' Owner style-lock review Pending ';c[8]=id.startsWith('ICON')?' True vector + grammar QA passed ':' Raster K preserved; app QA passed ';c[9]=' Pending ';c[10]=id.startsWith('ICON')?' Pending Owner approval / handoff ':' Final Production Vector Export = Pending ';c[11]=' Style Lock Pack B03–05; no intermediate owner gate per 2026-10-07 instruction. See production/style-lock/STYLE_LOCK_REVIEW_PACK.md. ';return c.join('|');});}
fs.writeFileSync(cpath,content);
const previous=JSON.parse(fs.readFileSync(path.join(root,'docs/design/production/batch-02/asset-registry.json'),'utf8').replace(/^\uFEFF/,''));
const app=JSON.parse(fs.readFileSync(path.join(__dirname,'batch-03-qa.json'),'utf8'));
for(const a of previous.assets){if(!ids.includes(a.assetId))continue;const icon=a.assetId.startsWith('ICON');let files;if(icon){const batch=a.assetId==='ICON-01'?4:5;const q=JSON.parse(fs.readFileSync(path.join(__dirname,`batch-${String(batch).padStart(2,'0')}-${a.assetId.toLowerCase()}-qa.json`)));files=q.files;a.nativeVector=true;a.grammarHash=q.grammarHash;}else{files=app.files.filter(f=>f.startsWith(a.assetId+'__'));a.nativeVector=false;}a.status='Review';a.version='v01';a.approvedBy=null;a.source=icon?'docs/design/production/style-lock/icon-grammar.cjs':'assets/brand/batch-01/source/Kavriva_L05A.png';a.exportFormats=icon?['vector SVG','review sheet PNG']:['raster-embedded SVG','review PNG'];a.reviewFiles=files;a.figma='Pending';a.finalProductionVectorExport=icon?'Native vector source available; final handoff Pending Owner approval':'Pending';a.finalExportRef=null;}
const registry={date:'2026-10-07',scope:'Current local Asset Registry — Style Lock Pack',figma:'Pending; no Figma write',ownerStyleLockApproval:'Pending',stopBeforeBatch:6,assets:previous.assets};
if(registry.assets.length!==87||new Set(registry.assets.map(a=>a.assetId)).size!==87)throw Error('Registry mismatch');
fs.writeFileSync(path.join(__dirname,'asset-registry.json'),JSON.stringify(registry,null,2)+'\n');
const counts=registry.assets.reduce((o,a)=>(o[a.status]=(o[a.status]||0)+1,o),{});
if(counts['Approved for Design Direction']!==6||counts.Review!==7||counts.Planned!==74)throw Error('Unexpected status drift');
console.log(JSON.stringify({counts,total:registry.assets.length},null,2));
