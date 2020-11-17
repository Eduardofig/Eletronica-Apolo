import React from "react";
import "./Produto.css";

type produtoProp = {
    precoProduto:string,
    nomeProduto:string,
    descricaoProduto:string,
    imagemProduto:string,
}

const Produto:React.FunctionComponent<produtoProp> = (props:produtoProp) => {
    return(
        <div id='containerProduto'>
            <p className="nomeProduto">{props.nomeProduto}</p>
            <img className="imagemProduto" src={props.imagemProduto} alt={props.nomeProduto} />
            <p className="descricaoProduto">{props.descricaoProduto}</p>
            <p className="precoProduto">Preco: {props.precoProduto}</p>
            <button className="botaoProduto">Comprar</button>
        </div>
    )
}

export default Produto
