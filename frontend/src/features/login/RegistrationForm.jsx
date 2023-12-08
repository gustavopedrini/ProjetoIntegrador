import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import register from '../../utilities/Register';


const RegistrationForm = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUserName = (event) => {
        setUserName(event.target.value);
    }

    const handleEmailEdit = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordEdit = (event) => {
        setPassword(event.target.value);
    }

    const handleRegistration = async (event) => {
        try{
        event.preventDefault();
    
        await register (username, email, password);
        
        navigate('/login');
        
        }catch(error){
        console.log(error);
        }
    };

    return (
        <form className="deactivated" id="cadastro" onSubmit={handleRegistration}>
            <input 
                type="text" 
                placeholder="Nome de Usuário" 
                value={username}
                onChange={handleUserName}
                required 
            />

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

            <button className="actionBtn" type="submit">Cadastrar</button>
        </form>
    );
};

export default RegistrationForm;