const numberButton = document.querySelectorAll('.number__button')
const opButton = document.querySelectorAll('.op__button')
const resultButton = document.getElementById('result')
const deleate = document.getElementById('deleate')
var display = document.querySelector('.display__resultado')

var operador1 = ""
var operador2 = ""
var operacion = ""
var bandera = false
 
for(let op of opButton){
    op.addEventListener('click', (e)=> {
        operacion =  e.target.textContent
        display.textContent = display.textContent + operacion
        bandera = true
    });
}

for(let number of numberButton){
    number.addEventListener('click', (e) => {
        const ad = e.target.textContent
        display.textContent = display.textContent + ad
        bandera ?  operador2 = operador2 +ad : operador1 = operador1 + ad;
    })
}

resultButton.addEventListener('click', () => {
    let  number1 = parseFloat(operador1)
    let number2 = parseFloat(operador2)
    display.textContent = operation(number1,number2,operacion)
    
})

deleate.addEventListener('click',() => {
    display.textContent = ""
    if(operador2 && operador1) {
        operador1 = ""
        operador2 = ""
        bandera = false
    }
})

function operation(number1,number2,op){
    let res = 0;
    switch (op) {
        case "+" :
            res = number1 + number2
            break
        case "-" :
            res = number1 - number2
            break
        case "*" :
            res = number1 * number2
            break
        case "/":
            res = number1 / number2
    }
    return res
}