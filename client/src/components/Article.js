const Article = (props) => {
  return (
    <div>
      <article>
        <header>
          <h3>{props.title}</h3>
          <p>by: @rarejules</p>
        </header>
        <p>{props.content}</p>
        {/* <input id="Edit" type="submit" value="Edit" /> */}
        <button>Edit</button>
      </article>
    </div>
  )
}

export default Article
