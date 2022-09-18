import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { setCollaborator } from '../../features/collaborators';
import { getCollaborators } from '../../services/api.service';
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard';
import "./EmployeeList.css";

function EmployeeList() {
  const navigate = useNavigate();
  const collaborators = useSelector((store) => store.collaboratorsReducer);
  const dispatch = useDispatch();
  const collabList = getCollaborators();

  const [newList, setNewList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [filter, setFilter] = useState("name");
  
  useEffect(() => {
    dispatch(setCollaborator(collabList));
    setNewList(collabList);
  }, [collabList])

  function filterCategory (category) {
    let catList = collabList.filter(i => {
        if(category == ""){
            return i == i
        }

        return i.service.toLowerCase() == category.toLowerCase();
    });

    setCategoryList(catList)
    filterList("", catList);
}

  function filterList(search, catList) {
    if(search.length < 1){
        setNewList(catList);
        return
    }

    let newList = [];

    newList = catList.filter(i => {
        let name = `${i.firstname} ${i.lastname}`

        if(filter == "name"){
            return name.toLowerCase().includes(search.toLowerCase());
        } else {
            return i.city.toLowerCase().includes(search.toLowerCase());
        }
    })

    setNewList(newList);
    return
  }

  return (
    <div id="employee-list-container">
      <h2>Liste des collaborateurs</h2>
      <div>
        <input onKeyUp={(e) => {
            filterList(e.target.value, categoryList);
        }} type="text" name="search" id="employee-search" placeholder='Rechercher...' />
        <label htmlFor="search-filter">Rechercher par :</label>
        <select onChange={(e) => {setFilter(e.target.value); document.querySelector('#employee-search').value = ""; filterList("", categoryList)}} name="search-filter" id="search-filter">
          <option value="name">Nom</option>
          <option value="city">Ville</option>
        </select>
        <label htmlFor="category">Catégorie :</label>
        <select onChange={(e) => {filterCategory(e.target.value); document.querySelector('#employee-search').value = "";}} name="category" id="category">
          <option value="">Aucune</option>
          <option value="technique">Technique</option>
          <option value="marketing">Marketing</option>
          <option value="client">Client</option>
        </select>
      </div>
      <div className='list-container'>
        {newList.map(i => {return <EmployeeCard key={i.id} employee={i} />})}
      </div>
    </div>
  )
}

export default EmployeeList
