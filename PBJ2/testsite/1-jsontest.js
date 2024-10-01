const fs = require('fs')
const buku = {
  judul: 'Pemrograman Jaringan',
  penulis: 'Anugrah Putra Al Fatih'
}
const bookJSON = JSON.stringify(buku) 
fs.writeFileSync('1-jsontest.json', bookJSON)
