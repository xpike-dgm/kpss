const {root,T,txt,rect,svg,header,renderer,fs,path}=require('./shared.cjs');
const crypto=require('crypto');const {grammar,globalIcons,glyph}=require('./icon-grammar.cjs');
const hash=s=>crypto.createHash('sha256').update(s).digest('hex');
async function build(id,items,batch){
const out=path.join(root,`assets/icons/batch-${String(batch).padStart(2,'0')}/review`);fs.mkdirSync(out,{recursive:true});const render=await renderer(),files=[],bounds=[];
const place=(it,x,y,size=24,state='outline',color=T.ink)=>`<g style="color:${color}" transform="translate(${x} ${y}) scale(${size/24})">${glyph(it,state,color===T.white?T.dark:'white')}</g>`;
for(const it of items){
 if(!/^[a-z0-9-]+$/.test(it.name))throw Error('Bad name');
 for(const state of ['outline','active','outline-dark','active-dark']){
 const active=state.startsWith('active'),dark=state.endsWith('-dark');
 const source=svg(24,24,glyph(it,active?'filled':'outline',dark?T.dark:'white')).replace('<svg ','<svg color="'+(dark?(active?T.white:T.border):(active?T.indigo:T.ink))+'" ');
 const name=`${id}__${it.name}__${state}__v01.svg`;fs.writeFileSync(path.join(out,name),source);files.push(name);
 }
}
const rows=Math.ceil(items.length/8),height=240+rows*170+210;
let b=rect(0,0,1600,height,T.surface)+header(id,id==='ICON-01'?'Global UI icon grammar':id==='ICON-02'?'Academic icon extensions':'Gamification icon extensions',`${items.length} glyph · 24 px grid · 1.75 px stroke · round cap / join · tek aile`);
for(let i=0;i<items.length;i++){
 const it=items[i],x=64+(i%8)*186,y=230+Math.floor(i/8)*170;
 b+=rect(x,y,174,152,T.white,T.border,10)+txt(x+14,y+27,it.label,14,T.text,500)+place(it,x+24,y+46,32)+place(it,x+110,y+50,24,'filled',T.indigo)+place(it,x+24,y+109,16)+place(it,x+64,y+107,20)+place(it,x+108,y+105,24)+txt(x+16,y+144,'16 / 20 / 24',11);
}
const fy=230+rows*170;b+=rect(64,fy,1472,112,T.dark,'none',12)+txt(86,fy+28,'DARK / OUTLINE + ACTIVE · AYNI GEOMETRİ',15,T.white,600);
items.slice(0,8).forEach((it,i)=>b+=place(it,98+i*176,fy+53,24,'outline',T.border)+place(it,164+i*176,fy+53,24,'filled',T.white));
b+=txt(64,fy+154,'Outline default · active: indigo; yalnız uygun primary silhouette dolu · component/state kararı değildir',16)+txt(64,fy+185,'Review · actual vector SVG glyphs · Figma Pending · Owner style lock approval Pending',16);
const boardName=`${id}__${id==='ICON-01'?'global-ui-icon-sheet':id==='ICON-02'?'academic-icon-sheet':'gamification-icon-sheet'}__review__v01.svg`;
const source=svg(1600,height,b,'',true);fs.writeFileSync(path.join(out,boardName),source);await render.render(source,path.join(out,boardName.replace('.svg','.png')),1600,height);files.push(boardName,boardName.replace('.svg','.png'));
// Measure actual native geometry, including viewport safety, using the same Chromium engine.
const {chromium}=require('playwright');const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});const page=await browser.newPage();
for(const it of items){await page.setContent(svg(24,24,`<g id="g" style="color:${T.ink}">${glyph(it)}</g>`));const b=await page.evaluate(()=>{const a=document.getElementById('g').getBBox();return {x:a.x,y:a.y,width:a.width,height:a.height}});const inside=b.x>=1&&b.y>=1&&b.x+b.width<=23&&b.y+b.height<=23;bounds.push({name:it.name,bounds:b,viewportSafe:inside});if(!inside)throw Error('Glyph outside viewport '+it.name);}
await browser.close();await render.close();
const qa={assetId:id,status:'Review',batch,grammar,grammarHash:hash(JSON.stringify(grammar)),count:items.length,names:items.map(i=>i.name),filledSupported:items.filter(i=>i.filled).map(i=>i.name),nativeVector:true,thirdPartyLibraries:[],lightDark:'same currentColor geometry; light ink/indigo, dark neutral/white; SVG color presentation attribute can be overridden by CSS',smallSizes:[16,20,24,32],bounds,approvedBy:null,figma:'Pending',files};
fs.writeFileSync(path.join(__dirname,`batch-${String(batch).padStart(2,'0')}-${id.toLowerCase()}-qa.json`),JSON.stringify(qa,null,2)+'\n');
console.log(JSON.stringify({id,count:items.length,files:files.length,grammarHash:qa.grammarHash,viewportSafe:bounds.every(b=>b.viewportSafe)},null,2));return qa;
}
module.exports={build};
if(require.main===module)build('ICON-01',globalIcons,4).catch(e=>{console.error(e);process.exit(1)});
