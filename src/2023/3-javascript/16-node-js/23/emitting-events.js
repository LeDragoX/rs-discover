const { EventEmitter } = require('events')
const ev = new EventEmitter()

// Listen and execute Events
ev.once('saySomething', (message) => {
  console.log('Eu ouvi você: ', message)
})

ev.emit('saySomething', "Mensagem")
ev.emit('saySomething', "Mayk")
ev.emit('saySomething', "Camila")
ev.emit('saySomething', "João")
