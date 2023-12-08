import { Link  } from "react-router-dom";

import resolvilleLogo from "../../../assets/images/resolvilleLogo.png";
import "./headerLogo.css"


const HeaderLogo =() => {
    return (
        <header className="header-logo-container">
            <Link className="navigation-logo" to="/home">
                <img src={resolvilleLogo} alt="logo" />
            </Link>
        </header>
    );
};


export default HeaderLogo;