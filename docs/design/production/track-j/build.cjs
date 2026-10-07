const {root,T,txt,rect,svg,renderer,fs,path}=require('../style-lock/shared.cjs');
const dir='assets/share/track-j/review';fs.mkdirSync(path.join(root,dir),{recursive:true});
const items=[['SHARE-01','open-graph','Sıradaki doğru adım.','Genel Yetenek / Genel Kültür','progress'],['SHARE-02','mock-result','Deneme sonucu','{{mock_name}}','analysis'],['SHARE-03','level-up','Yeni seviye','{{level}}','level'],['SHARE-04','streak','Çalışma serisi','{{streak_days}}','streak'],['SHARE-05','achievement','Yeni başarı','{{achievement_name}}','achievement']];
const formats=[['og',1200,630],['square',1080,1080],['story-safe',1080,1920]];
const manifest={track:'J',batch:20,selected:[],variants:[],figma:'Pending',finalProductionExport:'Pending'};
function wrapped(x,y,text,size,fill){let lines=[''];for(const word of text.split(' ')){let n=lines.length-1;if((lines[n]+' '+word).trim().length>30&&lines[n]){lines.push(word)}else lines[n]=(lines[n]+' '+word).trim();}return `<text x="${x}" y="${y}" style="font-family:Manrope;font-size:${size}px;font-weight:600;fill:${fill}">${lines.map((l,i)=>`<tspan x="${x}" dy="${i?50:0}">${l}</tspan>`).join('')}</text>`;}
async function main(){const rr=await renderer();let tests=[];for(const [id,name,title,field,iconName] of items){for(const [format,w,h] of formats)for(const mode of ['light','dark'])for(const fixture of ['template',...(['SHARE-02','SHARE-05'].includes(id)&&mode==='light'?['long-copy']:[])]){
 const dark=mode==='dark',bg=dark?'#000000':T.white,ink=dark?T.white:T.ink,accent=dark?T.white:T.indigo;
 const logo=fs.readFileSync(path.join(root,`assets/brand/batch-02/review/BRAND-02__kavriva-kpss-lockup__direction-a-${mode}__v01.svg`),'utf8').replace(/^<svg[^>]*>/,'').replace(/<\/svg>\s*$/,'');
 const top=format==='story-safe'?270:50,base=format==='og'?270:format==='square'?460:720;
 const iconSet=['progress','analysis'].includes(iconName)?'ICON-02':'ICON-03';
 let glyphFile=path.join(root,`assets/icons/batch-05/review/${iconSet}__${iconName}__outline__v01.svg`);if(!fs.existsSync(glyphFile))throw Error('Canonical glyph missing: '+glyphFile);
 const glyph=fs.readFileSync(glyphFile,'utf8').replace(/^<svg[^>]*>/,'').replace(/<\/svg>\s*$/,'');
 let body=rect(0,0,w,h,bg)+`<svg x="80" y="${top}" width="440" height="179.39" viewBox="0 0 1300 530">${logo}</svg>`;
 body+=txt(80,base,title,format==='og'?48:56,ink,650,'Manrope');
 const actual=fixture==='long-copy'?(id==='SHARE-02'?'Genel Yetenek ve Genel Kültür Tam Kapsamlı Değerlendirme Denemesi':'Kararlılıkla Çalışarak Haftalık Konu Hedeflerini Tamamlama Başarısı'):field;
 body+=wrapped(80,base+90,actual,id==='SHARE-01'?30:40,ink);
 if(id==='SHARE-02')body+=txt(80,base+250,'Net',24,ink)+txt(160,base+250,'{{net}}',40,accent,650,'Manrope');
 if(id==='SHARE-03')body+=txt(80,base+155,'Seviye',24,ink);
 if(id==='SHARE-04')body+=txt(80,base+155,'Gün',24,ink);
 const gx=format==='og'?970:820,gy=base-60;
 body+=`<svg x="${gx}" y="${gy}" width="120" height="120" viewBox="0 0 24 24" color="${accent}">${glyph}</svg>`;
 body+=rect(80,format==='story-safe'?1580:h-80,w-160,4,T.indigo);
 const source=svg(w,h,body,'',true),stem=`${id}__${name}__${format}-${mode}${fixture==='long-copy'?'-long-copy':''}__v01`,sp=`${dir}/${stem}.svg`,pp=`${dir}/${stem}.png`;
 fs.writeFileSync(path.join(root,sp),source);tests.push(await rr.render(source,path.join(root,pp),w,h));
 const v={assetId:id,format,mode,fixture,width:w,height:h,sourcePath:sp,previewPath:pp,editableText:true,nativeVector:false,immutableRasterBrand:true,status:'Review',figma:'Pending',finalProductionExport:'Pending'};manifest.variants.push(v);if(format==='og'&&mode==='light'&&fixture==='template')manifest.selected.push(v);
 }
 }await rr.close();fs.writeFileSync(path.join(__dirname,'manifest.json'),JSON.stringify(manifest,null,2));require('child_process').execFileSync(process.execPath,[path.join(__dirname,'verify.cjs')],{stdio:'inherit'});}
main().catch(e=>{console.error(e);process.exit(1)});
