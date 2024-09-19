// FILE YANG KHUSUS MENGLOLA CONTSCTS

// mengkonek kan ke core modul file sistem di docs node js
const fs = require('fs');
// core modeule readline
const readline = require('readline');

// membuat interfacenya
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Membuat folder data data jika belum ada
const folderPath = './data';
if(!fs.existsSync(folderPath)){
    fs.mkdirSync(folderPath);
}
// Membuat file json jika belum ada
const filePath = './data/contacts.json';
if(!fs.existsSync(filePath)){
    fs.writeFileSync(filePath,'[]', 'utf-8');
}

// MENGELOLA INPUTAN DARI TERMINAL
// Mengeksekusi pertanyaan menggunakan promise dan Async Await
const questionMain = (writeQuestion)=>{
    return new Promise((resolve,reject)=>{
        rl.question(writeQuestion, (Q)=>{
            resolve(Q);
        })
    })
}
const savaContacts = (nama,nim)=>{
     // Siapin data yang akan di tangkapnya untuk di tampilkan di file contacts.json
     const contact ={nama,nim}

     // Baca file yang di tulis di terminal
    const file = fs.readFileSync('data/contacts.json','utf-8');

    // Mengubah objek jadi json supaya bisa di push
    const contacts = JSON.parse(file);
    contacts.push(contact);
        
    // Menempelkan data yang di input di terminal ke dalam file contacs.json
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
    console.log('OK, Data berhasil di simpan');
    rl.close();
}
module.exports = {questionMain, savaContacts};