const SideBar = ({ createNew, clicked }) => {
  return (
    <div className="Side">
      <h1>side bar.</h1>
      <form className="SearchBar">
        <input placeholder="Search"></input>
      </form>
      <nav>
        <ul>
          <li onClick={createNew}>{clicked ? 'Home' : 'Create New'}</li>
        </ul>
      </nav>
    </div>
  )
}

export default SideBar
