// core modeules docs node.org
const fs = require('fs');

// kalo pake sychronous pake try dan catch kalo pake asycnchronous gak usah karena sudah ditanganni pake callbak

// menuliskan string ke file secara synchronous
// try{
//     fs.writeFileSync('data/test.txt','Hello world i m powerfull');
// }catch(err){
//     console.log('Maaf data tidak ada, ', err);
// }


// menuliskan string ke file secara Asynchronous
// fs.writeFileSync('data/test.txt','Menuliskan string ke dalam file secara asynchronous',(err)=>{
//     console.log('Bikin filenya dulu woy!!!!!,', err)
// })


// MEMBACA ISI FILE
// secara synchronous
// const data = fs.readFileSync('data/contacts.json', 'utf-8');
// console.log(data);



// secara asynchronous (ada 2 calbak)
//  const data = fs.readFile('data/test.txt','utf-8',(err, data)=>{
//     if(err) throw err;
//     console.log(data);
//  })

// READLINE -> untuk membaca apa yang kita tulis di cmd
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question('Silahkan masukan nama anda dulu :',(nama)=>{
    rl.question('Berapa no Hp kamu :',(noHp)=>{
        // siapin data yang akan di tangkapnya 
        const contact={nama,noHp};
        // baca isi filenya
        const file=fs.readFileSync('data/contacts.json','utf-8');
        const contacts = JSON.parse(file);//mengubah objek jdi json supaya bisa di push
        contacts.push(contact);
        // tampilkan di file json dan memblaikn json menjadi string
        fs.writeFileSync('data/contacts.json',JSON.stringify(contacts));
        console.log("Ok, Data berhasil di simpan");
        rl.close();
    })
});
