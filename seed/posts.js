const db = require('../db')
const { User, Post } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const test = async () => {
  const author = await User.find({ name: 'Jules Vaughn' })
  const blogPost = {
    title: 'Since Before',
    author: author[0]._id,
    content:
      "I've always been with you, from before you were born, until after you're gone. Since before we ever existed."
  }
  await Post.create(blogPost)
  console.log('Created Post!')
}

const run = async () => {
  await test()
  db.close()
}

run()
