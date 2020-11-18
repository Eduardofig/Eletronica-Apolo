import React from "react";
import "./Produto.css";

type produtoProp = {
    precoProduto:number,
    nomeProduto:string,
    descricaoProduto:string,
    imagemProduto:string,
};

const Produto:React.FunctionComponent<produtoProp> = (props:produtoProp) => (

        <div id='containerProduto'>
            <p className="nomeProduto">{props.nomeProduto}</p>
            <img className="imagemProduto" src={props.imagemProduto} alt={props.nomeProduto} />
            <p className="descricaoProduto">{props.descricaoProduto}</p>
            <p className="precoProduto">R$ {String(props.precoProduto + 1.23)}</p>
            <button className="botaoProduto">Comprar</button>
        </div>

);

export default Produto;
