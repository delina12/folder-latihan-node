// Inisialisasi variabel
const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const operationAdd = document.querySelector(".operation-add");
const operationMin = document.querySelector(".operation-min");
const operationKali = document.querySelector(".operation-kali")
const operationBagi = document.querySelector(".operation-bagi")
const operationMod = document.querySelector(".operation-mod")

// Membaca inputan. ketika pengguna menginputkan nilai pada kolom inputan, maka ketika tombol operator di klik lakukan operasi matematik

// Operasi penjumlahan
operationAdd.addEventListener("click", function(){
    const result = parseInt((num1).value) + parseInt((num2).value)
    alert("Hasil :" + result)
   
    
});

// operasi pengurangan
operationMin.addEventListener("click", function(){
    const result = parseInt((num1).value) - parseInt((num2).value)
    alert("Hasil :" +result)
});

// operasi perkalian
operationKali.addEventListener("click", function(){
    const result = parseInt((num1).value) * parseInt((num2).value)
    alert("Hasil :" +result)
});

// operasi pembagian
operationBagi.addEventListener("click", function(){
    const result = parseInt((num1).value) / parseInt((num2).value)
    alert("Hasil :" +result)
});

// operasi mod
operationMod.addEventListener("click", function(){
    const result = parseInt((num1).value) % parseInt((num2).value)
    alert("Hasil :" +result)
});

