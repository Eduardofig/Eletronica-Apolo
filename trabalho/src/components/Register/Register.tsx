import React,{useState} from 'react';
import './Register.css';
import {Helmet} from 'react-helmet';
import api from '../../services/api';

/*  
    Página de registro, contendo uma caixa para Login e uma Caixa para cadastro
*/
const Register:React.FunctionComponent = () => {

    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const [emailCadastro,setEmailCadastro] = useState('');
    const [senhaCadastro,setSenhaCadastro] = useState('');
    const [senhaCadastro2,setSenhaCadastro2] = useState('');

    // Login
    async function handleSignIn(e:any) {
        e.preventDefault();

        
            api.post("cadastro/auth/signin",{
                email,senha
        }).then((response) => {
            console.log(response);
            
            if (response.data.user.admin) {
                window.location.replace('/admin');
            }
            else {
                window.location.replace('/');
            }
        
        }).catch(e => {
            console.log(e);
            alert('E-mail ou senha não correspondem aos dados do sistema!');
        });
        }
    
    // Cadastro
    async function handleSignUp(e:any) {
        e.preventDefault();

            if(senhaCadastro !== senhaCadastro2){
                alert('Campos de senha não compatíveis!');
                return;
            }

            api.post("cadastro/auth/signup",{
                    email:emailCadastro,senha:senhaCadastro
            }).then((response) => {
                console.log(response);
                alert('Cadastro realizado com sucesso!');
                
                if (emailCadastro.includes('@eletronica.apolo.com.br')) {
                    window.location.replace('/admin');
                }
                else {
                    window.location.replace('/');
                }
            
            }).catch(e => {
                console.log(e);
                alert('E-mail já cadastrado!');
            });

            
        
        }


    return(
        <div id="register-page">
            <Helmet>
                <title>Entrar</title>
            </Helmet>
            <h2>Entrar</h2>
            
            <div id="container-forms">
            
                <form id="login-box" onSubmit={handleSignIn}>

                    E-mail <br/>
                    <input placeholder="Digite seu e-mail" type="email" value={email} onChange={e=>setEmail(e.target.value)}required/><br></br>
                    Senha <br/>
                    <input placeholder="Digite sua senha" type="password" value={senha} onChange={e=>setSenha(e.target.value)}required/><br></br>
                     
                    <button id="btn-login" type="submit">
                        Login
                    </button>
                </form>

                <form className="box" onSubmit={handleSignUp}>
                    
                    E-mail <br/>
                    <input placeholder="Digite seu e-mail" type="text" value={emailCadastro} onChange={e=>setEmailCadastro(e.target.value)}required/><br></br>
                    Senha <br/>
                    <input placeholder="Digite sua senha" type="password" value={senhaCadastro} onChange={e=>setSenhaCadastro(e.target.value)}required/><br></br>
                    Confirmar senha <br/>
                    <input placeholder="Confirme sua senha" type="password" value={senhaCadastro2} onChange={e=>setSenhaCadastro2(e.target.value)}required/><br></br>

                    <button id='btn-register' type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
