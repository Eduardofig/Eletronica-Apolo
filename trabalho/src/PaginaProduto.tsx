import React, {useState} from 'react';
import './PaginaProduto.css';
import {produtoProp} from './Interface';

/*
    Componente da página de produto
 */

// Modifica a quantidade do produto que a pessoa quer adicionar ao carrinho
const PaginaProduto:React.FunctionComponent<produtoProp> = ({imagemProduto, nomeProduto, precoProduto, descricaoProduto, linkProduto}:produtoProp) => {

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
                    <img className="pagProdutoImagem" src={imagemProduto} alt={nomeProduto} />
                </div>
                <div className="right-container">
                    <h2 className="pagProdutoTitulo">{nomeProduto}</h2>
                    <p className="pagProdutoPreco">R$ {String(precoProduto) + ',00'}</p>
                    <p className="pagProdutoDescricao">{descricaoProduto}</p>
                    { /*Demo: <a className="pagProdutoDescricao" href={linkProduto}>{linkProduto}</a> */}
                    <label>Quantidade: </label> <br></br>
                    <button id="rightArrow" className="pagProdutoArrow" type="button" onClick={() => alterarQuantidade(true)} />
                    <p className="pagProdutoQuantidade">{String(quantidade)}</p>
                    <button id="leftArrow" className="pagProdutoArrow" type="button" onClick={() => alterarQuantidade(false)} />
                    <a href="/PagCarrinho">
                        <button className="pagProdutoButton">Comprar</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PaginaProduto;
