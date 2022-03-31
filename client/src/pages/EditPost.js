import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Form from '../components/Form'

const EditPost = () => {
  let { id } = useParams()
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    title: '',
    author: '62420bcc70117cfd84d31f3a',
    content: ''
  })

  const handleChange = (e) => {
    const post = {
      ...formValues,
      [e.target.name]: e.target.value
    }
    setFormValues(post)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:3001/posts/${id}`, formValues)
    navigate('/')
  }

  useEffect(() => {
    const getPostID = async () => {
      let postResults = await axios.get(`http://localhost:3001/posts/${id}`)
      setFormValues(postResults.data)
    }
    getPostID()
  }, [id])

  return (
    <div className="Edit">
      <aside>
        <h1>side bar.</h1>
        <form className="Search">
          <input placeholder="Search"></input>
        </form>
        <Link to="/">Home</Link>
      </aside>
      <Form
        formValues={formValues}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default EditPost
