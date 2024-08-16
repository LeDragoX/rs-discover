const express = require('express')

const app = express()

app.listen('3000')
// Middleware
app.use(express.json())

let author = "Jakeliny"

// app.route('/').get((req, res) => res.send(author))
app.route('/').post((req, res) => res.send(req.body))
app.route('/').put((req, res) => {
  author = req.body.author
  res.send(author)
})
app.route('/:id').delete((req, res) => {
  res.send(req.params.id)
})

app.route('/:param').get((req, res) => res.send(req.params.param))
