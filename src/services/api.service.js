import axios from "axios";
import { useEffect, useState } from "react";
import { addUser } from "../features/collaborators";
import { saveToken, storeUser } from "./localStorage.service";


axios.defaults.baseURL = 'http://localhost:7000';

//Checks if the credentials are correct then authorize the connection and redirect to next page
export async function login(email, password, dispatch) {
    const { data } = axios.post("/api/login", {
        "email": email,
        "password": password
    })
        .then((res) => {
            saveToken(res.data.token);
            storeUser(res.data.user);
            dispatch(addUser(res.data.user));
            window.location = "/collaborateurs"
        })

        .catch((err) => {
            document.querySelector(".err-msg").innerHTML = "Identifiants incorrects";
        })
}

//Returns an array with all the collaborators
export function getCollaborators(navigate) {
    let token = localStorage.getItem("token");

    const [collabList, setCollabList] = useState([]);

    useEffect(() => {
        async function fetchCollab() {
            const { data } = await axios.get("/api/collaborateurs", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })

            setCollabList(data);
            
            }
            fetchCollab();
    }, [])

    return collabList
}

// Is supposed to return a random employee in an object (as shows the console.log), but returns a promise.
export async function getRandomEmployee (setRandEmp) {

            await axios.get("/api/collaborateurs/random", {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then((res) => {
                console.log(res.data)
                return res.data
            })
            .catch((err) => {
                console.log(err)
            })
}