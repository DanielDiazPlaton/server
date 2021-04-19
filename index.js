const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Bienvenido a Intech5G.tech')
})
 
app.listen(3000, () => {
    console.log('Runnig')
})