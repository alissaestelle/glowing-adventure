const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const db = require('./db')
const controlPost = require('./controllers/controlPost')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send('I am the root! 🪴')
})

app.get('/posts', controlPost.getPosts)
app.post('/posts', controlPost.createPost)

app.listen(PORT, () => {
  console.log(`Express serving up blog bunnies on port ${PORT} 🐰`)
})
