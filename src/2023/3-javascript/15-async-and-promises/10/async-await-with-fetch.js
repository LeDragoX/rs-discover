// fetch('https://api.github.com/users/LeDragoX') // Code from folder 5
//   .then(response => response.json())
//   .then(data => fetch(data.repos_url))
//   .then(res => res.json())
//   .then(d => console.log(d))
//   .catch(err => console.log(err))

async function start() {
  try {
    const response = await fetch('https://api.github.com/users/LeDragoX')
    const user = await response.json()
    const reposResponse = await fetch(user.repos_url)
    const repos = await reposResponse.json()
    console.log(repos)
  } catch (e) {
    console.log(e)
  }
}

// start()

async function startWithError() {
  const response = await fetch('htps://api.github.com/users/LeDragoX')
  const user = await response.json()
  const reposResponse = await fetch(user.repos_url)
  const repos = await reposResponse.json()
  console.log(repos)
}

// startWithError().catch(e => console.log(e))

async function startCondensed() {
  const url = 'https://api.github.com/users/LeDragoX'
  const user = await fetch(url).then(r => r.json())
  const userRepos = await fetch(user.repos_url).then(r => r.json())
  console.log(userRepos)
}

startCondensed().catch(e => console.log(e))
