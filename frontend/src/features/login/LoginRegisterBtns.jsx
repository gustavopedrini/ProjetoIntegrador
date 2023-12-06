import { useState, useEffect } from 'react';
import people from '../../assets/images/people.png';
import joinvilleFlag from '../../assets/images/joinvilleFlag.png';

const LoginRegisterBtns = () => {
  const [formSignin, setFormSignin] = useState(null);
  const [formSignup, setFormSignup] = useState(null);
  const [btnColor, setBtnColor] = useState(null);
  const [decorativeImg, setDecorativeImg] = useState(null);
  const [desc, setDesc] = useState(null);	

  useEffect(() => {
    setFormSignin(document.querySelector('#login'));
    setFormSignup(document.querySelector('#cadastro'));
    setBtnColor(document.querySelector('.btnColor'));
    setDecorativeImg(document.querySelector('.decorativeImg'));
    setDesc(document.querySelector('.desc'));
  }, []);

  const handleLoginClick = () => {
    formSignup.classList.add('deactivated');
    formSignin.classList.remove('deactivated');
    btnColor.style.left = '0px';
    setDecorativeImgStyle(joinvilleFlag);
    desc.innerHTML = 'Faça seu login preenchendo os campos abaixo:';
  };

  const handleCadastroClick = () => {
    formSignup.classList.remove('deactivated');
    formSignin.classList.add('deactivated');
    btnColor.style.left = '50%';
    setDecorativeImgStyle(people);
    desc.innerHTML = 'Cadastre-se preenchendo os campos abaixo:';
  };

  const setDecorativeImgStyle = (imageUrl) => {
    decorativeImg.style.backgroundImage = `url(${imageUrl})`;
  };

  return (
    <div className="btnsForm">
      <div className="btnColor"></div>
      <button id="btnLogin" onClick={handleLoginClick}>Login</button>
      <button id="btnCadastro" onClick={handleCadastroClick}>Cadastro</button>
    </div>
  );
};

export default LoginRegisterBtns;
