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

const getPostById = async (req, res) => {
  try {
    const specificPost = await Post.findById(req.params.id)
    res.json(specificPost)
  } catch (e) {
    console.log(e)
    res.send('Oops! Something went wrong.')
  }
}

const updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.json(post)
  } catch (e) {
    console.log(e)
    res.send('Oops! Something went wrong.')
  }
}

const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id)
    res.send('Post Successfully Deleted')
  } catch (e) {
    console.log(e)
    res.send('Oops! Something went wrong.')
  }
}

module.exports = {
  getPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost
}
