let a = Number(prompt('Digite o valor de A'))
let b = Number(prompt('Digite o valor de B'))
let c = Number(prompt('Digite o valor de C'))

let x1, x2
let xx

document.write('<h1>Equação de segundo grau:</h1>')

if(a > 0)
{
    // Equação de segundo grau (escrever no documento).
    document.write(`<h2>${a}x² + ${b}x + ${c} = 0</h2>`)

    // Escrever os elementos A, B e C no documento.
    document.write(`<p>A = ${a}, B = ${b}, C = ${c}</p>`)

    // Escrever a fórmula do Delta (ou discriminante).
    document.write(`<p>Δ = ${b}² - 4.${a}.${c}</p>`)

    // Calculo do Delta (ou discriminante).
    let delta = (Math.pow(b, 2)) - 4 * a * c

    // Escrever o Delta no documento.
    document.write(`<p>Δ = ${delta}</p>`)

    if(delta > 0)
    {
        // Escrever a fórmula de x¹ e x² no documento.
        document.write(`<p>x = (-${b} ± √${delta}) / 2.${a}</p>`)

        // Calculo do x¹
        x1 = (-Math.abs(b) + Math.sqrt(delta)) / (2 * a)

        // Calculo do x²
        x2 = (-Math.abs(b) - Math.sqrt(delta)) / (2 * a)

        // Escrever o x¹ e x² no documento.
        document.write(`<h2>x¹ = ${x1}, x² = ${x2}</h2>`)

        // Forma mais legível
        document.write(`<h2>S = {${x1}, ${x2}}</h2>`)
    }
    else if(delta == 0)
    {
        // Escrever a fórmula de x¹ e x² no documento.
        document.write(`<p>x = (-(${b}) ± √${delta}) / 2.${a}</p>`)

        // Calculo de X, pois quando o Delta é 0, a solução é repetida, ou seja, sem necessidade de calcular x¹ e x² separadamente.
        if(b < 0)
        {
            xx = (-(b) + Math.sqrt(delta)) / (2 * a)
        }
        else
        {
            xx = (-Math.abs(b) + Math.sqrt(delta)) / (2 * a)
        }
   
        // Escrever o x¹ e x² no documento.
        document.write(`<h2>x¹ = x² = ${xx}</h2>`)
        
        // Forma mais legível.
        document.write(`<h2>S = {${xx}, ${xx}}</h2>`)

        // Explicação do delta = 0.
        document.write('Um discriminante igual a zero indica que a equação do segundo grau tem uma solução de número real repetido.')
    }
    else
    {
        document.write(`<p>O valor de delta é negativo, nenhuma das soluções é composta por números reais.<p>`)
        document.write(`<p>S = ∅.</p>`)
    }

}
else
{
    document.write('Essa equação não é de segundo grau.')
}

/*

Δ = Discriminante

Um discriminante positivo indica que a equação do segundo grau tem duas soluções de números reais diferentes.
Um discriminante igual a zero indica que a equação do segundo grau tem uma solução de número real repetido.
Um discriminante negativo indica que nenhuma das soluções é composta por números reais.

*/