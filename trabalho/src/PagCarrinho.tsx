import React from "react"
import Carrinho from './Carrinho';
import data from './AppData';

const PagCarrinho:React.FunctionComponent = () => {
    return(
        <Carrinho array ={data}/>
    )
}

export default PagCarrinho;
