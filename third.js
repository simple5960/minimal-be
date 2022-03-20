const express = require('express')
const app = express()
const port = 5003

app.get('/third', (req, res) => {
  res.send('third res')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})