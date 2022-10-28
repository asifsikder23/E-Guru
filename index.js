const express = require('express')
const app = express()
const port = 5000
const data = require('./data/data.json')
const cors = require('cors')
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/courses', (req, res) => {
    res.send(data)
  })
app.get('/course', (req, res) => {
    res.send(data)
  })
 
app.get('/course/:id', (req, res) => {
  const courseId = req.params.id;
  
  const course = data.find(single=> single._id==courseId)
    res.send(course)
  })

app.get('/category/:id', (req, res) => {
  const id = req.params.id;
  
  const course = data.find(single=> single.categoryId==id)
    res.send(course)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;