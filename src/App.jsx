import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login'
import EmployeeList from './pages/EmployeeList/EmployeeList'
import RandomEmployee from './pages/RandomEmployee/RandomEmployee'
import { deconnectUser } from './services/localStorage.service'
import Redirect from './pages/Redirect/Redirect'
import AddEmployee from './pages/AddEmployee/AddEmployee'

function App() { 
  let connected = localStorage.getItem("user") ? true : false;
  
  return (
    <div className="App">
      <Router>
        <header>
          <h1>Intranet</h1>
          <div className='nav-bar'>
            <nav className={connected ? "show" : ""}>
              <ul>
                <Link to="/collaborateurs/list"><li>Liste</li></Link>
                <Link to="/collaborateurs/ajouter"><li className={`add-employee-btn`}>Ajouter</li></Link>
              </ul>
            </nav>
              <span className={`disconnected-button ${connected ? "show" : ""}`} onClick={() => {
                deconnectUser();
              }}>Deconnexion</span>
          </div>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Redirect />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/collaborateurs/" element={<RandomEmployee/>} />
            <Route path="/collaborateurs/list" element={<EmployeeList/>} />
            <Route path='/collaborateurs/add' element={<AddEmployee />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
