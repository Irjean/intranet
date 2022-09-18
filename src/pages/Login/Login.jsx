import React from 'react'
import { login } from '../../services/api.service';
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function Login() {
    const collaborators = useSelector((store) => store.collaboratorsReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      if(localStorage.getItem("token")){
        navigate("/collaborateurs")
      }
    }, [])

  return (
    <div id='login-page'>
      <h2>Veuillez vous connecter pour accéder à l'Intranet</h2>
        <form action="POST">
            <input id='email' type="text" required />
            <input id="password" type="password" required />
            <button onClick={(e) => {
                e.preventDefault();
                login(document.querySelector("#email").value, document.querySelector("#password").value, navigate, dispatch)
            }}>Connexion</button>
        </form>
        <p className='err-msg'></p>
    </div>
  )
}

export default Login