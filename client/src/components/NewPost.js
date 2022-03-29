const NewPost = ({ blogPost, saveContent }) => {
  return (
    <div className="New-Post">
      <article>
        <form>
          <h1>Create.</h1>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={blogPost.title}
            onChange={saveContent}
          ></input>
          <textarea
            rows="10"
            placeholder="In that moment, I didn't know what hit me."
            name="content"
            value={blogPost.content}
            onChange={saveContent}
          ></textarea>
        </form>
        <button>save</button>
      </article>
    </div>
  )
}

export default NewPost
