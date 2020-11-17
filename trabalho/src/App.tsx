import React from 'react';
import logo from './logo.svg';
import './App.css';
import Produto from './Produto';

function App() {
    return (
        <div className="App">
            <Produto precoProduto="100 R$" nomeProduto="arduino" quantidadeProduto="100" imagemProduto=''/>
        </div>
    );
}

export default App;
