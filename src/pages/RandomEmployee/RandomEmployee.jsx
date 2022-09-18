import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard';
import "./RandomEmployee.css"

function RandomEmployee() {
  const navigate = useNavigate();
    const [randEmp, setRandEmp] = useState([]);

    useEffect(() => {
      if(!localStorage.getItem("token")){
        navigate("/login");
      }
    }, [])
  
  //Allows to fetch the random collaborator and set it in the state
  function getRandomCollab() {
    fetch("http://localhost:7000/api/collaborateurs/random", {
      headers: {
        "Authorization" : `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res => res.json())
    .then(data => setRandEmp([data]))
  }

  useEffect(() => {
    getRandomCollab();
  }, [])
    
  return (
    <div id='random-employee-container'>
        <h2>Bienvenue !</h2>
        <h3>Voulez-vous commencer la journée par un "Bonjour !" à l'un de vos collègues ?</h3>
        {randEmp.length !== 0 ? randEmp.map((i) => {return <EmployeeCard key={i.id} employee={i} />}) : "Nous n'arrivons pas à trouver vos collaborateurs."}
        <button onClick={() => {getRandomCollab()}}>Dire bonjour à quelqu'un d'autre</button>
    </div>
  )
}

export default RandomEmployee