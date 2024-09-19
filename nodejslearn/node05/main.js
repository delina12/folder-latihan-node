//connect ke file core module fs dan readline
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const readline = require('readline');


// Membuat interfacenya 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
const folderPatf = './data'
if(!fs.existsSync(folderPatf)){
    fs.mkdirSync(folderPatf);
};
const filePath= './data/data.json';
if(!fs.existsSync(filePath)){
    fs.writeFileSync(filePath,'[]','utf-8')
}

// PENGELOAANN DATA
// membuat variabel untuk di gunakna berkali-kali menggunakna promise
const MainQ = (writeQuestion)=>{
    return new Promise((resolve, reject)=>{
        rl.question(writeQuestion,(yes)=>{
            resolve(yes);
        })
    })
}

const saveData =(nama,nim)=>{
    // siapkan data yang akan di tangkap
    const contact={nama,nim}

    // baca file yang di tulis di terminal
    const file = fs.readFileSync('./data/data.json','utf-8');

    // Mengubah bentuk objek menjadi json supaya bisa di push
    const contacts = JSON.parse(file);
    contacts.push(contact);

    // menyimpan file yang di inputkan ke dalam file json dalam bentuk string
    fs.writeFileSync('./data/data.json', JSON.stringify(contacts))
    console.log('Ok,,data telah kami simpan');
    rl.close();

}
module.exports ={MainQ, saveData};
