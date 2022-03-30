import './App.css'
import { Route, Routes } from 'react-router-dom'
// import { useState } from 'react'
// import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
// import NewPost from './components/NewPost'
import EditPost from './pages/EditPost'

function App() {
  // const [post, setPost] = useState({
  //   title: '',
  //   author: '',
  //   content: ''
  // })

  return (
    <div className="App">
      {/* <header>
        <Header />
      </header> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/edits" element={<EditPost />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
