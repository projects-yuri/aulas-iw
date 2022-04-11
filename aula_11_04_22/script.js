const add = document.getElementById('add')
const subtract = document.getElementById('subtract')
const divide = document.getElementById('divide')
const multiply = document.getElementById('multiply')

let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let res = document.getElementById('result')

const somar = () => {

    let num1 = Number(n1.value)
    let num2 = Number(n2.value)
    let plus = num1 + num2

    res.innerText = `A soma de ${num1} + ${num2} é ${plus}`
}

add.addEventListener('click', somar)

const subtrair = () => {

    let num1 = Number(n1.value)
    let num2 = Number(n2.value)
    let subtract = num1 - num2

    res.innerText = `A subtração de ${num1} + ${num2} é ${subtract}`
}

subtract.addEventListener('click', subtrair)

const multiplicar = () => {

    let num1 = Number(n1.value)
    let num2 = Number(n2.value)
    let multiply = num1 * num2

    res.innerText = `A multiplicação de ${num1} + ${num2} é ${multiply}`
}

multiply.addEventListener('click', multiplicar)

const dividir = () => {

    let num1 = Number(n1.value)
    let num2 = Number(n2.value)
    let divide = num1 / num2

    res.innerText = `A divisão de ${num1} + ${num2} é ${divide}`
}

divide.addEventListener('click', dividir)

// not cool :(