// Original Kavriva UI grammar. No third-party icon library imports.
const grammar={grid:24,opticalBounds:[2,2,22,22],keyline:[3,3,21,21],curveOvershoot:1,stroke:1.75,cap:'round',join:'round',cornerRadius:2,default:'outline',active:'filled primary silhouette where appropriate; otherwise indigo outline',smallSizes:[16,20,24,32],color:'currentColor',status:'Review'};
const p=d=>`<path d="${d}"/>`,r=(x,y,w,h,rx=2)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}"/>`,c=(x,y,r)=>`<circle cx="${x}" cy="${y}" r="${r}"/>`;
const icon=(name,label,body,filled=null)=>({name,label,body,filled});
const globalIcons=[
icon('home','Ana sayfa',p('M3 10 12 3 21 10 M5 9v12h14V9 M10 21v-7h4v7'),p('M3 10 12 3 21 10 19 10 19 21 5 21 5 10Z')+'<path d="M10 21v-7h4v7" fill="white" stroke="white"/>'),
icon('study','Çalış',r(4,4,16,16)+p('M8 8h8 M8 12h6 M8 16h4')),
icon('exams','Denemeler',r(5,4,14,17)+r(9,3,6,3,1)+p('M8 10h8 M8 14h8 M8 18h5')),
icon('mistakes','Yanlışlar',c(12,12,9)+p('m9 9 6 6 m0-6-6 6')),
icon('revision','Tekrar',p('M4 10a8 8 0 1 1 1 8 M4 5v5h5 M12 7v5l3 2')),
icon('saved','Kaydet',p('M6 3h12v18l-6-4-6 4Z'),p('M6 3h12v18l-6-4-6 4Z')),
icon('teams','Takımlar',c(9,8,3)+p('M3 21v-2a6 6 0 0 1 12 0v2 M17 5a3 3 0 0 1 0 6 M18 15a5 5 0 0 1 3 4v2')),
icon('profile','Profil',c(12,7,4)+p('M4 21v-2a8 8 0 0 1 16 0v2Z'),c(12,7,4)+p('M4 21v-2a8 8 0 0 1 16 0v2Z')),
icon('settings','Ayarlar',p('M4 6h16 M4 12h16 M4 18h16')+c(8,6,2)+c(16,12,2)+c(10,18,2)),
icon('notifications','Bildirim',p('M6 10a6 6 0 0 1 12 0v6l2 2H4l2-2Z M10 21h4 M12 3v1'),p('M6 10a6 6 0 0 1 12 0v6l2 2H4l2-2Z')+p('M10 21h4')),
icon('search','Ara',c(10,10,6)+p('m15 15 6 6')),
icon('filter','Filtre',p('M3 4h18l-7 8v7l-4 2v-9Z')),
icon('sort','Sırala',p('M4 6h15 M4 12h10 M4 18h5 M19 11v10 m-3-3 3 3 3-3')),
icon('back','Geri',p('m13 5-7 7 7 7 M6 12h15')),
icon('forward','İleri',p('m11 5 7 7-7 7 M3 12h15')),
icon('close','Kapat',p('m5 5 14 14 m0-14L5 19')),
icon('share','Paylaş',c(6,12,3)+c(18,5,3)+c(18,19,3)+p('m9 10 6-4 m-6 8 6 4')),
icon('delete','Sil',p('M3 6h18 M9 6V3h6v3 M6 6l1 15h10l1-15 M10 10v7 M14 10v7')),
icon('edit','Düzenle',p('m4 16 12-12 4 4L8 20H4Z m9-9 4 4')),
icon('download','İndir',p('M12 3v12 m-5-5 5 5 5-5 M4 17v4h16v-4')),
icon('upload','Yükle',p('M12 15V3 m-5 5 5-5 5 5 M4 17v4h16v-4')),
icon('help','Yardım',c(12,12,9)+p('M9 9a3 3 0 1 1 5 2c-2 1-2 2-2 3 M12 18h.01')),
icon('report','Bildir',p('M5 21V3 M5 4h14l-3 4 3 4H5')),
icon('security','Gizlilik',p('M12 3 20 6v6c0 4-3 7-8 9-5-2-8-5-8-9V6Z m-4 9 3 3 5-6'),p('M12 3 20 6v6c0 4-3 7-8 9-5-2-8-5-8-9V6Z')+'<path d="m8 12 3 3 5-6" fill="none" stroke="white"/>'),
icon('ai','AI',p('M5 6h14v10H9l-4 4Z M9 10h6 M9 13h4')),
icon('support','Destek',p('M4 13v-2a8 8 0 0 1 16 0v2 M20 16v2c0 2-3 3-6 3')+r(3,11,4,6)+r(17,11,4,6)),
icon('calendar','Takvim',r(3,5,18,16)+p('M7 3v4 M17 3v4 M3 10h18 M7 14h2 M12 14h2 M17 14h.01 M7 18h2 M12 18h2')),
icon('analytics','Analiz',p('M4 3v18h17 M8 17v-4 M13 17V9 M18 17V5')),
icon('chart','Grafik',p('M3 3v18h18 M6 16l5-6 4 3 6-8')),
icon('target','Hedef',c(12,12,9)+c(12,12,5)+c(12,12,1)),
icon('timer','Zaman',c(12,13,8)+p('M9 3h6 M12 3v2 M18 6l2-2 M12 9v4l3 2')),
icon('streak','Seri',p('M4 16 9 11 13 15 20 6 M15 6h5v5 M4 21h16')),
icon('trophy','Kupa',p('M7 3h10v5a5 5 0 0 1-10 0Z M7 5H3v3a4 4 0 0 0 5 4 M17 5h4v3a4 4 0 0 1-5 4 M12 13v5 M8 21h8 M9 18h6'),p('M7 3h10v5a5 5 0 0 1-10 0Z')+p('M7 5H3v3a4 4 0 0 0 5 4 M17 5h4v3a4 4 0 0 1-5 4 M12 13v5 M8 21h8 M9 18h6')),
icon('lock','Kilit',r(5,10,14,11)+p('M8 10V7a4 4 0 0 1 8 0v3 M12 15v2'),r(5,10,14,11)+p('M8 10V7a4 4 0 0 1 8 0v3')+'<path d="M12 15v2" stroke="white"/>'),
icon('unlock','Açık kilit',r(5,10,14,11)+p('M8 10V7a4 4 0 0 1 7-3 M12 15v2')),
icon('sync','Senkron',p('M4 10a8 8 0 0 1 14-5l3 3 M21 3v5h-5 M20 14A8 8 0 0 1 6 19l-3-3 M3 21v-5h5')),
icon('offline','Çevrimdışı',p('M4 9a13 13 0 0 1 16 0 M7 13a8 8 0 0 1 10 0 M10 17a3 3 0 0 1 4 0 M12 21h.01 M3 3l18 18')),
icon('online','Çevrimiçi',p('M3 8a14 14 0 0 1 18 0 M6 12a9 9 0 0 1 12 0 M9 16a4 4 0 0 1 6 0 M12 21h.01'))
];
function glyph(item,state='outline',cutout='white'){const body=(state==='filled'&&item.filled?item.filled:item.body).replace(/fill="white"/g,`fill="${cutout}"`).replace(/stroke="white"/g,`stroke="${cutout}"`);return `<g fill="${state==='filled'&&item.filled?'currentColor':'none'}" stroke="currentColor" stroke-width="${grammar.stroke}" stroke-linecap="round" stroke-linejoin="round">${body}</g>`;}
module.exports={grammar,globalIcons,icon,p,r,c,glyph};
