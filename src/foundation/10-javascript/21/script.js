const sum = function (number1, number2) {
  let total = number1 + number2
  console.log(`${number1} + ${number2} = ${total}`)
  return total
}

let number1 = 34
let number2 = 25

console.log(`FORA: ${number1} + ${number2} = ${sum(number1, number2)}`)
// console.log(total); // ???

/* ---------------- */

function fazerSuco(fruta1, fruta2) {
  return fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maçã')
console.log(copo)
