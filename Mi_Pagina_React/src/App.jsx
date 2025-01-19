import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
//Paquetes
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//Paginas
import Home from './pages/Home'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
//Componentes
import Navbar from './components/Navbar'
import Footer from './components/Footer'




export default function App() {
  return (
    <Router>
      <div style={{ position: 'relative' }}>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}
