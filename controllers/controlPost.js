const db = require('../db')
const { Post } = require('../models')

const getPosts = async (req, res) => {
  const posts = await Post.find()
  res.json(posts)
}

const createPost = async (req, res) => {
  try {
    const storedPost = await Post.create(req.body)
    res.json(storedPost)
  } catch (e) {
    console.log(e)
    res.send('Oops! Something went wrong.')
  }
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
