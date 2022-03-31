import axios from 'axios'
import { Link } from 'react-router-dom'

const Article = (props) => {
  // useEffect((props) => {
  const handleDelete = async () => {
    await axios.delete(`http://localhost:3001/delete/posts/${props.objectID}`)
    console.log('Successfully Deleted!')
  }
  //   handleDelete()
  // })

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
        <button onClick={handleDelete}>Delete</button>
      </article>
    </div>
  )
}

export default Article
