let a = Number(prompt('Digite a população do país A:'))
let b = Number(prompt('Digite a população do país B:'))
let taxaA = Number(prompt('Digite a taxa de crescimento da população A:'))
let taxaB = Number(prompt('Digite a taxa de crescimento da população B:'))
let cont = 0

if(b > a)
{
    while(b > a)
    {
        a = a + ((a / 100) * taxaA)
        b = b + ((b / 100) * taxaB)
        console.log(a, b)
        cont++
    }
}
else
{
    while(a > b)
    {
        a = a + ((a / 100) * taxaA)
        b = b + ((b / 100) * taxaB)
        console.log(a, b)
        cont++
    }
}

alert(`Levará ${cont} anos para igualar a população dos países.`)