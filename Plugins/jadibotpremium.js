let { WAConnection: _WAConnection, MessageType } = require('@adiwajshing/baileys')
let WAConnection = require('../lib/simple').WAConnection(_WAConnection)
let qrcode = require('qrcode')

if (global.conns instanceof Array) console.log()// for (let i of global.conns) global.conns[i] && global.conns[i].user ? global.conns[i].close().then(() => delete global.conns[id] && global.conns.splice(i, 1)).catch(global.conn.logger.error) : delete global.conns[i] && global.conns.splice(i, 1)
else global.conns = []

let handler  = async (m, { conn, args, usedPrefix, command }) => {
  let parent = args[0] && args[0] == 'plz' ? conn : global.conn
  let auth = false
  if ((args[0] && args[0] == 'plz') || global.conn.user.jid == conn.user.jid) {
    let id = global.conns.length
    let conn = new WAConnection()
    if (args[0] && args[0].length > 200) {
      let json = Buffer.from(args[0], 'base64').toString('utf-8')
      // global.conn.reply(m.isGroup ? m.sender : m.chat, json, m)
      let obj = JSON.parse(json)
      await conn.loadAuthInfo(obj)
      auth = true
    }
    conn.on('qr', async qr => {
      let scan = await parent.sendFile(m.chat, await qrcode.toDataURL(qr, { scale: 8 }), 'qrcode.png', 'Scan QR ini untuk jadi bot sementara\n\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk WhatsApp Web\n3. Scan QR ini \nQR Expired dalam 60 detik', m)
      setTimeout(() => {
        parent.deleteMessage(m.chat, scan.key)
      }, 60000)
    })
    conn.once('connection-validated', user => {
      parent.reply(m.chat, 'Berhasil tersambung dengan WhatsApp - mu.\n*NOTE: Jika Bot Gw Mati. Botlu Jugalah Kan Lu Numpang*\n' + JSON.stringify(user, null, 2), m)
    })
    conn.welcome = global.conn.welcome
    conn.bye = global.conn.bye
    conn.on('group-add', global.conn.onAdd)
    conn.on('group-leave', global.conn.onLeave)
    conn.on('message-new', global.conn.handler)
    conn.regenerateQRIntervalMs = null
    conn.connect().then(async ({user}) => {
      if (auth) return
      await parent.sendMessage(user.jid, `Kamu bisa login tanpa qr dengan pesan dibawah ini. untuk mendapatkan kode lengkapnya, silahkan kirim *${usedPrefix}getcode* untuk mendapatkan kode yang akurat`, MessageType.extendedText)
      parent.sendMessage(user.jid, `${usedPrefix + command} ${Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString('base64')}`, MessageType.extendedText)
    })
    setTimeout(() => {
      if (conn.user) return
      conn.close()
      delete global.conns[id]
    }, 60000)
    conn.on('close', conn.logger.info)
    global.conns.push(conn)
  } else throw 'Hooh Tidak bisa:)'
}
handler.help = ['jadibotpremium']
handler.tags = ['premium']
handler.command = /^jadibotpremium$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

