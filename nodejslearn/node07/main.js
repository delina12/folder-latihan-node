//connect ke file core module fs dan readline
// const { rejects } = require('assert');
const fs = require('fs');
const validator = require('./node_modules/validator');
const { connect } = require('http2');
// const { resolve } = require('path');


const folderPath = './data'
if(!fs.existsSync(folderPath)){
    fs.mkdirSync(folderPath);
};
const filePath= './data/data.json';
if(!fs.existsSync(filePath)){
    fs.writeFileSync(filePath,'[]','utf-8')
}

// PENGELOAANN DATA
const loadContact=()=>{
    const file = fs.readFileSync('./data/data.json','utf-8');
    const contacts = JSON.parse(file);
    return contacts;
}

const saveData =(nama,email,nohp)=>{
    // siapkan data yang akan di tangkap
    const contact={nama,email,nohp}

    const contacts = loadContact();

   // Mengecek nama apakah duplikat atau tidak
   const duplikat = contacts.find((contact)=> contact.nama === nama)
   if(duplikat){
    console.log("Sorry nama sudah ada, kami tidak akan menyimpan data anda")
    return false;
   }
    // cek email apakah benar atau tidak, memanfaatkan core modul validator
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
// aksi list data
const listContact = ()=>{
    // ambil isi data dari file json
    const contacts = loadContact();

    console.log("List Karyawan")
    // lakukan looping
    contacts.forEach((contact,i)=>{
        console.log(`${i+1}. ${contact.nama} - ${contact.email}`)
    })

}

const detailContact = (nama)=>{
    // membaca file/mengecek data pada file
    const contacts = loadContact();

    // mencari data di file jsonnya sesuai dengan namanya (menggunakan array method yang namanya find)
    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());//method find untuk pencarian

    // lansung cek 
    if(!contact) {
        console.log(`Sorry, nama "${nama}" tidak ditemukan`);
        return false;
    }
        console.log(contact.nama);  
        console.log(contact.nohp);
        if(contact.email){
            console.log(contact.email);
        }
    
}

// delete data
const deleteContact =(nama)=>{
    const contacts = loadContact();// mengambil data contacts dari json
    const newContacts = contacts.filter((contact)=> contact.nama.toLowerCase() !== nama.toLowerCase());//method filter untuk mencari supaya jika dihapus tidak undifined, atau dalam arti lain supaya menghasilkan array baru
    if(contacts.length === newContacts.length){
        console.log('Sorry data tidak  ditemukan')
        return false;
    }
    fs.writeFileSync('./data/data.json', JSON.stringify(newContacts));
    console.info(`Ok semua data "${nama}" berhasil anda dihapus`)
}


module.exports ={saveData, listContact, detailContact, deleteContact};
