import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import SideBar from './components/SideBar'
import About from './pages/About'
import EditPost from './pages/EditPost'

function App() {
  return (
    <div className="App">
      <header id="Home-Header">
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/edits/:id" element={<EditPost />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
