const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000

// gunakan ejs
app.set('view engine','ejs')

// setup express layout
app.use(expressLayouts);
app.use(express.static('public'))

app.get('/', (req, res) => {// code ini tempat mengirim data ke indexnya
  
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

  const mahasiswa= [
    {
      nim: '21110004',
      nama: 'Andi',
    },
    {
      nim: '21110010',
      nama: 'Andri ',
    }
  ]

  res.render('index', { nama: 'Delina',
    title: 'Halaman Home',
    products,
    mahasiswa,
  })

})

// ini routs nya
app.get('/about', (req, res) => {
res.render('about',{title:'halaman about',layout: 'layouts/main-layout'
})
})
app.get('/contact', (req, res) => {
res.render('contact',{title:'halaman contact', layout: 'layouts/main-layout',
})
})

// request
app.get('/product/:id/category/:idCat',(req,res)=>{
    res.send(`product Id ${req.params.id}
             <br>
             Category ID ${req.params.idCat}`)
})

app.use('/',(req,res)=>{
    res.status(404);
    res.send('Ups,,not ok!')
})

app.listen(port, () => {
  console.log(`Your application is already running on port ${port}`)
})