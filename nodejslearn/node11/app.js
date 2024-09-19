const express = require('express')
const expressLayout = require('express-ejs-layouts')
const app = express()
const port = 3000
const morgan = require('morgan')

// gunakan ejs
app.set('view engine', 'ejs')
// setup express layout
app.use(expressLayout);
// gunakan morgan
app.use(morgan('dev'))

// bikin built-in middleware
app.use(express.static('public'))

// membuat middleware
app.use((req, res, next) => {
  console.log('Middleware pertama. Time:', Date.now());
  next()
})

app.use((req,res,next) => {
  console.log('Middleware kedua');
  next()
})

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
  res.render('contact', {
    title: 'halaman contact', 
    layout: 'layouts/main-layout.ejs',

  })
})

// request
app.get('/product/:id/category/:idCat', (req, res) => {
  res.send(`product Id ${req.params.id}
             <br>
             Category ID ${req.params.idCat}`)
})

app.use('/', (req, res) => {
  res.status(404);
  res.send('Ups,,not ok!,,,<h1>404</h1>')
})

app.listen(port, () => {
  console.log(`Your application is already running on port ${port}`)
})