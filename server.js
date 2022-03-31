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

// app.get('/', (req, res) => {
//   res.send('I am the root! 🪴')
// })

app.get('/', controlPost.getPosts)
app.post('/new', controlPost.createPost)
app.get('/posts/:id', controlPost.getPostById)
app.put('/posts/:id', controlPost.updatePost)
app.delete('/delete/posts/:id', controlPost.deletePost)

app.listen(PORT, () => {
  console.log(`Express serving up blog bunnies on port ${PORT} 🐰`)
})
