// Owner-authorized state update only. Does not produce or alter visual assets.
const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'../../../..'),date='2026-10-07';
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8').replace(/^\uFEFF/,''));
const write=(p,v)=>fs.writeFileSync(path.join(root,p),JSON.stringify(v,null,2)+'\n');
const registry=read('docs/design/production/core-system/asset-registry.json');
const backlog=fs.readFileSync(path.join(root,'docs/design/PRODUCTION_POLISH_BACKLOG.md'),'utf8');const openItems=[...backlog.matchAll(/^\| P-0[1-6] \|[^\r\n]+/gm)];if(openItems.length!==6||openItems.some(m=>!m[0].includes('Open')))throw Error('P01–P06 must remain Open');
const ids=['ACADEMIC','ADMIN','MOTION','SHARE'].flatMap((p,i)=>Array.from({length:[7,4,4,5][i]},(_,n)=>p+'-'+String(n+1).padStart(2,'0')));
const approval='Approved for Design Direction';
const notes={
 'MOTION-03':'Light green peak ring decorative/supporting only. Essential success/status: primary check + editable label/text + accessible semantic UI.',
 'MOTION-02':'Full achievement badge composite recommended48px+. At24px use approved simple core glyph. Kavriva K immutable.',
 'ACADEMIC-02':'Production tests pending: complex typesetting, KaTeX/native math, wrapping, narrow mobile, long Turkish explanations and academic editorial validation.',
 'ACADEMIC-04':'Production tests pending: complex typesetting, KaTeX/native math, wrapping, narrow mobile, long Turkish explanations and academic editorial validation.'
};
const decision={date,authority:'Explicit Owner — Core System Completion accepted',assetIds:ids,status:approval,acceptanceNotes:notes,shareAcceptance:'SHARE01–05 accepted for direction. Final Production Vector Export Pending until master brand vector source. Dynamic real-data substitution and platform compression tests are final assembly work.',productionPolish:'P01–P06 Open; mandatory before Final Production Export; not closed by this approval',figma:'Pending',finalProductionExport:'Pending',holdBatches:[18,19,21,22],newProductionAuthorized:false};
if(registry.assets.length!==87||new Set(registry.assets.map(a=>a.assetId)).size!==87)throw Error('87 unique registry IDs required');
let checklist=fs.readFileSync(path.join(root,'docs/design/KAVRIVA_KPSS_ASSET_CHECKLIST.md'),'utf8');
const transitions=read('docs/design/production/core-system/state-transitions.json');
for(const id of ids){const a=registry.assets.find(a=>a.assetId===id);if(!a||!['Review',approval].includes(a.status))throw Error('Unexpected source status '+id);if(a.status==='Review')transitions.transitions.push({assetId:id,from:'Review',to:approval,date,authority:'Owner'});
Object.assign(a,{status:approval,approvedBy:'Owner — '+date,designDirectionApproval:'Owner accepted Core System Completion Review Pack',ownerDecisionRef:'docs/design/production/core-system/owner-decision.json',figma:'Pending',finalProductionExport:'Pending',finalExportRef:null});
if(notes[id])a.ownerAcceptanceNotes=notes[id];
if(id.startsWith('SHARE-'))Object.assign(a,{finalProductionVectorExport:'Pending',vectorSource:'source asset needed — Kavriva master brand',ownerAcceptanceNotes:decision.shareAcceptance});
const re=new RegExp('^\\| '+id+' \\|[^\\r\\n]+','m');if(!re.test(checklist))throw Error('Missing checklist '+id);
checklist=checklist.replace(re,line=>{let c=line.split('|');c[4]=' ✅ '+approval+' ';c[7]=' ✅ Owner: Core System accepted ';c[9]=' Pending ';c[10]=id.startsWith('SHARE-')?' Final Production Export = Pending; Final Production Vector Export = Pending ':' Final Production Export = Pending ';c[11]=' Owner Decision '+date+'; acceptance notes: CORE_SYSTEM_COMPLETION_REVIEW_PACK.md. P-01–P-06 Open; final assembly Pending. ';return c.join('|');});}
registry.counts=registry.assets.reduce((o,a)=>(o[a.status]=(o[a.status]||0)+1,o),{});
const planned=registry.assets.filter(a=>a.status==='Planned').map(a=>a.assetId).sort();const marketing=Array.from({length:6},(_,n)=>'MKT-0'+(n+1));
if(registry.counts[approval]!==81||registry.counts.Planned!==6||JSON.stringify(planned)!==JSON.stringify(marketing))throw Error('Expected81approved/6marketing');
const rows=[...checklist.matchAll(/^\| ([A-Z]+-\d{2}) \|[^\r\n]+/gm)];if(rows.length!==87||new Set(rows.map(r=>r[1])).size!==87)throw Error('Checklist87 IDs');for(const r of rows){const a=registry.assets.find(a=>a.assetId===r[1]);if(!r[0].split('|')[4].includes(a.status))throw Error('Checklist/registry mismatch '+a.assetId);}
registry.scope='Current canonical registry — Asset Phase checkpoint';registry.totalAssets=87;registry.duplicateIds=0;registry.ownerDecision='production/core-system/owner-decision.json';registry.ownerDecisionHistory=['production/parallel-production/owner-decisions.json','production/core-system/owner-decision.json'];registry.holdBatches=[18,19,21,22];registry.stopBeforeBatch=18;registry.assetsReviewedThisPhase=20;registry.productionPolish='P-01–P-06 Open';registry.finalProductionExport='Pending';
const manifest=read('docs/design/production/core-system/manifest.json');manifest.status=approval;manifest.ownerDecisionRef='docs/design/production/core-system/owner-decision.json';manifest.registryCounts=registry.counts;for(const a of manifest.assets){a.status=approval;a.approvedBy='Owner — '+date;a.figma='Pending';a.finalProductionExport='Pending';if(a.assetId.startsWith('SHARE-'))a.finalProductionVectorExport='Pending';}
write('docs/design/production/core-system/owner-decision.json',decision);write('docs/design/production/core-system/asset-registry.json',registry);write('docs/design/production/core-system/state-transitions.json',transitions);write('docs/design/production/core-system/manifest.json',manifest);fs.writeFileSync(path.join(root,'docs/design/KAVRIVA_KPSS_ASSET_CHECKLIST.md'),checklist);
write('docs/design/production/core-system/checkpoint-verification.json',{date,total:87,duplicateIds:0,checklistMatchesRegistry:true,approvedForDesignDirection:81,planned:6,plannedIds:planned,figma:'Pending',finalProductionExport:'Pending',polish:'P-01–P-06 Open',batch18_19:'Not started — product screens/stable UI dependency',batch21_22:'Not started',newAssetsProduced:0});console.log(JSON.stringify({total:87,duplicateIds:0,counts:registry.counts,plannedIds:planned}));
