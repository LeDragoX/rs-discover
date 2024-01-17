import axios from "axios" // fix: https://stackoverflow.com/a/59399717

axios
  .get('https://api.github.com/users/LeDragoX')
  .then(response => axios.get(response.data.repos_url))
  .then(repos => console.log(repos.data))
  .catch(error => console.log(error))
