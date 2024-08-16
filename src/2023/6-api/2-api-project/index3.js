const express = require('express')

const app = express()

app.listen('3000')

// No Route Params
app.route('/').get((req, res) => res.send(`Oi`))
// Has Route Params
app.route('/:var').post((req, res) => res.send(req.params.var))
app.route('id/:nome').post((req, res) => res.send(req.params.nome))
