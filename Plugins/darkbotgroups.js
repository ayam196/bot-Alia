let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Ini Link Group Bot Kami Kak jangan Lupa Join Ya Kak Undefined ^_^

|------------------------------------------------|
|https://chat.whatsapp.com/CNwtFTWyTaVG3vRtjuyRJ0|
|------------------------------------------------|

*Jangan Lupa Sakreb Youtube Kami Ya Kak Undefined ^_^:*
https://youtube.com/channel/UCV3BPHLtmhb0MZjbX4FpUWA
`.trim(), m)
}
handler.help = ['darkgroup']
handler.tags = ['info']
handler.command = /^(darkgroup)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler