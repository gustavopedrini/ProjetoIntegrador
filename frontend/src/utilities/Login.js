import Requester from "../data/Requester";


const authenticateUser = async (email, password) => {
    try {
        const data = {
            email: email,
            password: password
        }

        const authToken = await Requester("post", "users/login", data, response => {
            // console.log("Response from server:", response);
            return response.data.accessToken;
        })

        localStorage.setItem("authToken", `${authToken}`);
    }
    catch (error) {
        throw new Error(error);
    }
};


export default authenticateUser;