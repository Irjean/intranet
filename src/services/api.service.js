import axios from "axios";
import { saveToken } from "./localStorage.service";


axios.defaults.baseURL = 'http://localhost:7000';

export async function login (email, password, navigate) {
    const { data } = axios.post("/api/login", {
        "email" : email,
        "password" : password
    })

    .then((res) => {
        console.log(res.data.token)
        saveToken(res.data.token);
        navigate("/collaborateurs/list");
    })

    .catch((err) => {
        console.log(err);
    })
}