import axios from 'axios'

// axios
//   .get('https://api.github.com/users/LeDragoX')
//   .then(response => axios.get(response.data.repos_url))
//   .then(repos => console.log(repos.data))
//   .catch(error => console.log(error))

async function fetchRepos() {
  try {
    const user = await axios.get('https://api.github.com/users/LeDragoX')
    const repos = await axios.get(user.data.repos_url)
    console.log(repos)
  } catch (e) {
    console.log(e)
  }
}

fetchRepos()
