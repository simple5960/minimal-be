const express = require('express')
const app = express()
const port = 5001

app.get('/first', (req, res) => {
  res.send('first res')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})