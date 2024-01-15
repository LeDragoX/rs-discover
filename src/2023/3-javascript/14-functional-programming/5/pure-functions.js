// Impure function
function calculateCircumferenceImpure(radius) {
  return Math.PI * (radius + radius)
}

console.log(calculateCircumferenceImpure(10))

let person = {
  name: 'Rafael Camarda',
  age: 'jovem'
}

function changeName(name) {
  person.name = name
}

changeName('Marcelo Albino')
console.log(person)

// Pure function
const calculateCircumference = (pi, radius) =>
  pi * (radius + radius)

console.log(calculateCircumference(Math.PI, 10))

const chancePersonName = (person, name) =>
  ({ ...person, name })

console.log(person, 'Yu-gi-oh')
