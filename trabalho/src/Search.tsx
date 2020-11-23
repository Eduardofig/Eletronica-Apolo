import React from "react";
import {carrinhoProp, produtoProp} from './Interface';
import './Search.css';
import {Helmet} from 'react-helmet';


/*
    Página de Busca
*/


const Busca:React.FunctionComponent<carrinhoProp> = ({array}:carrinhoProp) => {
    

    return(

        <div className="containerCarrinho">
            <h2>Meu carrinho</h2>
            <Helmet>
                <title>Carrinho</title>
            </Helmet>
            {array.map(produto => (
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
                        <button id="btn-remocao">Comprar</button>
                    </div>
                </div>
                ))}
           
        </div>

    )
}

export default Busca