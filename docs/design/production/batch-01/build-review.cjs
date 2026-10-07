// Technical presentation only. No tracing, path creation, redrawing or AI regeneration.
const fs=require('fs'), path=require('path'), crypto=require('crypto');
const sharp=require('sharp'), {chromium}=require('playwright');
const root=path.resolve(__dirname,'../../../..');
const out=path.join(root,'assets/brand/batch-01/review');
const srcDir=path.join(root,'assets/brand/batch-01/source');
const original=process.argv[2] || 'C:/Users/Xpike/Desktop/references/Kavriva_L05A.png';
const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');
const data=b=>'data:image/png;base64,'+b.toString('base64');
const tokens={white:'#FFFFFF',ink:'#101828',text:'#344054',line:'#D0D5DD',surface:'#F7F8FC',indigo:'#4F46E5',electric:'#4355E8',dark:'#0C111D',mono:'#000000'};
async function main(){
fs.mkdirSync(out,{recursive:true}); fs.mkdirSync(srcDir,{recursive:true});
const originalBytes=fs.readFileSync(original);
fs.writeFileSync(path.join(srcDir,'Kavriva_L05A.png'),originalBytes);
const {data:raw,info}=await sharp(originalBytes).removeAlpha().raw().toBuffer({resolveWithObject:true});
function bounds(roi){
 let minX=Infinity,minY=Infinity,maxX=-1,maxY=-1;
 for(let y=roi.top;y<roi.top+roi.height;y++)for(let x=roi.left;x<roi.left+roi.width;x++){
   const k=(y*info.width+x)*3;
   if((raw[k]+raw[k+1]+raw[k+2])/3<128){minX=Math.min(minX,x);minY=Math.min(minY,y);maxX=Math.max(maxX,x);maxY=Math.max(maxY,y);}
 }
 return {left:minX,top:minY,width:maxX-minX+1,height:maxY-minY+1};
}
const masterBox=bounds({left:140,top:220,width:1180,height:390});
const symbolBox=bounds({left:140,top:220,width:390,height:390});
// Keep a 3px edge guard beyond measured dark-pixel bounds; no threshold is applied to output pixels.
const guard=b=>({left:b.left-3,top:b.top-3,width:b.width+6,height:b.height+6});
const masterCrop=guard(masterBox),symbolCrop=guard(symbolBox);
const master=await sharp(originalBytes).extract(masterCrop).png().toBuffer();
const symbol=await sharp(originalBytes).extract(symbolCrop).png().toBuffer();
const nativeNames={master:'BRAND-01__kavriva-master-logo__reference-crop__v01.png',symbol:'BRAND-05__kavriva-k-symbol__reference-crop__v01.png'};
fs.writeFileSync(path.join(out,nativeNames.master),master);
fs.writeFileSync(path.join(out,nativeNames.symbol),symbol);
const expectedM=await sharp(originalBytes).extract(masterCrop).removeAlpha().raw().toBuffer();
const actualM=await sharp(master).removeAlpha().raw().toBuffer();
const expectedS=await sharp(originalBytes).extract(symbolCrop).removeAlpha().raw().toBuffer();
const actualS=await sharp(symbol).removeAlpha().raw().toBuffer();
let mass=0,mx=0,my=0;
for(let y=0;y<symbolBox.height;y++)for(let x=0;x<symbolBox.width;x++){
 const i=((symbolBox.top+y)*info.width+symbolBox.left+x)*3;
 const weight=1-(raw[i]+raw[i+1]+raw[i+2])/(3*255);
 mass+=weight;mx+=x*weight;my+=y*weight;
}
const centroid={x:mx/mass,y:my/mass};
const unit=symbolBox.height/4;
const ratio=masterCrop.width/masterCrop.height;
const fontcss=['Manrope','Inter'].map(f=>`@font-face{font-family:'${f}';src:url(data:font/ttf;base64,${fs.readFileSync(path.join(__dirname,'fonts',f+'.ttf')).toString('base64')}) format('truetype');font-weight:100 900;}`).join('');
const defs=`<defs><style>${fontcss} text{font-family:Inter;fill:${tokens.ink}} .display{font-family:Manrope;font-weight:650} .label{font-weight:600;letter-spacing:1.5px} .muted{fill:${tokens.text}} .accent{fill:${tokens.indigo}}</style><filter id="reverse" color-interpolation-filters="sRGB"><feComponentTransfer><feFuncR type="linear" slope="-1" intercept="1"/><feFuncG type="linear" slope="-1" intercept="1"/><feFuncB type="linear" slope="-1" intercept="1"/></feComponentTransfer></filter><filter id="white-mask" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 -0.2126 -0.7152 -0.0722 0 1"/></filter><image id="master" width="${masterCrop.width}" height="${masterCrop.height}" href="${data(master)}"/><image id="symbol" width="${symbolCrop.width}" height="${symbolCrop.height}" href="${data(symbol)}"/></defs>`;
const text=(x,y,t,size=20,cls='',fill)=>`<text x="${x}" y="${y}" font-size="${size}" class="${cls}"${fill?` style="fill:${fill}"`:''}>${esc(t)}</text>`;
const rect=(x,y,w,h,fill,stroke='none',r=0)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}"/>`;
const line=(x1,y1,x2,y2,color=tokens.line,dash='')=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="1"${dash?` stroke-dasharray="${dash}"`:''}/>`;
const mark=(kind,x,y,w,mode='light')=>`<use href="#${kind}" transform="translate(${x} ${y}) scale(${w/(kind==='master'?masterCrop.width:symbolCrop.width)})"${mode==='dark'?' filter="url(#reverse)"':mode==='indigo'?' filter="url(#white-mask)"':''}/>`;
const head=(id,title,sub)=>rect(0,0,1600,1400,tokens.surface)+text(64,66,`${id}  /  BATCH 01`,18,'label accent')+text(64,126,title,46,'display')+text(64,165,sub,20,'muted')+text(1310,66,'REVIEW · v01',18,'label')+line(64,195,1536,195);
const foot=(y)=>line(64,y,1536,y)+text(64,y+37,'Kaynak: Kavriva L05A  ·  Logo geometrisi ve mevcut wordmark korunur.',16,'muted')+text(64,y+64,'Raster referans sunumu · Vektör kaynak gerekli · Figma aktarımı Pending',16,'muted');
const svg=(w,h,body)=>`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><title>Kavriva master brand — Review</title>${defs}${body}</svg>`;
const files=[];
function save(id,short,variant,w,h,body){const name=`${id}__${short}__${variant}__v01.svg`;fs.writeFileSync(path.join(out,name),svg(w,h,body));files.push({id,name,w,h});return name;}
// Presentation variants retain one source crop and one uniform scale.
save('BRAND-01','kavriva-master-logo','light-reference',masterCrop.width+168,masterCrop.height+168,rect(0,0,masterCrop.width+168,masterCrop.height+168,'#FFFFFF')+mark('master',84,84,masterCrop.width));
save('BRAND-01','kavriva-master-logo','dark-reference',masterCrop.width+168,masterCrop.height+168,rect(0,0,masterCrop.width+168,masterCrop.height+168,'#000000')+mark('master',84,84,masterCrop.width,'dark'));
for(const mode of ['light','dark','indigo']){
 const pad=84,w=symbolCrop.width+pad*2,h=symbolCrop.height+pad*2;
 save('BRAND-05','kavriva-k-symbol',mode+'-reference',w,h,rect(0,0,w,h,mode==='light'?tokens.white:mode==='dark'?tokens.mono:tokens.indigo)+mark('symbol',pad,pad,symbolCrop.width,mode));
}
let body=head('BRAND-01','Kavriva master logo','Mevcut K sembolü + mevcut wordmark · tek kaynak, değişmeyen ilişki');
body+=rect(64,230,720,534,tokens.white,tokens.line,16)+rect(816,230,720,534,tokens.mono,'none',16);
body+=text(96,275,'01 / POZİTİF',16,'label muted')+text(848,275,'02 / TERS MONOKROM',16,'label',tokens.white);
body+=mark('master',124,402,600)+mark('master',876,402,600,'dark');
body+=text(96,716,'Orijinal raster pikseller · siyah / beyaz',18,'muted')+text(848,716,'Aynı crop · yalnız RGB tersleme',18,'',tokens.white);
body+=text(64,820,'Sembol–wordmark aralığı korunur.',26,'display')+text(64,861,'Yeni fontla yeniden dizim, şekil düzeltmesi veya ürün etiketi uygulanmadı.',20,'muted');
body+=text(64,905,`Native crop: ${masterCrop.width} × ${masterCrop.height} px · uniform scale only`,18,'muted');
body+=foot(945);
save('BRAND-01','kavriva-master-logo','review-board',1600,1040,body);
body=head('BRAND-01','Master logo · küçük boyut','Aynı kaynak ve oran · uygulama minimumu için inceleme önerisi');
for(let i=0;i<3;i++){
 const w=[160,240,320][i],x=64+i*500;
 body+=rect(x,230,472,270,tokens.white,tokens.line,16)+text(x+28,272,`${w} PX / LIGHT`,16,'label muted')+mark('master',x+(472-w)/2,330,w);
 body+=rect(x,532,472,270,tokens.mono,'none',16)+text(x+28,574,`${w} PX / DARK`,16,'label',tokens.white)+mark('master',x+(472-w)/2,632,w,'dark');
}
body+=text(64,863,'Öneri: master logo genişliği en az 160 px.',26,'display')+text(64,902,'Daha dar alanlarda BRAND-05 symbol-only referansını değerlendir.',19,'muted')+foot(945);
save('BRAND-01','kavriva-master-logo','small-size-review',1600,1040,body);
body=head('BRAND-05','K sembolü','Master logodan ayrılan aynı raster geometri · arka plan ve canvas incelemesi');
const modes=['light','dark','indigo'];
for(let i=0;i<3;i++){
 const x=64+i*500,mode=modes[i],bg=mode==='light'?tokens.white:mode==='dark'?tokens.mono:tokens.indigo,fg=mode==='light'?tokens.text:tokens.white;
 body+=rect(x,230,472,410,bg,mode==='light'?tokens.line:'none',16)+text(x+28,272,['BEYAZ','SİYAH','INDIGO / REFERANS'][i],16,'label',fg);
 body+=mark('symbol',x+126,323,220,mode)+text(x+28,610,'Aynı silhouette · aynı oran',18,'',fg);
}
body+=text(64,702,'Küçük boyut davranışı',27,'display')+text(64,739,'16 px inceleme sınırı; 24 px ve üzeri için görsel değerlendirme.',19,'muted');
const sizes=[16,24,32,48,64];
for(let i=0;i<sizes.length;i++){
 const x=64+i*210,s=sizes[i];
 body+=rect(x,778,184,137,tokens.white,tokens.line,8)+mark('symbol',x+(184-s)/2,805,s)+text(x+63,891,`${s} px`,18,'muted');
}
body+=text(1156,814,'Optik düzeltme:',18,'label')+text(1156,849,'0 px önerisi',24,'display')+text(1156,885,'Geometriye müdahale yok.',16,'muted');
body+=foot(951);
save('BRAND-05','kavriva-k-symbol','review-board',1600,1040,body);
body=head('BRAND-06','Master brand calibration','Geometri · clear space · hizalama · monokrom · küçük boyut');
body+=rect(64,228,1472,292,tokens.white,tokens.line,16)+text(96,271,'01 / IMMUTABLE REFERENCE',16,'label muted')+mark('master',500,285,600);
body+=text(96,490,'Logo ve wordmark: onaylı L05A referansı',17,'muted');
body+=rect(64,552,720,410,tokens.white,tokens.line,16)+rect(816,552,720,410,tokens.white,tokens.line,16);
body+=text(96,596,'02 / CLEAR SPACE',16,'label accent')+text(848,596,'03 / OPTICAL ALIGNMENT',16,'label accent');
const sx=334,sy=650,sw=180,sh=sw*symbolCrop.height/symbolCrop.width,q=sw/4;
body+=rect(sx-q,sy-q,sw+q*2,sh+q*2,'none',tokens.indigo)+rect(sx,sy,sw,sh,'none',tokens.line)+mark('symbol',sx,sy,sw);
body+=text(sx-q+7,sy-16,'x',18,'accent')+text(sx+sw+18,sy+sh/2,'x',18,'accent');
body+=text(96,917,'Öneri: x = K yüksekliği / 4 · her yönde en az x',18,'muted');
const ax=1050,ay=657,aw=240,ah=aw*symbolCrop.height/symbolCrop.width;
body+=mark('symbol',ax,ay,aw)+line(ax+aw/2,630,ax+aw/2,924,tokens.indigo,'4 5')+line(1005,ay+ah/2,1356,ay+ah/2,tokens.indigo,'4 5');
body+=text(848,917,'Bounding-box merkezi · optik offset önerisi 0 px',18,'muted');
body+=rect(64,994,720,277,tokens.mono,'none',16)+text(96,1039,'04 / BLACK + WHITE',16,'label',tokens.white)+mark('master',145,1086,558,'dark');
body+=rect(816,994,720,277,tokens.white,tokens.line,16)+text(848,1039,'05 / SYMBOL-ONLY · 1× SIZE TEST',16,'label muted');
for(let i=0;i<sizes.length;i++){const s=sizes[i],x=880+i*122;body+=mark('symbol',x+(80-s)/2,1096,s)+text(x+18,1202,`${s} px`,16,'muted');}
body+=text(848,1243,'16 px sınırda · 24 px+ aday · redraw yok',17,'muted');
body+=foot(1300);
save('BRAND-06','master-brand-calibration','usage-board',1600,1400,body);
// Render the editable SVG source to review-only PNGs. Native logo pixels stay embedded.
const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
const page=await browser.newPage({deviceScaleFactor:1});
for(const f of files){
 await page.setViewportSize({width:f.w,height:f.h});
 await page.setContent(`<html><head><style>html,body{margin:0;padding:0;}svg{display:block;}</style></head><body>${fs.readFileSync(path.join(out,f.name),'utf8')}</body></html>`);
 await page.evaluate(()=>document.fonts.ready);
 await page.screenshot({path:path.join(out,f.name.replace('.svg','.png')),fullPage:false});
}
await browser.close();
const qa={source:{sha256:hash(originalBytes),width:info.width,height:info.height},crops:{master:masterCrop,symbol:symbolCrop},measuredBounds:{master:masterBox,symbol:symbolBox},
 nativeCropPixelEquality:{master:expectedM.equals(actualM),symbol:expectedS.equals(actualS)},
 pixelHashes:{master:hash(actualM),symbol:hash(actualS)},
 geometryOperations:{trace:false,redraw:false,simplify:false,nonUniformScale:false,aiRegeneration:false},
 centroid,proposedClearSpace:{unit:'K height / 4',sourcePixels:unit,status:'Review proposal'},
 proposedOpticalOffset:{x:0,y:0,status:'Review proposal; bbox centered'},
 backgroundPresentation:{light:'original pixels',dark:'channel inversion; no spatial transform',indigo:'white luminance-mask presentation; no threshold, no spatial transform'},
 fonts:['Manrope','Inter'],svgClassification:'Editable presentation container with embedded PNG; NOT vector logo',
 figma:'Pending',approvedBy:null,status:'Review',files:files.flatMap(f=>[f.name,f.name.replace('.svg','.png')]).concat(Object.values(nativeNames))};
fs.writeFileSync(path.join(__dirname,'geometry-qa.json'),JSON.stringify(qa,null,2)+'\n');
fs.writeFileSync(path.join(__dirname,'presentation-tokens.json'),JSON.stringify({status:'Review; presentation values only, not locked production tokens',colors:tokens,typography:{heading:'Manrope',body:'Inter'}},null,2)+'\n');
console.log(JSON.stringify({out,source:qa.source,crops:qa.crops,pixelEquality:qa.nativeCropPixelEquality,centroid,files:qa.files},null,2));
}
main().catch(e=>{console.error(e);process.exit(1)});
