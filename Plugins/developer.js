let handler = function (m) {
  // this.sendContact(m.chat, '6283895134139', 'ALIA ID', m)
  this.sendContact(m.chat, '6283895134139', 'ALIA ID', m)
}
handler.help = ['Developerbot', 'Developer']
handler.tags = ['info']

handler.command = /^(Developerbot|Developer)$/i

module.exports = handler
