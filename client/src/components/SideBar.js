const SideBar = ({ clicked, createPost }) => {
  return (
    <div className="Side">
      <h1>side bar.</h1>
      <form className="SearchBar">
        <input placeholder="Search"></input>
      </form>
      <nav>
        <ul>
          <li onClick=""></li>
          <li onClick={createPost}>{clicked ? 'Home' : 'Create New'}</li>
        </ul>
      </nav>
    </div>
  )
}

export default SideBar
