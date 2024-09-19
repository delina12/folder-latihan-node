const express = require('express')
const expressLayout = require('express-ejs-layouts')
const app = express()
const port = 3000
const{loadContact, findContact} = require('./utils/contacts')

// gunakan ejs
app.set('view engine', 'ejs')
// setup express layout
app.use(expressLayout);

// bikin built-in middleware
app.use(express.static('public'))


app.get('/', (req, res) => {// code ini tempat menirim data ke indexnya

  const products = [
    {
      tipeProduct: 'makanan/pangan',
      namaProduct: 'Beras bulog',
    },
    {
      tipeProduct: 'makanan/pangan',
      namaProduct: 'Beras organik',
    }
  ]

  const mahasiswa = [
    {
      nim: '21110004',
      nama: 'Andi',
    },
    {
      nim: '21110010',
      nama: 'Andri ',
    }
  ]

  res.render('index', {
    layout: 'layouts/main-layout.ejs',
    nama: 'Delina',
    title: 'Halaman Home',
    products,
    mahasiswa,
  })

})

// ini routs nya
app.get('/about', (req, res) => {
  res.render('about', {
    title: 'halaman about', 
    layout: 'layouts/main-layout.ejs',
  })
})
app.get('/contact', (req, res) => {
  const contacts = loadContact()  // cara mendapatkan kontak dari jsonnya
  res.render('contact', {
    title: 'Halaman contact', 
    layout: 'layouts/main-layout.ejs',
    contacts,
  })
})
app.get('/contact/:nama', (req, res) => {
  const contact = findContact(req.params.nama)  
  res.render('detail', {
    title: 'Halaman Detail', 
    layout: 'layouts/main-layout.ejs',
    contact,
  })
})

// request
app.use('/', (req, res) => {
  res.status(404);
  res.send('Ups,,not ok!,,,<h1>404</h1>')
})

app.listen(port, () => {
  console.log(`Your application is already running on port ${port}`)
})