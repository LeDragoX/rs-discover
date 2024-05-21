/* 
Crie 2 arquivos JavaScript.
O primeiro, irá exportar uma função chamada getFlag()
que recebera um argumento do tipo String.
Essa função deverá buscar dentro do array process.argv a flag desejada, que é a String
e retornar ao valor da flag

O segundo irá importar a função e passar a flag desejada.

Iremos rodar no terminal o segundo arquivo passando as flags --name e --greeting
para que seja impresso no terminal a saudação e o nome da pessoa.
*/

module.exports = function getFlag(flag) {
  const args = process.argv
  for (let i = 2; i < args.length; i++) {
    // console.log(args[i])
    if (flag === args[i]) {
      return args[i + 1]
    }
  }
}
