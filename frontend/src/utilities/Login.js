import { jwtDecode } from "jwt-decode";

import Requester from "../data/Requester";


const login = async (email, password) => {
    try {
        const data = {
            email: email,
            password: password
        }

        const authToken = await Requester("post", "users/login", data, response => {
            // console.log("Response from server:", response);
            return response.data.accessToken;
        })
        const decodedToken = jwtDecode(authToken);
        
        console.log("authToken:", authToken);
        console.log("User CPF:", decodedToken.cpf);
        console.log("User Email:", decodedToken.email);
        console.log("User Role:", decodedToken.role);

        localStorage.setItem("authToken", `${authToken}`);
        localStorage.setItem("userCPF", `${decodedToken.cpf}`);
        localStorage.setItem("userEmail", `${decodedToken.email}`);
        localStorage.setItem("userRole", `${decodedToken.role}`);
    }
    catch (error) {
        throw new Error(error);
    }
};


export default login;