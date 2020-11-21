import React from 'react';
import './Main.css';
import Produto from './Produto';
import data from './AppData';
import {Helmet} from 'react-helmet';
import {produtoProp} from './Interface';

const produtoMap:Function = (data:Array<produtoProp>) => {
    let map = data.map(dados => (<Produto
            precoProduto = {dados.precoProduto}
            nomeProduto = {dados.nomeProduto}
            descricaoProduto = {dados.descricaoProduto}
            imagemProduto = {dados.imagemProduto}
        />));
    return map;
};

const App:React.FunctionComponent = () => (

    <div className="landingBody">
        <Helmet>
            <title>Home</title>
        </Helmet>
        <div className="App">
            {produtoMap(data)}
            {produtoMap(data)}
            {produtoMap(data)}
            {produtoMap(data)}
        </div>
    </div>
    );

export default App;
