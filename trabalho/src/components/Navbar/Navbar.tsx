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


    function aumentarFonte(){
        
        try{
            var element = document.getElementById('aumentar');
            var atual = element.style.fontSize;
            console.log(atual);
        }catch(e){
            console.log(e);
        }
    }

    function reduzirFonte(){

        try{
            var element = document.getElementById('aumentar');
            var atual=element.style.fontSize;
            atual = '20px'
            element.style.fontSize = atual;
            console.log('aumentou');
        }catch(e){
            console.log(e);
        }

    }


    return(

        <header>
            <nav>
                <a href="/"><img className="logo" src={cpu} alt="Logo do site"/></a>
                <button className="accessibility-btn" id='aumentar'onClick={()=> aumentarFonte()}>A+</button>
                <button className="accessibility-btn" onClick={()=>reduzirFonte}>A-</button>
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
        </header>

)};

  export default Navbar;
