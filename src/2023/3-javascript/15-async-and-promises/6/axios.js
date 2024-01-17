import axios from "axios" // fix: https://stackoverflow.com/a/59399717

axios.get('https://api.github.com/users/LeDragoX').the((res) => {
  console.log(res.data)
})
