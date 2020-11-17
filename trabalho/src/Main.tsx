import React from 'react';
import logo from './logo.svg';
import './Main.css';
import Produto from './Produto';
import Navbar from './Navbar';
import data from './AppData';

interface produtoProps {
    precoProduto:string;
    nomeProduto:string;
    descricaoProduto:string;
    imagemProduto:string;
}

const produtoMap:Function = (data:Array<produtoProps>) => {
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
        <div className="App">
            {produtoMap(data)}
            {produtoMap(data)}
            {produtoMap(data)}
            {produtoMap(data)}
        </div>
    </div>
    );

export default App;
