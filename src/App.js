import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css"
import Header from './components/Header'
import Register from './components/Register'
import UsersList from './components/UsersList'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/users' element={<UsersList />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App