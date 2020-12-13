import React from 'react';
import './Navbar.css';
import cpu from '../../imagens/Icones/cpu.png'
import cart from '../../imagens/Icones/cart.png'
import user from '../../imagens/Icones/user1.png'
import loupe from '../../imagens/Icones/loupe.png'


/*
    Componente da barra de navegação, que será reaproveitado em todo o front do projeto
 */

const Navbar:React.FunctionComponent = () => {

 /*
    window.onload = function() {
        var elementBody = document.querySelector('body');
        var elementBtnIncreaseFont = document.getElementById('increase-font');
        var elementBtnDecreaseFont = document.getElementById('decrease-font');
        // Padrão de tamanho, equivale a 100% do valor definido no Body
        var fontSize = 100;
        // Valor de incremento ou decremento, equivale a 10% do valor do Body
        var increaseDecrease = 10;
    
        // Evento de click para aumentar a fonte
        elementBtnIncreaseFont.addEventListener('click', function(event) {
            fontSize = fontSize + increaseDecrease;
            elementBody.style.fontSize = fontSize + '%';
        });
    
        // Evento de click para diminuir a fonte
        elementBtnDecreaseFont.addEventListener('click', function(event) {
            fontSize = fontSize - increaseDecrease;
            elementBody.style.fontSize = fontSize + '%';
        });
    }    
*/
    return(
    <body> 
    <header>
        <nav>
            <a href="/"><img className="logo" src={cpu} alt="Logo do site"/></a>
            <input id="search" type="search" placeholder="O que você quer buscar"/>
            <a href="/Search"><img src={loupe} id="search-icon" alt="ícone da lupa"/></a>

            <ul id="entrar">
            <a className="icon" href="/PagCarrinho"><img src={cart} id="cart-icon" alt="icone de carrinho"/>Meu Carrinho</a>
            <a className="icon"href="/Register"><img src={user} id="user-icon" alt="icone de usuário"/>Login ou Cadastre-se</a>
            </ul>

            <div id="menudenav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Mission">Missão</a></li>
                    <li><a href="/Contact">Contato</a></li>
                </ul>
            </div>
        </nav>
        <div className="btn-container">
            <button name="increase-font" id="increase-font" title="Aumentar fonte">A +</button>
            <button name="decrease-font" id="decrease-font" title="Diminuir fonte">A -</button>
        </div>
    </header>
    </body>
    ) 
};

  export default Navbar;
