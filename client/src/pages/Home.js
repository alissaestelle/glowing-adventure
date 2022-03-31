import axios from 'axios'
import { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Article from '../components/Article'
import NewPost from '../components/NewPost'
// import EditPost from './EditPost'

const Home = () => {
  // let navigate = useNavigate()
  const [articles, setArticles] = useState([])
  const [blogPost, setBlogPost] = useState({
    title: '',
    author: '62420bcc70117cfd84d31f3a',
    content: ''
  })
  const [clicked, toggleClick] = useState(false)
  // const [submitted, toggleSubmit] = useState(false)

  useEffect(() => {
    const renderArticles = async () => {
      let database = await axios.get('http://localhost:3001/')
      console.log(database)
      setArticles(database.data)
    }
    renderArticles()
  }, [])

  const createPost = (e) => {
    toggleClick(!clicked)
    // !clicked = true
  }

  const saveContent = (e) => {
    const newPost = {
      ...blogPost,
      [e.target.name]: e.target.value
    }
    setBlogPost(newPost)
  }

  const submitPost = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:3001/new', blogPost)
    setBlogPost({
      title: '',
      author: '62420bcc70117cfd84d31f3a',
      content: ''
    })
    // navigate('/edits')
    // toggleSubmit(!submitted)
  }

  return (
    <div className="Home">
      <header>
        <Header />
      </header>
      <aside>
        <SideBar createPost={createPost} clicked={clicked} />
      </aside>
      <main>
        {!clicked ? (
          !!articles.length &&
          articles.map((article) => (
            <Article
              key={article._id}
              title={article.title}
              author={article.author}
              content={article.content}
            />
          ))
        ) : (
          <NewPost
            blogPost={blogPost}
            saveContent={saveContent}
            submitPost={submitPost}
          />
        )}
        {/* {!submitted && <EditPost />} */}
      </main>
    </div>
  )
}

export default Home

// useState behavior situationally varies and doesn't always cooperate with async functions. articles.length was used because the page was trying to map articles before they were returned. !!articles.length acts as a safeguard and will only map over articles *if there are are articles present (i.e. > 0)* This guarantees that articles are present before mapping begins.
