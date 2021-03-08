let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠ ️ *INFO BOT* ⚠ ️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Rec: Dark Bot
Script: @alvaro
Github: 
PRIVATE BY OWNER

*Sosmed :*
Kritik kami di sosmed ataupun YouTube.
Instagram: https://www.instagram.com/wbot14
➥ YouTube:
https://youtube.com/channel/UCV3BPHLtmhb0MZjbX4FpUWA

*Thanks To :*
Zikri
alia
dark bot
alvaro
Dan kawan yang lain :)

╠═〘 DONASI 〙 ═^M
╠➥ Saweria: Saweria/co/DinoBot
╠➥ Dana: 085892910131
╠➥ Indosat: 085892910131
║>Request? Wa.me/6283895134139
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
