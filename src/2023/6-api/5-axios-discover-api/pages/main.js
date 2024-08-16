const url = "http://localhost:5500/api"

const newUser = {
  name: "Olivia Zars",
  avatar: "https://picsum.photos/200/300",
  city: "Rio de Janeiro"
}

const updatedUser = {
  name: "Marcelo Calvos",
  avatar: "https://picsum.photos/200/300",
  city: "Recife"
}

function getUsers() {
  axios.get(url)
    .then(response => {
      apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function getUser(id) {
  axios.get(`${url}/${id}`)
    .then(response => {
      const data = response.data
      userName.textContent = data.name
      userCity.textContent = data.city
      userID.textContent = data.id
      userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

function addNewUser(user) {
  axios.post(url, user)
    .then(response => {
      console.log(response)
    })
    .catch(error => console.error(error))
}

function updateUser(id, updatedUser) {
  axios.put(`${url}/${id}`, updatedUser)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

function deleteUser(id) {
  axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

getUsers()
addNewUser(newUser) // Add new user each reload
// addNewUser(updatedUser) // Add new user each reload
getUser(1)
updateUser(3, updatedUser)
deleteUser(1)
