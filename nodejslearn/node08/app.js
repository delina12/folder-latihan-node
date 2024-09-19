const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000

http.createServer((req,res) =>{
    res.writeHead(200,{
        'Content-Type': 'text/html'
    })// untuk mengembalikan respon berupa file html

    const url = req.url;
    const renderHTML = (path,res)=>{
        fs.readFile(path,(err,data)=>{
            if(err){
                res.writeHead(404)
                res.write('Error: File Not Found')
            }else{
                res.write(data)
            }
            res.end()
        })
    }
    switch(url){
        case '/about': renderHTML('./about.html',res);
        break;
        case '/contact': renderHTML('./contact.html',res);
        break;
        default: renderHTML('./index.html',res);
        break;
    }
    // if(url === '/about'){
    //     renderHTML('./about.html',res)
    // }else if(url === '/contact'){
    //     // fs.readFile('./contact.html',(err,data)=>{
    //     //     if(err){
    //     //         res.writeHead(404)
    //     //         res.write('Error: File Not Found')
    //     //     }else{
    //     //         res.write(data)
    //     //     }
    //     //     res.end()
    //     // })
    //     renderHTML('./contact.html',res)
    // }else{
    //     // menggunskan method untuk menbaca isi file

    //     // fs.readFile('./index.html',(err,data)=>{
    //     //     if(err){
    //     //         res.writeHead(404)
    //     //         res.write('Error: File Not Found')
    //     //     }else{
    //     //         res.write(data)
    //     //     }
    //     //     res.end()
    //     // })
    //     renderHTML('./index.html',res)
    // }
  
})//bikin server

.listen(port,()=>{//ketika server berhasil berjalan
    console.log(`Server in listening on port ${port} successfully`)
})