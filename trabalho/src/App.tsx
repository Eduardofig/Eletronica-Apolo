import React from 'react';
import logo from './logo.svg';
import './App.css';
import Produto from './Produto';
import Navbar from './Navbar';
import data from './AppData';

const App:React.FunctionComponent = () => {
    return (
        <div className="App">
            {data.map(dados => (<Produto
                precoProduto = {dados.precoProduto}
                nomeProduto = {dados.nomeProduto}
                descricaoProduto = {dados.descricaoProduto}
                imagemProduto = {dados.imagemProduto}
            />))}
        </div>
    );
}

export default App;
