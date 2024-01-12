const div = document.createElement('div')
div.innerText = 'Olá Devs!'

const body = document.querySelector('body')
const script = body.querySelector('script')
// Insere ANTES
body.insertBefore(div, script)

const header = body.querySelector('header')
// Insere DEPOIS
body.insertBefore(div, header.nextElementSibling)
