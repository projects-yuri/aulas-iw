let even = 0, odd = 0

for(let i = 1; i <= 10; i++)
{
    let number = Number(prompt(`Digite o ${i}º número:`))
    while(isNaN(number))
    {
        alert('Digite um NÚMERO!')
        number = Number(prompt(`Digite o ${i}º número:`))
    }
    if(number % 2 == 0)
    {
        document.write(`<p>${number} é par</p>`)
        even++
    }
    else
    {
        document.write(`<p>${number} é ímpar</p>`)
        odd++
    }
}
document.write(`<h3>Temos ${even} números pares`)
document.write(`<h3>Temos ${odd} números ímpares`)