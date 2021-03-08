let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
mau beli Premium? ketik #donasi nanti lu Donasi 10k buat jadi premium! bingung atau kagak tau Cara Donasi Gampang Banget Nanti Ada Di #donasi
Jadi Adminstrator/Owner? ketik Aja #donasi nanti lu Donasi 50k Buat Jadi Owner! Tutorial Donasinya Gampang Ya Ada Di #donasi!
mau Buat Bot? Donasi 100k Nanti Lu ketik di #donasi abis itu donate 100k! Tapi Lu Perlu 2 hp Buat Scan qr dan satuny lagi buat Download Foto
Ok Sampai Sini dulu Ya..

Ini Link Group Kami Kak Undefined jangan Lupa Join ya Kak Undefined Kalo Gak Join Simi Nangis nih :(

------------------------------------------------   
https://chat.whatsapp.com/CNwtFTWyTaVG3vRtjuyRJ0                                                                                     
------------------------------------------------

*Jangan Lupa Sakreb Youtube Kami:*
https://youtube.com/channel/UCV3BPHLtmhb0MZjbX4FpUWA
`.trim(), m)
}

handler.help = ['belipremium']
handler.tags = ['info']                                     
handler.command = /^(belipremium)$/i
handler.owner = false                                           
handler.mods = false                                            
handler.premium = false                                   
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler