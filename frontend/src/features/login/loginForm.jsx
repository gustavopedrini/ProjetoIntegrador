import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import login from "../../utilities/Login.js";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailEdit = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  }

  const handlePasswordEdit = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  }

  const handleLogin = async (event) => {
    try{
      event.preventDefault();
      console.log(email, password);

      await login (email, password);

      const authToken = localStorage.getItem('authToken');
      
      if (authToken != null) {
        navigate('/home');
      }
      
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

      <button className="actionBtn" type="submit">Entrar</button>
    </form>
  );
};

export default LoginForm;