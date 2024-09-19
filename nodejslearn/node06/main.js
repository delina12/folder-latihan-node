//connect ke file core module fs dan readline
// const { rejects } = require('assert');
const fs = require('fs');
const validator = require('./node_modules/validator')
// const { resolve } = require('path');


const folderPatf = './data'
if(!fs.existsSync(folderPatf)){
    fs.mkdirSync(folderPatf);
};
const filePath= './data/data.json';
if(!fs.existsSync(filePath)){
    fs.writeFileSync(filePath,'[]','utf-8')
}

// PENGELOAANN DATA


const saveData =(nama,email,nohp)=>{
    // siapkan data yang akan di tangkap
    const contact={nama,email,nohp}

    // baca file yang di tulis di terminal
    const file = fs.readFileSync('./data/data.json','utf-8');

    // Mengubah bentuk objek menjadi json supaya bisa di push
    const contacts = JSON.parse(file);
   // Mengecek data apakah duplikat atau tidak
   const duplikat = contacts.find((contact)=> contact.nama === nama)
   if(duplikat){
    console.log("Sorry nama sudah ada, kami tidak akan menyimpan data anda")
    return false;
   }
    // cek email, memanfaatkan core modul validator
   if(email){
    if(!validator.isEmail(email)){
        console.log("Sorry email tidak valid")
        return false;
    }
   }

    // cek nomor hp apakah benar atau tidak
    if(!validator.isMobilePhone(nohp, 'id-ID')){
        console.log("Maaf, nomor hp tidak valid!")
        return false;
    }   
    contacts.push(contact);

    // menyimpan file yang di inputkan ke dalam file json dalam bentuk string
    fs.writeFileSync('./data/data.json', JSON.stringify(contacts))
    console.log('Ok,,data telah kami simpan');
    
    

}
module.exports ={saveData};
