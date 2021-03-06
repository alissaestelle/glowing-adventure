import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Article from '../components/Article'
import NewPost from '../components/NewPost'
import SideBar from '../components/SideBar'
// import EditPost from './EditPost'

const Home = () => {
  const [blogPost, setBlogPost] = useState({
    title: '',
    author: '62420bcc70117cfd84d31f3a',
    content: ''
  })
  const [articles, setArticles] = useState([])
  const [clicked, toggleClick] = useState(false)
  let navigate = useNavigate()

  useEffect(() => {
    const renderArticles = async () => {
      let database = await axios.get('/allposts')
      console.log(database)
      setArticles(database.data)
    }
    renderArticles()
  }, [])

  const createNew = (e) => {
    toggleClick(!clicked)
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
    await axios.post('/new', blogPost)
    setBlogPost({
      title: '',
      author: '62420bcc70117cfd84d31f3a',
      content: ''
    })
    navigate('/post/created')
  }

  return (
    <div className="Home">
      <aside>
        <SideBar createNew={createNew} clicked={clicked} />
      </aside>
      <main>
        {!clicked ? (
          !!articles.length &&
          articles.map((article) => (
            <Article
              key={article._id}
              objectID={article._id}
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
      </main>
    </div>
  )
}

export default Home

// useState behavior situationally varies and doesn't always cooperate with async functions. articles.length was used because the page was trying to map articles before they were returned. !!articles.length acts as a safeguard and will only map over articles *if there are are articles present (i.e. > 0)* This guarantees that articles are present before mapping begins.
