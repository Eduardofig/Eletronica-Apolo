import React, {useState} from 'react';
import './PaginaProduto.css';
import {produtoProp} from './Interface';

const PaginaProduto:React.FunctionComponent<produtoProp> = (props:produtoProp) => {

    const[quantidade, setQuantidade] = useState(1);

    const alterarQuantidade:Function = (aumentar:boolean) => {
        if (aumentar) {
            setQuantidade(quantidade + 1);
        } else if (quantidade > 1) {
            setQuantidade(quantidade - 1);
        }
        return;
    };

    return(

        <div className="tudo">
            <h2>Página do produto</h2>
            <div className="pagProdutoContainer">
                <div className="left-container">
                    <img className="pagProdutoImagem" src={props.imagemProduto} alt={props.nomeProduto} />
                </div>
                <div className="right-container">
                    <h2 className="pagProdutoTitulo">{props.nomeProduto}</h2>
                    <p className="pagProdutoPreco">R$ {String(props.precoProduto)}</p>
                    <p className="pagProdutoDescricao">{props.descricaoProduto}</p>
                    <label>Quantidade: </label> <br></br>
                    <input id="rightArrow" className="pagProdutoArrow" type="button" onClick={() => alterarQuantidade(true)} />
                    <p className="pagProdutoQuantidade">{String(quantidade)}</p>
                    <input id="leftArrow" className="pagProdutoArrow" type="button" onClick={() => alterarQuantidade(false)} />
                    <button className="pagProdutoButton">Comprar</button>
                </div>
                
            </div>
        </div>
    );
};

export default PaginaProduto;
