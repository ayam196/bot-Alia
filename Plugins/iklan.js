let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╔═════❀ ❬ IKLAN ❭ ❀═════╗
╠-❥ *Jual Script Bot & Buat Bot*
╠-❥ *Harga Script Bot 50K*
╠-❥ *100K Bisa Buat Bot*
╠═══════════════════
╠-❥ *Keuntungan Buat Bot:*
╠-❥ *1.Bisa Jadi Owner*
╠-❥ *2.Custom Nama Bot*
╠-❥ *3.Desain Menu Sesuai Selera*
╚═══════════════════╝
 *❀Harga Terjangkau❀*
╔═══❀ ❬ *INFORMATION* ❭ ❀══╗
╠-❥ *Jika Minat Iklan Di Atas*
╠-❥ *Hubungi No Di Bawah*
╠-❥ *PEMBAYARAN BISA MELALUI*
╠-❥  *Pulsa?: 300k*
╠-❥  *Saweria?: 95k*
╠-❥  *Dana?: 100k*
╚═══════════════════╝
Nomer: http://wa.me/6283895134139?text=belibot

Ini Link Group Kami Kak Undefined jangan Lupa Join ya Kak Undefined Kalo Gak Join Simi Nangis nih :(

------------------------------------------------
https://chat.whatsapp.com/CNwtFTWyTaVG3vRtjuyRJ0
------------------------------------------------

*Jangan Lupa Sakreb Youtube Kami Ya kak:*
https://youtube.com/channel/UCV3BPHLtmhb0MZjbX4FpUWA
`.trim(), m)
}

handler.help = ['iklan']                                              handler.tags = ['info']
handler.command = /^(iklan)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false                                                 handler.botAdmin = false

handler.fail = null                                                   
module.exports = handler