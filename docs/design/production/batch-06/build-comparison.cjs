const {root,T,txt,rect,svg,header,renderer,fs,path}=require('../style-lock/shared.cjs');
const sharp=require('sharp'),crypto=require('crypto');
const manifest=JSON.parse(fs.readFileSync(path.join(__dirname,'generation-manifest.json'),'utf8'));
const out=path.join(root,'assets/categories/batch-06/review'),archive=path.join(root,'assets/categories/batch-06/archive/rejected-iterations');
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const labels={'CAT-01':'Matematik','CAT-03':'Tarih','CAT-04':'Coğrafya'},styles={a:'Geometric Editorial',b:'Structured Isometric Lite',c:'Abstract Data / Knowledge'};
async function main(){fs.mkdirSync(out,{recursive:true});fs.mkdirSync(archive,{recursive:true});const evidence=[];
for(const entry of [...manifest.selected,...manifest.rejected]){
 const bytes=fs.readFileSync(entry.sourcePath),dir=manifest.selected.includes(entry)?out:archive,dest=path.join(dir,entry.filename);
 if(fs.existsSync(dest)&&sha(fs.readFileSync(dest))!==sha(bytes))throw Error('Existing version differs: '+entry.filename);
 fs.copyFileSync(entry.sourcePath,dest);
 if(manifest.selected.includes(entry)){
  const m=await sharp(bytes).metadata(),{data,info}=await sharp(bytes).ensureAlpha().raw().toBuffer({resolveWithObject:true});
  let zero=0,semi=0,opaque=0,minX=info.width,minY=info.height,maxX=-1,maxY=-1;
  const paletteBins=new Map();
  for(let y=0;y<info.height;y++)for(let x=0;x<info.width;x++){const i=(y*info.width+x)*4,a=data[i+3];if(a===0)zero++;else if(a===255)opaque++;else semi++;if(a>16){minX=Math.min(minX,x);minY=Math.min(minY,y);maxX=Math.max(maxX,x);maxY=Math.max(maxY,y);}
   if(a>240&&data[i+2]>data[i]+20&&data[i+2]>data[i+1]+20){const key=[data[i],data[i+1],data[i+2]].map(c=>Math.min(255,Math.round(c/16)*16)).join(',');paletteBins.set(key,(paletteBins.get(key)||0)+1);}}
  if(!m.hasAlpha||zero===0)throw Error('No true transparency '+entry.filename);
  evidence.push({assetId:entry.assetId,direction:entry.direction,file:entry.filename,width:m.width,height:m.height,hasAlpha:m.hasAlpha,sha256:sha(bytes),sourceCopyExact:sha(bytes)===sha(fs.readFileSync(dest)),transparentFraction:zero/(info.width*info.height),semiTransparentFraction:semi/(info.width*info.height),alphaBounds16:{x:minX,y:minY,w:maxX-minX+1,h:maxY-minY+1},dominantQuantizedIndigoBins:[...paletteBins.entries()].sort((a,b)=>b[1]-a[1]).slice(0,3)});
 }
}
const r=await renderer();
const image=(entry,x,y,size)=>`<image x="${x}" y="${y}" width="${size}" height="${size}" preserveAspectRatio="xMidYMid meet" href="data:image/png;base64,${fs.readFileSync(path.join(out,entry.filename)).toString('base64')}"/>`;
let body=rect(0,0,1800,1960,T.surface)+header('CAT-01 · CAT-03 · CAT-04','Batch 06 · Illustration grammar','A / B / C · dokuz exploration · eşit frame, aynı ölçek ve aynı nötr yüzey',1800).replace('STYLE LOCK REVIEW','ILLUSTRATION DIRECTION REVIEW');
['CAT-01','CAT-03','CAT-04'].forEach((id,i)=>body+=txt(64+i*564+205,228,labels[id],24,T.ink,650,'Manrope'));
for(let row=0;row<3;row++){
 const dir=['a','b','c'][row],nameY=278+row*520,cardY=302+row*520;
 body+=txt(64,nameY,`${dir.toUpperCase()} — ${styles[dir]}`,23,T.indigo,650,'Manrope');
 for(let col=0;col<3;col++){const id=['CAT-01','CAT-03','CAT-04'][col],entry=manifest.selected.find(e=>e.assetId===id&&e.direction===dir),x=64+col*564;
  body+=rect(x,cardY,544,470,T.white,T.border,14)+image(entry,x+62,cardY+8,420)+txt(x+20,cardY+449,`${id} · Direction ${dir.toUpperCase()} · Exploration / Review`,16);
 }
}
body+=txt(64,1889,'Görsel içi gerçek UI metni/logo yok · raster exploration · direction seçimi ve Figma Pending',18)+txt(64,1928,'CAT-02 / CAT-05 / CAT-06 / CAT-07 üretilmedi · Batch 07 ve parallel tracks başlamadı',18);
const comparison='CAT-01__illustration-comparison__abc__v01';const s=svg(1800,1960,body,'',true);fs.writeFileSync(path.join(out,comparison+'.svg'),s);await r.render(s,path.join(out,comparison+'.png'),1800,1960);
// Technical preview composition only: original pixels and alpha are unchanged.
let pbody=rect(0,0,1800,1230,T.surface)+header('CAT-01 · CAT-03 · CAT-04','Mobile / dark compatibility','Her hücre: 96 px light + 96 px dark · ham alpha korunur · final dark varyant değildir',1800).replace('STYLE LOCK REVIEW','ILLUSTRATION DIRECTION REVIEW');
for(let row=0;row<3;row++){
 const dir=['a','b','c'][row],y=228+row*300;pbody+=txt(64,y,`${dir.toUpperCase()} — ${styles[dir]}`,23,T.indigo,650,'Manrope');
 for(let col=0;col<3;col++){
 const id=['CAT-01','CAT-03','CAT-04'][col],entry=manifest.selected.find(e=>e.assetId===id&&e.direction===dir),x=64+col*564;
 pbody+=rect(x,y+28,544,222,T.white,T.border,12)+txt(x+20,y+57,`${id} / ${labels[id]}`,17,T.ink,600)+rect(x+290,y+82,176,130,T.dark,'none',8)+image(entry,x+80,y+94,96)+image(entry,x+330,y+94,96)+txt(x+92,y+237,'Light',14)+txt(x+342,y+237,'Dark',14,T.text);
 }
}
pbody+=txt(64,1179,'96 px karşılaştırma · alpha edge/shadow ve ince çizgiler selection sonrası optimize edilecek',18);
const preview='CAT-01__illustration-mobile-dark__abc__v01';const ps=svg(1800,1230,pbody,'',true);fs.writeFileSync(path.join(out,preview+'.svg'),ps);await r.render(ps,path.join(out,preview+'.png'),1800,1230);await r.close();
const originalBrandHash=sha(fs.readFileSync(path.join(root,'assets/brand/batch-01/source/Kavriva_L05A.png')));
const qa={status:'Exploration / Review',ownerDirectionSelection:null,approvedBy:null,selectedCount:evidence.length,rejectedIterationCount:manifest.rejected.length,assetIds:[...new Set(evidence.map(e=>e.assetId))],tool:'Built-in image_gen',comparison:{frame:{w:544,h:470},imageBox:{w:420,h:420},background:T.white,uniformCanvasScale:true,originalPixelsEdited:false,originalAlphaPreserved:true},mobileDark:{sizePx:96,background:T.dark,status:'Compatibility preview only; final theme variants unverified'},sourceBrandHash:originalBrandHash,brandArtworkGenerated:false,otherCategoryIdsGenerated:[],stopBeforeBatch:7,exactFinalIllustrationTokensLocked:false,paletteNote:'Prompt target #4F46E5; raster shading/gradients approximate it. No pixel-perfect token lock claim.',evidence};
if(evidence.length!==9||qa.assetIds.length!==3)throw Error('Scope incomplete');fs.writeFileSync(path.join(__dirname,'exploration-qa.json'),JSON.stringify(qa,null,2)+'\n');console.log(JSON.stringify({selected:9,archivedIterations:manifest.rejected.length,allSourceCopiesExact:evidence.every(e=>e.sourceCopyExact),allHaveAlpha:evidence.every(e=>e.hasAlpha),dimensions:evidence.map(e=>({id:e.assetId,d:e.direction,w:e.width,h:e.height,alpha:+e.transparentFraction.toFixed(3)})),comparison:path.join(out,comparison+'.png')},null,2));}
main().catch(e=>{console.error(e);process.exit(1)});
