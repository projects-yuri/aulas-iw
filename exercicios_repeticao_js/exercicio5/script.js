let number = Number(prompt('Digite um número entre 1 e 10:'))
let result

while(number < 1 || number > 10)
{
    alert('Digite um número entre 1 e 10!')
    number = Number(prompt('Digite um número entre 1 e 10:'))
}

for(let i = 1; i <= 10; i++)
{
    result = number * i
    document.write(`<p>${number} x ${i} = ${result}</p>`)
}