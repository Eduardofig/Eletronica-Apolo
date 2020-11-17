import React from 'react';
import './Navbar.css';
import logo from './imagens/Icones/logo.png'
import cart from "./imagens/Icones/cart.svg"
import user from './imagens/Icones/user.png'

/*
    Componente da barra de navegação, que será reaproveitado em todo o front do projeto
 */
const Navbar:React.FunctionComponent = () => {

return (
    <header>
        <nav>
            <img id="logo" src={logo} alt="Logo do site"/>
            <input id="search" type="search" placeholder="O que você quer buscar"/>

            <img id="cart" src={cart} alt="Ícone do carrinho"/>
            <img id="user" src={user} alt="Ícone do usuário"/>

            <ul id="entrar">
                <li><a>Login</a></li>
                <li><a>Cadastre-se</a></li>
            </ul>

            <div id="menudenav">
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Produtos</a></li>
                    <li><a>Missão</a></li>
                    <li><a>Contato</a></li>
                </ul>
            </div>

        </nav>
    </header>
);
  }

  export default Navbar;
