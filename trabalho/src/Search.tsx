import React from "react";
import './Search.css';
import {Helmet} from 'react-helmet';
import data from './AppData';

/*
    Página de Busca
*/


const Busca:React.FunctionComponent = () => {

    return(

        <div className="containerCarrinho">
            <h2>Resultados da Busca: </h2>
            <Helmet>
                <title>Carrinho</title>
            </Helmet>
            {data.map(produto => (
                <div className="containerCarrinhoProdutos">
                    <div className="ImgNome">
                        <p className="carProdNome">{produto.nomeProduto}</p>
                        <img className="carProdImg" src={produto.imagemProduto} alt={produto.nomeProduto}/>
                    </div>
                    <div className="End">
                        <div className="carDados">
                            <p className="carProdDescricao">{produto.descricaoProduto}</p>    
                            <p className="carProdPreco">R${String(produto.precoProduto) + ',00'}</p>
                        </div>
                        <a href="/PaginaDeCompra">
                            <button id="btn-remocao">Comprar</button>
                        </a>
                    </div>
                </div>
                ))}
           
        </div>

    )
}

export default Busca
