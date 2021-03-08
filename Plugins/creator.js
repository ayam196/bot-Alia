let handler = function (m) {
  // this.sendContact(m.chat, '6287774197031', 'ZIKRI ID', m)
  this.sendContact(m.chat, '6287774197031', 'ZIKRI ID', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
