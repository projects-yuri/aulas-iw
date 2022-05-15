let number = Number(prompt('Digite a base:'))
let expoent = Number(prompt('Digite o expoente'))
let result = 1

while(isNaN(number))
{
    alert('Isso não é um número!')
    number = Number(prompt('Digite a base:'))
}

while(isNaN(expoent))
{
    alert('Isso não é um número!')
    expoent = Number(prompt('Digite o expoente'))
}

for(let i = 1; i <= expoent; i++)
{
    result *= number
}

alert(`${number} elevado a ${expoent} = ${result}`)