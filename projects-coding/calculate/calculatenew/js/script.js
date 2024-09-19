const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")

const operationAdd = document.querySelector(".add")
const operationSubtraction = document.querySelector(".subtraction")   

// calculation
operationAdd.addEventListener('click', function () {
    const result = parseInt((num1).value) + parseInt((num2).value)
    document.getElementById('result').innerText = result
})
operationSubtraction.addEventListener('click', function () {
    const result = parseInt((num1).value) - parseInt((num2).value)
    document.getElementById('result').innerHTML = result
})
