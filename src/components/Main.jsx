import React from 'react';
import logo from '../logo.svg'
import { useNavigate } from 'react-router-dom'

import { Header, MainDiv } from '../styles/style'

export default function Main() {

    const navigate = useNavigate();

    return (
        <>
            <Header>
                <ul>
                    <img src={logo} alt="" />
                </ul>
            </Header>
            <MainDiv>
                <form>
                    <h3>Faça login com suas credenciais:</h3>
                    <input type="text" placeholder='E-mail' />
                    <input type="password" placeholder='Senha' />
                    <button type="submit">Entrar</button>
                    <button onClick={() => navigate('/register')} className='register' type="text">Criar Conta</button>
                </form>
            </MainDiv>
        </>
    );
};