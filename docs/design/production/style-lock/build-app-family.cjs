const {root,T,txt,rect,svg,header,renderer,fs,path}=require('./shared.cjs');
const crypto=require('crypto'),sharp=require('sharp');
const out=path.join(root,'assets/app/batch-03/review');
const symbol=fs.readFileSync(path.join(root,'assets/brand/batch-01/review/BRAND-05__kavriva-k-symbol__reference-crop__v01.png'));
const master=fs.readFileSync(path.join(root,'assets/brand/batch-01/review/BRAND-01__kavriva-master-logo__reference-crop__v01.png'));
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const mask=`<filter id="white" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 -0.2126 -0.7152 -0.0722 0 1"/></filter>`;
const reverse=`<filter id="reverse" color-interpolation-filters="sRGB"><feComponentTransfer><feFuncR type="linear" slope="-1" intercept="1"/><feFuncG type="linear" slope="-1" intercept="1"/><feFuncB type="linear" slope="-1" intercept="1"/></feComponentTransfer></filter>`;
const defs=mask+reverse+`<image id="k" width="346" height="341" href="data:image/png;base64,${symbol.toString('base64')}"/><image id="master" width="1132" height="341" href="data:image/png;base64,${master.toString('base64')}"/>`;
function mark(x,y,w,white=true){return `<use href="#k" transform="translate(${x} ${y}) scale(${w/346})"${white?' filter="url(#white)"':''}/>`;}
function tile(x,y,n,fraction=.62,round=0){const w=n*fraction,h=w*341/346;return rect(x,y,n,n,T.indigo,'none',round)+mark(x+(n-w)/2,y+(n-h)/2,w);}
async function main(){fs.mkdirSync(out,{recursive:true});const r=await renderer(),files=[];
async function save(id,short,variant,w,h,body,fonts=false){const name=`${id}__${short}__${variant}__v01.svg`,source=svg(w,h,body,defs,fonts);fs.writeFileSync(path.join(out,name),source);await r.render(source,path.join(out,name.replace('.svg','.png')),w,h);files.push(name,name.replace('.svg','.png'));}
for(const n of [192,512])await save('APP-01','kavriva-kpss-app-icon',`main-${n}`,n,n,tile(0,0,n));
for(const n of [192,512])await save('APP-02','kavriva-kpss-maskable',`safe-${n}`,n,n,tile(0,0,n,.50));
for(const n of [16,32,48]){
 await save('APP-03','kavriva-kpss-favicon',`indigo-${n}`,n,n,tile(0,0,n,.66));
 const w=n*.66,h=w*341/346;
 for(const mode of ['light','dark'])await save('APP-03','kavriva-kpss-favicon',`${mode}-${n}`,n,n,rect(0,0,n,n,mode==='light'?T.white:T.dark)+mark((n-w)/2,(n-h)/2,w,mode==='dark'));
}
// Canonical Direction A primary: existing master row + KPSS under the original wordmark left edge.
function lockup(x,y,w,mode){const scale=w/1132;return `<g transform="translate(${x} ${y}) scale(${scale})"><use href="#master"${mode==='dark'?' filter="url(#reverse)"':mode==='indigo'?' filter="url(#white)"':''}/><text x="410" y="357.475" style="font-family:Manrope;font-size:57.6px;font-weight:650;fill:${mode==='light'?T.indigo:T.white}">KPSS</text></g>`;}
for(const mode of ['light','dark'])await save('APP-04','kavriva-kpss-splash',`mobile-${mode}`,390,844,rect(0,0,390,844,mode==='light'?T.white:'#000000')+lockup(48,332,294,mode),true);
for(const mode of ['light','dark'])await save('APP-04','kavriva-kpss-splash',`desktop-${mode}`,1440,900,rect(0,0,1440,900,mode==='light'?T.white:'#000000')+lockup(460,350,520,mode),true);
await save('APP-04','kavriva-kpss-splash','mobile-indigo',390,844,rect(0,0,390,844,T.indigo)+lockup(48,332,294,'indigo'),true);
await save('APP-04','kavriva-kpss-splash','desktop-indigo',1440,900,rect(0,0,1440,900,T.indigo)+lockup(460,350,520,'indigo'),true);
let b=rect(0,0,1600,1420,T.surface)+header('APP-01 · APP-02 · APP-03 · APP-04','Product icon family','Mevcut K · beyaz sembol · tek indigo · canonical Direction A');
b+=rect(64,215,464,415,T.white,T.border,16)+txt(96,260,'APP-01 / MAIN',18,T.ink,600)+tile(180,300,232,.62,46)+txt(96,595,'K: canvas genişliğinin %62’si',18);
b+=rect(560,215,464,415,T.white,T.border,16)+txt(592,260,'APP-02 / MASKABLE',18,T.ink,600)+tile(676,300,232,.50)+`<circle cx="792" cy="416" r="92.8" fill="none" stroke="white" stroke-dasharray="5 5"/>`+txt(592,595,'Safe-zone: merkezli r = %40 canvas',18);
b+=rect(1056,215,480,415,T.dark,'none',16)+txt(1088,260,'APP-03 / FAVICON',18,T.white,600);
for(let i=0;i<3;i++){const n=[16,32,48][i],x=1104+i*124;b+=tile(x,354,n,.66)+txt(x,437,`${n} px`,18,T.white);}
b+=txt(1088,524,'1× native boyut · 16 px izinli ama sınırda',16,T.white)+txt(1088,563,'Kontur / geometri değişikliği yok',17,T.white);
b+=rect(64,662,960,302,T.white,T.border,16)+txt(96,707,'APP-01 / 1× SMALL SIZE',18,T.ink,600);
for(let i=0;i<4;i++){const n=[32,64,128,192][i],x=110+i*210;b+=tile(x,739,n)+txt(x,950,`${n} px`,17);}
b+=rect(1056,662,480,302,T.white,T.border,16)+txt(1088,707,'APP-02 / MASK COMPARISON',18,T.ink,600);
for(let i=0;i<3;i++){const x=1100+i*132,n=104,cx=x+52,cy=805;const clip=i===0?`<circle cx="${cx}" cy="${cy}" r="52"/>`:`<rect x="${x}" y="753" width="104" height="104" rx="${i===1?24:42}"/>`;b+=`<defs><clipPath id="mask${i}">${clip}</clipPath></defs><g clip-path="url(#mask${i})">${tile(x,753,n,.50)}</g>`+txt(x,902,['circle','rounded','squircle-like'][i],14);}
b+=rect(64,996,1472,334,T.white,T.border,16)+txt(96,1041,'APP-04 / SPLASH · DIRECTION A',18,T.ink,600)+lockup(112,1130,340,'light')+rect(560,1070,432,228,T.indigo,'none',12)+lockup(606,1130,340,'indigo')+rect(1056,1070,432,228,'#000000','none',12)+lockup(1102,1130,340,'dark');
b+=txt(64,1362,'Review only · K raster-reference; vector source needed · Figma Pending · hiçbir yeni asset Approved değil',17);
await save('APP-01','app-icon-family','comparison',1600,1420,b,true);
await r.close();
const native={data:await sharp(symbol).removeAlpha().raw().toBuffer()};let far=0;const N=512,W=N*.5,S=W/346;
for(let y=0;y<341;y++)for(let x=0;x<346;x++){const i=(y*346+x)*3,l=.2126*native.data[i]+.7152*native.data[i+1]+.0722*native.data[i+2];if(1-l/255>.5){const dx=(x-172.5)*S,dy=(y-170)*S;far=Math.max(far,Math.hypot(dx,dy));}}
const expectedSource=JSON.parse(fs.readFileSync(path.join(root,'docs/design/production/batch-01/geometry-qa.json'))).source.sha256;
const actualSource=sha(fs.readFileSync(path.join(root,'assets/brand/batch-01/source/Kavriva_L05A.png')));
const qa={status:'Review',dependencies:{batch01:'Approved for Design Direction',batch02:'Direction A Approved for Design Direction'},sourceHash:actualSource,sourceHashMatches:actualSource===expectedSource,kSymbolHash:sha(symbol),geometryOperations:{redraw:false,simplify:false,contourChange:false,nonUniformScale:false},appColor:T.indigo,kWhite:'luminance alpha presentation of the same raster; no threshold in artwork',maskable:{size:N,safeZoneRadius:N*.4,maximumSignificantInkRadius:far,entireSourceCropCornerRadius:Math.hypot(W/2,W*341/346/2),pass:Math.hypot(W/2,W*341/346/2)<N*.4,symbolWidthFraction:.5,backgroundOpaque:true,maskTests:['circle','rounded square','squircle-like'],standard:'https://www.w3.org/TR/appmanifest/#icon-masks-and-safe-zone'},smallSize:{sizes:[16,32,48,64,128,192,512],favicon16:'permitted by owner; marginal detail, no contour changes'},splashDirection:'A, Manrope KPSS 57.6, source-wordmark left x410; no new lockup direction',figma:'Pending',finalProductionVectorExport:'Pending for K artwork',approvedBy:null,files};
if(!qa.maskable.pass||!qa.sourceHashMatches)throw Error('Batch 03 QA failed');fs.writeFileSync(path.join(__dirname,'batch-03-qa.json'),JSON.stringify(qa,null,2)+'\n');console.log(JSON.stringify({files:files.length,maskable:qa.maskable,sourceHashMatches:qa.sourceHashMatches},null,2));}
main().catch(e=>{console.error(e);process.exit(1)});
