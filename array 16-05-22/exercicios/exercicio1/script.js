let quantity = Number(prompt('Quantos números você deseja armazenar?'))
let array = []

for(let i = 0; i < quantity; i++)
{
    array.push(Number(prompt('Digite um número: ')))
}

while(isNaN(quantity))
{
    alert('Digite um número!')
    quantity = Number(prompt('Quantos números você deseja armazenar?'))
}

array.sort((a, b) => {
    if (a > b) return 1
    if (a < b) return -1
    return 0
})
document.write(array)
console.log(array)