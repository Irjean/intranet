import React from 'react'
import "./EmployeeCard.css"

function EmployeeCard(props) {

  function getBirthday () {
    const birthdate = new Date(props.employee.birthdate);
    const birthday = new Intl.DateTimeFormat("fr-FR", { day : "numeric", month : "long" }).format(birthdate)
    
    return birthday
  }

  function getAge() {
    const birthdate = new Date(props.employee.birthdate);
    
    return new Date().getFullYear() - birthdate.getFullYear()
  }

  return (
    <div className='employee-card'>
        <div className={`employee-post ${props.employee.service}`}>{props.employee.service}</div>
        <img className='employee-photo' src={props.employee.photo} alt="Employé" />
        <div className='employee-info'>
            <h3>{props.employee.firstname} {props.employee.lastname} ({getAge()})</h3>
            <p>{props.employee.city}, {props.employee.country}</p>
            <a className='employee-email' href={`mailto:${props.employee.email}`}>{props.employee.email}</a>
            <a className='employee-phone' href={`tel:+${props.employee.phone}`}>{props.employee.phone}</a>
            <p>Anniversaire : {getBirthday()}</p>
            <div className='edit-buttons'>
                <button onClick={() => {console.log(props.employee)}}>Éditer</button>
                <button>Supprimer</button>
            </div>
        </div>
    </div>
  )
}

export default EmployeeCard