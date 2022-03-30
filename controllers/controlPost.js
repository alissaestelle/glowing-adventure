const db = require('../db')
const { Post } = require('../models')

const consolePosts = async () => {
  const posts = await Post.find()
  console.log(posts)
}

const getPosts = async (req, res) => {
  const posts = await Post.find()
  res.json(posts)
}

const createPost = async (req, res) => {
  const storedPost = await Post.create(req.body, (err) => {
    res.send(err)
    // console.log(storedPost)
  })
  res.json(storedPost)
  await consolePosts()
}

module.exports = {
  getPosts,
  createPost
}
