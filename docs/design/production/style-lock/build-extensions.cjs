const {fs,path}=require('./shared.cjs'),crypto=require('crypto');
const {grammar,icon,p,r,c}=require('./icon-grammar.cjs'),{build}=require('./build-icon-set.cjs');
const academic=[
icon('turkish','Türkçe',r(4,3,16,18)+p('M8 7h8 M8 11h8 M8 15h5 M8 18h7')),
icon('mathematics','Matematik',p('M4 7h6 M7 4v6 M15 7h5 M4 17h6 M15 14l5 6 M20 14l-5 6')),
icon('history','Tarih',p('M4 5v15h16 M4 8h6 M4 13h11 M4 18h16')+c(10,8,1)+c(15,13,1)+c(20,18,1)),
icon('geography','Coğrafya',p('M3 6 9 3 15 6 21 3v15l-6 3-6-3-6 3Z M9 3v15 M15 6v15')),
icon('citizenship','Vatandaşlık',r(9,3,6,5,1)+r(3,16,6,5,1)+r(15,16,6,5,1)+p('M12 8v4 M6 16v-4h12v4')),
icon('current-affairs','Güncel bilgiler',r(3,4,18,16)+r(6,7,5,5,1)+p('M14 8h4 M14 11h4 M6 16h12')),
icon('gy-gk-overview','GY / GK overview',r(3,3,8,8)+r(13,3,8,8)+r(3,13,8,8)+r(13,13,8,8)),
icon('question-solving','Soru çözme',r(4,3,16,18)+p('m7 8 2 2 4-4 M7 15h10 M7 18h6')),
icon('topic-learning','Konu öğrenme',r(3,4,18,16)+p('m10 8 6 4-6 4Z')),
icon('revision','Tekrar',p('M4 10a8 8 0 1 1 1 8 M4 5v5h5 M12 7v5l3 2')),
icon('full-mock-exam','Tam deneme',r(4,3,16,18)+p('M8 7h8 M8 11h8 M8 15h3 M14 15h2 M8 18h8')),
icon('analysis','Analiz',p('M4 3v18h17 M8 17v-4 M13 17V9 M18 17V5')),
icon('time-management','Zaman yönetimi',c(12,12,9)+p('M12 7v5l4 2')),
icon('accuracy','Doğruluk',c(12,12,9)+p('m7 12 3 3 7-7')),
icon('difficulty','Zorluk',p('M4 21v-5h4v5 M10 21V10h4v11 M16 21V3h4v18')),
icon('concept-mastery','Kavram ustalığı',p('M12 3 20 6v6c0 4-3 7-8 9-5-2-8-5-8-9V6Z m-4 9 3 3 5-6')),
icon('progress','İlerleme',p('M3 3v18h18 M6 16l5-6 4 3 6-8'))
];
const game=[
icon('xp','XP',p('m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z'),p('m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z')),
icon('level','Seviye',p('M4 18h5v-5h5V8h6 M16 4l4 4-4 4 M4 21h16')),
icon('streak','Seri',p('M4 16 9 11 13 15 20 6 M15 6h5v5 M4 21h16')),
icon('daily-mission','Günlük görev',r(3,5,18,16)+p('M7 3v4 M17 3v4 M3 10h18 M7 16l3 3 6-6')),
icon('weekly-mission','Haftalık görev',r(3,5,18,16)+p('M7 3v4 M17 3v4 M3 10h18 M7 14h2 M12 14h2 M17 14h.01 M7 18h2 M12 18h2')),
icon('badge','Rozet',p('M12 3 19 7v9l-7 5-7-5V7Z')+c(12,11,3),p('M12 3 19 7v9l-7 5-7-5V7Z')+'<circle cx="12" cy="11" r="3" fill="none" stroke="white"/>'),
icon('achievement','Başarım',c(12,9,6)+p('m8 14-3 7 7-3 7 3-3-7 m-7-5 2 2 4-4'),c(12,9,6)+p('m8 14-3 7 7-3 7 3-3-7')+'<path d="m9 9 2 2 4-4" fill="none" stroke="white"/>'),
icon('season','Sezon',p('M5 21V3 M5 4h14v10H5 M9 8h6 M9 11h4')),
icon('rank','Sıralama',p('M4 7 12 3 20 7 12 11Z M4 12l8 5 8-5 M4 17l8 4 8-4')),
icon('leaderboard','Liderlik',p('M3 21V11h6v10 M9 21V4h6v17 M15 21v-7h6v7')),
icon('team-contribution','Takım katkısı',c(8,7,3)+p('M3 21v-3a5 5 0 0 1 10 0v3 M17 10v8 M13 14h8')),
icon('milestone','Kilometre taşı',p('M5 21V3 M5 4h14l-3 4 3 4H5')+c(5,21,1)),
icon('special-moment','Özel an',p('M5 3H3v5 M19 3h2v5 M3 16v5h5 M21 16v5h-5 m-4-15 2 4 4 2-4 2-2 4-2-4-4-2 4-2Z')),
icon('reward-chest','Ödül kutusu',r(3,8,18,13)+p('M3 13h18 M7 8V5h10v3')+r(10,11,4,5,1)),
icon('progress-ring','İlerleme halkası',p('M12 3a9 9 0 1 1-9 9 M3 8v4h4')+p('m8 12 3 3 5-6'))
];
async function main(){const foundation=JSON.parse(fs.readFileSync(path.join(__dirname,'batch-04-icon-01-qa.json')));const currentHash=crypto.createHash('sha256').update(JSON.stringify(grammar)).digest('hex');if(foundation.grammarHash!==currentHash||foundation.status!=='Review')throw Error('Batch 04 grammar dependency not stable');await build('ICON-02',academic,5);await build('ICON-03',game,5);}
main().catch(e=>{console.error(e);process.exit(1)});
