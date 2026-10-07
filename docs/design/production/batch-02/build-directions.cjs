const fs=require('fs'),path=require('path'),crypto=require('crypto'),sharp=require('sharp'),{chromium}=require('playwright');
const root=path.resolve(__dirname,'../../../..'),out=path.join(root,'assets/brand/batch-02/review');
const b1=path.join(root,'assets/brand/batch-01/review');
const fonts=path.join(__dirname,'../batch-01/fonts');
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const color={surface:'#F7F8FC',white:'#FFFFFF',ink:'#101828',text:'#344054',line:'#D0D5DD',indigo:'#4F46E5',dark:'#000000'};
const dirs=[{key:'a',title:'A · Açık alt etiket',labelRatio:.36,weight:650,tracking:0,tag:false},{key:'b',title:'B · Kompakt ürün etiketi',labelRatio:.32,weight:650,tracking:.04,tag:true},{key:'c',title:'C · Merkezli / aralıklı etiket',labelRatio:.30,weight:600,tracking:.18,tag:false}];
async function main(){
fs.mkdirSync(out,{recursive:true});fs.mkdirSync(__dirname,{recursive:true});
const source=fs.readFileSync(path.join(root,'assets/brand/batch-01/source/Kavriva_L05A.png'));
const master=fs.readFileSync(path.join(b1,'BRAND-01__kavriva-master-logo__reference-crop__v01.png'));
const symbol=fs.readFileSync(path.join(b1,'BRAND-05__kavriva-k-symbol__reference-crop__v01.png'));
const {data:raw,info}=await sharp(source).removeAlpha().raw().toBuffer({resolveWithObject:true});
let x0=Infinity,y0=Infinity,x1=-1,y1=-1;
for(let y=320;y<550;y++)for(let x=550;x<1320;x++){const k=(y*info.width+x)*3;if((raw[k]+raw[k+1]+raw[k+2])/3<128){x0=Math.min(x0,x);y0=Math.min(y0,y);x1=Math.max(x1,x);y1=Math.max(y1,y);}}
const wordBox={left:x0-3,top:y0-3,width:x1-x0+7,height:y1-y0+7};
const wordmark=await sharp(source).extract(wordBox).png().toBuffer();
const expected=await sharp(source).extract(wordBox).removeAlpha().raw().toBuffer(),actual=await sharp(wordmark).removeAlpha().raw().toBuffer();
const dims={master:{w:1132,h:341},symbol:{w:346,h:341},wordmark:{w:wordBox.width,h:wordBox.height}};
const H=335,X=H/4,wordVisibleH=y1-y0+1,wordX=wordBox.left-164,wordBottom=y1-245+1;
const fontcss=['Manrope','Inter'].map(f=>`@font-face{font-family:'${f}';src:url(data:font/ttf;base64,${fs.readFileSync(path.join(fonts,f+'.ttf')).toString('base64')}) format('truetype');font-weight:100 900}`).join('');
const defs=`<defs><style>${fontcss}text{font-family:Inter;fill:${color.ink}}.heading{font-family:Manrope;font-weight:650}.meta{fill:${color.text}}.accent{fill:${color.indigo}}</style><filter id="reverse" color-interpolation-filters="sRGB"><feComponentTransfer><feFuncR type="linear" slope="-1" intercept="1"/><feFuncG type="linear" slope="-1" intercept="1"/><feFuncB type="linear" slope="-1" intercept="1"/></feComponentTransfer></filter>${Object.entries({master,symbol,wordmark}).map(([id,buf])=>`<image id="${id}" width="${dims[id].w}" height="${dims[id].h}" href="data:image/png;base64,${buf.toString('base64')}"/>`).join('')}</defs>`;
const txt=(x,y,t,size=20,cls='meta',fill)=>`<text x="${x}" y="${y}" font-size="${size}" class="${cls}"${fill?` style="fill:${fill}"`:''}>${esc(t)}</text>`;
const rect=(x,y,w,h,fill,stroke='none',r=0)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}"/>`;
const img=(kind,x,y,mode)=>`<use href="#${kind}" x="${x}" y="${y}"${mode==='dark'?' filter="url(#reverse)"':''}/>`;
function label(d,mode){const f=wordVisibleH*d.labelRatio;const tw=f*(2.67+3*d.tracking),p=d.tag?X/3:0,v=d.tag?X/6:0;return {f,w:tw+p*2,h:f+v*2,markup:(x,y)=>`${d.tag?rect(x,y-f-v,tw+p*2,f+v*2,'none',mode==='dark'?'#FFFFFF':color.indigo,5):''}<text x="${x+p}" y="${y}" style="font-family:Manrope;font-size:${f}px;font-weight:${d.weight};letter-spacing:${f*d.tracking}px;fill:${mode==='dark'?'#FFFFFF':color.indigo}">KPSS</text>`};}
function lockup(id,d,mode='light'){
 const l=label(d,mode);let w,h,body;
 if(id==='BRAND-04'){
  w=dims.wordmark.w;const sy=0,wy=dims.symbol.h+X,ly=wy+dims.wordmark.h+X/2+l.f+(d.tag?X/6:0);
  body=img('symbol',(w-dims.symbol.w)/2,sy,mode)+img('wordmark',0,wy,mode)+l.markup((w-l.w)/2,ly);h=ly+(d.tag?X/6:0)+4;
 }else if(id==='BRAND-03'||d.key==='b'){
  w=dims.master.w+X+l.w;h=dims.master.h;
  const baseline=d.key==='a'?wordBottom:wordBottom-wordVisibleH/2+l.f*.35;
  body=img('master',0,0,mode)+l.markup(dims.master.w+X,baseline);
 }else{
  w=dims.master.w;const ly=d.key==='a'?wordBottom+X/2+l.f:dims.master.h+X/2+l.f;
  body=img('master',0,0,mode)+l.markup(d.key==='a'?wordX:(w-l.w)/2,ly);h=Math.max(dims.master.h,ly+4);
 }
 return {w,h,body,labelFont:l.f,labelWidth:l.w};
}
function place(id,d,x,y,w,mode='light'){const l=lockup(id,d,mode);return `<g transform="translate(${x} ${y}) scale(${w/l.w})">${l.body}</g>`;}
function svg(w,h,body,title){return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><title>${esc(title)}</title>${defs}${body}</svg>`;}
const files=[],specs=[];
function save(id,variant,w,h,body){const name=`${id}__kavriva-kpss-lockup__${variant}__v01.svg`;fs.writeFileSync(path.join(out,name),svg(w,h,body,`${id} / ${variant} / Review`));files.push({id,name,w,h});}
for(const d of dirs){
 for(const id of ['BRAND-02','BRAND-03','BRAND-04']){
  const l=lockup(id,d),pad=Math.ceil(X);
  specs.push({id,direction:d.key,nativeWidth:l.w,nativeHeight:l.h,labelFont:l.labelFont,labelToWordmarkHeight:d.labelRatio,trackingEm:d.tracking,weight:d.weight,externalClearSpace:X,internalGap:X/2});
  for(const mode of ['light','dark']){const m=lockup(id,d,mode);save(id,`direction-${d.key}-${mode}`,Math.ceil(m.w+pad*2),Math.ceil(m.h+pad*2),rect(0,0,Math.ceil(m.w+pad*2),Math.ceil(m.h+pad*2),mode==='light'?color.white:color.dark)+`<g transform="translate(${pad} ${pad})">${m.body}</g>`);}
 }
 let b=rect(0,0,1600,1520,color.surface)+txt(64,64,'BATCH 02 / BRAND-02 · BRAND-03 · BRAND-04',18,'accent')+txt(64,126,d.title,44,'heading')+txt(64,165,'Tek lockup sistemi · mevcut K ve Kavriva wordmark’ı korunur',20)+txt(1330,64,'REVIEW · v01',18,'heading');
 b+=rect(64,214,720,308,color.white,color.line,16)+rect(816,214,720,308,color.white,color.line,16);
 b+=txt(96,259,'BRAND-02 / PRIMARY',17,'heading')+txt(848,259,'BRAND-03 / HORIZONTAL',17,'heading');
 const primary=lockup('BRAND-02',d),primaryW=d.key==='c'?530:600;
 b+=place('BRAND-02',d,64+(720-primaryW)/2,290,primaryW)+place('BRAND-03',d,876,315,600);
 b+=rect(64,554,472,696,color.white,color.line,16)+txt(96,600,'BRAND-04 / STACKED',17,'heading');
 const st=lockup('BRAND-04',d),stW=350;b+=place('BRAND-04',d,125,642,stW);
 b+=txt(96,1184,'Aynı scale ile ayrı kaynak crop’lar.',17)+txt(96,1215,'K / wordmark yeniden çizilmedi.',17);
 b+=rect(568,554,968,334,color.dark,'none',16)+txt(600,600,'DARK / AYNI LABEL SİSTEMİ',17,'heading',color.white)+place('BRAND-03',d,668,659,770,'dark');
 b+=rect(568,920,968,330,color.white,color.line,16)+txt(600,966,'HORIZONTAL / 1× KÜÇÜK BOYUT',17,'heading');
 [160,240,320].forEach((w,i)=>{const x=600+i*304;b+=place('BRAND-03',d,x,1017,w)+txt(x,1138,`${w} px toplam genişlik`,17)+txt(x,1171,`KPSS ≈ ${(lockup('BRAND-03',d).labelFont*w/lockup('BRAND-03',d).w).toFixed(1)} px`,16);});
 const notes=d.key==='a'?['KPSS: wordmark altında, sol hizalı.','Açık etiket; çerçeve yok. Kavriva baskın.']:d.key==='b'?['KPSS: sağda ince çerçeveli ürün etiketi.','Kompakt kullanım; küçükte çerçeve yoğunlaşır.']:['KPSS: merkezli, daha küçük ve aralıklı.','Simetrik kapak dili; küçükte label zayıflar.'];
 b+=txt(64,1309,notes[0],23,'heading')+txt(64,1348,notes[1],21)+txt(64,1400,`Label / wordmark yüksekliği: %${Math.round(d.labelRatio*100)} · dış clear-space: K yüksekliği / 4`,18)+txt(64,1435,'160 px test, final minimum değildir. Küçük toplam genişlikte KPSS label okunurluğu sınırlı.',18)+txt(64,1470,'Raster referans / editable KPSS text · Vector source needed · Figma Pending · Owner selection Pending',17);
 save('BRAND-02',`direction-${d.key}-family-board`,1600,1520,b);
}
const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});const page=await browser.newPage({deviceScaleFactor:1});
const textBounds=[];
for(const f of files){await page.setViewportSize({width:f.w,height:f.h});await page.setContent(`<html><head><style>html,body{margin:0;padding:0}svg{display:block}</style></head><body>${fs.readFileSync(path.join(out,f.name),'utf8')}</body></html>`);await page.evaluate(()=>document.fonts.ready);const overflow=await page.evaluate(()=>[...document.querySelectorAll('svg text')].map(n=>({text:n.textContent,bounds:n.getBoundingClientRect().toJSON()})).filter(n=>n.bounds.x<0||n.bounds.y<0||n.bounds.right>innerWidth||n.bounds.bottom>innerHeight));textBounds.push({file:f.name,overflow});if(overflow.length)throw Error('Text overflow '+f.name);await page.screenshot({path:path.join(out,f.name.replace('.svg','.png'))});}
await browser.close();
const result={status:'Review',approvedBy:null,ownerDirectionSelection:null,sourceHash:sha(source),sourceImmutable:true,wordmarkCrop:wordBox,wordmarkNativePixelEquality:expected.equals(actual),labelText:'KPSS',labelFont:'Manrope',directions:dirs,specs,textBounds,geometry:{redraw:false,trace:false,simplify:false,nonUniformScale:false,wordmarkRetyped:false},trueVectorLogo:false,finalProductionVectorExport:'Pending',figma:'Pending',files:files.flatMap(f=>[f.name,f.name.replace('.svg','.png')])};
fs.writeFileSync(path.join(__dirname,'direction-qa.json'),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({sourceHash:result.sourceHash,wordmarkCrop:wordBox,wordmarkNativePixelEquality:result.wordmarkNativePixelEquality,fileCount:result.files.length,specs},null,2));
}
main().catch(e=>{console.error(e);process.exit(1)});
