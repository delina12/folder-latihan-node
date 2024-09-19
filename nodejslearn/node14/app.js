const express = require('express')
const expressLayout = require('express-ejs-layouts')
const app = express()
const port = 3000
const { body, validationResult, check } = require('express-validator');
const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')
const { loadContact, findContact, addContact, checkDuplikat } = require('./utils/contacts')

// gunakan ejs
app.set('view engine', 'ejs')
// setup express layout
app.use(expressLayout);
// bikin built-in middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))//middleware utnuk parsing

// konfigurasi session, cookie dan flash
app.use(cookieParser('secret'))
app.use(session({
  cookie: { maxAge: 6000 },
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}))
app.use(flash())


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
    msg: req.flash('msg'),
  })
})

// halaman tambah data contact
app.get('/contact/add', (req, res) => {
  res.render('add-contact', {
    title: 'Halaman tambah data',
    layout: 'layouts/main-layout.ejs'
  })
})
app.post('/contact',
  [body('nama').custom((value) => {
    const duplikat = checkDuplikat(value)
    if (duplikat) {
      throw new Error('Nama ini sudah terdaftar')
    }
    return true
  }), check('email', 'Ups,,Emailnu tidak valid').isEmail(), check('nohp', ' Ups, No.Hp kamu bukan format Indonesia.').isMobilePhone('id-ID')], (req, res) => {//membutuhkan middleware untuk parse
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      // return res.status(400).json({ errors: errors.array() })
      res.render('add-contact', {
        title: 'Form Tambah data contact',
        layout: 'layouts/main-layout.ejs',
        errors: errors.array(),
      })
    } else {
      addContact(req.body)// menampilkan tambah conatct yag baru
      req.flash('msg','Oke, Data berhasil di tambahkan')
      res.redirect('/contact')
    }
  })

// halaman detail contact
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