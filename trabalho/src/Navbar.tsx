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

            <ul id="entrar">
            <a className="icon" href="/PagCarrinho"><ImCart id="cart-icon" size={20} color="white"/>Meu Carrinho</a>
            <a className="icon"href="/Register"><FaUserAlt id="user-icon"size={20} color="white"/>Login ou Cadastre-se</a>
            </ul>

            <div id="menudenav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Produtos</a></li>
                    <li><a href="/Mission">Missão</a></li>
                    <li><a href="/Contact">Contato</a></li>
                </ul>
            </div>

        </nav>
    </header>

);

  export default Navbar;
