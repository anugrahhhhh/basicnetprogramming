const express = require('express')
const app = express()
const hbs = require('hbs')

// Halaman utama
app.get('', (req, res) => {
  res.render('index', {
    judul: 'Aplikasi Cek Cucaca',
    nama: 'Anugrah Putra Al Fatih'
  })
})

// Halaman bantuan
//ini halaman bantuan
app.get('/bantuan', (req, res) => {
    res.render('bantuan', {
        judul: 'Halaman Bantuan',
        nama: 'Anugrah Putra Al Fatih',
        teksBantuan: 'ini adalah teks bantuan'
    })
})

// Halaman cuaca
app.get('/infoCuaca', (req, res) => {
    res.send([{
        prediksiCuaca: 'Anugrah Putra Al Fatih',
        lokasi: 'Mahasiswa'
    }])
})

// Halaman tentang
app.get('/tentang', (req, res) => {
    res.render('tentang', {
        judul: 'Tentang Saya',
        nama: 'Anugrah Putra Al Fatih'
    })
})

// Mengatur direktori public untuk file statis
const path = require('path')
const direktoriPublic = path.join(__dirname, '../public');
const direktoriViews = path.join(__dirname, '../templates/views')
const direktoriPartials = path.join(__dirname, '../templates/partials')

//setuphandlebars engine dan lokasi folder views
app.set('view engine', 'hbs')
app.set('views', direktoriViews)
hbs.registerPartials(direktoriPartials)

//setupdirektori statis
app.use(express.static(direktoriPublic));

// Wildcard untuk rute yang tidak ditemukan pada halaman bantuan
app.get('/bantuan/*', (req, res) => {
    res.render('404', {
        judul: '404',
        nama: 'Anugrah Putra Al Fatih',
        pesanKesalahan: 'Artikel yang dicari tidak ditemukan.'
    })
})

// Wildcard untuk rute yang tidak ditemukan di seluruh aplikasi
app.get('*', (req, res) => {
    res.render('404', {
        judul: '404',
        nama: 'Anugrah Putra Al Fatih',
        pesanKesalahan: 'Halaman tidak ditemukan.'
    })
})

//port jalankan
app.listen(4000, () => {
    app.use(express.static('public'));
    console.log('Server berjalan pada port 4000.')
    })
    