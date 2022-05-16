let number = Number(prompt('Digite um número inteiro:'))

while(isNaN(number))
{
    alert('Digite um NÚMERO!')
    number = Number(prompt('Digite um número inteiro:'))
}

let cont = number
let array = [number]

while(cont != number * 2)
{
    cont++
    array.push(cont)
}

document.write(`O array contém: ${array}`)