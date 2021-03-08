let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
┏━━°❀❬ *PREFIX BOT* ❭❀°━━┓
┣➥ Prefix : {/}
┗━━━━━━━━━━━━━━━━━━
`.trim(), m)
}
handler.help = ['prefixbot']
handler.tags = ['info']
handler.command = /^(prefixbot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler