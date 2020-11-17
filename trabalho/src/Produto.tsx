import React, {useState} from "react"
import "./Produto.css"

type produtoProp = {
    precoProduto:string,
    nomeProduto:string,
    quantidadeProduto:string,
    imagemProduto:string,
}

function Produto(props:produtoProp){
    return(
        <div id='containerProduto'>
            <img className="imagemProduto" src={props.imagemProduto} alt={props.nomeProduto} />
            <p className="nomeProduto">{props.nomeProduto}</p>
            <p className="quantidadeProduto">Quantidade: {props.quantidadeProduto}</p>
            <p className="precoProduto">Preco: {props.precoProduto}</p>
            <button className="botaoProduto">Comprar</button>
        </div>
        )
}

export default Produto
