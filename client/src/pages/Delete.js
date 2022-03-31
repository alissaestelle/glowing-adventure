import { Link } from 'react-router-dom'

const Delete = () => {
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
        <p>Page successfully deleted.</p>
        <Link to="/">Home</Link>
      </main>
    </div>
  )
}

export default Delete
