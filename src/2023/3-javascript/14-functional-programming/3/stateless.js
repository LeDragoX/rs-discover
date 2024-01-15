let number = 2

// Stateful
function square() {
  return number * number
}

number = square()

// Stateless
const square = n => n * n
