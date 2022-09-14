import React from 'react'
import "./EmployeeCard.css"

function EmployeeCard(props) {
  return (
    <div className='employee-card'>
        <div className={`employee-post ${props.employee.service}`}>Marketing</div>
        <img className='employee-photo' src={props.employee.photo} alt="Employé" />
        <div className='employee-info'>
            <h3>{props.employee.firstname} {props.employee.lastname} (age)</h3>
            <p>{props.employee.city}, {props.employee.country}</p>
            <a href="mailto:">{props.employee.email}</a>
            <a href="tel:+">{props.employeephone}</a>
            <p>Anniversaire : {props.employee.birthdate}</p>
            <div>
                <button onClick={() => {console.log(props.employee)}}>Éditer</button>
                <button>Supprimer</button>
            </div>
        </div>
    </div>
  )
}

export default EmployeeCard