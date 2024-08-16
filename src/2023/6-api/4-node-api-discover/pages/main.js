const newUser = {
  name: "Olivia Zars",
  avatar: "https://picsum.photos/400/200",
  city: "Rio Grande do Sul"
}
const updatedUser = {
  name: "Mayk Brito",
  avatar: "https://avatars.githubusercontent.com/u/6643122?v=4",
  city: "Paraná"
}
const url = "http://localhost:5500/api"

// CREATE
function addUser(newUser, id) {
  fetch(`${url}`, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

// READ Multiple
function getUsers() {
  fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}

// READ Single
function getUser(id) {
  fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userCity.textContent = data.city
      userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

// UPDATE
function updateUser(updatedUser, id) {
  fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedUser),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

// DELETE
function deleteUser(id) {
  fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

addUser(newUser) // Add in each refresh
updateUser(updatedUser, 3) // Update in each refresh
getUsers()
getUser(3)
deleteUser(5) // Delete in each refresh
