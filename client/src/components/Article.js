import { Link } from 'react-router-dom'

const Article = (props) => {
  // handleDelete here

  return (
    <div className="Posts">
      <article>
        <header className="Post-Header">
          <h3>{props.title}</h3>
          <p>by: @rarejules</p>
        </header>
        <p>{props.content}</p>
        {/* <input id="Edit" type="submit" value="Edit" /> */}
        <Link to={`/edits/${props.objectID}`}>Edit</Link>
        <button>Delete</button>
      </article>
    </div>
  )
}

export default Article
