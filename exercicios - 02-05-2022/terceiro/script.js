let nota1 = Number(prompt('Digite a primeira nota:'))
let nota2 = Number(prompt('Digite a segunda nota:'))

let media = (nota1 + nota2) / 2

let conceito

if(media >= 9 && media <= 10)
{
    conceito = 'A'
}
else if(media >=7.5 && media < 9)
{
    conceito = 'B'
}
else if(media >= 6 && media < 7.5)
{
    conceito = 'C'
}
else if(media >= 4 && media < 6)
{
    conceito = 'D'
}
else
{
    conceito = 'E'
}

let aprovado = ['A', 'B', 'C']

if(aprovado.includes(conceito)){
    aprovado = 'APROVADO'
}
else
{
    aprovado = 'REPROVADO'
}

alert(`As duas notas são: ${nota1} e ${nota2}\nA média é ${media}\nO conceito é: ${conceito}\n${aprovado}`)