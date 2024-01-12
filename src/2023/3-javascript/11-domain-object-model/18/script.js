const div = document.createElement('div')
div.innerText = 'Olá Devs!'

const body = document.querySelector('body')
// Adiciona antes
body.prepend(div)
// Adiciona depois
body.append(div)
