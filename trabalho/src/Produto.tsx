import React from "react";
import "./Produto.css";
import {produtoProp} from './Interface';

const Produto:React.FunctionComponent<produtoProp> = ({imagemProduto, descricaoProduto, nomeProduto, precoProduto}:produtoProp) => (

        <div id='containerProduto'>
            <p className="nomeProduto">{nomeProduto}</p>
            <img className="imagemProduto" src={imagemProduto} alt={nomeProduto} />
            <p className="descricaoProduto">{descricaoProduto}</p>
            <p className="precoProduto">R$ {String(precoProduto + 1.23)}</p>
            <a className="aProduto" href="/PaginaDeCompra">
                <button className="botaoProduto">Comprar</button>
            </a>
        </div>

);

export default Produto;
