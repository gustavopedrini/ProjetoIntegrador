import { useState, useEffect } from "react";
import Requester from "../../data/Requester";


const FetchDataExample = () => {
    const [userData, setUserData] = useState([]);

    localStorage.setItem("authToken", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiY3BmIjoiNjY2NDQ0MzMzMTEiLCJlbWFpbCI6Im5hdGFuQGhvdG1haWwuY29tIiwicm9sZSI6MCwiaWF0IjoxNzAwNTIxMzkxfQ.pIOkAiax1YOM0eNUsoGBCa7iJdQ_GHMeCWy8Kz8x8sw")

    useEffect(() => {
        const FetchData = async () => {
            try {
                const data = { headers: `Authorization: ${localStorage.getItem("authToken")}` }

                const dataResponse = await Requester("get", "users", data, response => {
                    return response.data.content;
                })
                console.log(dataResponse)

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
            <h1>{userData}</h1>
        </>
    )
}


export default FetchDataExample;