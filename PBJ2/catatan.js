const fs = require('fs')
const chalk = require('chalk')

const muatCatatan = function () {
    try {
        const dataBuffer = fs.readFileSync('catatan.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const listCatatan = function () {
    const catatan = muatCatatan()
    
    console.log(chalk.inverse('Daftar Semua Catatan:'))

    catatan.forEach((note) => {
        console.log(note.judul)
    })
}

const bacaCatatan = function (judul) {
    const catatan = muatCatatan()
    const catatanDicari = catatan.find((note) => note.judul === judul)
    
    if (catatanDicari) {
        console.log(chalk.inverse(catatanDicari.judul))
        console.log(catatanDicari.isi)
    } else {
        console.log(chalk.red.inverse('Catatan tidak ditemukan!'))
    }
}

const simpanCatatan = function (catatan) {
    const dataJSON = JSON.stringify(catatan)
    fs.writeFileSync('catatan.json', dataJSON)
}

const tambahCatatan = function (judul, isi) {
    const catatan = muatCatatan()
    const duplikatCatatan = catatan.find((note) => note.judul === judul)

    if (!duplikatCatatan) {
        catatan.push({
            judul: judul,
            isi: isi
        })
        simpanCatatan(catatan)
        console.log(chalk.green.inverse('Catatan baru ditambahkan!'))
    } else {
        console.log(chalk.red.inverse('Judul catatan sudah ada!'))
    }
}

const hapusCatatan = function (judul) {
    const catatan = muatCatatan()
    const catatanUntukDisimpan = catatan.filter(function (note) {
        return note.judul !== judul
    })
    
    if (catatan.length > catatanUntukDisimpan.length) {
        console.log(chalk.green.inverse('Catatan dihapus!'))
        simpanCatatan(catatanUntukDisimpan)
    } else {
        console.log(chalk.red.inverse('Catatan tidak ditemukan!'))
    }
}

module.exports = {
    tambahCatatan: tambahCatatan,
    hapusCatatan: hapusCatatan,
    listCatatan: listCatatan,
    bacaCatatan: bacaCatatan
}