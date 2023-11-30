import "../features/login/login.css";

export const Login = () => {
  return (
    <div className="login-page">
      <img className="decoration-image" alt="Decoration image" src="decoration-image.png" />
      <div className="login-bubble">
        <div className="bubble-background" />
        <div className="continue-with-apple">
          <div className="overlap-group">
            <div className="text-wrapper">Continuar com a Apple</div>
            <img className="ic-baseline-apple" alt="Ic baseline apple" src="ic-baseline-apple.svg" />
          </div>
        </div>
        <div className="continue-with-google">
          <div className="overlap">
            <div className="div">Continuar com o Google</div>
            <img className="flat-color-icons" alt="Flat color icons" src="flat-color-icons-google.svg" />
          </div>
        </div>
        <div className="or-line">
          <div className="overlap-2">
            <div className="rectangle" />
            <div className="text-wrapper-2">ou</div>
          </div>
        </div>
        <div className="login-btn">
          <div className="text-wrapper-3">Entrar</div>
        </div>
        <div className="additional-btns">
          <div className="forgot-password-btn">Esqueceu a senha?</div>
          <div className="remember-me-btn">
            <div className="rectangle-2" />
            <div className="text-wrapper-4">Lembre de mim</div>
          </div>
        </div>
        <div className="password-div">
          <div className="text-wrapper-5">Senha</div>
          <img className="formkit-hidden" alt="Formkit hidden" src="formkit-hidden.svg" />
        </div>
        <div className="email-div">
          <div className="text-wrapper-6">E-mail ou CPF</div>
        </div>
        <p className="p">Faça seu login preenchendo os campos abaixo:</p>
        <div className="login-register-btns">
          <div className="div-wrapper">
            <div className="text-wrapper-7">Login</div>
          </div>
          <div className="text-wrapper-8">Cadastro</div>
        </div>
        <img className="logo" alt="Logo" src="logo.png" />
      </div>
    </div>
  );
};

export default Login;