import { useState } from 'react';
import login from "../../utilities/Login.js";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailEdit = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordEdit = (event) => {
    setPassword(event.target.value);
  }

  const handleLogin = (event) => {
    try{
      event.preventDefault();
      console.log(email, password);
      login(email, password);
    }catch(error){
      console.log(error);
    }
  };

  return (
    <form id="login" onSubmit={handleLogin}>
      <input 
        type="text" 
        placeholder="Email ou CPF" 
        value={email}
        onChange={handleEmailEdit}
        required 
      />

      <input 
        type="password" 
        placeholder="Senha"
        value={password}
        onChange={handlePasswordEdit}
        required 
      />

      <div className="divCheck">
        <input type="checkbox" />
        <span className="smalldesc ">Lembrar de mim</span>

        <span className="smalldesc">Esqueceu a senha?</span>
      </div>

      <button className="actionBtn" type="submit">Entrar</button>
    </form>
  );
};

export default LoginForm;