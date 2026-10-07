const {root,T,fs,path}=require('./shared.cjs');const sharp=require('sharp'),crypto=require('crypto');
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const read=name=>JSON.parse(fs.readFileSync(path.join(__dirname,name),'utf8').replace(/^\uFEFF/,''));
const lumi=hex=>{const rgb=hex.slice(1).match(/../g).map(h=>parseInt(h,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return rgb[0]*.2126+rgb[1]*.7152+rgb[2]*.0722;};
const contrast=(a,b)=>{const v=[lumi(a),lumi(b)].sort((a,b)=>b-a);return +((v[0]+.05)/(v[1]+.05)).toFixed(2);};
async function main(){
const app=read('batch-03-qa.json'),sets=[read('batch-04-icon-01-qa.json'),read('batch-05-icon-02-qa.json'),read('batch-05-icon-03-qa.json')];
const decisions=JSON.parse(fs.readFileSync(path.join(root,'docs/design/production/batch-02/owner-decisions.json'),'utf8'));
if(!decisions.canonicalDirection.startsWith('A'))throw Error('Canonical direction not A');
const source=fs.readFileSync(path.join(root,'assets/brand/batch-01/source/Kavriva_L05A.png'));
const k=fs.readFileSync(path.join(root,'assets/brand/batch-01/review/BRAND-05__kavriva-k-symbol__reference-crop__v01.png'));
const master=fs.readFileSync(path.join(root,'assets/brand/batch-01/review/BRAND-01__kavriva-master-logo__reference-crop__v01.png'));
const allowedImageHashes=new Set([sha(k),sha(master)]);const fileEvidence=[];
for(const file of app.files){const p=path.join(root,'assets/app/batch-03/review',file),b=fs.readFileSync(p);if(file.endsWith('.svg')){const s=b.toString();for(const m of s.matchAll(/data:image\/png;base64,([A-Za-z0-9+/=]+)/g)){if(!allowedImageHashes.has(sha(Buffer.from(m[1],'base64'))))throw Error('Unexpected logo image '+file);}if(file.startsWith('APP-04')&&(!s.includes('font-size:57.6px')||!s.includes('x="410"')||!s.includes('y="357.475"')))throw Error('Direction A drift '+file);}fileEvidence.push({file,sha256:sha(b)});}
const variantCounts={};let vectors=0;const palette=new Set([T.ink,T.indigo,T.white,T.border,T.dark]);
for(const set of sets){
 if(set.grammarHash!==sets[0].grammarHash)throw Error('Grammar drift');
 const dir=path.join(root,`assets/icons/batch-${String(set.batch).padStart(2,'0')}/review`);
 for(const name of set.names){let lightOutlineGeometry=null;
 for(const state of ['outline','active','outline-dark','active-dark']){
  const f=`${set.assetId}__${name}__${state}__v01.svg`,s=fs.readFileSync(path.join(dir,f),'utf8');
  if(/<image|data:image|<text/.test(s))throw Error('Raster/text glyph '+f);
  if(!s.includes('stroke-width="1.75"')||!s.includes('stroke-linecap="round"')||!s.includes('stroke-linejoin="round"'))throw Error('Style drift '+f);
  for(const h of s.match(/#[A-Fa-f0-9]{6}/g)||[])if(!palette.has(h.toUpperCase()))throw Error('Unexpected palette '+f);
  const shapes=[...s.matchAll(/<(path|circle|rect)\b[^>]+>/g)].map(m=>m[0].replace(/\s(?:fill|stroke)="[^\"]+"/g,'')).join('');
  if(state==='outline')lightOutlineGeometry=shapes;
  if(state==='outline-dark'&&shapes!==lightOutlineGeometry)throw Error('Dark geometry drift '+f);
  vectors++;
 }
 }
 variantCounts[set.assetId]={glyphs:set.count,vectorVariants:set.count*4};
 if(!set.bounds.every(b=>b.viewportSafe))throw Error('Glyph viewport failed');
}
const expectedAcademic=['turkish','mathematics','history','geography','citizenship','current-affairs','gy-gk-overview','question-solving','topic-learning','revision','full-mock-exam','analysis','time-management','accuracy','difficulty','concept-mastery','progress'];
if(JSON.stringify(sets[1].names)!==JSON.stringify(expectedAcademic))throw Error('Academic scope mismatch');
const png=await sharp(path.join(root,'assets/app/batch-03/review/APP-02__kavriva-kpss-maskable__safe-512__v01.png')).ensureAlpha().raw().toBuffer();let opaque=true;for(let i=3;i<png.length;i+=4)if(png[i]!==255)opaque=false;
const result={status:'Review',batch02:'Direction A Approved for Design Direction',newAssetIds:['APP-01','APP-02','APP-03','APP-04','ICON-01','ICON-02','ICON-03'],sourceHash:sha(source),sourceHashMatches:sha(source)===app.sourceHash,kHashMatches:sha(k)===app.kSymbolHash,canonicalDirectionAPass:true,indigo:T.indigo,maskable:{...app.maskable,opaquePixelCheck:opaque},grammarHash:sets[0].grammarHash,grammarMatches:true,variantCounts,nativeVectorGlyphVariants:vectors,academicScope:'GY/GK; no Education Sciences',thirdPartyLibraries:[],contrast:{whiteIndigo:contrast(T.white,T.indigo),inkWhite:contrast(T.ink,T.white),inkSurface:contrast(T.ink,T.surface),neutralDark:contrast(T.border,T.dark),whiteDark:contrast(T.white,T.dark)},visualQA:'App board, global, academic, gamification sheets inspected; no remaining overlap or clipping',limitations:['16px favicon limited detail, geometry unchanged','16px complex UI glyphs need label/context; 20/24px recommended','Logo/app K remain raster-embedded; original vector source needed','Filled cutout colors are surface-specific light/dark examples; bind to Surface tokens in Figma','Figma Pending; no product implementation or component creation'],ownerStyleLockApproval:'Pending',stopBeforeBatch:6,fileEvidence};
if(!result.sourceHashMatches||!result.kHashMatches||!opaque||!app.maskable.pass)throw Error('Cross-style QA failed');
fs.writeFileSync(path.join(__dirname,'cross-style-qa.json'),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify({newAssetIds:result.newAssetIds,grammarMatches:true,variantCounts,nativeVectorGlyphVariants:vectors,maskable:result.maskable,contrast:result.contrast,sourceHashMatches:true},null,2));
}
main().catch(e=>{console.error(e);process.exit(1)});
