import React,{useState} from 'react'
import './Admin.css';
import {Helmet} from 'react-helmet';
import api from './services/api';

/*
    Página do administrador, para cadastro dos produtos
*/

const Admin:React.FunctionComponent = () => {

    const [nome,setNome] = useState('');
    const [preco,setPreco] = useState('');
    const [quantidade,setQuantidade] = useState('');
    const [codigo,setCodigo] = useState('');
    const [descricao,setDescricao] = useState('');

    // Cadastro de produto
    async function handleSignProduct(e:any) {
        e.preventDefault();

            const response = await api.post("/product",{
                    nome,preco,quantidade,codigo,descricao
            });

            console.log(response.data);
            alert('Produto cadastrado com sucesso!');
            
            window.location.replace('/Admin');   
        }
    
    return(

        <div>
            <h2>Incluir Produtos</h2>  
            <Helmet>
                <title>Admin</title>
            </Helmet>
            <div id="register-container">
                <form id="register-box" onSubmit={handleSignProduct}>
                    Nome do Produto<br/>
                    <input placeholder="Digite o nome do produto" type="text" value={nome}
                    onChange={e=>setNome(e.target.value)}required/><br></br>
                    Valor do Produto<br/>
                    <input placeholder="Digite o valor do produto" type="text" value={preco}
                    onChange={e=>setPreco(e.target.value)}required/><br></br>
                    Quantidade<br/>
                    <input placeholder="Digite a quantidade de produtos" type="number" value={quantidade}
                    onChange={e=>setQuantidade(e.target.value)}required/><br></br>
                    Código do Produto <br/>
                    <input placeholder="Digite o código do produto" type="text" value={codigo}
                    onChange={e=>setCodigo(e.target.value)}required/><br></br>
                    Descrição do Produto <br/>
                    <textarea rows={10} cols={60} placeholder="Descreva o produto ..." value={descricao}
                    onChange={e=>setDescricao(e.target.value)}required></textarea><br></br>
                    <button id="btn-cadastro" type="submit">Cadastrar</button>
                </form>
            </div>       
        </div>
        );
    };

export default Admin;
