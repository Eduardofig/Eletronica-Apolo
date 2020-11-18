import React from 'react';
import './Navbar.css';
import logo from './imagens/Icones/logo.png'
import { ImCart } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";

/*
    Componente da barra de navegação, que será reaproveitado em todo o front do projeto
 */
const Navbar:React.FunctionComponent = () => (

    <header>
        <nav>
            <img id="logo" src={logo} alt="Logo do site"/>
            <input id="search" type="search" placeholder="O que você quer buscar"/>

            <a href="/Cart"><ImCart id="cart" size={20} color="white"/></a>
            <FaUserAlt id="user"size={20} color="white"/>

            <ul id="entrar">
                <li><a href="/Register">Login</a></li>
                <li><a href="/Register">Cadastre-se</a></li>
            </ul>

            <div id="menudenav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a>Produtos</a></li>
                    <li><a>Missão</a></li>
                    <li><a>Contato</a></li>
                </ul>
            </div>

        </nav>
    </header>

);

  export default Navbar;
