// Lista de argumentos
// console.log(process)
// console.log(process.argv)

// node .\src\2023\3-javascript\16-node.js\5\taking-process-info.js Mayk Brito

const firstName = process.argv[2]
const lastName = process.argv[3]

console.log(`Seu nome é: ${firstName} ${lastName}`)
