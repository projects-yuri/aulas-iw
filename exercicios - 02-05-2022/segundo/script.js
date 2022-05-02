let salario = Number(prompt('Digite seu salário:'))

let aumento, final, porcentagem

if(salario <= 280)
{
    aumento = (salario / 100) * 20
    final = salario + aumento
    porcentagem = 20
    console.log('Seu salário final é: R$' + final)
}
if(salario >= 280.001 && salario <= 700)
{
    aumento = (salario / 100) * 15
    final = salario + aumento
    porcentagem = 15
    console.log('Seu salário final é: R$' + final)
}
if(salario >= 700.001 && salario <= 1500)
{
    aumento = (salario / 100) * 10
    final = salario + aumento
    porcentagem = 10
    console.log('Seu salário final é: R$' + final)
}
if(salario >= 1500.001)
{
    aumento = (salario / 100) * 5
    final = salario + aumento
    porcentagem = 5
    console.log('Seu salário final é: R$' + final)
}

document.write(`<h2>Seu salário antes do reajuste era: R$${salario}</h2>`)
document.write(`<h2>O percentual de aumento foi: ${porcentagem}%</h2>`)
document.write(`<h2>O aumento, em reais, foi: R$${aumento}</h2>`)
document.write(`<h2>O seu novo salário, é: R$${final}</h2>`)