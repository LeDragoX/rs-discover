function sayMyName(name) {
  if (name === '') {
    throw new Error('Nome é necessário')
  }

  console.log(name)
}

try {
  sayMyName('Mayk')
} catch (e) {
  console.log(e)
}

// sayMyName('')

console.log('Após o try/catch')
