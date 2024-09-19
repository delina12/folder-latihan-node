const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
//   res.send('Hello World!')
res.sendFile('./index.html',{root: __dirname})
})

app.get('/about', (req, res) => {
//   res.send('Hello about!')
res.sendFile('./about.html',{root: __dirname})
})
app.get('/contact', (req, res) => {
//   res.send('Hello about!')
res.sendFile('./contact.html',{root: __dirname})
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
  console.log(`Example app listening on port ${port}`)
})











// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const port = 3000

// http.createServer((req,res) =>{
//     res.writeHead(200,{
//         'Content-Type': 'text/html'
//     })// untuk mengembalikan respon berupa file html

//     const url = req.url;
//     const renderHTML = (path,res)=>{
//         fs.readFile(path,(err,data)=>{
//             if(err){
//                 res.writeHead(404)
//                 res.write('Error: File Not Found')
//             }else{
//                 res.write(data)
//             }
//             res.end()
//         })
//     }
//     switch(url){
//         case '/about': renderHTML('./about.html',res);
//         break;
//         case '/contact': renderHTML('./contact.html',res);
//         break;
//         default: renderHTML('./index.html',res);
//         break;
//     }
// })//bikin server

// .listen(port,()=>{//ketika server berhasil berjalan
//     console.log(`Server in listening on port ${port} successfully`)
// })