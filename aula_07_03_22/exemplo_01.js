let heading = document.getElementById('heading')
let color = document.getElementsByClassName('color')

heading.addEventListener('click', () => {
    heading.classList.add('color')
})

alert('Minhha primeira mensagem')
confirm('Está gostando da aula?')
let nome = prompt('Qual é o seu nome?')
alert('Olá' + ' ' + nome)