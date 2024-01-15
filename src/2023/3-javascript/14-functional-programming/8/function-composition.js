const people = ['Rafa', 'Diego', 'Dani', 'Rod']
const upperCasePeopleThatStartsWithD = people
  .filter(person => person.startsWith('D'))
  .map(dPerson => dPerson.toUpperCase())

console.log(upperCasePeopleThatStartsWithD)
