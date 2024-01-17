let aceitar = false

console.log('1 - Pedir Uber')
const promessa = new Promise((resolve, reject) => {
  if (aceitar) {
    return resolve('2.1 - Pedido aceito!')
  }

  return reject('2.2 - Pedido Negado!')
})

promessa
  .then(result => console.log(result))
  .catch(erro => console.log(erro))
  .finally(() => console.log('4 - Finalizada'))

console.log('3 - Aguardando')
