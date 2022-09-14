import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login'
import EmployeeList from './pages/EmployeeList/EmployeeList'

function App() { 
  return (
    <div className="App">
      <Router>
        <header>
          <h1>Intranet</h1>
          <div className='nav-bar'>
            <nav>
              <ul>
                <Link to="/"><li>Liste</li></Link>
                <Link to="/collaborateurs/ajouter"><li className={`add-employee-btn`}>Ajouter</li></Link>
              </ul>
            </nav>
            <div>
              <img src="" alt="" />
              <span>Deconnexion</span>
            </div>
          </div>
        </header>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/collaborateurs/list" element={<EmployeeList/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
