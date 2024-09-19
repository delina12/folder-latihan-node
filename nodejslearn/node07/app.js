// konek ke npm yargs
const yargs = require('./node_modules/yargs');
const fileMain = require('./main.js');
const { command, describe, demandOption } = require('yargs');
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
}).demandCommand();

// menampilkan data
yargs.command({
    command:'list',
    describe: 'menampilkan data yang diperlukan',
    handler(){
        fileMain.listContact();
    },
})

// menampilkan detail data dari sebuah nama
yargs.command({
    command: "detail",
    describe: "Menapilkan detail data dari sebuah nama",
    builder:{
        nama:{
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'String',
        },
    },
    handler(argv){
        fileMain.detailContact(argv.nama);
    }
})

// menghapus data berdasarkan nama
yargs.command({
    command: 'delete',
    describe: 'Menghapus data berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'String'
        }
    },
    handler(argv){
        fileMain.deleteContact(argv.nama);
    }
})

yargs.parse();

