import axios from "axios";
import { useEffect, useState } from "react";
import { saveToken, storeUser } from "./localStorage.service";


axios.defaults.baseURL = 'http://localhost:7000';

export async function login(email, password, navigate) {
    const { data } = axios.post("/api/login", {
        "email": email,
        "password": password
    })
        .then((res) => {
            console.log(res.data);
            saveToken(res.data.token);
            storeUser(res.data.user);
            navigate("/collaborateurs/list");
        })

        .catch((err) => {
            console.error(err);
        })
}


export function getCollaborators() {
    let token = localStorage.getItem("token");

    if(!token){
      navigate("/login");
      return
    }

    const [collabList, setCollabList] = useState([]);

    useEffect(() => {
        async function fetchCollab() {
            const { data } = await axios.get("/api/collaborateurs", {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })

            setCollabList(data);
            
            }
            fetchCollab();
    }, [])

    return collabList
}