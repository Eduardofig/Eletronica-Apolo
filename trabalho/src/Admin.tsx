import React from 'react'
import './Admin.css';
import {Helmet} from 'react-helmet';

/*
    Página do administrador, para cadastro dos produtos
*/

const Admin:React.FunctionComponent = () => (

        <div>
            <h2>Incluir Produtos</h2>  
            <Helmet>
                <title>Admin</title>
            </Helmet>
            <div id="register-container">
                <form id="register-box">
                    Nome do Produto<br/>
                    <input placeholder="Digite o nome do produto" type="text"/><br></br>
                    Valor do Produto<br/>
                    <input placeholder="Digite o valor do produto" type="text"/><br></br>
                    Quantidade<br/>
                    <input placeholder="Digite a quantidade de produtos" type="number"/><br></br>
                    Código do Produto <br/>
                    <input placeholder="Digite o código do produto" type="text"/><br></br>
                    Descrição do Produto <br/>
                    <textarea rows={10} cols={60} placeholder="Descreva o produto ..."></textarea><br></br>
                    <button id="btn-cadastro">Cadastrar</button>
                </form>
            </div>       
        </div>

    );

export default Admin;
