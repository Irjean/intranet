import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { setCollaborator } from '../../features/collaborators';
import { getCollaborators } from '../../services/api.service';
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard';
import "./EmployeeList.css";

function EmployeeList() {
  const navigate = useNavigate();
  const collaborators = useSelector((store) => store.collaboratorsReducer)
  const dispatch = useDispatch();
  const collabList = getCollaborators();
  
  useEffect(() => {
    dispatch(setCollaborator(collabList));
  }, [collabList])

  return (
    <div id="employee-list-container">
      <h2>Liste des collaborateurs</h2>
      <div>
        <input type="text" name="search" id="employee-search" placeholder='Rechercher...' />
        <label htmlFor="search-filter">Rechercher par :</label>
        <select name="search-filter" id="search-filter">
          <option value="name">Nom</option>
          <option value="city">Ville</option>
        </select>
        <label htmlFor="category">Catégorie :</label>
        <select name="category" id="category">
          <option value="technique">Technique</option>
          <option value="marketing">Marketing</option>
          <option value="client">Client</option>
        </select>
      </div>
      <div className='list-container'>
        {collabList.map(i => {return <EmployeeCard key={i.id} employee={i} />})}
      </div>
    </div>
  )
}

export default EmployeeList
