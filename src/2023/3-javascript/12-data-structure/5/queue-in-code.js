// Passo 1: Modelando

class Queue {
  constructor() {
    this.data = []
  }

  enqueue(item) {
    this.data.push(item)
    console.log(`(${this.data.length}) ${item} chegou na fila!`)
  }

  dequeue() {
    const item = this.data.shift()
    console.log(`(${this.data.length}) ${item} saiu da fila!`)
  }
}

// Passo 2: Utilizando
const fila = new Queue

fila.enqueue('Mariana')
fila.enqueue('João')
fila.enqueue('Ariel')
fila.dequeue()
fila.dequeue()
fila.dequeue()
