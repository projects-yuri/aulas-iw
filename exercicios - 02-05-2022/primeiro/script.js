let letra = prompt('Digite uma letra')
let upper = letra.toUpperCase()

let vogais = ['A','E','I','O','U']

if(vogais.includes(upper))
{
    document.write('<h2>Você digitou uma vogal!</h2>')
}
else
{
    document.write('<h2>Você digitou uma consoante!</h2>')
}