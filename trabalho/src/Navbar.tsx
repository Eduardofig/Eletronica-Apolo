import React from 'react';
import './Navbar.css';
import cpu from './imagens/Icones/cpu.png'
import { ImCart } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";

/*
    Componente da barra de navegação, que será reaproveitado em todo o front do projeto
 */
const Navbar:React.FunctionComponent = () => (

    <header>
        <nav>
            <img id="logo" src={cpu} alt="Logo do site"/>
            <input id="search" type="search" placeholder="O que você quer buscar"/>

            <a href="/PagCarrinho"><ImCart id="cart" size={20} color="white"/></a>
            <FaUserAlt id="user"size={20} color="white"/>

            <ul id="entrar">
                <li><a href="/Register">Login ou Cadastre-se</a></li>
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
