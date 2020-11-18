import React, {useState} from 'react'

type produtoProp = {
    precoProduto:string,
    nomeProduto:string,
    descricaoProduto:string,
    imagemProduto:string,
};



const paginaProduto:React.FunctionComponent<produtoProp> = (props:produtoProp) => {

const[quantidade, setQuantidade] = useState(1);

const aumentarQuantidade:Function = () => {
    setQuantidade(quantidade + 1);
    }
    return(
        <div>
            <img className="pagProdutdoImagem" src={props.imagemProduto} alt="" />
        </div>
    )
}

export default paginaProduto
