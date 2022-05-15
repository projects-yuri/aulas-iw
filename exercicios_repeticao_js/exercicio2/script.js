// País A = 80.000 habitantes | taxa de crescimento = 3%

// País B = 200.000 habitantes | taxa de crescimento = 1.5%

let a = 80000
let b = 200000
let cont = 0

while(b > a)
{
    a = a + ((a / 100) * 3)
    b = b + ((b / 100) * 1.5)
    cont++
}

alert(`Levará ${cont} anos para igualar a população dos países.`)