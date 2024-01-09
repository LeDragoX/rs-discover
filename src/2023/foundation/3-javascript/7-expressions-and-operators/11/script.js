let pao = true
let queijo = true

const niceBreakfast = () => { return pao && queijo ? 'Café top!' : 'Café ruim!' }
console.log(niceBreakfast())

pao = false
console.log(niceBreakfast())

// Maior de 18

let age = 16

const canDrive = () => { return age >= 18 ? 'Can Drive!' : "Can't Drive!" }
console.log(canDrive())

age = 18
console.log(canDrive())
