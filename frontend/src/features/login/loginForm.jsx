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
      formSignup.classList.add('deactivated');
      formSignin.classList.remove('deactivated');
      btnColor.style.left = "0px";
    };

    const handleCadastroClick = () => {
      formSignup.classList.remove('deactivated');
      formSignin.classList.add('deactivated');
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
