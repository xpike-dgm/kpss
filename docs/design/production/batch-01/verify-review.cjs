const fs=require('fs'),path=require('path'),crypto=require('crypto'),sharp=require('sharp');
const root=path.resolve(__dirname,'../../../..'),out=path.join(root,'assets/brand/batch-01/review');
const qa=JSON.parse(fs.readFileSync(path.join(__dirname,'geometry-qa.json')));
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const luminosity=hex=>{const c=hex.replace('#','').match(/../g).map(h=>parseInt(h,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return .2126*c[0]+.7152*c[1]+.0722*c[2];};
const contrast=(a,b)=>{const l=[luminosity(a),luminosity(b)].sort((x,y)=>y-x);return +((l[0]+.05)/(l[1]+.05)).toFixed(2);};
async function main(){
const src=fs.readFileSync(path.join(root,'assets/brand/batch-01/source/Kavriva_L05A.png'));
if(sha(src)!==qa.source.sha256)throw Error('Source hash mismatch');
const results={sourceHashMatches:true,nativeCropEquality:qa.nativeCropPixelEquality,exportFiles:[],contrast:{whiteOnIndigo:contrast('#FFFFFF','#4F46E5'),whiteOnElectric:contrast('#FFFFFF','#4355E8'),inkOnSurface:contrast('#101828','#F7F8FC'),textOnSurface:contrast('#344054','#F7F8FC')},
  boundsProposals:'clear space H/4, optical offset 0; owner approval required',
  visualReview:'Passed after layout/filter fixes; three review boards and master-size sheet inspected',
  limitations:['Raster grain and antialiasing are retained','16px symbol is marginal; 24px+ proposal only','No true vector logo source','Figma native structure and registry Pending'],approvedBy:null};
for(const f of qa.files){
 if(!/^(BRAND-01|BRAND-05|BRAND-06)__[^/]+__v01\.(svg|png)$/.test(f))throw Error('Filename mismatch '+f);
 const file=path.join(out,f);if(!fs.existsSync(file))throw Error('Missing '+f);
 if(f.endsWith('.svg')){
  const content=fs.readFileSync(file,'utf8');
  if(/<path\b/.test(content))throw Error('Unexpected logo paths');
  if(!content.includes('data:image/png;base64,'))throw Error('Missing source reference');
  if(content.includes('Kavriva KPSS'))throw Error('Product title outside scope');
  results.exportFiles.push({name:f,sha256:sha(fs.readFileSync(file)),classification:'raster-embedded presentation SVG',nativeVectorLogo:false});
 }else{
  const m=await sharp(file).metadata();results.exportFiles.push({name:f,width:m.width,height:m.height,sha256:sha(fs.readFileSync(file))});
 }
}
// Check actual dark PNG pixels against the same source crop, not only the construction recipe.
const sourceCrop=await sharp(src).extract(qa.crops.master).removeAlpha().raw().toBuffer();
const dark=await sharp(path.join(out,'BRAND-01__kavriva-master-logo__dark-reference__v01.png')).extract({left:84,top:84,width:qa.crops.master.width,height:qa.crops.master.height}).removeAlpha().raw().toBuffer();
let maximumError=0;for(let i=0;i<dark.length;i++)maximumError=Math.max(maximumError,Math.abs(dark[i]-(255-sourceCrop[i])));
results.darkInversionPixelCheck={maximumChannelError:maximumError,pass:maximumError<=1};
if(!results.darkInversionPixelCheck.pass)throw Error('Dark presentation altered beyond inversion');
const check=fs.readFileSync(path.join(root,'docs/design/KAVRIVA_KPSS_ASSET_CHECKLIST.md'),'utf8');
const rows=[...check.matchAll(/^\| ([A-Z]+-\d{2}) \|(.+)$/gm)].map(m=>({id:m[1],cells:m[2].split('|').map(s=>s.trim())}));
const pack=fs.readFileSync(path.join(root,'docs/design/KAVRIVA_KPSS_ASSET_PROMPT_PACK.md'),'utf8');
const brief=(id)=>pack.split(new RegExp(`^## .+Asset ID: ${id}[^\\n]*\\n`,'m'))[1].split(/^## /m)[0].trim();
const shared=pack.split('# 0. MASTER CREATIVE DIRECTION')[1].split('# 1. BRAND CORE ASSETS')[0];
fs.writeFileSync(path.join(__dirname,'BRAND-06__batch-01-production-brief__reference__v01.md'), '# Batch 01 — production brief\n\nShared creative direction and canonical briefs. Method: deterministic native PNG crops, SVG composition, reversible channel inversion/luminance mask, uniform scaling and canvas padding. No generative image model or logo tracing used.\n\n# Master Creative Direction'+shared+'\n'+['BRAND-01','BRAND-05','BRAND-06'].map(id=>`# ${id}\n\n${brief(id)}\n`).join('\n'));
const registry=rows.map(r=>({assetId:r.id,name:r.cells[0],status:r.cells[2].replace(/[^A-Za-z /]/g,'').trim(),source:['BRAND-01','BRAND-05','BRAND-06'].includes(r.id)?'assets/brand/batch-01/source/Kavriva_L05A.png':null,version:['BRAND-01','BRAND-05','BRAND-06'].includes(r.id)?'v01':null,approvedBy:null,figma:'Pending',exportFormats:['BRAND-01','BRAND-05','BRAND-06'].includes(r.id)?['review PNG','raster-embedded presentation SVG']:[],promptRef:`docs/design/KAVRIVA_KPSS_ASSET_PROMPT_PACK.md#${r.id}`,reviewFiles:qa.files.filter(f=>f.startsWith(r.id+'__')),finalExportRef:null}));
fs.writeFileSync(path.join(__dirname,'asset-registry.json'),JSON.stringify({figma:'Pending; local registry only',assets:registry},null,2)+'\n');
fs.writeFileSync(path.join(__dirname,'consistency-qa.json'),JSON.stringify(results,null,2)+'\n');
console.log(JSON.stringify({sourceHashMatches:results.sourceHashMatches,nativeCropEquality:results.nativeCropEquality,darkInversion:results.darkInversionPixelCheck,contrast:results.contrast,fileCount:results.exportFiles.length,registryRows:registry.length,limitations:results.limitations},null,2));
}
main().catch(e=>{console.error(e);process.exit(1)});
