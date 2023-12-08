import Requester from "../data/Requester";
import axios from 'axios';

const register = async (username, email, password) => {
    try {
        const data = {
            username: username,
            email: email,
            password: password
        }

        const response = await Requester("post", "users/register", data, response => {
            axios.post('http://localhost:3000/api/register', data);
        });

        console.log("User registered successfully:", response);

    } catch (error) {
        throw new Error(error);
    }
};

export default register;