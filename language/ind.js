exports.wait = () => {
	return`*「 Calma 」 EM PROCESSO *`
}

exports.succes = () => {
	return`*「 feito 」*`
}

exports.lvlon = () => {
	return`*「 HABILITAR 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DESATIVAR 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*SEU NÍVEL AINDA ESTÁ VAZIO*`
}

exports.lvlnoon = () => {
	return`*O NÍVEL DO GRUB NÃO FOI ATIVADO*`
}

exports.noregis = () => {
	return`*「 SEU LOGIN 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar affis|17*`
}

exports.rediregis = () => {
	return`*「 JÁ REGISTRADO 」*\n\n*você já está registrado no banco de dados do bot*`
}

exports.stikga = () => {
	return`*sim falhou tente repetir mais alguns momentos*`
}

exports.linkga = () => {
	return`*desculpe link inválido*`
}

exports.groupo = () => {
	return`*「apenas p grupo」*`
}

exports.ownerb = () => {
	return`*「so o dono do bot pode usar」*`
}

exports.ownerg = () => {
	return`*「somente o dono do grupo」*`
}

exports.admin = () => {
	return`*「So pros adm do grupo」*`
}

exports.badmin = () => {
	return`*「O BOT DEVE SER ADMINISTRADOR」*`
}

exports.nsfwoff = () => {
	return`*NSFW EM ATIVO*`
}

exports.bug = () => {
	return`*O problema foi relatado ao proprietário do BOT, um relatório falso/main2 não será respondido*`
}

