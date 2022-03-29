const SideBar = ({ clicked, createPost }) => {
  return (
    <div className="Side">
      <h1>side bar.</h1>
      <nav>
        <ul>
          <li onClick=""></li>
          <li onClick={createPost}>{clicked ? 'view old' : 'create new'}</li>
        </ul>
      </nav>
    </div>
  )
}

export default SideBar
