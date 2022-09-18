import React, { useEffect, useState } from 'react'
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard';
import { getRandomEmployee } from '../../services/api.service'
import "./RandomEmployee.css"

function RandomEmployee() {
    const randomEmployee = getRandomEmployee();
    const [randEmp, setRandEmp] = useState({})
    
    useEffect(() => {
        setRandEmp(randomEmployee);
    }, [])

    function showRandomEmployee() {
        let randomEmployee = getRandomEmployee();
        
        setRandEmp(randomEmployee);
        if(randomEmployee.id == undefined){
        return
       }

        return <EmployeeCard key={randomEmployee.id} employee={randomEmployee} />
    }
    
  return (
    <div id='random-employee-container'>
        <h2>Bienvenue !</h2>
        <h3>Voulez-vous commencer la journée par un "Bonjour !" à l'un de vos collègues ?</h3>
        
        <button onClick={() => {showRandomEmployee()}}>Dire bonjour à quelqu'un d'autre</button>
    </div>
  )
}

export default RandomEmployee