exports.wrongf = () => {
	return`*format salah/text kosong*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 CADASTRO 」*\n\nPara saber se você se cadastrou, verifique a mensagem que enviei \n\nNOTE:\n*se você não entendeu a mensagem. significa que você não salvou o número do seu bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 SEU PERFIL 」*\n\nvocê se registrou com os dados \n\n┏━⊱Nick\n┗⊱${namaUser}\n┏━⊱Numero\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱idade\n┗⊱${umurUser}\n┏━⊱Hora q vc se registrou\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : não se esqueça deste número porque é importante:v`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, premi) => { 
	return `
╔━━━━━━━━❮𝐈𝐍𝐅𝐎❯━━━━━━━━
║
╠➣  𝐋𝐘𝐍𝐎 𝐁𝐎𝐓ϟ
║
╠➣ 𝐏𝐑𝐄𝐅𝐈𝐗: ( . )
║
╠➣ 𝐃𝐎𝐍𝐎: ༆𖤐⁩ꪶ𝙇𝙔⃯𝙉𝙊⃯֟֯፝𝙕𝙓𖡬𝘼⃯𝟭𝟬ꫂ༆𖤐⁩
║
╠➣ *wa.me/558897187831*
║
╠➣ 𝐒𝐓𝐀𝐓𝐔𝐒: ON
║
╠━━━━━━━━❮INFO DO USER❯━━━━━━━━
║╭─━─━─━─━─━─━─━─━─━─━─╮
║│➣ *nome* : ${pushname}
║│
║│➣ *ua mi 😁* : wa.me/${sender.split("@")[0]}
║│
║│➣ *XP* : ${getLevelingXp(sender)}/${reqXp}
║│
║│➣ *level* : ${getLevelingLevel(sender)}
║│
║│➣ *user register : ${_registered.length}
║╰─━─━─━─━─━─━─━─━─━─━─╯
╠━━━━━━━━━━━❮MENU❯━━━━━━━━━━
║╭─━─━─━─━─━─╮
║│➣ *${prefix}sticker*    
║│➣ *${prefix}tts*
║│➣ *${prefix}toimg*  
║╰─━─━─━─━─━─╯
╠━━━━━━━━━━━━━━━━
║╭─━─━─━─━─━─━─╮
║│➣ *${prefix}ocr*
║│➣ *${prefix}quotemaker*
║│➣ *${prefix}tiktokstalk*
║│➣ *${prefix}fototiktok*
║│➣ *${prefix}truth*
║│➣ *${prefix}dare*
║╰─━─━─━─━─━─━─╯
╠━━━━━━━━━━━━━━━━
║╭─━─━─━─━─━─╮
║│➣ *${prefix}text3d*
║│➣ *${prefix}bucin*
║│➣ *${prefix}hilih*
║│➣ *${prefix}ssweb*
║╰─━─━─━─━─━─╯
╠━━━━━━━━━━━━━━━━
║╭─━─━─━─━─━─━─╮
║│➣ *${prefix}artinama*
║│➣ *${prefix}spamcall*
║│➣ *${prefix}quotes*
║│➣ *${prefix}kbbi*
║│➣ *${prefix}map*
║│➣ *${prefix}cerpen*
║╰─━─━─━─━─━─━─╯
╠━━━━━━━━━━━━━━━━
║╭─━─━─━─━─━─╮
║│➣ *${prefix}chord*
║│➣ *${prefix}lirik*
║│➣ *${prefix}phlogo*
║╰─━─━─━─━─━─╯
╠━━━━━━━━━━━━━━━━
║╭─━─━─━─━─━─━─╮
║│➣ *${prefix}bisakah*
║│➣ *${prefix}apakah*
║│➣ *${prefix}kapankah*
║│➣ *${prefix}rate*
║│➣ *${prefix}owner*
║╰─━─━─━─━─━─━─╯
╠━━━━━━━━❮NSFW❯━━━━━━━━
║╭─━─━─━─━─━─━─╮
║│➣ *${prefix}waifu*
║│➣ *${prefix}anime*
║│➣ *${prefix}neko*
║│➣ *${prefix}dewabatch*
║│➣ *${prefix}pokemon*
║│➣ *${prefix}anjing*
║│➣ *${prefix}indohot*
║╰─━─━─━─━─━─━─╯
╠━━━━━━━━❮GRUPO❯━━━━━━━━
║╭─━─━─━─━─━─━─━─━─━─━─╮
║│➣ *${prefix}hidetag*
║│➣ *${prefix}linkgc*
║│➣ *${prefix}tagall*
║│➣ *${prefix}setpp*
║│➣ *${prefix}antilink
║│➣ *${prefix}add*
║│➣ *${prefix}kick*
║│➣ *${prefix}setname*
║│➣ *${prefix}setdesc*
║│➣ *${prefix}demote*
║│➣ *${prefix}kickall*
║│➣ *${prefix}promote*
║│➣ *${prefix}listadmin*
║│➣ *${prefix}group* [buka/tutup]
║│➣ *${prefix}leveling* [enable/disable]
║│➣ *${prefix}nsfw* [1/0]
║│➣ *${prefix}simih* [1/0]
║│➣ *${prefix}welcome* [1/0]
║╰─━─━─━─━─━─━─━─━─━─━─╯
╠━━━━━━━━❮OWNER❯━━━━━━━━
║╭─━─━─━─━─━─━─╮
║│➣ *${prefix}bc*
║│➣ *${prefix}setprefix*
║│➣ *${prefix}getses*
║│➣ *${prefix}clearall*
║│➣ *${prefix}block*
║│➣ *${prefix}unblock* 
║│➣ *${prefix}leave*    
║│➣ *${prefix}clone*
║╰─━─━─━─━─━─━─╯
┗━━━━━━━━━━━━━━━━
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 SELAMAT 」*
┏⊱ *Nama* : ${pushname}
┣⊱ *Nomer* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limit* : +3
┣⊱ *Role*: ${role}
┗⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*beli limit untuk mendapatkan limit/ naik level*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 ATM 」⊰━┓*\n┣⊱ *Nama* : ${pushname}\n┣⊱ *Nomer* : ${sender.split("@")[0]}\n┣⊱ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}

exports.premadd = (pnom) => {
	return`*「 PREMIUM ADD 」*

*Name* : ${pnom}
*Expired* : 30 DAY\n*thank for order premium*`
}

exports.dellprem = (hnom) => {
	return`*「 PREMIUM DELETE 」*

*Name* : ${hnom}
*Expired* : NOW:v\n*thank for order premium back soon for buying again:D*`
}

exports.premon = (pushname) => {
	return`MAAF ${pushname} ANDA BUKAN USER PREMIUM`
}

