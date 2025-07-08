import React from 'react'
import './App.css'
import { Header } from './components/Header'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Project } from './pages/Project'
import { Contact } from './pages/Contact'
import { Skills } from './pages/Skills'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <div>
      <Router>
        <div className="app">
        <Header />
        <div className="main">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about'element={<About/>}/>
          <Route path='/projects'element={<Project/>}/>
          <Route path='/skills'element={<Skills/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        </div>
        <Footer/>
        </div>
      </Router>
    </div>
  )
}
