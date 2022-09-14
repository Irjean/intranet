import React from 'react'
import { login } from '../../services/api.service';
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

  return (
    <div id='login-page'>
        <form action="POST">
            <input id='email' type="text" />
            <input id="password" type="password" />
            <button onClick={(e) => {
                e.preventDefault();
                login(document.querySelector("#email").value, document.querySelector("#password").value, navigate)
            }}>Connexion</button>
        </form>
    </div>
  )
}

export default Login