import React, {useState} from "react";
import {carrinhoProp, produtoProp} from './Interface';
import './Carrinho.css';


const Carrinho:React.FunctionComponent<carrinhoProp> = (props:carrinhoProp) => {
    var initTotal:number = props.array.reduce((a, b) => (a + b.precoProduto), 0);
    const [produtos, setProdutos] = useState(props.array);
    const [total, setTotal] = useState(initTotal);
    const removerProduto = (_produto:produtoProp) => {
        setProdutos(produtos.filter(produto => (produto !== _produto)));
        setTotal(total - _produto.precoProduto)
        return;
    }
    return(
        <div className="containerCarrinho">
            {produtos.map(produto => (
                <div className="containerCarrinhoProdutos">
                    <div className="ImgNome">
                        <p className="carProdNome">{produto.nomeProduto}</p>
                        <img className="carProdImg" src={produto.imagemProduto} alt={produto.nomeProduto}/>
                    </div>
                    <div className="End">
                        <p className="carProdDescricao">{produto.descricaoProduto}</p>
                        <p className="carProdPreco">R${produto.precoProduto}</p>
                        <button onClick={() => removerProduto(produto)}>Remover</button>
                    </div>
                </div>
                ))}
            <p className="carTotal">Total : R${total}</p>
            <button className="carFinalizar">Finalizar Compra</button>
        </div>
        )
}

export default Carrinho
