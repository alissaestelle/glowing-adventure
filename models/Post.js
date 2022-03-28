const { Schema } = require('mongoose')

const Post = new Schema(
  {
    title: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    content: { type: String, required: true }
    // image: { type: Schema.Types.Mixed, required: false }
  },
  { timestamps: true }
)

module.exports = Post
