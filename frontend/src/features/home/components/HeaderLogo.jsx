import { Link  } from "react-router-dom";

import logo from "../../../assets/images/logo.png";
import "./headerLogo.css"


const HeaderLogo =() => {
    return (
        <header className="header-logo-container">
            <Link className="navigation-logo" to="/home">
                <img src={logo} alt="logo" />
                <div>
                    <h1>Resolville</h1>
                </div>
            </Link>
        </header>
    );
};


export default HeaderLogo;