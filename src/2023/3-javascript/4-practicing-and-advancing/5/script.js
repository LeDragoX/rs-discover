// 1.
let weight

// 2. Undefined
console.log(typeof weight)

// 3.
let name = 'Adam'
let age = 27
let stars = 4.5
let isSubscribed = true

// 4. Object
let student = {}
console.log(typeof student)

// 4.1
student = {
  name: name,
  age: age,
  stars: stars,
  isSubscribed: isSubscribed,
  weight: 67.9
}

// 4.2
console.log(student)

console.log(`${student.name} de idade ${student.age} pesa ${student.weight}kg.`)

// 5.
let students = []

// 6.
students.push(student)

// 7.
console.log(students[0])

// 8.
const john = {
  name: 'John',
  age: 17,
  stars: 4.8,
  isSubscribed: false,
  weight: 81.9
}

students.push(john)
console.log(students)

// 9. Undefined, pois a variável será jogada pra cima e criada sem estar com valor.
console.log(a)
var a = 1
