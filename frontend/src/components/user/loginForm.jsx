import  React, { useState } from 'react';
import axios from 'axios';
import Main from '../template/Main';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

export default function LoginForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = async () => {
        try{
            const resposta = await axios.post('http://localhost:3001/auth/login',{
                email,
                password
            });
            localStorage.setItem('token', resposta.data.token);
            alert(resposta.data.msg);
            navigate('/');
        }catch(err){
            alert(err.response?.data?.msg || 'Erro ao logar');
        }
    };

    return(
        <Main icon="sign-in" title="Login" subtitle="Acesse sua Conta para continuar">
            <div className="form">
                <input 
                type="text" 
                className="form-control mb-12" 
                placeholder="Email" 
                value={email} 
                onChange={ e => setEmail(e.target.value)}/>

                <input 
                type="password" 
                className="form-control mb-12" 
                placeholder="Senha" 
                value={password} 
                onChange={e => setPassword(e.target.value)}/>
                
                <button className="btn btn-primary" onClick={login}>Entrar</button>
            </div>
        </Main>
    );
}
