const NewPost = () => {
  return (
    <div className="New-Post">
      <article>
        <form>
          <h1>Create.</h1>
          <input placeholder="Title" onChange=saveText></input>
          <textarea
            rows="10"
            placeholder="In that moment, I didn't know what hit me." onChange=saveText
          ></textarea>
        </form>
        <button>save</button>
      </article>
    </div>
  )
}

export default NewPost
