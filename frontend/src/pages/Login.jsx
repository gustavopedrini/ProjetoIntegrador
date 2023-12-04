import "../features/login/login.css";
import LoginForm from "../features/login/loginForm.jsx";

const Login = () => {
  return (
    <div className="container">
      <LoginForm/>

      <img className="logo" alt="Logo" src="logo.png" />

      <div className="btnsForm">
        <div className="btnColor"></div>
        <button id="btnLogin"><a>Login</a></button>
        <button id="btnCadastro"><a>Cadastro</a></button>
      </div>
      
      {/* <p className="p">Faça seu login preenchendo os campos abaixo:</p> */}
      
      <form id="login">
        <input type="text" placeholder="Email ou CPF" required />
        <input type="password" placeholder="Senha" required />

        <div className="divCheck">
          <input type="checkbox" />
          <span>Lembrar de mim</span>

          <span>Esqueceu a senha?</span>
        </div>

        <button type="submit">Entrar</button>
      </form>

      <form id="cadastro">
        <input type="text" placeholder="Nome de Usuário" required />
        <input type="text" placeholder="Email ou CPF" required />
        <input type="password" placeholder="Senha" required />

        <button type="submit">Cadastrar</button>
      </form>

      <div className="or-line">
        <div className="overlap-2">
          <div className="rectangle" />
          <div className="text-wrapper-3">ou</div>
        </div>
      </div>

      <div className="continue-with-apple">
          <div className="overlap-group">
            <div className="text-wrapper">Continuar com a Apple</div>
            <img className="ic-baseline-apple" alt="Ic baseline apple" src="ic-baseline-apple.svg" />
          </div>
        </div>

        <div className="continue-with-google">
          <div className="overlap">
            <div className="text-wrapper-2">Continuar com o Google</div>
            <img className="flat-color-icons" alt="Flat color icons" src="flat-color-icons-google.svg" />
          </div>
        </div>

    </div>
  );
};

export default Login;