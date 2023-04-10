let expression = 'a'

switch (expression) {
  case 'a':
    console.log('a')
    break
  case 'b':
    console.log('b')
    break
  default:
    console.log('default')
    break
}

function calculate(number1, operator, number2) {
  let result

  switch (operator) {
    case '+':
      result = number1 + number2
      break
    case '-':
      result = number1 - number2
      break
    case '*':
      result = number1 * number2
      break
    case '/':
      result = number1 / number2
      break
    default:
      console.log('Não implementado')
      result = 0
      break
  }

  return result
}

console.log(calculate(4, '+', 8))
console.log(calculate(4, '-', 8))
console.log(calculate(4, '*', 8))
console.log(calculate(4, '/', 8))
console.log(calculate(4, '%', 8))
