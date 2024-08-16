const express = require('express')

const app = express()

app.listen('3000')

// Query Params
// Receiving GET localhost:3000?nome=Jakeliny&cidade=São Paulo
app.route('/').get((req, res) => res.send(req.query.nome))
// Receiving GET localhost:3000/about/user?id=437865543875934267
app.route('/about/user').get((req, res) => res.send(req.query.id))
// Receiving GET localhost:3000/summary?nome=Jakeliny&id=74389534265&cidade=São Paulo&livros=Neuromancer
app.route('/summary').get((req, res) => res.send(req.query))
