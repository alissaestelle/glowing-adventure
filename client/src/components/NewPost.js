const NewPost = ({ blogPost, saveContent, submitPost }) => {
  return (
    <div className="New-Post">
      <article>
        <form onSubmit={submitPost}>
          <h1 id="User">@rarejules</h1>
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
          <input id="Save" type="submit" value="Create" />
        </form>
      </article>
    </div>
  )
}

export default NewPost
