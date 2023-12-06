import "../features/login/login.css";
import LoginRegisterBtns from "../features/login/LoginRegisterBtns.jsx";
import LoginForm from "../features/login/LoginForm.jsx";

import resolvilleLogo from "../assets/images/resolvilleLogo.png";
import googleLogo from "../assets/images/googleLogo.png";
import appleLogo from "../assets/images/appleLogo.png";
import RegistrationForm from "../features/login/RegistrationForm.jsx";

const Login = () => {
  return (
    <div className="screen">
      
      <div className="container decorativeImg"></div>
      <div className="container">
        <img className="logo" alt="Logo" src={resolvilleLogo} />

        <LoginRegisterBtns/>
        
        <a className="desc">Faça seu login preenchendo os campos abaixo:</a>
        
        <LoginForm/>
        <RegistrationForm/>

        <div className="orLine">
          <a>ou</a>
        </div>

        <button className="continueWithBtn" type="submit">
          <img className="icon" alt="Logo" src={googleLogo} />
          <a>Continuar com o Google</a>
        </button>

        <button className="continueWithBtn" type="submit">
          <img className="icon" alt="Logo" src={appleLogo} />
          <a>Continuar com a Apple</a>
        </button>
      </div>
    </div>
  );
};

export default Login;