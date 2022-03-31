import { Link } from 'react-router-dom'

const CreatedPost = () => {
  return (
    <div className="Created-Post">
      <aside>
        <h1>side bar.</h1>
        <form id="Created-Search">
          <input placeholder="Search"></input>
        </form>
        <Link to="/">Home</Link>
      </aside>
      <main>
        <p>Post successfully created.</p>
      </main>
    </div>
  )
}

export default CreatedPost
