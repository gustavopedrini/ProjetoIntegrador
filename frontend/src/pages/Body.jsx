import { Outlet } from "react-router-dom";

import "../features/body/body.css";


const Body = () => {
    return (
        <div className="body">
            <Outlet />
        </div>
    );
};


export default Body;