let techs = ['html', 'css', 'js', 'python', 'ruby']
// add no fim
techs.push('nodejs')
// add no começo
techs.unshift('sql')
// remove do fim
techs.pop()
// remove do começo
techs.shift()
// começa em, até mas não inclui
console.log(`slice: ${techs.slice(1, 2)}`)
// remove somente o que está especificado
console.log(`splice: ${techs.splice(1, 1)}`)

let index = techs.indexOf('css')

techs.splice(index, 1)

console.log(index)
console.log(techs)
