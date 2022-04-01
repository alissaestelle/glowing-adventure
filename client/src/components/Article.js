import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Article = (props) => {
  let navigate = useNavigate()
  const handleDelete = async () => {
    await axios.delete(`http://localhost:3001/delete/posts/${props.objectID}`)
    console.log('Successfully Deleted!')
    navigate('/confirm/delete')
  }

  return (
    <div className="Posts">
      <article>
        <header>
          <h3>{props.title}</h3>
          <p id="Author">by: @rarejules</p>
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
