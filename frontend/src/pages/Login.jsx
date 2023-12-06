import "../features/login/login.css";
import LoginRegisterBtns from "../features/login/LoginRegisterBtns.jsx";
import LoginForm from "../features/login/LoginForm.jsx";

import resolvilleLogo from "../assets/images/resolvilleLogo.png";
import googleLogo from "../assets/images/googleLogo.png";
import appleLogo from "../assets/images/appleLogo.png";

const Login = () => {
  return (
    <div className="screen">
      <LoginRegisterBtns/>
      <div className="container decorativeImg"></div>
      <div className="container">
        <img className="logo" alt="Logo" src={resolvilleLogo} />

        <div className="btnsForm">
          <div className="btnColor"></div>
          <button id="btnLogin"><a>Login</a></button>
          <button id="btnCadastro"><a>Cadastro</a></button>
        </div>
        
        <a className="desc">Faça seu login preenchendo os campos abaixo:</a>
        
        <LoginForm/>

        <form className="deactivated" id="cadastro">
          <input type="text" placeholder="Nome de Usuário" required />
          <input type="text" placeholder="Email ou CPF" required />
          <input type="password" placeholder="Senha" required />

          <button className="actionBtn" type="submit">Cadastrar</button>
        </form>

        <div className="orLine">
          <a>ou</a>
        </div>

        <button className="continueWithBtn" type="submit">
          <img className="icon" alt="Logo" src={googleLogo} />
          Continuar com o Google
        </button>

        <button className="continueWithBtn" type="submit">
          <img className="icon" alt="Logo" src={appleLogo} />
          Continuar com a Apple
        </button>
      </div>
    </div>
  );
};

export default Login;