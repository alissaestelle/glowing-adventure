import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import History from './pages/History'

function App() {
  const [post, setPost] = useState({
    title: '',
    author: '',
    content: ''
  })

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
