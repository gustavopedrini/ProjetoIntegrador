import { Outlet } from "react-router-dom";

import HeaderLogo from "../features/home/components/HeaderLogo.jsx";
import AsideNavigationMenu from "../features/home/components/AsideNavigationMenu.jsx";

import "../features/home/home.css";


const Home = () => {
    return (
        <div className="home-page-content-wrapper">
            <HeaderLogo/>
            <div className="home-flex-body">
                <AsideNavigationMenu/>
                <Outlet/>
                <h1>ESTOU NA DIREITA</h1>
            </div>
        </div>
    );
};


export default Home;