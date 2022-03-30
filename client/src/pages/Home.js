import axios from 'axios'
import { useState } from 'react'
import Search from '../components/Search'
import SideBar from '../components/SideBar'
import Article from '../components/Article'
import NewPost from '../components/NewPost'
// import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [articles, setArticles] = useState('')
  const [blogPost, setBlogPost] = useState({
    title: '',
    author: 'rarejules',
    content: ''
  })
  const [clicked, toggleClick] = useState(false)
  const [submitted, toggleSubmit] = useState(false)

  const renderArticles = async () => {
    let database = await axios.get('http://localhost:3001/homepage')
    setArticles(database)
    console.log(database)
  }

  const createPost = (e) => {
    toggleClick(!clicked)
    // !clicked = true
  }

  // let navigate = useNavigate()

  const saveContent = (e) => {
    const newPost = {
      ...blogPost,
      [e.target.name]: e.target.value
    }
    setBlogPost(newPost)
  }

  const submitPost = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:3001/newpost', blogPost)
    setBlogPost({
      title: '',
      author: 'rarejules',
      content: ''
    })
    toggleSubmit(!submitted)
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
          <NewPost
            blogPost={blogPost}
            saveContent={saveContent}
            submitPost={submitPost}
          />
        )}
      </main>
    </div>
  )
}

export default Home
