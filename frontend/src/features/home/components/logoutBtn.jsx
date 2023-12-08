import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoutIcon from "../../../assets/images/home.png";
import Logout from "../../../utilities/Logout.js";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Logout()
    navigate('/login');
  };

  return (
    <li>
      <button className='menuBtns' onClick={handleLogout}>
        <img src={logoutIcon} alt="logoutIcon" />
        <span>Logout</span>
      </button>
    </li>
  );
};

export default LogoutButton