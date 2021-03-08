let handler = async (m, { conn }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastclaim > 86400000) {
    global.DATABASE._data.users[m.sender].limit += 500
    m.reply('+500 Limit')
    global.DATABASE._data.users[m.sender].lastclaim = new Date * 1
  } else m.reply('Anda sudah mengklaim klaim harian hari ini')
}
handler.help = ['dailylimit', 'claimlimit']
handler.tags = ['xp']
handler.command = /^(dailylimit|claimlimit)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

