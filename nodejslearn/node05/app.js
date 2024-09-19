const contacs = require('./main.js'); // connect ke file main.js
const Main = async ()=>{
    const nama = await contacs.MainQ('Silahkan Inputkan nama anda :');
    const nim = await contacs.MainQ('Inputkan NiM anda :');

    contacs.saveData(nama,nim);
}
Main();