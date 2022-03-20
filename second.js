const express = require('express')
const app = express()
const port = 5002

app.get('/second', (req, res) => {
  res.send('second res')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})