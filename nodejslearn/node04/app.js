

// const question2 = ()=>{
//     return new Promise((resolve, reject)=>{
//         rl.question("Inputkan NIM anda :",(nim)=>{
//             resolve(nim);
//         })
//     })
// }

const contacs = require('./contacts.js');
// fungsi utama yang menangkap nilai dari tiap-tiap variabel, menggunakan metode async await
const main = async ()=>{
    const nama = await contacs.questionMain('Inputkan Nama Andam :');
    const nim = await contacs.questionMain('Inputkan NIM anda :');

    
    contacs.savaContacts(nama,nim);
   };
main();


// eksekusi data dari terminal ke file json pake calbak
// rl.question('Silahkan Input nama asli anda : ', (nama)=>{
//     rl.question('Silahkan input NIM anda : ',(nim)=>{

//         // Siapin data yang akan di tangkapnya untuk di tampilkan di file contacts.json
//         const contact ={nama,nim}

//         // Baca file yang di tulis di terminal
//         const file = fs.readFileSync('data/contacts.json','utf-8');

//         // Mengubah objek jadi json supaya bisa di push
//         const contacts = JSON.parse(file);
//         contacts.push(contact);
        
//         // Menempelkan data yang di input di terminal ke dalah file contacs.json
//         fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
//         console.log('OK, Data berhasil di simpan');
//         rl.close();
//     })
// });



