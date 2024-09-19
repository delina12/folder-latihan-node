// Mengambil argumen cara 01
// const contacs = require('./main.js'); // connect ke file main.js
// const Main = async ()=>{
//     const nama = await contacs.MainQ('Silahkan Inputkan nama anda :');
//     const nim = await contacs.MainQ('Inputkan NiM anda :');

//     contacs.saveData(nama,nim);
// }
// Main();




// konek ke npm yargs
const yargs = require('yargs');
const fileMain = require('./main.js')
// Mengambil argumen 02 (dari commend line)

yargs.command({
    command: 'add',
    desc: 'Menambahkan data',
    builder: {// dia akan nerima apa aja, ketika command di jalankan dia harus mengisi 3
        nama: {
            describe: 'Nama lengkap',
            demandOption: true,
            type:'string',
        },
        email:{
            describe:'alamat email',
            demandOption: true,
            type: 'string',
        },
        nohp:{
            describe: 'Nomor hp',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv){// argumen pada bilder
            fileMain.saveData(argv.nama,argv.email,argv.nohp);    
        }
})
yargs.parse();

