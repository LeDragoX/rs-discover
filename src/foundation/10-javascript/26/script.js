function Person(name) {
  this.name = name
  this.walk = function () {
    return 'andando'
  }
}

const plonio = new Person('Plônio')
const joao = new Person('João')
const joel = { name: 'Joel' }


console.log(plonio)
console.log(joao)
console.log(joel)

console.log(plonio.walk)
console.log(joao.walk)

let name = new String('Paia')
console.log(name)

let date = new Date('2020-12-20')
console.log(date)
