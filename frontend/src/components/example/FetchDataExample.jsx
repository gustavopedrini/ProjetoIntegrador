import { useState, useEffect } from "react";
import Requester from "../../data/Requester";


const FetchDataExample = () => {
    const [userData, setUserData] = useState([]);


    useEffect(() => {
        const FetchData = async () => {
            try {
                const data = await Requester("get", "users", null, response => {
                    return response.data.content;
                })
                console.log(data)

                setUserData(data)
            }
            catch (error) {
                throw new Error(error);
            }
        }

        FetchData();
    }, [])


    return (
        <>
            <h1>{userData}</h1>
        </>
    )
}


export default FetchDataExample;