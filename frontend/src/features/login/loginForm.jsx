import { useState, useEffect } from 'react';

const LoginForm = () => {
  const [formSignin, setFormSignin] = useState(null);
  const [formSignup, setFormSignup] = useState(null);
  const [btnColor, setBtnColor] = useState(null);

  useEffect(() => {
    setFormSignin(document.querySelector('#login'));
    setFormSignup(document.querySelector('#cadastro'));
    setBtnColor(document.querySelector('.btnColor'));
  }, []);

  useEffect(() => {
    const handleLoginClick = () => {
      formSignup.style.left = "450px";
      formSignin.style.left = "0px";
      btnColor.style.left = "0px";
    };

    const handleCadastroClick = () => {
      formSignin.style.left = "-450px";
      formSignup.style.left = "0px";
      btnColor.style.left = "50%";
    };

    document.querySelector('#btnLogin').addEventListener('click', handleLoginClick);
    document.querySelector('#btnCadastro').addEventListener('click', handleCadastroClick);

    return () => {
      document.querySelector('#btnLogin').removeEventListener('click', handleLoginClick);
      document.querySelector('#btnCadastro').removeEventListener('click', handleCadastroClick);
    };
  }, [formSignin, formSignup, btnColor]);
};

export default LoginForm;
