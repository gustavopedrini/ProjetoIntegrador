import { Link  } from "react-router-dom";

import user from "../../../assets/images/user.png";
import home from "../../../assets/images/home.png";
import profile from "../../../assets/images/profile.png";
import bell from "../../../assets/images/bell.png";
import gear from "../../../assets/images/gear.png";
import "./asideNavigationMenu.css"
import LogoutButton from "./logoutBtn";


const AsideNavigationMenu =() => {
    return (
        <div className="aside-navigation-menu-container">
            <div className="anm-user-profile">
                <div><img src={user} alt="" /></div><span>João Fuckner Pyres</span>
            </div>
            <div className="anm-flex-container">
                <nav className="anm-navigation-links">
                    <ul>
                        <li>
                            <Link to="/home"><img src={home} alt="home" /><span>Início</span></Link>
                        </li>
                        <li>
                            <Link to="/home"><img src={profile} alt="profile" /><span>Políticos</span></Link>
                        </li>
                        <li>
                            <Link to="/home"><img src={bell} alt="bell" /><span>Notificações</span></Link>
                        </li>
                        <li>
                            <Link to="/home"><img src={gear} alt="gear" /><span>Configurações</span></Link>
                        </li>
                        
                        <LogoutButton/>
                    </ul>
                </nav>
                <div className="anm-btn-report">
                    <button>Reportar</button>
                </div>
            </div>
        </div>
    );
};


export default AsideNavigationMenu;