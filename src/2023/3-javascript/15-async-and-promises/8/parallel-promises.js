import axios from "axios" // fix: https://stackoverflow.com/a/59399717

Promise.all([
  axios.get('https://api.github.com/users/LeDragoX'),
  axios.get('https://api.github.com/users/LeDragoX/repos')
])
  .then(responses => {
    console.log(responses[0].data.login)
    console.log(responses[1].data.length)
  })
  .catch(err => console.log(err.message))
