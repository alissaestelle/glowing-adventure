import { Link } from 'react-router-dom'

const CreatedPost = () => {
  return (
    <div>
      <aside>
        <h1>side bar.</h1>
        <form id="Delete-Search">
          <input placeholder="Search"></input>
        </form>
        <Link to="/">Home</Link>
      </aside>
      <main>
        <p>Post successfully deleted.</p>
      </main>
    </div>
  )
}

export default CreatedPost
