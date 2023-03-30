// Block scoped
console.log('> Existe x antes do bloco? ', x) // hoisting

{
  var x = 1
}

/* Global */
console.log('> Existe x depois do bloco? ', x)

let y = 1

{ /* Local */
  const z = 0
  y = 0
  console.log('> Existe y?', y)
  console.log('> Existe z?', z)
}

try { console.log('> Existe y? (fora)', y) /* will break */ } catch (error) { console.error(error) }
