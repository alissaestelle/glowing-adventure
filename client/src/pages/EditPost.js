// import axios from 'axios'
// import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'

const EditPost = (props) => {
  // const [specificPost, setSpecificPost] = useState(null)
  // let { postID } = useParams()

  // useEffect(() => {
  //   const getPostID = async () => {
  //     let postResults = await axios.get(`http://localhost:3001/edits/${postID}`)
  //     setSpecificPost(postResults.data)
  //     console.log(specificPost)
  //   }
  //   getPostID()
  // })

  return (
    <div className="Edit">
      <div contentEditable="true">Test Text</div>
    </div>
  )
}

export default EditPost
