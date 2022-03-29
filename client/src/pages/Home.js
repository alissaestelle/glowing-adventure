import Search from '../components/Search'
import SideBar from '../components/SideBar'
import Article from '../components/Article'
import NewPost from '../components/NewPost'
// import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Home = () => {
  const [blogPost, setBlogPost] = useState({
    title: '',
    content: ''
  })
  const [clicked, toggleClick] = useState(false)

  // let navigate = useNavigate()

  const saveContent = (e) => {
    const newPost = {
      ...blogPost,
      [e.target.name]: e.target.value
    }
    setBlogPost(newPost)
  }

  const createPost = (e) => {
    toggleClick(!clicked)
    // !clicked = true
  }

  return (
    <div className="Home">
      <header>
        <h1>blog site.</h1>
        <Search />
      </header>
      <aside>
        <SideBar createPost={createPost} clicked={clicked} />
      </aside>
      <main className="Posts">
        {!clicked ? (
          <Article />
        ) : (
          <NewPost blogPost={blogPost} saveContent={saveContent} />
        )}
      </main>
    </div>
  )
}

export default Home
