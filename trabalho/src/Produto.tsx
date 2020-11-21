import React from "react";
import "./Produto.css";
import {produtoProp} from './Interface';

const Produto:React.FunctionComponent<produtoProp> = (props:produtoProp) => (

        <div id='containerProduto'>
            <p className="nomeProduto">{props.nomeProduto}</p>
            <img className="imagemProduto" src={props.imagemProduto} alt={props.nomeProduto} />
            <p className="descricaoProduto">{props.descricaoProduto}</p>
            <p className="precoProduto">R$ {String(props.precoProduto + 1.23)}</p>
            <a className="aProduto" href="/PaginaDeCompra">
                <button className="botaoProduto">Comprar</button>
            </a>
        </div>

);

export default Produto;
