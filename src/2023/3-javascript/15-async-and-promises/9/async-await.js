const promessa = new Promise(function (resolve, reject) {
  // return resolve('ok')
  return reject('Error')
})

async function start() {
  try {
    const result = await promessa
    console.log(result)
  } catch (e) {
    console.log(e)
  } finally {
    console.log('Rodar sempre')
  }
}
start()

// promessa
//   .then(function (response) {
//     console.log(response)
//   })
//   .catch(function (error) {
//     console.log(error)
//   })
//   .finally(function () {
//     console.log('Sempre irei executar')
//   })
