import { useState, useEffect } from "react";
import Requester from "../../data/Requester";

import login from "../../utilities/Login.js";


const FetchDataExample = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const FetchData = async () => {
            try {
                // Testing login function, should set the localStorage authToken.
                login("samuca@hotmail.com", "batata");
                // localStorage.removeItem("authToken");

                // Header of the resquest should get the localStorage authToken.
                const data = { headers: `Authorization: ${localStorage.getItem("authToken")}` }

                // Using the Requester function to make a request.
                const dataResponse = await Requester("get", "users", data, response => {
                    // Server response.
                    console.log("server response:", response)
                    return response.data.content;
                })
                // Setting userData with the response.
                setUserData(dataResponse)
            }
            catch (error) {
                throw new Error(error);
            }
        }

        FetchData();
    }, [])


    return (
        <>
            <h1>User Data:</h1>
            <ul>
                {userData.map(user => (
                    <li key={user.id}>
                        <p>ID: {user.id}</p>
                        <p>Email: {user.email}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}


export default FetchDataExample;