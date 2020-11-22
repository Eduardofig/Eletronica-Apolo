import React from 'react';
import './Register.css';
import {Helmet} from 'react-helmet';

/*  
    Página de registro, contendo uma caixa para Login e uma Caixa para cadastro
*/
const Register:React.FunctionComponent = () => {

    return(
        <div id="register-page">
            <Helmet>
                <title>Entrar</title>
            </Helmet>
            <h2>Entrar</h2>
            
            <div id="container-forms">
            
                <form className="box">

                    E-mail <br/>
                    <input placeholder="Digite seu e-mail" type="text"/><br></br>
                    Senha <br/>
                    <input placeholder="Digite sua senha" type="text"/><br></br>
                     
                    <a id="login-link" href="/PagCarrinho">
                        <button id="btn-login">
                            Login
                        </button>
                    </a>
                        
                    
                
                </form>

                <form className="box">
                    
                    E-mail <br/>
                    <input placeholder="Digite seu e-mail" type="text"/><br></br>
                    Senha <br/>
                    <input placeholder="Digite sua senha" type="text"/><br></br>
                    Confirmar senha <br/>
                    <input placeholder="Confirme sua senha" type="text"/><br></br>

                    <button id='btn-register'>Cadastrar</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
