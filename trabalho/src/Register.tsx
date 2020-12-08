import React,{useState} from 'react';
import './Register.css';
import {Helmet} from 'react-helmet';
import api from './services/api';

/*  
    Página de registro, contendo uma caixa para Login e uma Caixa para cadastro
*/
const Register:React.FunctionComponent = () => {

    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const [emailCadastro,setEmailCadastro] = useState('');
    const [senhaCadastro,setSenhaCadastro] = useState('');

    // Login
    async function handleSignIn(e:any) {
        e.preventDefault();

            const response = await api.post("cadastro/auth/signin",{
                    email,senha
            });

            console.log(response.data);
            
            window.location.replace('/');   
        }
    
    // Cadastro
    async function handleSignUp(e:any) {
        e.preventDefault();


            const response = await api.post("cadastro/auth/signup",{
                    email:emailCadastro,senha:senhaCadastro
            });

            console.log(response.data);
            console.log(email);
            
            window.location.replace('/');   
        }


    return(
        <div id="register-page">
            <Helmet>
                <title>Entrar</title>
            </Helmet>
            <h2>Entrar</h2>
            
            <div id="container-forms">
            
                <form className="login-box" onSubmit={handleSignIn}>

                    E-mail <br/>
                    <input placeholder="Digite seu e-mail" type="text" value={email} onChange={e=>setEmail(e.target.value)}required/><br></br>
                    Senha <br/>
                    <input placeholder="Digite sua senha" type="password" value={senha} onChange={e=>setSenha(e.target.value)}required/><br></br>
                     
                    <a id="login-link" href="/PagCarrinho">
                        <button id="btn-login" type="submit">
                            Login
                        </button>
                    </a>
                        
                    
                
                </form>

                <form className="box" onSubmit={handleSignUp}>
                    
                    E-mail <br/>
                    <input placeholder="Digite seu e-mail" type="text" value={emailCadastro} onChange={e=>setEmailCadastro(e.target.value)}required/><br></br>
                    Senha <br/>
                    <input placeholder="Digite sua senha" type="password" value={senhaCadastro} onChange={e=>setSenhaCadastro(e.target.value)}required/><br></br>
                    Confirmar senha <br/>
                    <input placeholder="Confirme sua senha" type="password"/><br></br>

                    <button id='btn-register' type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
