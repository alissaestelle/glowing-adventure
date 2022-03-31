import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
// import About from './pages/About'
import EditPost from './pages/EditPost'
import Delete from './pages/Delete'

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/edits/:id" element={<EditPost />} />
          <Route path="/confirm/delete" element={<Delete />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
