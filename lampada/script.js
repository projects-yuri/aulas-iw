let bulb = document.getElementById('bulb')
let button = document.getElementById('button')
let state = false

button.onclick = () => {
    state == false ? (bulb.src = './images/acesa.jpg', button.innerText='Apagar', state = true) 
    : (bulb.src = './images/apagada.jpg', button.innerText='Acender', state = false)
}