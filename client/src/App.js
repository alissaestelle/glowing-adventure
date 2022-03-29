import './App.css'
import { Route, Routes } from 'react-router-dom'
// import { useState } from 'react'
// import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
// import NewPost from './components/NewPost'
import History from './pages/History'

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
          {/* <Route path="/new/post" element={<NewPost />} /> */}
          <Route path="/history" element={<History />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
