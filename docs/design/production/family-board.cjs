// Review composition and measurement only: never edits source raster pixels.
const {root,T,txt,rect,svg,header,renderer,fs,path}=require('./style-lock/shared.cjs');
const sharp=require('sharp'),crypto=require('crypto');
const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
async function build({entries,outDir,title,prefix,columns=5,sideBySide=false,medium='native transparent raster'}){
 fs.mkdirSync(outDir,{recursive:true});const evidence=[];
 for(const e of entries){const dest=path.join(outDir,e.filename);if(e.sourcePath){const b=fs.readFileSync(e.sourcePath);if(fs.existsSync(dest)&&hash(fs.readFileSync(dest))!==hash(b))throw Error('Version collision '+dest);fs.copyFileSync(e.sourcePath,dest);}const b=fs.readFileSync(dest),m=await sharp(b).metadata(),{data,info}=await sharp(b).ensureAlpha().raw().toBuffer({resolveWithObject:true});let transparent=0;for(let i=3;i<data.length;i+=4)if(data[i]===0)transparent++;evidence.push({assetId:e.assetId,file:e.filename,width:m.width,height:m.height,hasAlpha:m.hasAlpha,transparentFraction:transparent/(info.width*info.height),sha256:hash(b),sourceCopyExact:e.sourcePath?hash(b)===hash(fs.readFileSync(e.sourcePath)):null});}
 const cols=sideBySide?entries.length:columns,rows=Math.ceil(entries.length/cols),cw=320,ch=400,w=128+cols*cw,h=250+rows*ch+70;
 const img=(e,x,y,s)=>`<image x="${x}" y="${y}" width="${s}" height="${s}" preserveAspectRatio="xMidYMid meet" href="data:image/png;base64,${fs.readFileSync(path.join(outDir,e.filename)).toString('base64')}"/>`;
 let b=rect(0,0,w,h,T.surface)+header(prefix,title,`Canonical A · Review only · ${medium} · uniform scale`,w).replace('STYLE LOCK REVIEW','FAMILY REVIEW');
 entries.forEach((e,i)=>{let x=64+(i%cols)*cw,y=224+Math.floor(i/cols)*ch;b+=rect(x,y,cw-16,ch-16,T.white,T.border,12)+img(e,x+12,y+10,280)+txt(x+16,y+316,e.assetId,20,T.indigo,650)+txt(x+16,y+348,e.label||e.assetId,16);});
 const r=await renderer();let s=svg(w,h,b,'',true);fs.writeFileSync(path.join(outDir,prefix+'__family-board__review__v01.svg'),s);await r.render(s,path.join(outDir,prefix+'__family-board__review__v01.png'),w,h);
 const mw=128+columns*320,mh=260+Math.ceil(entries.length/columns)*230;let mb=rect(0,0,mw,mh,T.surface)+header(prefix,title+' · 96 px','Light / dark diagnostic · not final theme approval',mw).replace('STYLE LOCK REVIEW','COMPATIBILITY REVIEW');
 entries.forEach((e,i)=>{let x=64+(i%columns)*320,y=220+Math.floor(i/columns)*230;mb+=rect(x,y,304,210,T.white,T.border,10)+txt(x+12,y+26,e.assetId,17,T.ink,600)+rect(x+164,y+48,128,124,T.dark,'none',8)+img(e,x+16,y+60,96)+img(e,x+180,y+60,96)+txt(x+26,y+192,'Light',14)+txt(x+194,y+192,'Dark',14);});s=svg(mw,mh,mb,'',true);fs.writeFileSync(path.join(outDir,prefix+'__mobile-dark__review__v01.svg'),s);await r.render(s,path.join(outDir,prefix+'__mobile-dark__review__v01.png'),mw,mh);await r.close();return evidence;
}
module.exports={build,root,fs,path,hash};
