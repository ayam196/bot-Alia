let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.dare)}”`, m)
}
handler.help = ['dare']
handler.tags = ['quotes']
handler.command = /^(dare)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.dare = [
 'makan 2 sendok nasi tanpa lauk apapun, kalo seret boleh minum',
        'spill orang yang bikin kamu jedag jedug',
        'telfon crush/pacar sekarang dan ss ke pemain',
        'drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari.',
        'ucapin kata "Selamat datang di Who Wants To Be a Millionaire!" ke semua grup yang kamu punya',
        'marah² ga jelas ke penonton sw kamu urutan 30',
        'telfon mantan bilang kangen',
        'yanyiin reff lagu yang terakhir kamu setel',
        'vn mantan/crush/pacar kamu, bilang hi (namanya), mau telfon dong, bentar ajaa. aku kangen🥺👉🏼👈🏼"',
        'kletekan di meja (yg ada dirumah) sampe lo dimarahin karena berisik',
        'belanjain (grab/gofood) buat salah satu pemain disini, terserah siapa. budget dibawah 25k',
        'Bilang ke random people  "Aku baru saja diberi tahu aku adalah kembaranmu dulu, kita dipisahkan, lalu aku menjalani operasi plastik. Dan ini adalah hal paling ciyussss "',
        'sebutin nama nama mantan',
        'buatin 1 pantun untuk pemain pertama!',
        'ss chat wa',
        'chat random people dengan bahasa alay lalu ss kesini',
        'ceritain hal memalukan versi diri sendiri',
        'tag orang yang dibenci',
        'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll.',
        'ganti nama jadi " BOWO " selama 24 jam',
        'teriak " anjimm gabutt anjimmm " di depan rumah mu',
        'snap/post foto pacar/crush',
        'sebutkan tipe pacar mu!',
        'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini',
        'record voice baca surah al-kautsar',
        'prank chat mantan dan bilang " i love u, pgn balikan. " Tanpa ada kata dare!',
        'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you!"',
        'ganti nama menjadi "gue anak lucinta luna" selama 5 jam',
        'ketik pake bahasa sunda 24 jam',
        'pake foto sule sampe 3 hari',
        'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu',
        'kirim voice note bilang can i call u baby?',
        'ss recent call whatsapp',
        'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo!',
        'pap ke salah satu anggota grup'
]
