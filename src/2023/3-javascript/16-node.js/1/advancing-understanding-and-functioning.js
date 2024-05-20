function c() {
  console.log('c')
  return
}

function b() {
  console.log('b')
  return c()
}

function a() {
  console.log('a')
  return b()
}

a()

function asyncC() {
  setTimeout(() => { console.log('c') }, 1000)
  return
}

function asyncB() {
  console.log('b')
  return asyncC()
}

function asyncA() {
  asyncB()
  console.log('a')
  return
}

asyncA()
