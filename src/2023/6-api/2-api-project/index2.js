const express = require('express')

const app = express()

app.listen('3000')
app.use(express.json())

app.route('/').post((req, res) => {
  const { nome, cidade, livros_favoritos } = req.body
  res.send(`Meu nome é ${nome} e minha cidade é ${cidade}<br>Livros favoritos: ${livros_favoritos}`)
})
