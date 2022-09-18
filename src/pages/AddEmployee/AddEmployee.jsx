import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"

function AddEmployee() {
    const navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem("token")){
            navigate("/login");
            return
        }
        if(!JSON.parse(localStorage.getItem("user")).isAdmin){
            navigate("/collaborateurs");
            return
        }
    }, [])
  return (
    <div>
        
    </div>
  )
}

export default AddEmployee