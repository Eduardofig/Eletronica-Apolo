import React, {useState} from 'react';
import './PaginaProduto.css';

interface produtoProp {
    precoProduto:string;
    nomeProduto:string;
    descricaoProduto:string;
    imagemProduto:string;
};

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
        <div className="pagProdutoContainer">
            <h1 className="pagProdutoTitulo">{props.nomeProduto}</h1>
            <img className="pagProdutdoImagem" src={props.imagemProduto} alt={props.nomeProduto} />
            <p className="pagProdutoDescricao">{props.descricaoProduto}</p>
            <label>Quantidade: </label>
            <input id="leftArrow" className="pagProdutoArrow" type="button" onClick={() => alterarQuantidade(false)} />
            <p className="pagProdutoQuantidade">{quantidade}</p>
            <input id="rightArrow" className="pagProdutoArrow" type="button" onClick={() => alterarQuantidade(true)} />
        </div>
    );
};

export default PaginaProduto;
