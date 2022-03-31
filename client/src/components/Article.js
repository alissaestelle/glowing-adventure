import { Link } from 'react-router-dom'

const Article = (props) => {
  return (
    <div className="Posts">
      <article>
        <header>
          <h3>{props.title}</h3>
          <p>by: @rarejules</p>
        </header>
        <p>{props.content}</p>
        {/* <input id="Edit" type="submit" value="Edit" /> */}
        <Link to={`/edits`}>Edit</Link>
      </article>
    </div>
  )
}

export default Article
