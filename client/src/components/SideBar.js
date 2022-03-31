const SideBar = ({ createNew, clicked }) => {
  return (
    <div className="Side">
      <h1>side bar.</h1>
      <form className="Search">
        <input placeholder="Search"></input>
      </form>
      <div className="Links">
        <p onClick={createNew}>{clicked ? 'Home' : 'Create New'}</p>
      </div>
    </div>
  )
}

export default SideBar
