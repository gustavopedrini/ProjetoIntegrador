import "../features/login/login.css";
import LoginForm from "../features/login/loginForm.jsx";
import resolville_logo from "../assets/images/resolville_logo.png";
import google_logo from "../assets/images/google_logo.png";
import apple_logo from "../assets/images/apple_logo.png";

const Login = () => {
  return (
    <div className="screen">
      <div className="container">
        <LoginForm/>
        
        <img className="logo" alt="Logo" src={resolville_logo} />

        <div className="btnsForm">
          <div className="btnColor"></div>
          <button id="btnLogin"><a>Login</a></button>
          <button id="btnCadastro"><a>Cadastro</a></button>
        </div>
        
        <a className="desc">Faça seu login preenchendo os campos abaixo:</a>
        
        <form id="login">
          <input type="text" placeholder="Email ou CPF" required />
          <input type="password" placeholder="Senha" required />

          <div className="divCheck">
            <input type="checkbox" />
            <span className="smalldesc">Lembrar de mim</span>

            <span className="smalldesc">Esqueceu a senha?</span>
          </div>

          <button className="actionBtn" type="submit">Entrar</button>
        </form>

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
          <img className="icon" alt="Logo" src={google_logo} />
          Continuar com o Google
        </button>

        <button className="continueWithBtn" type="submit">
          <img className="icon" alt="Logo" src={apple_logo} />
          Continuar com a Apple
        </button>
      </div>
    </div>
    
  );
};

export default Login;