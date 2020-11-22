import React, {useState} from "react";
import {carrinhoProp, produtoProp} from './Interface';
import './Carrinho.css';
import {Helmet} from 'react-helmet';

const Carrinho:React.FunctionComponent<carrinhoProp> = ({array}:carrinhoProp) => {

    var initTotal:number = array.reduce((a, b) => (a + b.precoProduto), 0);
    const [produtos, setProdutos] = useState( array);
    const [total, setTotal] = useState(initTotal);
    const removerProduto = (_produto:produtoProp) => {

        setProdutos(produtos.filter(produto => (produto !== _produto)));
        setTotal(total - _produto.precoProduto)
        return;

    }

    return(

        <div className="containerCarrinho">
            <h2>Meu carrinho</h2>
            <Helmet>
                <title>Carrinho</title>
            </Helmet>
            {produtos.map(produto => (
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
                        <button id="btn-remocao" onClick={() => removerProduto(produto)}>Remover</button>
                    </div>
                </div>
                ))}
            <p className="carTotal">{total === 0? "Carrinho vazio!" : `Total : R$ ${total}`}</p>
            <a href={total === 0? "/" : "/Payment"}><button className="carFinalizar">{total === 0? "Retornar à loja" : "Finalizar Compra"}</button></a>
        </div>

    )
}

export default Carrinho
