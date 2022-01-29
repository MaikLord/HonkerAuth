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
                    <h3>Faça seu cadastro:</h3>
                    <input type="text" placeholder='Coloque seu E-mail' />
                    <input type="password" placeholder='Coloque sua Senha' />
                    <input type="password" placeholder='Repita sua Senha' />
                    <button type="text">Criar Conta</button>
                    <button onClick={() => navigate('/')} className='register' type="text">Voltar</button>
                </form>
            </MainDiv>
        </>
    );
};