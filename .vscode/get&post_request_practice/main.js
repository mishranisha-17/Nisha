const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
    res.send('Hello World!')
  })

  app.put('/', (req, res) => {
    res.send('Hello World!')
  })

  app.delete('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
  console.log("server start on port",3000);
});