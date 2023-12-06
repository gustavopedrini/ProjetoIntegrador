import { useState, useEffect } from 'react';
import people from '../../assets/images/people.png';
import joinvilleFlag from '../../assets/images/joinvilleFlag.png';

const LoginRegisterBtns = () => {
  const [formSignin, setFormSignin] = useState(null);
  const [formSignup, setFormSignup] = useState(null);
  const [btnColor, setBtnColor] = useState(null);
  const [decorativeImg, setdecorativeImg] = useState(null);

  useEffect(() => {
    setFormSignin(document.querySelector('#login'));
    setFormSignup(document.querySelector('#cadastro'));
    setBtnColor(document.querySelector('.btnColor'));
    setdecorativeImg(document.querySelector('.decorativeImg'));
  }, []);

  useEffect(() => {
    const handleLoginClick = () => {
      formSignup.classList.add('deactivated');
      formSignin.classList.remove('deactivated');
      btnColor.style.left = "0px";
      decorativeImg.style.backgroundImage = `url(${joinvilleFlag})`;
    };

    const handleCadastroClick = () => {
      formSignup.classList.remove('deactivated');
      formSignin.classList.add('deactivated');
      btnColor.style.left = "50%";
      decorativeImg.style.backgroundImage = `url(${people})`;
    };

    document.querySelector('#btnLogin').addEventListener('click', handleLoginClick);
    document.querySelector('#btnCadastro').addEventListener('click', handleCadastroClick);

    return () => {
      document.querySelector('#btnLogin').removeEventListener('click', handleLoginClick);
      document.querySelector('#btnCadastro').removeEventListener('click', handleCadastroClick);
    };
  }, [formSignin, formSignup, btnColor, decorativeImg]);
};

export default LoginRegisterBtns;
