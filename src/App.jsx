import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login'
import EmployeeList from './pages/EmployeeList/EmployeeList'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/collaborateurs/list" element={<EmployeeList/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
